
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-white/20 dark:border-slate-800 font-bengali">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">QuestionCraft <span className="text-primary">BD</span></span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition">হোম</Link>
            <a className="text-sm font-medium hover:text-primary transition" href="#features">ফিচার</a>
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition">প্রশ্ন ব্যাংক</Link>
            <a className="text-sm font-medium hover:text-primary transition" href="#about">আমাদের সম্পর্কে</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-100/50 dark:bg-slate-800/50 p-1 rounded-lg border border-gray-200 dark:border-slate-700">
              <button className="px-3 py-1 text-xs font-semibold rounded-md bg-white dark:bg-slate-700 shadow-sm transition">বাংলা</button>
              <button className="px-3 py-1 text-xs font-semibold rounded-md text-slate-500 hover:text-primary transition">English</button>
            </div>

            <div className="h-6 w-[1px] bg-gray-200 dark:bg-slate-700 mx-2 hidden md:block"></div>
            <Link to="/login" className="hidden md:block text-sm font-medium hover:text-primary">লগইন</Link>
            <Link to="/register" className="bg-primary hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-xl shadow-emerald-500/20 active:scale-95">শুরু করুন</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
