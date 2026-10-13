
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 font-bengali">
      <Navbar />

      <header className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-amber-50/50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 px-4 py-1.5 rounded-full text-amber-700 dark:text-amber-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-base">auto_awesome</span>
            AI চালিত স্মার্ট প্রশ্নপত্র তৈরির প্ল্যাটফর্ম
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            স্মার্ট প্রশ্নপত্র <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">তৈরি করুন</span><br/>
            <span className="text-primary">AI এর সাহায্যে</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            বাংলাদেশী শিক্ষকদের জন্য বিশেষভাবে ডিজাইন করা AI প্রযুক্তি ব্যবহার করে মিনিটে তৈরি করুন NCTB কারিকুলাম অনুযায়ী প্রশ্নপত্র। সম্পূর্ণ বিনামূল্যে!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl shadow-emerald-500/30 transition-transform active:scale-95">
              <span className="material-symbols-outlined">rocket_launch</span>
              এখনই শুরু করুন
            </button>
            <button className="w-full sm:w-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-white dark:hover:bg-slate-700 transition">
              ডেমো দেখুন
            </button>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard icon="groups" count="৯০০০+" label="শিক্ষক ব্যবহারকারী" color="text-primary" />
          <StatCard icon="description" count="৫০০০+" label="প্রশ্নপত্র তৈরি" color="text-blue-500" />
          <StatCard icon="menu_book" count="১০০+" label="বই সংগ্রহ" color="text-orange-500" />
          <StatCard icon="emoji_events" count="৯৮%" label="সন্তুষ্ট ব্যবহারকারী" color="text-purple-500" />
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-white/50 dark:border-slate-700 p-2 overflow-hidden">
                  <div className="flex items-center gap-2 p-4 border-b border-gray-100 dark:border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                  </div>
                  <div className="p-8 h-80 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-6xl">auto_fix_high</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-bold mb-6 uppercase shadow-lg shadow-emerald-500/20">
                কীভাবে কাজ করে?
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">মাত্র ৩টি ধাপে তৈরি করুন <span className="text-primary">মানসম্মত প্রশ্নপত্র</span></h2>

              <div className="space-y-10">
                <Step icon="school" num="০১" title="শ্রেণী ও বিষয় নির্বাচন" desc="আমাদের বিস্তৃত ডাটাবেজ থেকে আপনার কাঙ্ক্ষিত শ্রেণী এবং নির্দিষ্ট বিষয়টি বেছে নিন।" />
                <Step icon="tune" num="০২" title="কাস্টমাইজেশন করুন" desc="প্রশ্নের ধরণ (MCQ, সৃজনশীল), অধ্যায় এবং কঠিনতার মাত্রা আপনার প্রয়োজন অনুযায়ী নির্ধারণ করুন।" />
                <Step icon="bolt" num="০৩" title="তৈরি ও ডাউনলোড" desc="'Generate' বাটনে ক্লিক করার সাথে সাথেই AI আপনার জন্য নির্ভুল প্রশ্নপত্র তৈরি করবে যা সরাসরি PDF হিসেবে ডাউনলোড করতে পারবেন।" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StatCard({ icon, count, label, color }: { icon: string, count: string, label: string, color: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:translate-y-[-4px] transition-all">
      <div className={`${color} bg-slate-50 dark:bg-slate-900 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="text-2xl font-bold">{count}</div>
      <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

function Step({ icon, num, title, desc }: { icon: string, num: string, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="relative shrink-0">
        <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 flex items-center justify-center text-2xl font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          {num}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">{icon}</span>
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
