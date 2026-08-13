import React from 'react';
import { CONTACT_INFO } from '../data/content';
import { ArrowUp, Phone, Globe, Mail } from 'lucide-react';
import logoDark from '../../assets/logo-dark.svg';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={logoDark}
                alt="UNIVENS logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-extrabold tracking-tight text-slate-900">UNIVENS</span>
            </div>
            <p className="text-sm text-slate-600 font-normal max-w-sm">
              Strategic execution for ambitious businesses. Built around the objective. Delivered through the right expertise.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              Operations in Nagpur & Pune, India.
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-slate-900 font-bold uppercase font-mono tracking-wider text-[11px] block">
              Navigation
            </span>
            <ul className="space-y-2 font-medium">
              <li><a href="#home" className="hover:text-emerald-700 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-700 transition-colors">About</a></li>
              <li><a href="#solutions" className="hover:text-emerald-700 transition-colors">Solutions</a></li>
              <li><a href="#case-studies" className="hover:text-emerald-700 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-slate-900 font-bold uppercase font-mono tracking-wider text-[11px] block">
              Capabilities
            </span>
            <ul className="space-y-2 font-medium">
              <li><a href="#solutions" className="hover:text-emerald-700 transition-colors">Digital Infrastructure</a></li>
              <li><a href="#solutions" className="hover:text-emerald-700 transition-colors">Product Development</a></li>
              <li><a href="#solutions" className="hover:text-emerald-700 transition-colors">AI & Automation</a></li>
              <li><a href="#solutions" className="hover:text-emerald-700 transition-colors">IoT & Robotics</a></li>
              <li><a href="#solutions" className="hover:text-emerald-700 transition-colors">Marketing Systems</a></li>
              <li><a href="#solutions" className="hover:text-emerald-700 transition-colors">Strategic Execution</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-slate-900 font-bold uppercase font-mono tracking-wider text-[11px] block">
              Direct Contact
            </span>
            <ul className="space-y-2.5 font-mono">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-emerald-700">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <a href={`https://${CONTACT_INFO.web}`} target="_blank" rel="noreferrer" className="hover:text-emerald-700">{CONTACT_INFO.web}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-emerald-700">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © 2026 Univens. — Built around the objective. Delivered through the right expertise.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="hover:text-emerald-700 font-semibold cursor-pointer"
            >
              Book a Call
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 text-emerald-600" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
