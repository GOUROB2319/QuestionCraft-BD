'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, BookOpen, Globe } from 'lucide-react';
import { useAppStore } from '@/store/app-store';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const { language, toggleLanguage } = useAppStore();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const t = {
        bn: {
            home: 'হোম',
            features: 'ফিচার',
            library: 'বই সংগ্রহ',
            about: 'আমাদের সম্পর্কে',
            login: 'লগইন',
            start: 'শুরু করুন',
        },
        en: {
            home: 'Home',
            features: 'Features',
            library: 'Library',
            about: 'About',
            login: 'Login',
            start: 'Start Now',
        },
    }[language];

    const navLinks = [
        { name: t.home, href: '/' },
        { name: t.features, href: '#features' },
        { name: t.library, href: '#library' },
        { name: t.about, href: '#about' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-md">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <span className="font-bold text-xl tracking-tight relative">
                            <span className="text-foreground">Question</span>
                            <span className="text-primary">Craft</span>
                            <span className="text-xs absolute -top-1 -right-7 bg-secondary text-primary-900 px-1 rounded-sm font-semibold">
                                BD
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary relative group ${pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                                    }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-secondary/20"
                        >
                            <Globe className="h-4 w-4" />
                            <span>{language === 'bn' ? 'EN' : 'বাং'}</span>
                        </button>

                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/20 rounded-full transition-colors"
                        >
                            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </button>

                        <div className="h-5 w-px bg-border mx-1"></div>

                        <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors pr-2">
                            {t.login}
                        </Link>
                        <Link href="/register">
                            <Button className="font-semibold shadow-md hover:shadow-lg transition-all">{t.start}</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 text-muted-foreground hover:text-foreground"
                        >
                            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-foreground"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background border-b border-border shadow-lg absolute top-20 left-0 right-0 p-4 animate-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-foreground font-medium p-2 hover:bg-secondary/20 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center justify-between p-2">
                            <span className="font-medium text-muted-foreground">Language</span>
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 px-3 py-1 bg-secondary/20 rounded-md text-sm font-medium"
                            >
                                <Globe className="h-4 w-4" />
                                <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
                            </button>
                        </div>
                        <div className="h-px bg-border my-2"></div>
                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                            <Button variant="outline" className="w-full justify-center">
                                {t.login}
                            </Button>
                        </Link>
                        <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                            <Button className="w-full justify-center">{t.start}</Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
