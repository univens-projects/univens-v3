import React from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';

interface ClosingCTAProps {
  onOpenBooking: () => void;
  onOpenGaurav: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenBooking, onOpenGaurav }) => {
  return (
    <section id="contact" className="py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-300/20 blur-[160px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold mb-8">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Strategic Alignment</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
          You already know where you want to go.{' '}
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
            Let's figure out what it will take to get there.
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed mb-12">
          Tell us what you're trying to build, improve, launch, automate, or scale. We'll look at the objective first and determine where Univens can contribute.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-lg mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm tracking-wide shadow-md shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Start a Conversation</span>
          </button>

          <a
            href="mailto:hello@univens.in"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm hover:text-slate-900 shadow-xs transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-emerald-600" />
            <span>Tell Us What You're Building</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Quick Contact Block Details */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-600">
          <div>
            Email: <a href="mailto:hello@univens.in" className="text-emerald-700 font-semibold hover:underline">hello@univens.in</a>
          </div>
          <div>
            Direct: <a href="tel:+919172725217" className="text-emerald-700 font-semibold hover:underline">+91 91727 25217</a>
          </div>
          <div className="flex items-center gap-3">
            <span>Social:</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-emerald-700 font-medium">LinkedIn</a>
            <span>·</span>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-emerald-700 font-medium">X (Twitter)</a>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
