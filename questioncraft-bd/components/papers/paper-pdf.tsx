import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register Bengali Font (Hind Siliguri)
Font.register({
    family: 'Hind Siliguri',
    fonts: [
        { src: 'https://fonts.gstatic.com/s/hindsiliguri/v12/ijwa974axv67vtr0f666b6clnvy9pg.ttf', fontWeight: 400 },
        { src: 'https://fonts.gstatic.com/s/hindsiliguri/v12/ijwc974axv67vtr0f66bdtgjnwa_rv6V.ttf', fontWeight: 700 }
    ]
});

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Hind Siliguri',
        fontSize: 11,
        color: '#1f2937',
        backgroundColor: '#ffffff',
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
        borderBottom: '1 solid #e5e7eb',
        paddingBottom: 15,
    },
    institution: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#059669',
        marginBottom: 5,
    },
    paperTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    meta: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        fontSize: 10,
        color: '#6b7280',
    },
    marksTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f9fafb',
        borderRadius: 8,
        marginBottom: 25,
    },
    section: {
        marginBottom: 15,
    },
    question: {
        marginBottom: 12,
    },
    questionText: {
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 6,
        lineHeight: 1.5,
    },
    options: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        marginLeft: 15,
    },
    option: {
        fontSize: 10,
        width: '45%',
        marginBottom: 4,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 8,
        color: '#9ca3af',
        borderTop: '0.5 solid #f3f4f6',
        paddingTop: 10,
    }
});

interface PaperPDFProps {
    paper: any;
    questions: any[];
    settings: any;
}

export const PaperPDF = ({ paper, questions, settings }: PaperPDFProps) => (
    <Document title={paper.title}>
        <Page size={settings.paperSize || 'A4'} style={styles.page}>

            {/* Header Section */}
            {settings.includeHeader && (
                <View style={styles.header}>
                    <Text style={styles.institution}>Dhaka Residential Model College</Text>
                    <Text style={styles.paperTitle}>{paper.title}</Text>
                    <View style={styles.meta}>
                        <Text>Subject: {paper.subject}</Text>
                        <Text>|</Text>
                        <Text>Class: {paper.class_level}</Text>
                    </View>
                </View>
            )}

            {/* Marks & Time */}
            <View style={styles.marksTime}>
                <Text>সময়: ২ ঘণ্টা ৩০ মিনিট</Text>
                <Text>পূর্ণমান: ১০০</Text>
            </View>

            {/* Questions Section */}
            <View style={styles.section}>
                {questions.map((q, index) => (
                    <View key={q.id} style={styles.question}>
                        <Text style={styles.questionText}>
                            {index + 1}. {q.content.question}
                            {q.marks && <Text style={{ fontSize: 10, color: '#6b7280' }}>   [{q.marks}]</Text>}
                        </Text>

                        {/* Options for MCQ */}
                        {q.type === 'MCQ' && q.content.options && (
                            <View style={styles.options}>
                                {q.content.options.map((opt: string, i: number) => (
                                    <Text key={i} style={styles.option}>
                                        ({String.fromCharCode(97 + i)}) {opt}
                                    </Text>
                                ))}
                            </View>
                        )}

                        {/* Sub-questions for Creative */}
                        {q.type === 'Creative' && q.content.sub_questions && (
                            <View style={{ marginLeft: 15, marginTop: 5 }}>
                                {q.content.sub_questions.map((sq: any, i: number) => (
                                    <Text key={i} style={{ fontSize: 10, marginBottom: 4 }}>
                                        ({String.fromCharCode(97 + i)}) {sq.text}   [{sq.marks}]
                                    </Text>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
            </View>

            {/* Footer */}
            {settings.includeFooter && (
                <View style={styles.footer}>
                    <Text>Generated via QuestionCraft BD - {new Date().toLocaleDateString('bn-BD')}</Text>
                    {settings.includePageNumbers && (
                        <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
                    )}
                </View>
            )}
        </Page>
    </Document>
);
