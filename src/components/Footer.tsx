

export default function Footer() {
  return (
    <footer className="bg-white/40 dark:bg-slate-900/80 backdrop-blur-md pt-20 pb-10 border-t border-white/20 dark:border-slate-800 font-bengali">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">psychology</span>
              </div>
              <span className="text-xl font-bold">QuestionCraft <span className="text-primary">BD</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              বাংলাদেশী শিক্ষকদের জন্য AI চালিত প্রথম প্রশ্নপত্র তৈরির প্ল্যাটফর্ম। NCTB কারিকুলাম অনুযায়ী মিনিটেই তৈরি করুন মানসম্মত প্রশ্নপত্র।
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#"><span className="material-symbols-outlined text-[10px]">arrow_forward</span> হোম</a></li>
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#"><span className="material-symbols-outlined text-[10px]">arrow_forward</span> ফিচার</a></li>
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#"><span className="material-symbols-outlined text-[10px]">arrow_forward</span> বই সংগ্রহ</a></li>
              <li><a className="hover:text-primary transition flex items-center gap-2" href="#"><span className="material-symbols-outlined text-[10px]">arrow_forward</span> সাহায্য</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">যোগাযোগ</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-base">mail</span>
                support@questioncraft.bd
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-base">call</span>
                +৮৮০ ১XXX-XXXXXX
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">আপডেট পান</h4>
            <div className="relative">
              <input className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4 text-sm pr-12 focus:ring-2 focus:ring-primary outline-none transition" placeholder="আপনার ইমেইল" type="email"/>
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white w-10 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-slate-500">
          <p>© ২০২৪ QuestionCraft BD. সকল অধিকার সংরক্ষিত। বাংলাদেশী শিক্ষকদের জন্য ❤️ নিয়ে তৈরি</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition" href="#">গোপনীয়তা নীতি</a>
            <a className="hover:text-primary transition" href="#">ব্যবহারের শর্তাবলী</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
