
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 font-bengali">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        {/* Left Side - Info */}
        <div className="md:w-5/12 bg-gradient-to-br from-primary to-blue-500 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl font-bold">psychology</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">QuestionCraft <span className="text-emerald-100">BD</span></span>
            </div>

            <h1 className="text-4xl font-extrabold mb-6 leading-tight">শিক্ষার ভবিষ্যৎ এখন আপনার হাতে</h1>
            <p className="text-emerald-50 text-lg mb-10 leading-relaxed">আজই যোগ দিন বাংলাদেশের সবচেয়ে আধুনিক AI-চালিত প্রশ্নপত্র তৈরির প্ল্যাটফর্মে।</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <span className="material-symbols-outlined text-white">auto_awesome</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI-চালিত প্রশ্ন তৈরি</h3>
                  <p className="text-sm text-emerald-50/80">আধুনিক AI প্রযুক্তি ব্যবহার করে নিমেষেই তৈরি করুন নিখুঁত প্রশ্নপত্র।</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <span className="material-symbols-outlined text-white">menu_book</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">NCTB কারিকুলাম সাপোর্ট</h3>
                  <p className="text-sm text-emerald-50/80">সম্পূর্ণরূপে বাংলাদেশের নতুন শিক্ষাক্রম অনুযায়ী সাজানো প্রশ্ন।</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <span className="material-symbols-outlined text-white">bolt</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">সময় সাশ্রয় করুন</h3>
                  <p className="text-sm text-emerald-50/80">ঘন্টার কাজ হবে মিনিটে, শিক্ষকদের জন্য সহজ সমাধান।</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 border-t border-white/20 pt-8">
            <div className="flex -space-x-2 mb-4">
              <div className="size-10 rounded-full border-2 border-primary bg-slate-200"></div>
              <div className="size-10 rounded-full border-2 border-primary bg-slate-300"></div>
              <div className="size-10 rounded-full border-2 border-primary bg-slate-400"></div>
              <div className="w-10 h-10 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-xs font-bold text-gray-900">+১০০</div>
            </div>
            <p className="text-xs text-emerald-50">৯০০০+ শিক্ষক ইতিমধ্যে আমাদের উপর আস্থা রেখেছেন</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">নতুন অ্যাকাউন্ট তৈরি করুন</h2>
            <p className="text-slate-500 dark:text-slate-400">আপনার তথ্য দিয়ে রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন করুন।</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">পুরো নাম</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">person</span>
                <input
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                  placeholder="যেমন: মো: কামরুল হাসান"
                  type="text"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">ইমেইল ঠিকানা</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                    placeholder="example@gmail.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">প্রতিষ্ঠানের নাম</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">school</span>
                  <input
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                    placeholder="যেমন: ঢাকা কলেজ"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">পাসওয়ার্ড</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">lock</span>
                <input
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                  placeholder="কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড"
                  type="password"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" type="button">
                  <span className="material-symbols-outlined text-sm">visibility</span>
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2" id="terms" type="checkbox"/>
              <label className="ml-2 text-sm text-slate-500 dark:text-slate-400" htmlFor="terms">আমি <a className="text-primary font-medium hover:underline" href="#">শর্তাবলী</a> ও <a className="text-primary font-medium hover:underline" href="#">গোপনীয়তা নীতি</a> মেনে নিচ্ছি।</label>
            </div>

            <button className="w-full bg-primary hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-lg active:scale-[0.98]" type="submit">
              <span className="material-symbols-outlined">person_add</span>
              নিবন্ধন সম্পন্ন করুন
            </button>

            <div className="flex items-center my-8">
              <div className="flex-grow border-t border-gray-100 dark:border-gray-700"></div>
              <span className="px-4 text-sm text-slate-400 font-medium">অথবা</span>
              <div className="flex-grow border-t border-gray-100 dark:border-gray-700"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-700 transition font-medium text-slate-700 dark:text-slate-200" type="button">
              গুগল দিয়ে সাইন আপ করুন
            </button>

            <p className="text-center mt-8 text-slate-600 dark:text-slate-400">
              ইতিমধ্যে অ্যাকাউন্ট আছে?
              <Link className="text-primary font-bold hover:underline ml-1" to="/login">লগইন করুন</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
