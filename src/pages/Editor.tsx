
import { useState } from 'react';
import Ribbon from '../components/Editor/Ribbon';
import A4Canvas from '../components/Editor/A4Canvas';
import AISidebar from '../components/Editor/AISidebar';
import EquationEditorModal from '../components/Editor/EquationEditorModal';

export default function Editor() {
  const [isEquationModalOpen, setIsEquationModalOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-2 z-20 font-bengali">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl">edit_document</span>
            <h2 className="text-lg font-bold leading-tight tracking-tight">QuestionCraft BD</h2>
          </div>
          <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer">File</span>
            <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded">Final Term Exam - Bangla.docx</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 mr-4">
            <div className="flex -space-x-2">
              <div className="size-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">AK</div>
              <div className="size-8 rounded-full border-2 border-white bg-blue-500 text-white flex items-center justify-center text-xs font-bold">MD</div>
            </div>
            <button className="flex items-center gap-1 text-sm font-medium text-primary ml-2">
              <span className="material-symbols-outlined text-sm">share</span> Share
            </button>
          </div>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">
            Export
          </button>
          <div className="size-9 rounded-full bg-slate-200 border border-slate-300"></div>
        </div>
      </header>

      <Ribbon onEquationClick={() => setIsEquationModalOpen(true)} />

      <main className="flex-1 flex overflow-hidden relative">
        <A4Canvas />
        <AISidebar />
      </main>

      <EquationEditorModal
        isOpen={isEquationModalOpen}
        onClose={() => setIsEquationModalOpen(false)}
      />

      {/* Status Bar */}
      <footer className="bg-primary text-white px-4 py-1.5 flex items-center justify-between text-[11px] font-medium z-20">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <span>Page 1 of 1</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>124 Words</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            <span>Accessibility: Good</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 bg-white/20 px-2 py-0.5 rounded cursor-pointer">
            <span className="material-symbols-outlined text-[14px]">language</span>
            <span>Bengali (Bangladesh)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">zoom_out</span>
              <div className="w-24 h-1 bg-white/30 rounded relative">
                <div className="absolute inset-y-0 left-0 w-2/3 bg-white rounded"></div>
                <div className="absolute -top-1 left-2/3 size-3 bg-white rounded-full shadow"></div>
              </div>
              <span className="material-symbols-outlined text-[14px]">zoom_in</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
