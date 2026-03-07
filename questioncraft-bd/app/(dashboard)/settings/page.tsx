'use client';

import { useState, useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  User, Shield, Bell, Palette, FileText, CreditCard,
  Check, Lock, Upload, Smartphone, Moon, Sun, Monitor, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/store/app-store';
import { createClient } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';

type TabType = 'profile' | 'security' | 'notifications' | 'theme' | 'pdf';

export default function SettingsPage() {
  const { language, toggleLanguage } = useAppStore();
  const { theme, setTheme } = useTheme();
  const supabase = createClient();
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [passwordState, setPasswordState] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const handlePasswordUpdate = async () => {
    if (!passwordState.newPassword || passwordState.newPassword.length < 8) {
      toast.error('পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।');
      return;
    }

    if (!passwordState.currentPassword) {
      toast.error('বর্তমান পাসওয়ার্ড টাইপ করুন।');
      return;
    }

    setIsLoading(true);
    try {
      // First verify current password by trying to sign in
      const { data: { user } } = await supabase.auth.getUser();
      if (!user?.email) throw new Error('User not found');

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: passwordState.currentPassword,
      });

      if (signInError) {
        toast.error('বর্তমান পাসওয়ার্ডটি সঠিক নয়।');
        return;
      }

      const { error } = await supabase.auth.updateUser({
        password: passwordState.newPassword
      });

      if (error) throw error;

      toast.success('পাসওয়ার্ড সফলভাবে আপডেট হয়েছে।');
      setPasswordState({ currentPassword: '', newPassword: '' });
    } catch (err: any) {
      toast.error('ত্রুটি: ' + (err.message || 'পাসওয়ার্ড আপডেট করা যায়নি।'));
    } finally {
      setIsLoading(false);
    }
  };

  const t = {
    bn: {
      title: 'সেটিংস',
      tabs: {
        profile: 'প্রোফাইল সেটিংস',
        security: 'অ্যাকাউন্ট নিরাপত্তা',
        notifications: 'নোটিফিকেশন',
        theme: 'থিম ও ভাষা',
        pdf: 'PDF সেটিংস',
        subscription: 'সাবস্ক্রিপশন',
      },
      profile: {
        title: 'প্রোফাইল সেটিংস',
        subtitle: 'আপনার ব্যক্তিগত তথ্য আপডেট করুন',
        name: 'পুরো নাম',
        email: 'ইমেইল ঠিকানা',
        institution: 'প্রতিষ্ঠানের নাম',
        designation: 'পদবী',
        subject: 'বিষয়',
        class: 'শ্রেণী',
        phone: 'ফোন নম্বর',
        address: 'ঠিকানা',
        save: 'পরিবর্তন সংরক্ষণ করুন',
        cancel: 'বাতিল করুন',
        verified: 'Verified'
      },
      security: {
        title: 'অ্যাকাউন্ট নিরাপত্তা',
        currentPassword: 'বর্তমান পাসওয়ার্ড',
        newPassword: 'নতুন পাসওয়ার্ড',
        confirmPassword: 'পাসওয়ার্ড নিশ্চিত করুন',
        updatePassword: 'পাসওয়ার্ড আপডেট করুন',
        twoFactor: 'দুই-পদক্ষেপ যাচাইকরণ',
        loginHistory: 'লগইন হিস্টরি'
      },
      theme: {
        title: 'থিম ও ভাষা',
        language: 'ভাষা নির্বাচন',
        theme: 'থিম মোড',
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    },
    en: {
      title: 'Settings',
      tabs: {
        profile: 'Profile Settings',
        security: 'Account Security',
        notifications: 'Notifications',
        theme: 'Theme & Language',
        pdf: 'PDF Settings',
        subscription: 'Subscription',
      },
      profile: {
        title: 'Profile Settings',
        subtitle: 'Update your personal information',
        name: 'Full Name',
        email: 'Email Address',
        institution: 'Institution',
        designation: 'Designation',
        subject: 'Subject',
        class: 'Class',
        phone: 'Phone Number',
        address: 'Address',
        save: 'Save Changes',
        cancel: 'Cancel',
        verified: 'Verified'
      },
      security: {
        title: 'Account Security',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm Password',
        updatePassword: 'Update Password',
        twoFactor: 'Two-Factor Authentication',
        loginHistory: 'Login History'
      },
      theme: {
        title: 'Theme & Language',
        language: 'Language Selection',
        theme: 'Theme Mode',
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  }[language];

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserProfile(user);
        // Load custom profile data if available from a 'profiles' table
      }
      setIsLoading(false);
    }
    fetchProfile();
  }, [supabase]);

  // Tab definitions
  const tabs = [
    { id: 'profile', icon: User, label: t.tabs.profile },
    { id: 'security', icon: Shield, label: t.tabs.security },
    { id: 'notifications', icon: Bell, label: t.tabs.notifications },
    { id: 'theme', icon: Palette, label: t.tabs.theme },
    { id: 'pdf', icon: FileText, label: t.tabs.pdf },
  ] as const;

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full pb-10">

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">{t.title}</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Left Sidebar */}
        <div className="w-full md:w-72 shrink-0">
          <div className="bg-white rounded-2xl p-4 border border-zinc-200 shadow-sm sticky top-24">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    )}
                  >
                    <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-zinc-400")} />
                    {tab.label}
                  </button>
                );
              })}

              <div className="pt-4 mt-4 border-t border-zinc-100">
                <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-zinc-500 hover:bg-zinc-50 transition-all duration-200 cursor-not-allowed">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-zinc-400" />
                    {t.tabs.subscription}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md">
                    Phase 3
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm min-h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Profile Settings Content */}
            {activeTab === 'profile' && (
              <div className="space-y-8 max-w-3xl">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">{t.profile.title}</h2>
                  <p className="text-zinc-500 mt-1">{t.profile.subtitle}</p>
                </div>

                <div className="flex items-center gap-6 pb-6 border-b border-zinc-100">
                  <div className="w-24 h-24 rounded-full bg-zinc-100 border-2 border-zinc-200 flex items-center justify-center overflow-hidden shrink-0">
                    <User className="w-10 h-10 text-zinc-400" />
                  </div>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="font-medium">
                      <Upload className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                    <button className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors block pl-1">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-900">{t.profile.name}</label>
                    <Input defaultValue={userProfile?.user_metadata?.full_name || "Dr. Sarah Ahmed"} className="bg-zinc-50 border-zinc-200 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-900">{t.profile.email}</label>
                    <div className="relative">
                      <Input disabled defaultValue={userProfile?.email || "sarah.ahmed@example.com"} className="bg-zinc-100/50 pr-24 border-zinc-200 text-zinc-500" />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-xs font-semibold text-emerald-600">{t.profile.verified}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-900">{t.profile.institution}</label>
                    <Input defaultValue="Dhaka Residential Model College" className="bg-zinc-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-900">{t.profile.designation}</label>
                    <Input defaultValue="Senior Lecturer" className="bg-zinc-50" />
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-100 flex gap-4">
                  <Button className="bg-primary hover:bg-primary-600 px-8" onClick={() => toast.success('Profile updated successfully')}>
                    {t.profile.save}
                  </Button>
                  <Button variant="outline">{t.profile.cancel}</Button>
                </div>
              </div>
            )}

            {/* Account Security Content */}
            {activeTab === 'security' && (
              <div className="space-y-8 max-w-3xl">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">{t.security.title}</h2>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6 bg-zinc-50/50 space-y-4">
                  <h3 className="font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-zinc-400" />
                    Change Password
                  </h3>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.security.currentPassword}</label>
                    <Input
                      type="password"
                      value={passwordState.currentPassword}
                      onChange={(e) => setPasswordState({ ...passwordState, currentPassword: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.security.newPassword}</label>
                    <Input
                      type="password"
                      value={passwordState.newPassword}
                      onChange={(e) => setPasswordState({ ...passwordState, newPassword: e.target.value })}
                    />
                    <div className="flex gap-1 mt-2">
                      <div className={cn("h-1 flex-1 rounded-full", passwordState.newPassword.length > 0 ? "bg-emerald-500" : "bg-zinc-200")} />
                      <div className={cn("h-1 flex-1 rounded-full", passwordState.newPassword.length > 8 ? "bg-emerald-500" : "bg-zinc-200")} />
                      <div className={cn("h-1 flex-1 rounded-full", passwordState.newPassword.length > 12 ? "bg-emerald-500" : "bg-zinc-200")} />
                    </div>
                  </div>
                  <Button
                    className="mt-2 text-white bg-zinc-900 hover:bg-zinc-800"
                    onClick={handlePasswordUpdate}
                    disabled={isLoading}
                  >
                    {isLoading ? 'আপডেট হচ্ছে...' : t.security.updatePassword}
                  </Button>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-zinc-900 flex items-center gap-2 mb-1">
                      <Smartphone className="w-5 h-5 text-primary" />
                      {t.security.twoFactor}
                    </h3>
                    <p className="text-sm text-zinc-500">Add an extra layer of security to your account.</p>
                  </div>
                  <Button variant="outline">Setup 2FA</Button>
                </div>
              </div>
            )}

            {/* Theme & Language Content */}
            {activeTab === 'theme' && (
              <div className="space-y-8 max-w-3xl">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">{t.theme.title}</h2>
                </div>

                <div className="space-y-4 border-b border-zinc-100 pb-8">
                  <h3 className="font-semibold text-lg text-zinc-900">{t.theme.language}</h3>
                  <div className="flex flex-col gap-3">
                    <label className={cn("flex items-center gap-3 p-4 border rounded-xl cursor-not-allowed transition-all", language === 'bn' ? "border-primary bg-primary/5" : "border-zinc-200 opacity-50")}>
                      <input type="radio" checked={language === 'bn'} readOnly className="w-4 h-4 text-primary focus:ring-primary accent-primary" />
                      <span className="font-medium">বাংলা (Bengali)</span>
                      {language === 'bn' && <span className="ml-auto text-xs bg-primary text-white px-2 py-1 rounded-full">Active</span>}
                    </label>
                    <label className={cn("flex items-center gap-3 p-4 border rounded-xl cursor-not-allowed transition-all", language === 'en' ? "border-primary bg-primary/5" : "border-zinc-200 opacity-50")}>
                      <input type="radio" checked={language === 'en'} readOnly className="w-4 h-4 text-primary focus:ring-primary accent-primary" />
                      <span className="font-medium">English</span>
                      {language === 'en' && <span className="ml-auto text-xs bg-primary text-white px-2 py-1 rounded-full">Active</span>}
                    </label>
                    <p className="text-xs text-amber-600 flex items-center gap-1 mt-2">
                      <AlertCircle className="w-3.5 h-3.5" /> Language toggling is globally managed via the top navigation bar.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-zinc-900">{t.theme.theme}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      onClick={() => setTheme('light')}
                      className={cn("flex flex-col items-center gap-3 p-6 border rounded-xl transition-all", theme === 'light' ? "border-primary bg-primary/5 ring-2 ring-primary/20" : "border-zinc-200 hover:border-zinc-300 bg-white")}
                    >
                      <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                        <Sun className="w-6 h-6 text-amber-500" />
                      </div>
                      <span className="font-medium">{t.theme.light}</span>
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={cn("flex flex-col items-center gap-3 p-6 border rounded-xl transition-all", theme === 'dark' ? "border-primary bg-zinc-900 ring-2 ring-primary/20 text-white" : "border-zinc-200 hover:border-zinc-300 bg-zinc-900 text-zinc-300 hover:text-white")}
                    >
                      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                        <Moon className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="font-medium">{t.theme.dark}</span>
                    </button>
                    <button
                      onClick={() => setTheme('system')}
                      className={cn("flex flex-col items-center gap-3 p-6 border rounded-xl transition-all", theme === 'system' ? "border-primary bg-primary/5 ring-2 ring-primary/20" : "border-zinc-200 hover:border-zinc-300 bg-white")}
                    >
                      <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-zinc-500" />
                      </div>
                      <span className="font-medium">{t.theme.system}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder for Notifications / PDF Settings */}
            {(activeTab === 'notifications' || activeTab === 'pdf') && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-70 p-12">
                <AlertCircle className="w-12 h-12 text-zinc-300 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
                <p className="text-zinc-500 max-w-sm">This settings pane is currently under development and will be available in future releases.</p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
