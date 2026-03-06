'use client';

import Link from 'next/link';
import { useAppStore } from '@/store/app-store';
import { BookOpen, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
    const language = useAppStore((state) => state.language);
    const currentYear = new Date().getFullYear();

    const t = {
        bn: {
            desc: 'বাংলাদেশী শিক্ষকদের জন্য AI চালিত প্রথম প্রশ্নপত্র তৈরির প্ল্যাটফর্ম। NCTB কারিকুলাম অনুযায়ী মিনিটেই তৈরি করুন মানসম্মত প্রশ্নপত্র।',
            quickLinks: 'দ্রুত লিঙ্ক',
            home: 'হোম',
            features: 'ফিচার',
            library: 'বই সংগ্রহ',
            help: 'সাহায্য',
            contact: 'যোগাযোগ',
            address: 'ঢাকা, বাংলাদেশ',
            updates: 'আপডেট পান',
            updatesDesc: 'নতুন ফিচার ও আপডেট এর জন্য সাবস্ক্রাইব করুন',
            subscribeBtn: 'সাবস্ক্রাইব',
            copyright: `© ${currentYear} QuestionCraft BD. সকল অধিকার সংরক্ষিত। বাংলাদেশী শিক্ষকদের জন্য ❤️ নিয়ে তৈরি`,
            privacy: 'গোপনীয়তা নীতি',
            terms: 'ব্যবহারের শর্তাবলী',
            cookies: 'কুকি নীতি'
        },
        en: {
            desc: 'First AI automated question paper maker platform for Bangladeshi teachers. Generate quality question papers aligned with NCTB curriculum in minutes.',
            quickLinks: 'Quick Links',
            home: 'Home',
            features: 'Features',
            library: 'Library',
            help: 'Help FAQ',
            contact: 'Contact Us',
            address: 'Dhaka, Bangladesh',
            updates: 'Get Updates',
            updatesDesc: 'Subscribe for new features and updates announcements',
            subscribeBtn: 'Subscribe',
            copyright: `© ${currentYear} QuestionCraft BD. All rights reserved. Made with ❤️ for Bangladeshi teachers`,
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            cookies: 'Cookie Policy'
        }
    }[language];

    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-primary p-2 rounded-xl text-primary-foreground group-hover:bg-primary-600 transition-colors">
                                <BookOpen className="h-6 w-6" />
                            </div>
                            <span className="font-bold text-2xl tracking-tight relative text-background">
                                Question<span className="text-primary">Craft</span>
                                <span className="text-xs absolute -top-1 -right-7 bg-secondary text-primary-900 px-1 rounded-sm font-semibold">
                                    BD
                                </span>
                            </span>
                        </Link>
                        <p className="text-muted/80 leading-relaxed text-sm">
                            {t.desc}
                        </p>
                        <div className="flex gap-4">
                            {/* Social icons placeholder */}
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                                    <div className="w-4 h-4 rounded-sm bg-background/80"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.quickLinks}</h3>
                        <ul className="space-y-4">
                            {[
                                { label: t.home, href: '/' },
                                { label: t.features, href: '#features' },
                                { label: t.library, href: '#library' },
                                { label: t.help, href: '#help' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-muted/80 hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.contact}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted/80 text-sm">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>support@questioncraft.bd</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted/80 text-sm">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span className="font-sans">+৮৮০ ১XXX-XXXXXX</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted/80 text-sm">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>{t.address}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.updates}</h3>
                        <p className="text-muted/80 text-sm mb-4">{t.updatesDesc}</p>
                        <div className="flex mt-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-background/10 border border-background/20 rounded-l-md px-4 py-2 w-full text-background placeholder:text-muted/50 focus:outline-none focus:border-primary text-sm"
                            />
                            <Button className="rounded-l-none bg-primary hover:bg-primary-600 text-primary-foreground">
                                {t.subscribeBtn}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted/60">
                        {t.copyright}
                    </p>
                    <div className="flex gap-6 text-sm text-muted/60">
                        <Link href="/legal/privacy" className="hover:text-primary transition-colors">{t.privacy}</Link>
                        <Link href="/legal/terms" className="hover:text-primary transition-colors">{t.terms}</Link>
                        <Link href="#" className="hover:text-primary transition-colors">{t.cookies}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
