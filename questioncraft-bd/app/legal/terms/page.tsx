import { Shield, BookOpen, UserCheck, Lock, AlertCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const sections = [
    {
      title: 'ব্যবহারের শর্তাবলী (Terms of Use)',
      icon: BookOpen,
      content: 'QuestionCraft BD ব্যবহার করার মাধ্যমে আপনি আমাদের এই সকল শর্তাবলী মেনে নিতে সম্মতি দিচ্ছেন। এই প্ল্যাটফর্মটি শুধুমাত্র শিক্ষক এবং শিক্ষা প্রতিষ্ঠানের ব্যবহারের জন্য তৈরি করা হয়েছে।'
    },
    {
      title: 'তথ্য সংগ্রহ (Data Collection)',
      icon: UserCheck,
      content: 'নিবন্ধনের সময় আমরা আপনার নাম, ইমেইল এবং প্রতিষ্ঠানের তথ্য সংগ্রহ করি। এই তথ্য শুধুমাত্র আপনার অ্যাকাউন্ট পরিচালনা এবং উন্নত সেবা প্রদানের জন্য ব্যবহৃত হয়।'
    },
    {
      title: 'তথ্য সুরক্ষা (Data Security)',
      icon: Lock,
      content: 'আপনার তথ্যের গোপনীয়তা রক্ষা করা আমাদের সর্বোচ্চ অগ্রাধিকার। আমরা সর্বশেষ নিরাপত্তা প্রযুক্তি ব্যবহার করে আপনার ডেটা সুরক্ষিত রাখি এবং কোনো তৃতীয় পক্ষের কাছে আপনার পাসওয়ার্ড বা ব্যক্তিগত তথ্য শেয়ার করি না।'
    },
    {
      title: 'AI ব্যবহারের নীতি (AI Usage Policy)',
      icon: AlertCircle,
      content: 'আমাদের AI প্রযুক্তি প্রশ্ন তৈরিতে সহায়তা করে। তবে AI দ্বারা তৈরি প্রশ্নের বিষয়বস্তু এবং সঠিকতা যাচাইয়ের দায়িত্ব ব্যবহারকারীর। কোনো ভুল বা অনাকাঙ্ক্ষিত তথ্যের জন্য QuestionCraft BD দায়বদ্ধ নয়।'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-2xl mb-4">
            <Shield className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">ব্যবহারের শর্তাবলী</h1>
          <p className="mt-4 text-xl text-slate-600">আমাদের প্ল্যাটফর্ম ব্যবহারের নির্দেশিকা এবং অঙ্গীকারসমূহ</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 bg-slate-50 rounded-xl">
                  <section.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{section.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed Bengali-font">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-900 rounded-3xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">কোনো প্রশ্ন আছে?</h2>
          <p className="text-emerald-100 mb-8 opacity-80">আমাদের শর্তাবলী বা গোপনীয়তা নীতি সম্পর্কে জানতে আমাদের সাথে যোগাযোগ করুন।</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:support@questioncraftbd.com">
              <span className="bg-white text-emerald-900 px-8 py-3 rounded-2xl font-bold hover:bg-emerald-50 transition-colors inline-block">ইমেইল করুন</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm">
          সর্বশেষ আপডেট: ৬ মার্চ, ২০২৬
        </div>
      </div>
    </div>
  );
}
