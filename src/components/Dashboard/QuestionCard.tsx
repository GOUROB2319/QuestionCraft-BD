

interface QuestionCardProps {
  subject: string;
  title: string;
  meta: string;
  author: string;
  institution: string;
  stats: { views: string; downloads: string; rating: string };
  tags: string[];
  color: string;
}

export default function QuestionCard({ subject, title, meta, author, institution, stats, tags, color }: QuestionCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-transparent hover:border-primary/30 shadow-lg shadow-black/[0.03] flex flex-col group transition-all duration-300 hover:-translate-y-1 font-bengali">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 ${color} text-xs font-extrabold rounded-lg tracking-wide uppercase`}>{subject}</span>
          <button className="text-slate-400 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>

        <h3 className="text-xl font-bold mb-2 leading-tight dark:text-white">{title}</h3>
        <p className="text-sm text-slate-500 mb-6">{meta}</p>

        <div className="flex items-center gap-3 mb-6 p-3 bg-slate-50 dark:bg-white/5 rounded-xl">
          <div className="size-10 rounded-full bg-slate-200 border-2 border-white dark:border-white/10"></div>
          <div>
            <p className="text-sm font-bold leading-none">{author}</p>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">{institution}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold text-slate-500 mb-6">
          <div className="flex items-center gap-1"><span className="material-symbols-outlined text-base">visibility</span> {stats.views}</div>
          <div className="flex items-center gap-1"><span className="material-symbols-outlined text-base">download</span> {stats.downloads}</div>
          <div className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-base fill-1">star</span> {stats.rating}</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-slate-100 dark:bg-white/10 rounded-lg text-[10px] font-black tracking-tight uppercase text-slate-500">#{tag}</span>
          ))}
        </div>
      </div>

      <div className="mt-auto p-4 bg-slate-50 dark:bg-white/5 rounded-b-2xl flex gap-3">
        <button className="flex-1 py-2.5 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors">Quick Preview</button>
        <button className="flex-1 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all shadow-md shadow-primary/20">Import</button>
      </div>
    </div>
  );
}
