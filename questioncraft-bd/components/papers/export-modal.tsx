'use client';

import { useState } from 'react';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
    FileText, Layout, Type, Palette, Download, X, Eye,
    Settings2, Loader2, CheckCircle2
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/store/app-store';

interface ExportModalProps {
    isOpen: boolean;
    onClose: () => void;
    paperId: string;
    paperTitle: string;
}

export function ExportModal({ isOpen, onClose, paperId, paperTitle }: ExportModalProps) {
    const { language } = useAppStore();
    const [isExporting, setIsExporting] = useState(false);
    const [settings, setSettings] = useState({
        paperSize: 'A4',
        layout: 'Two Column',
        fontSize: 11,
        includeHeader: true,
        includeWatermark: true,
        includeAnswerKey: false,
        includePageNumbers: true,
        includeFooter: true,
    });

    const t = {
        bn: {
            title: 'PDF এক্সপোর্ট সেটিংস',
            subtitle: 'আপনার প্রশ্নপত্রের লেআউট এবং ফরম্যাট কাস্টমাইজ করুন',
            paperSize: 'কাগজের সাইজ',
            layout: 'লেআউট',
            fontSize: 'ফন্ট সাইজ',
            options: 'অতিরিক্ত অপশন',
            header: 'প্রতিষ্ঠানের হেডার যুক্ত করুন',
            watermark: 'ওয়াটারমার্ক (জলছাপ)',
            ansKey: 'শেষে উত্তরপত্র যুক্ত করুন',
            pageNums: 'পৃষ্ঠা নম্বর',
            footer: 'তারিখসহ ফুটার',
            preview: 'লাইভ প্রিভিউ',
            download: 'PDF ডাউনলোড করুন',
            exporting: 'প্রসেসিং হচ্ছে...',
            success: 'PDF সফলভাবে ডাউনলোড হয়েছে'
        },
        en: {
            title: 'PDF Export Settings',
            subtitle: 'Customize the layout and format of your question paper',
            paperSize: 'Paper Size',
            layout: 'Layout',
            fontSize: 'Font Size',
            options: 'Additional Options',
            header: 'Include Institution Header',
            watermark: 'Include Watermark',
            ansKey: 'Include Answer Key at End',
            pageNums: 'Page Numbers',
            footer: 'Footer with Date',
            preview: 'Live Preview',
            download: 'Download PDF',
            exporting: 'Exporting...',
            success: 'PDF downloaded successfully'
        }
    }[language];

    const handleExport = async () => {
        setIsExporting(true);
        try {
            // Simulate API call or trigger real one
            const response = await fetch(`/api/papers/${paperId}/export`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(settings),
            });

            if (!response.ok) throw new Error('Export failed');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${paperTitle || 'question-paper'}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);

            toast.success(t.success);
            onClose();
        } catch (error) {
            toast.error('Failed to export PDF. Please try again.');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[2rem] border-zinc-200 shadow-2xl">
                <div className="flex flex-col md:flex-row h-[600px]">

                    {/* Left: Settings */}
                    <div className="flex-1 p-8 overflow-y-auto border-r border-zinc-100">
                        <DialogHeader className="mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-emerald-100 rounded-xl">
                                    <Settings2 className="w-5 h-5 text-emerald-600" />
                                </div>
                                <DialogTitle className="text-2xl font-bold text-zinc-900">{t.title}</DialogTitle>
                            </div>
                            <DialogDescription className="text-zinc-500">{t.subtitle}</DialogDescription>
                        </DialogHeader>

                        <div className="space-y-8">
                            {/* Paper & Layout */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-zinc-700 font-semibold">{t.paperSize}</Label>
                                    <Select
                                        value={settings.paperSize}
                                        onValueChange={(v) => setSettings({ ...settings, paperSize: v })}
                                    >
                                        <SelectTrigger className="bg-zinc-50 border-zinc-200">
                                            <SelectValue placeholder="A4" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A4">A4 (Standard)</SelectItem>
                                            <SelectItem value="Legal">Legal</SelectItem>
                                            <SelectItem value="Letter">Letter</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-zinc-700 font-semibold">{t.layout}</Label>
                                    <Select
                                        value={settings.layout}
                                        onValueChange={(v) => setSettings({ ...settings, layout: v })}
                                    >
                                        <SelectTrigger className="bg-zinc-50 border-zinc-200">
                                            <SelectValue placeholder="Two Column" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="One Column">One Column</SelectItem>
                                            <SelectItem value="Two Column">Two Column</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Font Size */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <Label className="text-zinc-700 font-semibold">{t.fontSize}</Label>
                                    <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                                        {settings.fontSize}pt
                                    </span>
                                </div>
                                <Slider
                                    value={[settings.fontSize]}
                                    onValueChange={([v]) => setSettings({ ...settings, fontSize: v })}
                                    max={16}
                                    min={8}
                                    step={1}
                                    className="py-2"
                                />
                            </div>

                            {/* Extra Checkboxes */}
                            <div className="space-y-4 pt-4 border-t border-zinc-100">
                                <Label className="text-zinc-400 uppercase text-[10px] font-black tracking-widest">{t.options}</Label>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { id: 'includeHeader', label: t.header },
                                        { id: 'includeWatermark', label: t.watermark },
                                        { id: 'includeAnswerKey', label: t.ansKey },
                                        { id: 'includePageNumbers', label: t.pageNums },
                                        { id: 'includeFooter', label: t.footer },
                                    ].map((opt) => (
                                        <div key={opt.id} className="flex items-center space-x-3">
                                            <Checkbox
                                                id={opt.id}
                                                checked={(settings as any)[opt.id]}
                                                onCheckedChange={(v) => setSettings({ ...settings, [opt.id]: !!v })}
                                                className="w-5 h-5 rounded-md border-zinc-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                                            />
                                            <label htmlFor={opt.id} className="text-sm font-medium text-zinc-600 cursor-pointer select-none">
                                                {opt.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Preview Mockup */}
                    <div className="hidden md:flex w-80 bg-zinc-50 p-8 flex-col items-center justify-center border-l border-zinc-100">
                        <div className="mb-6 flex items-center gap-2 text-zinc-400">
                            <Eye className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-tighter">{t.preview}</span>
                        </div>

                        {/* A4 Mockup */}
                        <div className={cn(
                            "w-56 h-72 bg-white shadow-xl border border-zinc-200 rounded-sm relative p-4 transition-all duration-300",
                            settings.layout === 'Two Column' ? "flex gap-2" : "block"
                        )}>
                            {settings.includeHeader && (
                                <div className="absolute top-2 inset-x-2 h-3 bg-zinc-100 rounded-full" />
                            )}

                            <div className="flex-1 space-y-2 mt-4">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="h-1 bg-zinc-50 rounded-full w-full" />
                                ))}
                            </div>

                            {settings.layout === 'Two Column' && (
                                <div className="flex-1 space-y-2 mt-4 border-l border-zinc-100 pl-2">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className="h-1 bg-zinc-50 rounded-full w-full" />
                                    ))}
                                </div>
                            )}

                            {settings.includeWatermark && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none rotate-45">
                                    <span className="text-4xl font-black">QC BD</span>
                                </div>
                            )}

                            {settings.includePageNumbers && (
                                <div className="absolute bottom-2 right-2 text-[6px] text-zinc-300">Page 1</div>
                            )}
                        </div>

                        <div className="mt-8 text-center px-4">
                            <p className="text-[10px] text-zinc-400 leading-tight">
                                Preview reflects A4, {settings.layout} layout {settings.includeHeader && 'with Institution Header'}.
                            </p>
                        </div>
                    </div>

                </div>

                <DialogFooter className="p-6 bg-zinc-50 border-t border-zinc-200">
                    <div className="flex w-full items-center justify-between gap-4">
                        <Button variant="ghost" onClick={onClose} className="rounded-xl px-6">Cancel</Button>
                        <Button
                            onClick={handleExport}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-6 h-auto text-lg font-bold shadow-lg shadow-emerald-200 transition-all hover:scale-[1.02]"
                            disabled={isExporting}
                        >
                            {isExporting ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                                    {t.exporting}
                                </>
                            ) : (
                                <>
                                    <Download className="w-5 h-5 mr-3" />
                                    {t.download}
                                </>
                            )}
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
