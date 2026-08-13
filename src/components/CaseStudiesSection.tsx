import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES } from '../data/content';
import {
  ExternalLink,
  Tag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  GraduationCap,
  Boxes,
  Cpu,
  Sparkles,
  CheckCircle2,
  Building2,
  Globe,
  Activity,
  Layers,
  Zap,
  RotateCcw
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  const currentCS = CASE_STUDIES[activeIndex];

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection('next');
    setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    setTimeout(() => setIsFlipping(false), 600);
  };

  const handlePrev = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection('prev');
    setActiveIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
    setTimeout(() => setIsFlipping(false), 600);
  };

  const handleSelect = (index: number) => {
    if (index === activeIndex || isFlipping) return;
    setIsFlipping(true);
    setFlipDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
    setTimeout(() => setIsFlipping(false), 600);
  };

  const renderLogoIcon = (iconName?: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-emerald-400" />;
      case 'Boxes':
        return <Boxes className="w-8 h-8 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-8 h-8 text-teal-300" />;
      default:
        return <Building2 className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/80 to-slate-50 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-5 w-[30rem] h-[30rem] bg-emerald-300/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-5 w-[30rem] h-[30rem] bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Selected Strategic Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Case Studies &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 underline underline-offset-8 decoration-emerald-500/30">
                Proven Impact.
              </span>
            </h2>
            <p className="text-slate-600 text-lg font-normal">
              Proof of strategic execution across education institutions, creative agencies, and industrial AI automation.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 cursor-pointer flex items-center gap-2"
            >
              <span>Start an Engagement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Company Quick-Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {CASE_STUDIES.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => handleSelect(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-emerald-500/50 shadow-lg shadow-slate-900/15'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90 shadow-2xs'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeIndex === idx ? 'bg-emerald-400 animate-pulse' : 'bg-slate-300'}`}></span>
              <span>{cs.client}</span>
              <span className="text-[10px] opacity-60">({cs.fileNumber})</span>
            </button>
          ))}
        </div>

        {/* Interactive 3D Showcase Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT SIDE: 3D Flipping Card */}
          <div className="lg:col-span-5 perspective-[1200px] relative flex flex-col justify-center min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCS.id}
                initial={{
                  rotateY: flipDirection === 'next' ? -90 : 90,
                  opacity: 0,
                  scale: 0.92
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  rotateY: flipDirection === 'next' ? 90 : -90,
                  opacity: 0,
                  scale: 0.92
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.23, 1, 0.32, 1]
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="w-full h-full rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-7 shadow-2xl flex flex-col justify-between relative overflow-hidden group/3dcard"
              >
                {/* Tech Grid Pattern in Card Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
                
                {/* Dynamic Ambient Color Blur in 3D Card */}
                <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-30 bg-gradient-to-br ${currentCS.brandColor || 'from-emerald-500 to-teal-600'}`}></div>

                {/* 3D Card Top Bar */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {currentCS.fileNumber}
                  </span>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>{currentCS.status}</span>
                  </div>
                </div>

                {/* Centerpiece Branding Logo & Client Title */}
                <div className="relative z-10 my-6 flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl group-hover/3dcard:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0`}>
                    {renderLogoIcon(currentCS.logoIcon)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider block">
                      {currentCS.sector}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {currentCS.client}
                    </h3>
                  </div>
                </div>

                {/* Real System Preview Thumbnail Image */}
                <div className="relative z-10 my-2 rounded-2xl overflow-hidden border border-slate-800 shadow-xl h-48 group/img">
                  <img
                    src={currentCS.image}
                    alt={currentCS.client}
                    className="w-full h-full object-cover object-center group-hover/img:scale-110 transition-transform duration-700 filter contrast-105 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-200">
                    <span className="bg-slate-900/80 backdrop-blur px-2 py-0.5 rounded border border-slate-800">
                      📍 {currentCS.location}
                    </span>
                    <span className="text-emerald-400 font-bold bg-slate-900/80 backdrop-blur px-2 py-0.5 rounded border border-slate-800">
                      Live Architecture
                    </span>
                  </div>
                </div>

                {/* Dynamic Impact Metric Badge */}
                {currentCS.impactStat && (
                  <div className="relative z-10 mt-4 p-3 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800/90 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono uppercase text-slate-400 block font-semibold">
                        Key Outcome
                      </span>
                      <span className="text-xs text-slate-300 font-medium line-clamp-1">
                        {currentCS.impactLabel}
                      </span>
                    </div>
                    <span className="text-xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 shrink-0 ml-2">
                      {currentCS.impactStat}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Full Detailed Case Study Description (Card-Free Open Layout) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCS.id}
                initial={{ opacity: 0, x: flipDirection === 'next' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: flipDirection === 'next' ? -20 : 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-6 relative border-t-2 border-emerald-500/80 pt-6"
              >
                {/* Top Meta info */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold">
                      {currentCS.sector}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-bold">
                      {currentCS.engagement}
                    </span>
                  </div>

                  <a
                    href={`https://${currentCS.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 hover:text-emerald-900 font-bold hover:underline group/link"
                  >
                    <span>{currentCS.website}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Client Name & Overview Header */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
                    {currentCS.client}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    Operational Base: {currentCS.location}
                  </span>
                </div>

                {/* Challenge & Role Sections - Border-L Accents */}
                <div className="space-y-5">
                  {/* The Challenge */}
                  <div className="border-l-3 border-amber-500 pl-4 py-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase text-slate-900 font-bold tracking-wider">
                        The Challenge
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {currentCS.challenge}
                    </p>
                  </div>

                  {/* Univens Role */}
                  <div className="border-l-3 border-emerald-600 pl-4 py-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-mono uppercase text-emerald-900 font-bold tracking-wider">
                        Univens Execution Scope
                      </span>
                    </div>
                    <p className="text-sm text-slate-900 leading-relaxed font-medium">
                      {currentCS.univensRole}
                    </p>
                  </div>
                </div>

                {/* Execution Capability Tags */}
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider block mb-2">
                    Delivered Capabilities & Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentCS.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-[11px] font-mono text-slate-800 font-semibold"
                      >
                        <Tag className="w-3 h-3 text-emerald-600" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Executive Quote Block */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-teal-50/40 to-blue-50/40 border-l-4 border-emerald-600 text-xs text-slate-800 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="italic font-medium text-slate-900 leading-relaxed">
                      "{currentCS.quote}"
                    </p>
                    <span className="text-[10px] font-mono text-emerald-800 font-bold block mt-1">
                      — Strategic Leadership, {currentCS.client}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Bar */}
            <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600 font-bold">
                <span>0{activeIndex + 1}</span>
                <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 transition-all duration-300"
                    style={{ width: `${((activeIndex + 1) / CASE_STUDIES.length) * 100}%` }}
                  ></div>
                </div>
                <span>0{CASE_STUDIES.length}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={isFlipping}
                  aria-label="Previous Case Study"
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-emerald-50 border border-slate-200 text-slate-700 hover:text-emerald-700 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={isFlipping}
                  aria-label="Next Case Study"
                  className="p-2.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white transition-colors disabled:opacity-50 cursor-pointer shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
