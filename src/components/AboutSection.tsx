import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_CONTENT } from '../data/content';
import { Target, Layers, Zap, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:36px_36px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
              <span>About Univens</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {ABOUT_CONTENT.headline}
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 2 ? "text-emerald-900 font-medium pt-2 border-l-3 border-emerald-600 pl-4 bg-emerald-50/50 py-2 rounded-r-lg" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Conceptual Visual Frame (Card-Free Open Blueprint Layout) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-slate-300/80">
                <span className="text-xs font-mono uppercase text-slate-500 font-bold tracking-widest">Univens Execution Blueprint</span>
                <span className="text-xs font-mono text-emerald-700 font-bold">Objective-Driven</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Target className="w-5 h-5 text-emerald-600" />, title: "Strategic Intent", desc: "We start with business roadmaps, market expansion, and growth goals." },
                  { icon: <Layers className="w-5 h-5 text-blue-600" />, title: "Custom Capability", desc: "Assembling technology, AI, platforms, and specialists specific to the goal." },
                  { icon: <Zap className="w-5 h-5 text-emerald-600" />, title: "Rapid Execution", desc: "Deploying live operational systems in structured execution windows." },
                  { icon: <Shield className="w-5 h-5 text-blue-600" />, title: "Ongoing Partnership", desc: "Continuous technological support, maintenance, and revenue-aligned growth." }
                ].map((card, idx) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="border-l-2 border-emerald-500/60 pl-4 space-y-2 group hover:border-emerald-600 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 w-fit text-emerald-700 mb-1 group-hover:scale-105 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
