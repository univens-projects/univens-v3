import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_CHIPS } from '../data/content';
import { ExternalLink, Building2 } from 'lucide-react';

export const ClientsStrip: React.FC = () => {
  return (
    <section className="py-12 bg-slate-100/60 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Caption */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-700">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">Client Engagements</p>
              <p className="text-sm font-medium text-slate-800">Trusted through ongoing strategic engagements</p>
            </div>
          </div>

          {/* Open Inline List - No Card Boxes */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-8 gap-y-4">
            {CLIENT_CHIPS.map((client, idx) => (
              <motion.a
                key={client.name}
                href={`https://${client.website}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex items-center gap-2.5 py-1 text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer border-b border-transparent hover:border-emerald-500"
              >
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {client.sector} · {client.location}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
