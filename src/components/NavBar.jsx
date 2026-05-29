import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar({ navLinks, resumeLink, activeSection, brand }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`sticky top-0 z-50 w-full border-b ${scrolled ? 'border-white/10 bg-[#06101F]/90 backdrop-blur-xl' : 'bg-transparent'} transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm sm:px-8">
        <a href="#home" className="font-semibold tracking-[0.3em] text-cyan-300">{brand}</a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors duration-200 ${activeSection === link.id ? 'text-cyan-300' : 'text-slate-300'} hover:text-cyan-300`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={resumeLink} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/15">
            Download CV
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 md:hidden">
          <FaBars />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#020611]/95 px-6 py-8 backdrop-blur-xl md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-semibold tracking-[0.3em] text-cyan-300">YOURNAME</span>
            <button onClick={() => setOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40">
              <FaTimes />
            </button>
          </div>
          <div className="mt-12 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block text-2xl font-medium text-slate-100 transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href={resumeLink} target="_blank" rel="noreferrer" className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
            Resume
          </a>
        </div>
      )}
    </motion.header>
  );
}
