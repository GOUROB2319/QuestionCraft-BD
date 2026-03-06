import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { renderToStream } from '@react-pdf/renderer';
import { PaperPDF } from '@/components/papers/paper-pdf';
import React from 'react';

export async function POST(
    req: NextRequest,
    { params }: any
) {
    try {
        const { id: paperId } = await params;
        const settings = await req.json();
        const supabase = await createClient();

        // 1. Fetch paper metadata
        const { data: paper, error: paperError } = await supabase
            .from('papers')
            .select('*')
            .eq('id', paperId)
            .single();

        if (paperError || !paper) {
            return NextResponse.json({ error: 'Paper not found' }, { status: 404 });
        }

        // 2. Fetch associated questions
        const { data: associations, error: assocError } = await supabase
            .from('question_paper_association')
            .select('*, questions(*)')
            .eq('paper_id', paperId)
            .order('order_index', { ascending: true });

        if (assocError) {
            console.error('Assoc Error:', assocError);
            return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
        }

        const questions = associations?.map((a: any) => a.questions) || [];

        // 3. Generate PDF Stream
        const pdfElement = React.createElement(PaperPDF, {
            paper,
            questions,
            settings
        }) as React.ReactElement<any>;

        const stream = await renderToStream(pdfElement);

        // 4. Return as Response
        return new Response(stream as any, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${(paper as any).title || 'exam'}.pdf"`,
            },
        });

    } catch (error) {
        console.error('PDF Export Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
