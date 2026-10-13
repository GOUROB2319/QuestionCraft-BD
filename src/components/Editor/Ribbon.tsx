

interface RibbonProps {
  onEquationClick?: () => void;
}

export default function Ribbon({ onEquationClick }: RibbonProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 shadow-sm z-10 font-bengali">
      {/* Tabs */}
      <div className="flex px-4 gap-6 border-b border-slate-100 dark:border-white/5">
        <RibbonTab label="Home" active />
        <RibbonTab label="Insert" />
        <RibbonTab label="Layout" />
        <RibbonTab label="AI Tools" />
        <RibbonTab label="View" />
      </div>

      {/* Toolbar Content */}
      <div className="flex items-center gap-2 p-2 px-4 overflow-x-auto no-scrollbar">
        {/* Group: Font */}
        <div className="flex items-center gap-1 ribbon-group relative pr-4">
          <div className="flex items-center bg-slate-100 dark:bg-white/5 rounded px-2 py-1 gap-2 min-w-[140px]">
            <span className="text-sm font-medium truncate">Hind Siliguri</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
          <div className="flex items-center bg-slate-100 dark:bg-white/5 rounded px-2 py-1 gap-2">
            <span className="text-sm font-medium">12</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
          <div className="flex items-center gap-0.5 ml-2">
            <ToolbarButton icon="format_bold" />
            <ToolbarButton icon="format_italic" />
            <ToolbarButton icon="format_underlined" />
            <ToolbarButton icon="format_color_text" />
          </div>
        </div>

        {/* Group: Paragraph */}
        <div className="flex items-center gap-1 ribbon-group relative px-4">
          <div className="flex items-center gap-0.5">
            <ToolbarButton icon="format_align_left" active />
            <ToolbarButton icon="format_align_center" />
            <ToolbarButton icon="format_align_right" />
            <ToolbarButton icon="format_align_justify" />
          </div>
          <div className="flex items-center gap-0.5 ml-2">
            <ToolbarButton icon="format_list_bulleted" />
            <ToolbarButton icon="format_list_numbered" />
            <ToolbarButton icon="format_line_spacing" />
          </div>
        </div>

        {/* Group: Special Elements */}
        <div className="flex items-center gap-1 ribbon-group relative px-4">
          <SpecialButton icon="functions" label="Equation" onClick={onEquationClick} />
          <SpecialButton icon="table_chart" label="Table" />
          <SpecialButton icon="image" label="Image" />
        </div>

        {/* Group: Layout */}
        <div className="flex items-center gap-1 px-4">
          <SpecialButton icon="border_outer" label="Borders" />
        </div>
      </div>
    </div>
  );
}

function RibbonTab({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <a className={`flex flex-col items-center justify-center border-b-2 pb-2 pt-3 transition-colors ${active ? 'border-primary text-primary' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-primary'}`} href="#">
      <p className="text-xs font-bold tracking-wide uppercase">{label}</p>
    </a>
  );
}

function ToolbarButton({ icon, active = false }: { icon: string, active?: boolean }) {
  return (
    <button className={`p-1.5 hover:bg-primary/10 rounded ${active ? 'bg-primary/10 text-primary' : ''}`}>
      <span className="material-symbols-outlined !text-[20px]">{icon}</span>
    </button>
  );
}

function SpecialButton({ icon, label, onClick }: { icon: string, label: string, onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center px-3 py-1 hover:bg-primary/10 rounded group"
    >
      <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 group-hover:text-primary">{icon}</span>
      <span className="text-[10px] font-bold uppercase mt-0.5 text-slate-500 dark:text-slate-400 group-hover:text-primary">{label}</span>
    </button>
  );
}
