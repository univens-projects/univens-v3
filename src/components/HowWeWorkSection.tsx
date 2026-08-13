import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HOW_WE_WORK_STEPS, ENGAGEMENT_MODELS } from '../data/content';
import {
  MessageSquare,
  Compass,
  Users,
  Rocket,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Clock,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Target
} from 'lucide-react';

interface HowWeWorkSectionProps {
  onOpenBooking: () => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepVisuals = [
    // Step 1: Discovery & Scope
    <div className="w-full p-3 bg-slate-950 rounded-xl border border-slate-800 text-[10px] font-mono space-y-2">
      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <MessageSquare className="w-3 h-3" />
          <span>SCOPE_INITIATION</span>
        </span>
        <span className="text-emerald-400 text-[8px] font-bold">ACTIVE ALIGNMENT</span>
      </div>
      <div className="space-y-1 text-slate-300">
        <div className="flex justify-between bg-slate-900 p-1 rounded border border-slate-800/80">
          <span className="text-slate-400">Core Objective:</span>
          <span className="text-emerald-300 font-bold">SaaS / Enterprise LMS</span>
        </div>
        <div className="flex justify-between bg-slate-900 p-1 rounded border border-slate-800/80">
          <span className="text-slate-400">Time-to-Value:</span>
          <span className="text-teal-300 font-bold">&lt; 14 Days Launch</span>
        </div>
      </div>
    </div>,

    // Step 2: Architecture & Pod Selection
    <div className="w-full p-3 bg-slate-950 rounded-xl border border-slate-800 text-[10px] font-mono space-y-2">
      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
        <span className="flex items-center gap-1.5 text-blue-400 font-bold">
          <Compass className="w-3 h-3" />
          <span>POD_ASSEMBLY</span>
        </span>
        <span className="text-blue-300 text-[8px] font-bold">SPECIALISTS READY</span>
      </div>
      <div className="grid grid-cols-2 gap-1 text-[9px]">
        <div className="p-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 text-center font-bold">
          Lead Architect
        </div>
        <div className="p-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center font-bold">
          AI Engineer
        </div>
      </div>
    </div>,

    // Step 3: Rapid Execution
    <div className="w-full p-3 bg-slate-950 rounded-xl border border-slate-800 text-[10px] font-mono space-y-2">
      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <Zap className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span>SPRINT_EXECUTION</span>
        </span>
        <span className="text-emerald-400 text-[8px] font-bold">WEEKLY SHIPS</span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-[8px] text-slate-400">
          <span>Sprint Delivery Progress</span>
          <span className="text-emerald-400 font-bold">92%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
          <motion.div
            animate={{ width: ['20%', '92%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
          />
        </div>
      </div>
    </div>,

    // Step 4: Scale & Handoff
    <div className="w-full p-3 bg-slate-950 rounded-xl border border-slate-800 text-[10px] font-mono space-y-2">
      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
        <span className="flex items-center gap-1.5 text-teal-300 font-bold">
          <Rocket className="w-3 h-3 text-teal-300" />
          <span>SCALE_DEPLOYMENT</span>
        </span>
        <span className="text-emerald-400 text-[8px] font-bold">100% IP HANDOFF</span>
      </div>
      <div className="p-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-center font-bold text-[9px]">
        ✓ Production Live & Handed Over
      </div>
    </div>
  ];

  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-emerald-600" />,
    <Compass className="w-5 h-5 text-blue-600" />,
    <Users className="w-5 h-5 text-emerald-600" />,
    <Rocket className="w-5 h-5 text-blue-600" />
  ];

  return (
    <section id="how-we-work" className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Execution Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            We don't start with a service. We start with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 underline underline-offset-8 decoration-emerald-500/30">
              your objective.
            </span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            No fixed packages. The technology, specialists, and execution scope are assembled around what you are actually trying to achieve — then we execute together.
          </p>
        </motion.div>

        {/* 4 Steps Timeline Grid - Card-Free Open Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative">
          {HOW_WE_WORK_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActiveStep(index)}
              className="group relative border-t-2 border-slate-200 hover:border-emerald-500 pt-6 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-mono text-emerald-600">
                    0{step.step}
                  </span>
                  <div className="p-2.5 rounded-full bg-emerald-500/10 text-emerald-700 group-hover:scale-110 transition-transform">
                    {stepIcons[index]}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                  {step.description}
                </p>
              </div>

              {/* Step Micro Visual HUD */}
              <div className="mt-auto pt-3 border-t border-slate-200/60">
                {stepVisuals[index]}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engagement Models & Commitment - Card-Free Open Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-8 border-t border-slate-300/80">
          
          {/* Models */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Flexible Engagement Models</h4>
                    <p className="text-xs text-slate-500 font-mono">Structured for speed, autonomy, and zero overhead</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                  100% IP Transfer
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ENGAGEMENT_MODELS.map((model, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-emerald-500/50 pl-4 space-y-1 group/item"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover/item:text-emerald-700 transition-colors">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      <span>{model.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {model.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Fluid scope scaling as requirements expand</span>
              </span>
              <span className="font-bold text-slate-700">No lock-in contracts</span>
            </div>
          </motion.div>

          {/* The Commitment Banner - Card-Free Dark Accent Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 p-8 border-l-4 border-emerald-500 bg-slate-950 rounded-r-3xl text-left flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Background Glow inside dark banner */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                  The Univens Guarantee
                </span>
                <span className="text-slate-400 font-mono text-[10px]">EXECUTION-FIRST</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-6">
                "You define what needs to happen. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 font-extrabold">
                  We bring together what it takes to make it happen.
                </span>"
              </blockquote>

              <div className="space-y-2 mb-8 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated Cross-Functional Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct Communication via Slack / Teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Clear Sprint Deliverables & Transparent Pricing</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="relative z-10 w-full py-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 cursor-pointer flex items-center justify-center gap-2 group/cta"
            >
              <span>Start an Engagement</span>
              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

