'use client';

import { Users, FileText, Library, Star } from 'lucide-react';
import { useAppStore } from '@/store/app-store';

export function StatsSection() {
    const language = useAppStore((state) => state.language);

    const stats = [
        {
            id: 1,
            valueBn: '৯০০০+',
            valueEn: '9000+',
            labelBn: 'শিক্ষক ব্যবহারকারী',
            labelEn: 'Teacher Users',
            icon: Users,
        },
        {
            id: 2,
            valueBn: '৫০০০+',
            valueEn: '5000+',
            labelBn: 'প্রশ্নপত্র তৈরি',
            labelEn: 'Papers Created',
            icon: FileText,
        },
        {
            id: 3,
            valueBn: '১০০+',
            valueEn: '100+',
            labelBn: 'বই সংগ্রহ',
            labelEn: 'Book Collection',
            icon: Library,
        },
        {
            id: 4,
            valueBn: '৯৮%',
            valueEn: '98%',
            labelBn: 'সন্তুষ্ট ব্যবহারকারী',
            labelEn: 'Satisfied Users',
            icon: Star,
        },
    ];

    return (
        <section className="py-20 relative bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.id}
                                className="flex flex-col items-center bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                                    <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                                    {language === 'bn' ? stat.valueBn : stat.valueEn}
                                </h3>
                                <p className="text-muted-foreground font-medium text-center">
                                    {language === 'bn' ? stat.labelBn : stat.labelEn}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
