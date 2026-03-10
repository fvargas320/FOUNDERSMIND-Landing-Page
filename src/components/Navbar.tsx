import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 md:px-16 py-4 md:py-8 fixed w-full top-0 z-[100] backdrop-blur-md border-b border-white/5">
      <Link to="/" className="font-mono font-extrabold tracking-tighter text-xl uppercase">
        FOUNDERSMIND
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-[2px]">
        <Link to="/#features" className="text-accent-muted hover:text-white transition-colors">Features</Link>
        <Link to="/#workspace" className="text-accent-muted hover:text-white transition-colors">Workflows</Link>
        <Link to="/#intelligence" className="text-accent-muted hover:text-white transition-colors">Intelligence</Link>
        <Link to="/#roadmap" className="text-accent-muted hover:text-white transition-colors">Timeline</Link>
        <Link to="/pricing" className="text-white transition-colors">Pricing</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-obsidian-deep border-b border-white/10 backdrop-blur-md">
          <div className="flex flex-col gap-4 p-6 font-mono text-sm uppercase tracking-[2px]">
            <Link to="/#features" onClick={() => setIsOpen(false)} className="text-accent-muted hover:text-white transition-colors">Features</Link>
            <Link to="/#workspace" onClick={() => setIsOpen(false)} className="text-accent-muted hover:text-white transition-colors">Workflows</Link>
            <Link to="/#intelligence" onClick={() => setIsOpen(false)} className="text-accent-muted hover:text-white transition-colors">Intelligence</Link>
            <Link to="/#roadmap" onClick={() => setIsOpen(false)} className="text-accent-muted hover:text-white transition-colors">Timeline</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-white transition-colors">Pricing</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
