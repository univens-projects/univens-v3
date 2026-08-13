import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SOLUTIONS } from '../data/content';
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import {
  InfraAnimation,
  ProductDevAnimation,
  AiAutomationAnimation,
  IotRoboticsAnimation,
  MarketingAnimation,
  StrategicAnimation
} from './ServiceAnimations';

interface SolutionsSectionProps {
  onOpenBooking: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const renderAnimation = (solutionId: string) => {
    switch (solutionId) {
      case 'digital-infrastructure':
        return <InfraAnimation />;
      case 'product-development':
        return <ProductDevAnimation />;
      case 'ai-automation':
        return <AiAutomationAnimation />;
      case 'iot-robotics':
        return <IotRoboticsAnimation />;
      case 'marketing-systems':
        return <MarketingAnimation />;
      case 'strategic-execution':
        return <StrategicAnimation />;
      default:
        return <InfraAnimation />;
    }
  };

  const filteredSolutions = activeCategory
    ? SOLUTIONS.filter((s) => s.id === activeCategory)
    : SOLUTIONS;

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/80 to-slate-50 relative overflow-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>

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
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Real-Time Execution Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Whatever the objective requires, we bring together the capabilities to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 underline underline-offset-8 decoration-emerald-500/30">
              execute it.
            </span>
          </h2>
          <p className="text-slate-600 text-lg">
            Six interconnected domains of technical and strategic execution with real-time operational transparency.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-200 overflow-x-auto scrollbar-none"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
              activeCategory === null
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-200/60 border border-slate-200/90 shadow-2xs'
            }`}
          >
            All Capabilities (06)
          </button>
          {SOLUTIONS.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setActiveCategory(sol.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === sol.id
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-200/60 border border-slate-200/90 shadow-2xs'
              }`}
            >
              {sol.number}. {sol.title}
            </button>
          ))}
        </motion.div>

        {/* Offerings Grid - Card-Free Open Editorial Layout */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredSolutions.map((solution, idx) => {
              const isEven = parseInt(solution.number, 10) % 2 === 0;

              return (
                <motion.div
                  key={solution.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group border-t border-slate-300/80 pt-8 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-emerald-500/80 transition-colors"
                >
                  {!isEven ? (
                    /* Points 1, 3, 5: Image/Animation on Left Side */
                    <>
                      {/* Left Side: Number, Title & Animation Preview */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-extrabold font-mono text-emerald-600">
                            {solution.number}
                          </span>
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {solution.title}
                          </h3>
                        </div>

                        {/* Live Real Moving Animation Widget Preview */}
                        <div className="rounded-2xl overflow-hidden border border-slate-800/90 shadow-md relative group-hover:border-emerald-500/70 transition-colors">
                          {renderAnimation(solution.id)}
                        </div>
                      </div>

                      {/* Right Side: Description, Items & Direct Action */}
                      <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                        <div>
                          <p className="text-base text-slate-700 leading-relaxed mb-6 font-medium">
                            {solution.description}
                          </p>

                          {/* Items Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/60">
                            {solution.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Open CTA Link */}
                        <div>
                          <button
                            onClick={onOpenBooking}
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-700 font-bold hover:text-emerald-900 transition-colors cursor-pointer group/btn py-2 border-b-2 border-emerald-600/30 hover:border-emerald-600"
                          >
                            <span>Explore {solution.title} Capabilities</span>
                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-emerald-600" />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Points 2, 4, 6: Image/Animation on Right Side */
                    <>
                      {/* Left Side: Number, Title, Description, Items & Direct Action */}
                      <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl font-extrabold font-mono text-emerald-600">
                              {solution.number}
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                              {solution.title}
                            </h3>
                          </div>

                          <p className="text-base text-slate-700 leading-relaxed mb-6 font-medium">
                            {solution.description}
                          </p>

                          {/* Items Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/60">
                            {solution.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Open CTA Link */}
                        <div>
                          <button
                            onClick={onOpenBooking}
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-700 font-bold hover:text-emerald-900 transition-colors cursor-pointer group/btn py-2 border-b-2 border-emerald-600/30 hover:border-emerald-600"
                          >
                            <span>Explore {solution.title} Capabilities</span>
                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-emerald-600" />
                          </button>
                        </div>
                      </div>

                      {/* Right Side: Animation Preview Container */}
                      <div className="lg:col-span-5 space-y-4 pt-2 lg:pt-0">
                        {/* Live Real Moving Animation Widget Preview */}
                        <div className="rounded-2xl overflow-hidden border border-slate-800/90 shadow-md relative group-hover:border-emerald-500/70 transition-colors">
                          {renderAnimation(solution.id)}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Banner - Open Editorial Look */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-10 border-t-2 border-emerald-500/40 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-slate-900">Need a combination of these offerings?</h4>
            <p className="text-sm text-slate-600">
              We don't restrict engagements to rigid boundaries. We assemble multi-disciplinary technology stacks around your specific objective.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-mono text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-2 shadow-md"
          >
            <span>Custom Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

