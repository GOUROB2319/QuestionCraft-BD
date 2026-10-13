
import Navbar from '../components/Navbar';
import FilterSidebar from '../components/Dashboard/FilterSidebar';
import QuestionCard from '../components/Dashboard/QuestionCard';

export default function Dashboard() {
  const questions = [
    {
      subject: "Mathematics",
      title: "বীজগণিতীয় রাশি: Midterm Preparation",
      meta: "Class 9-10 • Creative • 10 Questions",
      author: "Rahat Khan",
      institution: "Dhaka Residential Model College",
      stats: { views: "1.2k", downloads: "450", rating: "4.8" },
      tags: ["NCTB", "SSC2024", "Creative"],
      color: "bg-primary/10 text-primary"
    },
    {
      subject: "Biology",
      title: "কোষের গঠন ও কাজ (MCQ Special)",
      meta: "Class 8 • MCQ • 25 Questions",
      author: "Sarah Ahmed",
      institution: "Viqarunnisa Noon School",
      stats: { views: "3.4k", downloads: "890", rating: "4.9" },
      tags: ["Cell", "FinalExam", "QuickPrep"],
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      subject: "Physics",
      title: "Newton's Laws of Motion: Advanced",
      meta: "Class 11-12 • Creative • 5 Problems",
      author: "Tanvir Hossain",
      institution: "Rajshahi College",
      stats: { views: "920", downloads: "110", rating: "4.5" },
      tags: ["HSC", "Mechanics", "Practice"],
      color: "bg-purple-500/10 text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f7] dark:bg-slate-950 font-display">
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)]">
        <FilterSidebar />

        <main className="flex-1 flex flex-col overflow-x-hidden font-bengali">
          {/* Search Section */}
          <section className="px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full max-w-2xl">
              <h1 className="text-3xl font-extrabold mb-4 tracking-tight dark:text-white">কমিউনিটি প্রশ্ন ব্যাংক (Community Question Bank)</h1>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="w-full h-14 pl-12 pr-4 bg-white dark:bg-white/5 border-2 border-transparent focus:border-primary/50 focus:bg-white dark:focus:bg-slate-900 rounded-xl shadow-xl shadow-black/5 outline-none transition-all placeholder:text-slate-400 font-medium"
                  placeholder="টপিক, অধ্যায় বা প্রতিষ্ঠান অনুযায়ী অনুসন্ধান করুন..."
                  type="text"
                />
              </div>
            </div>

            <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl w-full md:w-auto self-end md:self-center">
              <button className="px-6 py-2.5 rounded-lg font-bold text-sm transition-all bg-white dark:bg-white/10 shadow-sm text-[#0f1a16] dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">public</span> সকল প্রশ্ন
              </button>
              <button className="px-6 py-2.5 rounded-lg font-bold text-sm transition-all text-slate-500 hover:text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-inherit">favorite</span> পছন্দের তালিকা
              </button>
            </div>
          </section>

          {/* Question Grid */}
          <section className="px-8 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {questions.map((q, idx) => (
                <QuestionCard key={idx} {...q} />
              ))}

              {/* Placeholder Card */}
              <div className="border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-white/30 dark:bg-white/5">
                <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">upload_file</span>
                </div>
                <h4 className="font-bold mb-1 dark:text-white">আপনি যা খুঁজছেন তা পাচ্ছেন না?</h4>
                <p className="text-sm text-slate-500 mb-6">কমিউনিটির কাছে রিকোয়েস্ট করুন অথবা আপনার নিজের প্রশ্ন সেট তৈরি করুন।</p>
                <button className="px-6 py-2 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-bold rounded-lg hover:border-primary transition-all">পোস্ট করুন</button>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-white/10 text-[#0f1a16] dark:text-white font-bold rounded-xl shadow-lg border border-transparent hover:border-primary transition-all">
                আরও প্রশ্ন দেখুন
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
