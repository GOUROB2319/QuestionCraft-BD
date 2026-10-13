

export default function A4Canvas() {
  return (
    <div className="flex-1 overflow-y-auto canvas-bg p-8 dark:bg-slate-900/50 font-bengali">
      <div className="a4-page bg-white text-black relative mx-auto">
        {/* Institution Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-1">ঢাকা ইন্টারন্যাশনাল স্কুল</h1>
          <p className="text-lg mb-1">বার্ষিক পরীক্ষা - ২০২৪</p>
          <p className="text-base font-medium">বিষয়: বাংলা প্রথম পত্র</p>
          <div className="flex justify-between mt-6 border-b-2 border-black pb-2 px-4">
            <span>সময়: ৩ ঘণ্টা</span>
            <span>পূর্ণমান: ১০০</span>
          </div>
        </div>

        {/* Question Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-bold">১. নিচের অনুচ্ছেদটি পড়ো এবং প্রশ্নগুলোর উত্তর দাও:</p>
            <p className="text-justify leading-relaxed">
              "আমাদের দেশটা কতই না সুন্দর! চারদিকে সবুজ আর সবুজ। নদীগুলো একেবেঁকে চলছে দেশের বুক চিরে। প্রতিটি ঋতুতে এ দেশের রূপ পাল্টে যায়।"
            </p>
            <div className="pl-6 space-y-2">
              <p>ক) এ দেশের রূপ কখন পাল্টে যায়? <span className="float-right font-medium text-slate-600">২</span></p>
              <p>খ) নদীগুলো কীভাবে চলছে? ব্যাখ্যা করো। <span className="float-right font-medium text-slate-600">৩</span></p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-bold">২. সঠিক উত্তরটি চিহ্নিত করো:</p>
            <div className="pl-6 grid grid-cols-2 gap-4">
              <p>ক) বিদ্রোহী কবি কে? <br/> (i) রবীন্দ্রনাথ (ii) নজরুল (iii) জীবনানন্দ</p>
              <p>খ) সোনার তরী কার রচনা? <br/> (i) জসীমউদ্দীন (ii) ফররুখ (iii) রবীন্দ্রনাথ</p>
            </div>
          </div>

          {/* Mathematical Equation Sample */}
          <div className="mt-10 py-4 border-t border-slate-100 italic text-slate-400">
            <p className="text-black not-italic mb-2 font-bold">৩. নিচের সমীকরণটি সমাধান করো:</p>
            <div className="flex items-center gap-2 text-xl font-display text-black not-italic">
              x = <span className="flex flex-col items-center">
                <span className="border-b border-black px-2">-b ± √(b² - 4ac)</span>
                <span>2a</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
