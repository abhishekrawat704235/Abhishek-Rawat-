import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero-scroll-container' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-obsidian-950/80 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero-scroll-container"
          onClick={(e) => handleNavClick(e, '#hero-scroll-container')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cinematic-crimson to-cinematic-violet p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-obsidian-950 rounded-xl flex items-center justify-center font-heading font-extrabold text-lg text-white">
              AR
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-white tracking-wide text-base group-hover:text-cinematic-rose transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-obsidian-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cinematic-crimson to-cinematic-violet hover:opacity-90 transition-opacity shadow-lg shadow-cinematic-crimson/20"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 text-sm font-medium text-slate-200 hover:text-cinematic-rose border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-4 w-full text-center py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cinematic-crimson to-cinematic-violet"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
