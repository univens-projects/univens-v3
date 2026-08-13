import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SPECIALIST_CHIPS } from '../data/content';
import {
  Network,
  Sparkles,
  Layers,
  Cpu,
  Code,
  Layout,
  Target,
  FileText,
  Briefcase,
  ArrowRight,
  Zap,
  CheckCircle2,
  SlidersHorizontal,
  Pause,
  Play
} from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-teal-300" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Target': return <Target className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-teal-300" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-400" />;
      default: return <Network className="w-5 h-5 text-emerald-400" />;
    }
  };

  // Tech Brand Logo Badges mapper for specific titles
  const renderTechLogoBadge = (name: string) => {
    const brandStyles: Record<string, { bg: string; text: string; border: string }> = {
      React: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
      TypeScript: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
      NodeJS: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
      Docker: { bg: 'bg-blue-600/10', text: 'text-blue-300', border: 'border-blue-500/30' },
      AWS: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
      Gemini: { bg: 'bg-purple-500/10', text: 'text-purple-300', border: 'border-purple-500/30' },
      Python: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
      PyTorch: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
      LangChain: { bg: 'bg-emerald-500/10', text: 'text-emerald-300', border: 'border-emerald-500/30' },
      Figma: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' },
      Tailwind: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' },
      Framer: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/30' },
      Arduino: { bg: 'bg-teal-500/10', text: 'text-teal-300', border: 'border-teal-500/30' },
      RaspberryPi: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
      MQTT: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/30' },
      GA4: { bg: 'bg-amber-500/10', text: 'text-amber-300', border: 'border-amber-500/30' },
      MetaAds: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
      Linear: { bg: 'bg-slate-700/50', text: 'text-slate-200', border: 'border-slate-600' },
      Jira: { bg: 'bg-blue-600/10', text: 'text-blue-400', border: 'border-blue-500/30' },
      Docusaurus: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
      MDX: { bg: 'bg-indigo-500/10', text: 'text-indigo-300', border: 'border-indigo-500/30' },
      Zapier: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
      Salesforce: { bg: 'bg-sky-500/10', text: 'text-sky-300', border: 'border-sky-500/30' }
    };

    const style = brandStyles[name] || {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-300',
      border: 'border-emerald-500/30'
    };

    return (
      <span
        key={name}
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border transition-transform hover:scale-105 ${style.bg} ${style.text} ${style.border}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
        <span>{name}</span>
      </span>
    );
  };

  const sectionRef = useRef<HTMLElement>(null);

  // Measure scroll progress relative to the section entering and exiting viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll-driven background color transition from light slate (#f8fafc) to dark slate (#020617) and back to light slate
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["#f8fafc", "#020617", "#020617", "#f8fafc"]
  );

  // Ambient glows and grid line opacity fade in as background turns dark
  const ambientOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  // We split chips into 2 vertical rows for dual infinite left-to-right marquee streams
  const row1Chips = SPECIALIST_CHIPS.slice(0, 4);
  const row2Chips = SPECIALIST_CHIPS.slice(4, 8);

  // Quadruple arrays for smooth infinite seamless looping without gaps
  const row1Loop = [...row1Chips, ...row1Chips, ...row1Chips, ...row1Chips];
  const row2Loop = [...row2Chips, ...row2Chips, ...row2Chips, ...row2Chips];

  return (
    <motion.section
      ref={sectionRef}
      id="coordinated-network"
      style={{ backgroundColor }}
      className="py-24 relative overflow-hidden text-slate-100 transition-colors duration-300"
    >
      {/* Dynamic Animated Top Energy Line */}
      <motion.div
        style={{ opacity: ambientOpacity }}
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-blue-500 z-20"
      />

      {/* Background Animated Ambient Radial Glows */}
      <motion.div
        style={{ opacity: ambientOpacity }}
        className="absolute top-0 right-1/4 w-[38rem] h-[38rem] bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ opacity: ambientOpacity }}
        className="absolute bottom-0 left-1/4 w-[38rem] h-[38rem] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Tech Grid Lines in Background with Fade In */}
      <motion.div
        style={{ opacity: ambientOpacity }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#33415525_1px,transparent_1px),linear-gradient(to_bottom,#33415525_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold shadow-2xs">
              <Network className="w-3.5 h-3.5 text-emerald-400" />
              <span>Coordinated Network Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              No single specialist solves every problem.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                The right combination does.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              Univens operates through a synchronized network of domain specialists. Each node brings dedicated stack tools, verified engineering frameworks, and domain expertise.
            </p>
          </div>

          {/* Marquee Play/Pause Control */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-mono font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlaying ? 'Pause Motion' : 'Resume Flow'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* INFINITE LEFT-TO-RIGHT CONTINUOUS MARQUEE STREAM */}
      <div className="relative w-full overflow-hidden py-4 space-y-6">
        
        {/* Left/Right Gradient Mask for Butter-Smooth Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none"></div>

        {/* ROW 1: Moving Smoothly Left to Right */}
        <div className="flex w-max overflow-hidden">
          <motion.div
            animate={isPlaying ? { x: ['-50%', '0%'] } : {}}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 40
            }}
            className="flex gap-6 will-change-transform transform-gpu"
          >
            {row1Loop.map((chip, idx) => (
              <div
                key={`r1-${chip.id}-${idx}`}
                className="w-[340px] sm:w-[380px] p-6 border-t-2 border-emerald-500/60 bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:border-emerald-400 flex flex-col justify-between shrink-0 group/card"
              >
                <div>
                  {/* Header with Specific Title Icon and Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-full bg-emerald-500/10 text-emerald-400 group-hover/card:scale-110 transition-transform">
                      {getIcon(chip.icon)}
                    </div>
                    {chip.badgeText && (
                      <span className="px-2.5 py-1 rounded-full bg-slate-900 text-[10px] font-mono font-bold text-emerald-400 border border-slate-800">
                        {chip.badgeText}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-emerald-300 transition-colors">
                    {chip.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                    {chip.description}
                  </p>

                  {/* Specific Brand Stack Logos */}
                  {chip.logoBadges && (
                    <div className="pt-3 border-t border-slate-800/60">
                      <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block mb-2">
                        Integrated Tech Stack Logos
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {chip.logoBadges.map((logo) => renderTechLogoBadge(logo))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer status */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Synchronized Pod</span>
                  </span>
                  <span className="text-slate-400">Node #0{ (idx % 4) + 1 }</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Moving Smoothly Left to Right (Slightly Offset Speed for Rhythm) */}
        <div className="flex w-max overflow-hidden">
          <motion.div
            animate={isPlaying ? { x: ['-50%', '0%'] } : {}}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 48
            }}
            className="flex gap-6 will-change-transform transform-gpu"
          >
            {row2Loop.map((chip, idx) => (
              <div
                key={`r2-${chip.id}-${idx}`}
                className="w-[340px] sm:w-[380px] p-6 border-t-2 border-blue-500/60 bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:border-blue-400 flex flex-col justify-between shrink-0 group/card"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-full bg-blue-500/10 text-blue-400 group-hover/card:scale-110 transition-transform">
                      {getIcon(chip.icon)}
                    </div>
                    {chip.badgeText && (
                      <span className="px-2.5 py-1 rounded-full bg-slate-900 text-[10px] font-mono font-bold text-blue-400 border border-slate-800">
                        {chip.badgeText}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-blue-300 transition-colors">
                    {chip.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                    {chip.description}
                  </p>

                  {/* Specific Brand Stack Logos */}
                  {chip.logoBadges && (
                    <div className="pt-3 border-t border-slate-800/60">
                      <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block mb-2">
                        Integrated Tech Stack Logos
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {chip.logoBadges.map((logo) => renderTechLogoBadge(logo))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer status */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Zap className="w-3 h-3 text-blue-400" />
                    <span>Active Network Node</span>
                  </span>
                  <span className="text-slate-400">Node #0{ (idx % 4) + 5 }</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Continuous R&D Footnote Banner - Open Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="p-6 sm:p-8 border-l-4 border-emerald-500 bg-slate-900/50 backdrop-blur-md flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Continuous Industrial Research & Emerging Tech
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Specialists constantly test emerging models, IoT microcontrollers, and automation protocols. This hands-on R&D directly powers production reliability in client deployments.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Zero Overhead Team Assembly</span>
          </div>
        </div>
      </div>

    </motion.section>
  );
};
