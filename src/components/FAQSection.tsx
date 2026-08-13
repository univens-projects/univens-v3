import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/content';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [searchFilter, setSearchFilter] = useState('');

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-slate-100/70 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Questions, Answered</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about Univens execution, capabilities, and partnership models.
          </p>

          {/* FAQ Search Filter */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-7" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search questions (e.g., technology, agency, internal teams)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-xs transition-all"
            />
          </div>
        </motion.div>

        {/* Accordion List - Open Card-Free Editorial Layout */}
        <div className="border-t border-slate-300/80">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 font-mono text-xs">
              No matching questions found. Try typing another term or contact us directly.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-slate-300/80 transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full py-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-3">
                      <span className="text-xs font-mono text-emerald-600 font-extrabold">0{faq.id}.</span>
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full text-emerald-700 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-50 text-emerald-700' : 'text-slate-400 group-hover:text-emerald-600'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-base text-slate-700 leading-relaxed font-normal pl-8 border-l-2 border-emerald-500 my-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
