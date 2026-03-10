import React, { useState } from 'react';
import { LayoutPanelLeft, Sparkles, Folder, Bold, Italic, Strikethrough, Underline, Code, Highlighter, Heading, ChevronDown, PanelLeft, PanelRight, GitBranch, Eye, GitFork, Download, Network, FileText, Tag, FilePlus, GitMerge, X, ArrowRight, Check, Plus, Home, Settings } from 'lucide-react';

export const AppMockup = ({ className = "" }: { className?: string }) => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(false);
  const [activeFile, setActiveFile] = useState('Neural_Architectures.md');
  const [showHighlightMenu, setShowHighlightMenu] = useState(false);
  const [view, setView] = useState<'editor' | 'board'>('editor');
  const [mergingVariant, setMergingVariant] = useState<{name: string, colorClass: string, textClass: string, content: string} | null>(null);

  const toggleLeft = () => setLeftOpen(!leftOpen);
  const toggleRight = () => setRightOpen(!rightOpen);

  return (
    <div className={`w-full bg-[#0a0a0a]/90 backdrop-blur-[30px] border border-white/10 rounded-2xl md:rounded-[32px] flex overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)] text-left text-white font-sans ${className}`}>

      {/* Sidebar */}
      {leftOpen && (
        <aside className="w-[200px] lg:w-[260px] bg-white/[0.01] border-r border-white/10 flex flex-col p-4 lg:p-6 shrink-0">
          <div className="mb-8 pl-3">
            <div className="w-6 h-6 rounded border-2 border-white flex items-center justify-center">
              <div className="w-1 h-4 bg-white"></div>
            </div>
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50 mb-4 pl-3">Directory</div>
          <ul className="flex-1 list-none flex flex-col gap-1">
            {['Projects', 'Neural_Architectures.md', 'Glass_Material_Study.md', 'Achromatic_Systems.txt', 'Personal_Logs', 'Archives'].map((item, i) => (
              <li key={i} className={`px-3 py-2 rounded-full text-[13px] flex items-center gap-3 cursor-default transition-all duration-300 ${i === 1 ? 'bg-white/10 text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)]' : 'text-white/50 hover:bg-white/10 hover:text-white hover:translate-x-1'}`}>
                <span className="opacity-60 text-[10px]">{i === 1 ? '●' : '○'}</span>
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50 mt-8 mb-4 pl-3">Actions</div>
          <div className="flex gap-3 pl-3">
            <button className="w-9 h-9 rounded-full border border-white/10 bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white hover:text-black transition-all"><Plus size={16} /></button>
            <button className="w-9 h-9 rounded-full border border-white/10 bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white hover:text-black transition-all"><Home size={16} /></button>
            <button className="w-9 h-9 rounded-full border border-white/10 bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white hover:text-black transition-all"><Settings size={16} /></button>
          </div>
        </aside>
      )}

      <main className="flex flex-col h-full w-full relative">
        {/* Header */}
        <header className="px-10 py-6 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={toggleLeft} className={`p-1.5 rounded-lg transition-colors cursor-pointer ${leftOpen ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
              <PanelLeft size={16} />
            </button>
            <div className="text-[13px] text-white/50 flex items-center gap-2">
              <span>Vault <span className="text-white/20">/</span></span> <span className="text-white font-medium">{activeFile}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-sm font-medium">
              <button onClick={() => setView('editor')} className={`transition-colors cursor-pointer ${view === 'editor' ? 'text-white' : 'text-white/40 hover:text-white'}`}>Editor</button>
              <button className={`transition-colors text-white/40 cursor-default`}>Variants</button>
            </div>
            <div className="h-4 w-[1px] bg-white/10"></div>

            {/* Export & Fork */}
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium transition-colors text-white/70 hover:text-white cursor-pointer">
                <GitFork size={14} /> Fork
              </button>
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium transition-colors text-white/70 hover:text-white cursor-pointer">
                  <Download size={14} /> Export
                </button>
                <div className="absolute top-full right-0 mt-1 w-36 glass-panel rounded-xl shadow-2xl hidden group-hover:flex flex-col py-1 z-50">
                  <div className="px-3 py-1.5 text-xs text-white/70 hover:bg-white/10 hover:text-white cursor-pointer">Markdown (.md)</div>
                  <div className="px-3 py-1.5 text-xs text-white/70 hover:bg-white/10 hover:text-white cursor-pointer">PDF Document</div>
                </div>
              </div>
            </div>

            <div className="h-4 w-[1px] bg-white/10"></div>
            <button onClick={toggleRight} className={`p-1.5 rounded-lg transition-colors cursor-pointer ${rightOpen ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
              <PanelRight size={16} />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden px-20 py-16 relative scrollbar-hide">
          {view === 'editor' ? (
            activeFile === 'Empty_Note.md' ? (
              <div className="max-w-2xl mx-auto h-full flex flex-col items-center justify-center text-center pb-20 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl">
                  <FileText size={32} className="text-white/40" />
                </div>
                <h2 className="text-3xl font-semibold mb-4 tracking-tight">It's quiet here...</h2>
                <p className="text-white/50 text-base max-w-md mb-10 leading-relaxed">
                  Start typing to capture your thoughts, or use Aura AI to generate a template, brainstorm ideas, or outline your next big project.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-transform hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Start Typing
                  </button>
                  <button className="px-6 py-3 bg-white/5 text-white/80 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer">
                    <Sparkles size={16} className="text-white/50" /> Generate with AI
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto pb-32 animate-in fade-in duration-500">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 text-xs flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> architecture
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 text-xs flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> draft
                  </span>
                </div>

                <h1 className="text-[42px] font-semibold mb-8 tracking-tight outline-none" contentEditable suppressContentEditableWarning>
                  Neural Architectures
                </h1>

                <div className="text-[17px] leading-[1.8] text-white/85 font-light outline-none" contentEditable suppressContentEditableWarning>
                  <p className="relative mb-6">
                    The concept of <strong>Achromatic Buoyancy</strong> relies on the psychological perception of depth without the interference of hue. By utilizing variable levels of transparency and Gaussian blur, we create a UI that feels weightless yet grounded.
                  </p>

                  <h2 className="text-2xl text-white mt-10 mb-5 font-semibold">Key Principles</h2>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Layering through <code className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-[0.9em]">backdrop-filter</code></li>
                    <li>High-frequency shadows with ultra-low opacity</li>
                    <li>Monospaced data pairing for structural clarity</li>
                  </ul>

                  <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl font-mono my-6 relative whitespace-pre text-sm">
                    {`const material = new GlassSystem({
    clarity: 0.95,
    buoyancy: "high",
    saturation: 0
  });`}
                  </div>

                  <p className="relative">
                    The interplay of light and dark within a limited grayscale palette forces the user to focus on <em>structure</em> and <em>content hierarchy</em>.
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className="h-full flex flex-col animate-in fade-in duration-500">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Variant System</h2>
                  <p className="text-sm text-white/50">Explore multiple content iterations side-by-side. Merge the best parts together.</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-sm transition-colors cursor-pointer">
                    <Network size={14} /> Tree View
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors cursor-pointer">
                    <GitFork size={14} /> New Fork
                  </button>
                </div>
              </div>

              {/* Visual Tree View */}
              <div className="mb-8 p-8 glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="flex items-center gap-8 relative z-10">
                  <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs shadow-[0_0_15px_rgba(74,222,128,0.1)]">Master</div>
                  <div className="w-12 h-[1px] bg-white/20 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  </div>
                  <div className="flex flex-col gap-6 relative">
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-[calc(100%+24px)] border-l border-t border-b border-white/20 rounded-l-xl"></div>
                    <div className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs relative z-10 shadow-[0_0_15px_rgba(168,85,247,0.1)]">Alt-Narrative-A</div>
                    <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs relative z-10 shadow-[0_0_15px_rgba(34,211,238,0.1)]">Marketing-Hook-B</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 overflow-x-auto pb-8 flex gap-6 items-stretch scrollbar-hide">
                {/* Variant Card 1 */}
                <div className="w-80 h-[280px] shrink-0 glass-panel rounded-2xl p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                      <span className="text-xs text-white/60">Master</span>
                    </div>
                    <button className="text-white/40 hover:text-white cursor-pointer"><Eye size={14} /></button>
                  </div>
                  <div className="text-sm text-white/80 line-clamp-6 leading-relaxed">
                    The concept of Achromatic Buoyancy relies on the psychological perception of depth without the interference of hue. By utilizing variable levels of transparency and Gaussian blur, we create a UI that feels weightless yet grounded.
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">Current Active</span>
                    <span className="text-[10px] text-white/40">2h ago</span>
                  </div>
                </div>

                {/* Variant Card 2 */}
                <div className="w-80 h-[280px] shrink-0 glass-panel rounded-2xl p-5 flex flex-col gap-4 border-purple-500/30 bg-purple-500/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                      <span className="text-xs text-purple-300">Alt-Narrative-A</span>
                    </div>
                    <button className="text-white/40 hover:text-white cursor-pointer"><Eye size={14} /></button>
                  </div>
                  <div className="text-sm text-white/80 line-clamp-6 leading-relaxed">
                    Achromatic Buoyancy strips away color to reveal pure structure. It's not just a design system; it's a cognitive framework. By manipulating transparency and blur, we build interfaces that float above the noise.
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setMergingVariant({
                          name: 'Alt-Narrative-A', 
                          colorClass: 'bg-purple-400', 
                          textClass: 'text-purple-300',
                          content: "Achromatic Buoyancy strips away color to reveal pure structure. It's not just a design system; it's a cognitive framework. By manipulating transparency and blur, we build interfaces that float above the noise."
                        })} 
                        className="text-[10px] px-4 py-1.5 bg-purple-500/20 text-purple-200 rounded-lg hover:bg-purple-500/40 transition-colors cursor-pointer font-medium"
                      >
                        Merge
                      </button>
                      <button className="text-[10px] px-2.5 py-1.5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer font-medium" title="Create new document from variant">
                        <FilePlus size={14} />
                      </button>
                    </div>
                    <span className="text-[10px] text-white/40">1h ago</span>
                  </div>
                </div>

                {/* Variant Card 3 */}
                <div className="w-80 h-[280px] shrink-0 glass-panel rounded-2xl p-5 flex flex-col gap-4 border-cyan-500/30 bg-cyan-500/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                      <span className="text-xs text-cyan-300">Marketing-Hook-B</span>
                    </div>
                    <button className="text-white/40 hover:text-white cursor-pointer"><Eye size={14} /></button>
                  </div>
                  <div className="text-sm text-white/80 line-clamp-6 leading-relaxed">
                    Experience weightless design. Achromatic Buoyancy uses advanced transparency layering to create interfaces that feel incredibly light, yet perfectly structured. Focus on what matters.
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setMergingVariant({
                          name: 'Marketing-Hook-B', 
                          colorClass: 'bg-cyan-400', 
                          textClass: 'text-cyan-300',
                          content: "Experience weightless design. Achromatic Buoyancy uses advanced transparency layering to create interfaces that feel incredibly light, yet perfectly structured. Focus on what matters."
                        })} 
                        className="text-[10px] px-4 py-1.5 bg-cyan-500/20 text-cyan-200 rounded-lg hover:bg-cyan-500/40 transition-colors cursor-pointer font-medium"
                      >
                        Merge
                      </button>
                      <button className="text-[10px] px-2.5 py-1.5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer font-medium" title="Create new document from variant">
                        <FilePlus size={14} />
                      </button>
                    </div>
                    <span className="text-[10px] text-white/40">30m ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Merge UI Modal */}
        {mergingVariant && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-[#141414] border border-white/10 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
              <div className="p-4 border-b border-white/10 flex items-center justify-between shrink-0">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <GitMerge size={16} className="text-white/50" />
                  Merge Variant
                </h3>
                <button onClick={() => setMergingVariant(null)} className="p-1 text-white/40 hover:text-white rounded-lg transition-colors cursor-pointer">
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
                <div className="flex items-center justify-center gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 shadow-inner">
                    <div className={`w-2 h-2 rounded-full ${mergingVariant.colorClass}`}></div>
                    <span className={`${mergingVariant.textClass} font-mono`}>{mergingVariant.name}</span>
                  </div>
                  <ArrowRight size={14} className="text-white/30" />
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/80 font-mono">Master</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/40 pl-1 flex items-center justify-between">
                      <span>Current (Master)</span>
                      <span className="text-red-400/70 normal-case tracking-normal font-normal">- 1 block</span>
                    </div>
                    <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/10 text-[15px] text-white/60 leading-relaxed line-through decoration-red-500/50 shadow-inner h-full">
                      The concept of Achromatic Buoyancy relies on the psychological perception of depth without the interference of hue. By utilizing variable levels of transparency and Gaussian blur, we create a UI that feels weightless yet grounded.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/40 pl-1 flex items-center justify-between">
                      <span>Incoming ({mergingVariant.name})</span>
                      <span className="text-green-400/70 normal-case tracking-normal font-normal">+ 1 block</span>
                    </div>
                    <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/10 text-[15px] text-white/90 leading-relaxed shadow-inner h-full">
                      {mergingVariant.content}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-white/10 flex justify-between items-center shrink-0 bg-white/[0.02]">
                <div className="text-xs text-white/40 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  Merging will overwrite the current master branch content.
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setMergingVariant(null)} className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">Cancel</button>
                  <button onClick={() => setMergingVariant(null)} className="px-5 py-2 rounded-xl text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <Check size={14} /> Confirm Merge
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function MenuItem({ label }: { label: string }) {
  return (
    <button className="w-full text-left px-4 py-1.5 text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
      {label}
    </button>
  );
}
