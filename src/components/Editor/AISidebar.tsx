

export default function AISidebar() {
  return (
    <aside className="w-80 border-l border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 flex flex-col h-full z-10 font-bengali">
      <div className="p-4 border-b border-slate-100 dark:border-white/5">
        <div className="flex items-center gap-2 text-primary mb-1">
          <span className="material-symbols-outlined text-xl">auto_awesome</span>
          <h3 className="font-bold">AI Assistant</h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">Powered by QuestionCraft Intelligence</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2">
          <AIActionButton icon="spellcheck" label="Fix Grammar" />
          <AIActionButton icon="translate" label="Translate" />
          <AIActionButton icon="edit_note" label="Change Tone" />
          <AIActionButton icon="add_circle" label="Expand Qs" />
        </div>

        <div className="space-y-3 pt-4">
          <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-lg border border-slate-100 dark:border-white/5">
            <p className="text-xs font-bold uppercase text-primary mb-2">Smart Suggestion</p>
            <p className="text-sm leading-relaxed italic text-slate-600 dark:text-slate-300">
              "I noticed you're creating a Bangla First Paper exam. Would you like me to generate 5 more MCQ questions about 'Palli Sahitya'?"
            </p>
            <button className="mt-3 w-full py-2 bg-white dark:bg-slate-800 text-xs font-bold rounded shadow-sm border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
              Yes, generate now
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/30">
        <div className="relative">
          <textarea
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary resize-none outline-none dark:text-white"
            placeholder="Ask AI to generate or edit content..."
            rows={3}
          ></textarea>
          <button className="absolute bottom-3 right-3 p-1.5 bg-primary text-white rounded-md hover:bg-accent transition-colors">
            <span className="material-symbols-outlined !text-sm">send</span>
          </button>
        </div>
        <button className="w-full mt-3 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-sm">bolt</span>
          Generate Content
        </button>
      </div>
    </aside>
  );
}

function AIActionButton({ icon, label }: { icon: string, label: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-3 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-primary/5 hover:border-primary/30 transition-all text-center group">
      <span className="material-symbols-outlined text-primary mb-1 group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{label}</span>
    </button>
  );
}
