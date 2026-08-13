import React from 'react';
import { motion } from 'motion/react';
import { HERO_CONTENT } from '../data/content';
import { ArrowRight, Sparkles, Terminal, ChevronRight, ShieldCheck } from 'lucide-react';
import { Hero3DBackground } from './Hero3DBackground';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenGaurav: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenGaurav }) => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-slate-50">
      {/* 3D Moving Canvas Background */}
      <Hero3DBackground />

      {/* Premium Video & Image Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Premium Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_CONTENT.heroImage}
          className="w-full h-full object-cover object-center opacity-30 filter contrast-110 saturate-125 scale-105 transition-opacity duration-1000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-41552-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-41551-large.mp4" type="video/mp4" />
          <img
            src={HERO_CONTENT.heroImage}
            alt="Univens Light Tech Network"
            className="w-full h-full object-cover object-center opacity-25 filter contrast-105"
          />
        </video>

        {/* Soft Light Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50"></div>
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-400/20 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/80 backdrop-blur-md mb-8 text-xs font-mono text-emerald-700 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="uppercase tracking-widest font-semibold">Strategic Execution Engine</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">Univens</span>
          </motion.div>

          {/* Main Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
          >
            The Future <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent drop-shadow-xs">
              Doesn't Build Itself.
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl sm:text-2xl font-light text-slate-700 tracking-wide mb-8"
          >
            {HERO_CONTENT.subline}
          </motion.p>

          {/* Core Strategic Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            {HERO_CONTENT.statement}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/35 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#solutions"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 border border-slate-200/90 text-slate-800 font-medium text-sm hover:text-slate-900 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Explore What We Do</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>

            <button
              onClick={onOpenGaurav}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Talk to Gaurav AI</span>
            </button>
          </motion.div>

          {/* Trust badges below hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-600 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Execution-First Architecture</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4 text-blue-600" />
              <span>Custom Assembled Teams</span>
            </div>
            <div className="flex items-center justify-center gap-2 col-span-2 sm:col-span-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Active Operations IN</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
