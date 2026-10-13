

export default function FilterSidebar() {
  return (
    <aside className="w-72 border-r border-[#e8f2ef] dark:border-white/10 bg-white dark:bg-slate-900 p-6 overflow-y-auto sticky top-20 h-[calc(100vh-80px)] font-bengali">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">শ্রেণী স্তর (Class Level)</h3>
          <div className="grid grid-cols-2 gap-2">
            <FilterCheckbox label="Class 1-5" />
            <FilterCheckbox label="Class 6-8" checked />
            <FilterCheckbox label="SSC (9-10)" checked />
            <FilterCheckbox label="HSC (11-12)" />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">বিষয়সমূহ (Subjects)</h3>
          <div className="flex flex-col gap-1">
            <SubjectItem label="Mathematics" icon="functions" active />
            <SubjectItem label="Physics" icon="science" />
            <SubjectItem label="Biology" icon="science" />
            <SubjectItem label="Bangla" icon="language" />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">প্রশ্নের ধরণ (Question Type)</h3>
          <div className="space-y-2">
            <FilterRadio label="Multiple Choice (MCQ)" name="q-type" checked />
            <FilterRadio label="Creative (CQ)" name="q-type" />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">কঠিনতা (Difficulty)</h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-bold bg-primary/5">সহজ</button>
            <button className="px-3 py-1 rounded-full border border-slate-200 text-sm hover:border-primary transition-colors">মাঝারি</button>
            <button className="px-3 py-1 rounded-full border border-slate-200 text-sm hover:border-primary transition-colors">কঠিন</button>
          </div>
        </div>

        <button className="mt-4 w-full py-3 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">add_circle</span>
          নতুন সেট তৈরি করুন
        </button>
      </div>
    </aside>
  );
}

function FilterCheckbox({ label, checked = false }: { label: string, checked?: boolean }) {
  return (
    <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors group">
      <input
        className="rounded border-slate-300 text-primary focus:ring-primary"
        type="checkbox"
        defaultChecked={checked}
      />
      <span className="text-sm font-medium group-hover:text-primary">{label}</span>
    </label>
  );
}

function SubjectItem({ label, icon, active = false }: { label: string, icon: string, active?: boolean }) {
  return (
    <label className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${active ? 'bg-primary/10 text-primary' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`}>
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-sm">{icon}</span>
        <span className="text-sm font-bold">{label}</span>
      </div>
      {active && <span className="material-symbols-outlined text-sm">check_circle</span>}
    </label>
  );
}

function FilterRadio({ label, name, checked = false }: { label: string, name: string, checked?: boolean }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        className="text-primary focus:ring-primary border-slate-300"
        name={name}
        type="radio"
        defaultChecked={checked}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
