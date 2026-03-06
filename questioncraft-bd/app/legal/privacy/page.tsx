import { ShieldCheck, Eye, Database, Globe, Scale, FileCode } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  const points = [
    {
      title: 'আমরা কী তথ্য সংগ্রহ করি?',
      icon: Eye,
      description: 'আপনার নাম, ইমেইল, মোবাইল নম্বর এবং যে প্রতিষ্ঠানের সাথে আপনি যুক্ত আছেন।'
    },
    {
      title: 'তথ্য কীভাবে ব্যবহৃত হয়?',
      icon: Database,
      description: 'প্রশ্নপত্র জেনারেশন, অ্যাকাউন্ট ভেরিফিকেশন এবং সিস্টেম ইমেইল পাঠানোর জন্য।'
    },
    {
      title: 'তৃতীয় পক্ষের সাথে শেয়ারিং',
      icon: Globe,
      description: 'আমরা আপনার ব্যক্তিগত তথ্য বিক্রি করি না। শুধুমাত্র প্রয়োজনীয় সেবা প্রদানের জন্য (যেমন মেইল সার্ভার বা পেমেন্ট গেটওয়ে) আমরা নির্ভরযোগ্য সার্ভিসের সাথে যুক্ত থাকি।'
    },
    {
      title: 'কুকিজ এবং ট্র্যাকিং',
      icon: FileCode,
      description: 'ব্রাউজিং কাস্টমাইজ করতে আমরা কুকিজ ব্যবহার করি যা শুধুমাত্র সেশন এবং ড্রাফট সেভ করতে ব্যবহৃত হয়।'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 pb-12 border-b border-zinc-200">
          <div className="p-5 bg-emerald-600 rounded-3xl shadow-xl shadow-emerald-200">
            <ShieldCheck className="w-12 h-12 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">গোপনীয়তা নীতি</h1>
            <p className="text-xl text-zinc-500 mt-2 font-medium Bengali-font">আপনার তথ্যের নিরাপত্তা আপনার অধিকার, আমাদের অঙ্গীকার।</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {points.map((point, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 shadow-sm hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">{point.title}</h3>
              <p className="text-zinc-600 text-lg leading-relaxed Bengali-font">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-[3rem] p-12 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-4">আমাদের সাথে আপনার তথ্য সুরক্ষিত</h2>
              <p className="text-zinc-400 text-lg Bengali-font italic">
                "আমরা কোনো পরিস্থিতিতেই আপনার ডাটা কোনো অননুমোদিত ব্যবহারের জন্য প্রদান করি না। আপনার ডাটা এনক্রিপ্টেড এবং সুরক্ষিত।"
              </p>
            </div>
            <Link href="/contact">
              <span className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-10 rounded-2xl transition-all scale-100 hover:scale-105 inline-block">বিস্তারিত জানুন</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center text-zinc-400 text-sm font-medium">
          © ২০২৬ QuestionCraft BD  | <Link href="/legal/terms" className="hover:text-emerald-600 hover:underline">শর্তাবলী</Link>
        </div>
      </div>
    </div>
  );
}
