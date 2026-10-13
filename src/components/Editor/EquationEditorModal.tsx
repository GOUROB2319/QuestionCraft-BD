

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EquationEditorModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md flex items-center justify-center z-[100] font-bengali p-4">
      <div className="bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/20">
        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white relative">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <span className="material-symbols-outlined text-2xl">functions</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">ইকুয়েশন এডিটর</h1>
              <p className="text-sm text-slate-500 font-medium">গাণিতিক ও বৈজ্ঞানিক সমীকরণ তৈরি করুন</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 transition-colors group"
          >
            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">close</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-[600px] bg-white">
          {/* Sidebar - Symbols */}
          <div className="w-full md:w-80 border-r border-slate-100 flex flex-col bg-slate-50/50">
            <div className="flex overflow-x-auto border-b border-slate-100 custom-scrollbar">
              <button className="px-6 py-3 text-sm font-semibold border-b-2 border-primary text-primary bg-emerald-50/30 whitespace-nowrap">গণিত</button>
              <button className="px-6 py-3 text-sm font-semibold border-b-2 border-transparent text-slate-500 hover:text-primary whitespace-nowrap">পদার্থবিজ্ঞান</button>
              <button className="px-6 py-3 text-sm font-semibold border-b-2 border-transparent text-slate-500 hover:text-primary whitespace-nowrap">রসায়ন</button>
            </div>

            <div className="p-5 overflow-y-auto custom-scrollbar flex-1">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> সাধারণ গাণিতিক
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <MathBtn label="x²" />
                    <MathBtn label="√x" />
                    <MathBtn label="x/y" />
                    <MathBtn label="∑" />
                    <MathBtn label="∫" />
                    <MathBtn label="lim" />
                  </div>
                </div>

                <div>
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> গ্রীক অক্ষর
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {['α', 'β', 'γ', 'δ', 'θ', 'π', 'λ', 'φ'].map(s => (
                      <button key={s} className="p-2.5 border border-slate-200 rounded-lg hover:border-primary hover:text-primary hover:bg-white transition-all text-center text-lg math-font">{s}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Area - Editor & Preview */}
          <div className="flex-1 flex flex-col p-8 bg-white overflow-hidden">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">code</span>
                  LaTeX কোড এডিটর
                </label>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded uppercase font-bold text-slate-500">Manual Entry</span>
              </div>
              <textarea
                className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-50 focus:border-primary transition-all outline-none font-mono text-slate-600 text-sm h-32 leading-relaxed"
                defaultValue="\int_{a}^{b} x^2 dx = \frac{b^3-a^3}{3}"
              ></textarea>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">visibility</span>
                  লাইভ প্রিভিউ (Live Preview)
                </label>
              </div>
              <div className="flex-1 border-2 border-slate-100 rounded-[2rem] flex items-center justify-center p-12 bg-slate-50/20 shadow-inner relative group bg-[radial-gradient(#cbd5e1_0.5px,transparent_0.5px)] bg-[length:15px_15px]">
                <div className="text-5xl math-font text-slate-800 flex items-center gap-1 drop-shadow-sm select-none">
                  <span className="text-primary/80 italic font-normal">∫</span>
                  <div className="flex flex-col text-sm -mt-2 mr-1">
                    <span className="font-bold">b</span>
                    <span className="font-bold mt-4">a</span>
                  </div>
                  <span className="italic">x</span><sup className="text-2xl ml-0.5">2</sup>
                  <span className="italic ml-2">dx</span>
                  <span className="mx-4 text-slate-300">=</span>
                  <div className="flex flex-col items-center">
                    <div className="border-b-2 border-slate-800 pb-1 px-4 italic">
                      b<sup className="text-xl">3</sup> - a<sup className="text-xl">3</sup>
                    </div>
                    <div className="pt-1 italic">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <button className="px-6 py-3 rounded-2xl border border-rose-100 bg-white text-rose-500 text-sm font-bold hover:bg-rose-50 hover:border-rose-200 transition-all flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-lg">delete</span>
            মুছে ফেলুন
          </button>
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="px-6 py-3 rounded-2xl text-slate-500 text-sm font-bold hover:bg-slate-100 transition-all">
              বাতিল করুন
            </button>
            <button className="px-10 py-3.5 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white text-sm font-bold rounded-2xl shadow-xl shadow-emerald-100 hover:shadow-emerald-200 transition-all transform hover:-translate-y-0.5 flex items-center gap-3">
              <span className="material-symbols-outlined text-xl">add_circle</span>
              যুক্ত করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MathBtn({ label }: { label: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-3 border border-slate-200 rounded-xl hover:border-primary hover:bg-emerald-50 transition-all text-slate-700 hover:text-primary bg-white shadow-sm hover:shadow-md">
      <span className="math-font text-lg italic font-bold">{label}</span>
    </button>
  );
}
