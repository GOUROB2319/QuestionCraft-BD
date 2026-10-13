
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4 font-bengali">
      <div className="max-w-6xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        {/* Left Side - Hero/Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-primary to-accent p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-48 h-48 bg-secondary/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">QuestionCraft <span className="text-secondary">BD</span></span>
            </div>

            <div className="mt-10">
              <h1 className="text-5xl font-bold leading-tight mb-6">স্বাগতম<br/>ফিরে আসার জন্য</h1>
              <p className="text-emerald-50 text-lg max-w-md leading-relaxed">
                আপনার স্মার্ট প্রশ্নপত্র তৈরির যাত্রা এখান থেকেই শুরু। আপনার একাউন্টে লগইন করে দ্রুত এবং মানসম্মত প্রশ্নপত্র তৈরি করুন।
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-slate-900">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <p className="text-sm font-medium">নতুন ফিচার যুক্ত হয়েছে!</p>
                  <p className="text-xs text-white/70">AI এখন আরও দ্রুত প্রশ্ন বিশ্লেষণ করতে পারে।</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-sm text-white/60">
              © ২০২৪ QuestionCraft BD. সকল অধিকার সংরক্ষিত।
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">লগইন করুন</h2>
              <p className="text-slate-500">আপনার তথ্য প্রদান করে ড্যাশবোর্ডে প্রবেশ করুন</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">ইমেইল অথবা ফোন নম্বর</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-800"
                    placeholder="example@email.com"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-slate-700">পাসওয়ার্ড</label>
                  <a className="text-sm font-semibold text-primary hover:text-accent transition-colors" href="#">পাসওয়ার্ড ভুলে গেছেন?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                  <input
                    className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-800"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary cursor-pointer" id="remember" type="checkbox"/>
                <label className="ml-2 text-sm text-slate-600 cursor-pointer" htmlFor="remember">আমাকে মনে রাখুন</label>
              </div>

              <button className="w-full bg-primary hover:bg-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-[0.98]" type="submit">
                লগইন করুন
              </button>
            </form>

            <div className="mt-10 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">অথবা অন্যান্য মাধ্যমে</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                গুগল
              </button>
              <button className="flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700">
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                ফেসবুক
              </button>
            </div>

            <p className="mt-10 text-center text-slate-500 font-medium">
              আপনি কি নতুন? <Link className="text-primary hover:text-accent font-bold" to="/register">একাউন্ট তৈরি করুন</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
