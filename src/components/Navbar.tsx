import React, { useState, useEffect } from 'react';
import { Search, Calendar, Menu, X, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import logoDark from '../../assets/logo-dark.svg';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenSearch: () => void;
  onOpenGaurav: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenSearch,
  onOpenGaurav,
  onOpenContact
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
    { label: 'How We Work', href: '#how-we-work', id: 'how-we-work' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'Network', href: '#coordinated-network', id: 'coordinated-network' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as IST (Asia/Kolkata)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
      setTimeString(`${formatted} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll detection and active section scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut ⌘K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  // Smooth scroll handler with header offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarOffset = 80; // 80px for sticky header padding
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });

      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <img
                src={logoDark}
                alt="UNIVENS logo"
                className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                  UNIVENS
                </span>
                <span className="text-[10px] tracking-widest text-slate-500 uppercase font-mono hidden sm:inline-block">
                  Strategic Execution
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 px-3.5 py-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Group */}
            <div className="hidden md:flex items-center gap-3">
              {/* Live Time Indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-600">{timeString || 'LIVE IST'}</span>
              </div>

              {/* Search ⌘K Button */}
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/70 border border-slate-200 text-slate-700 text-xs transition-all cursor-pointer group"
                title="Search (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                <span className="text-slate-500 text-[11px] font-mono">⌘K</span>
              </button>

              {/* Gaurav AI Assistant Button */}
              <button
                onClick={onOpenGaurav}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200/80 text-blue-700 text-xs font-medium transition-all cursor-pointer"
              >
                <MessageSquareCode className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span>Ask Gaurav</span>
              </button>

              {/* Book a Call Button */}
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all transform active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book a Call</span>
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenSearch}
                className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold cursor-pointer"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Fullscreen Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-center my-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-light text-slate-800 hover:text-emerald-600 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGaurav();
              }}
              className="w-full py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-medium flex items-center justify-center gap-2"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Talk with Gaurav AI</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Strategy Call</span>
            </button>

            <div className="text-center pt-4 text-xs text-slate-500 font-mono">
              Email: hello@univens.in · {timeString}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
