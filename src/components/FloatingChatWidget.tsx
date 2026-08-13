import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, MessageSquare, Sparkles, X } from 'lucide-react';

interface FloatingChatWidgetProps {
  onOpenGaurav: () => void;
  isOpen: boolean;
}

export const FloatingChatWidget: React.FC<FloatingChatWidgetProps> = ({
  onOpenGaurav,
  isOpen
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-dismiss tooltip after 8 seconds, or keep it dismissible
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-3 relative max-w-xs bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-start gap-3 group cursor-pointer"
            onClick={onOpenGaurav}
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40 mt-0.5">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Ask Gaurav AI Advisor</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Execution-first CXO roadmaps. Got questions on tech stack or timeline?
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors absolute top-2 right-2"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Pointer arrow down */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 border-r border-b border-slate-700 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Button */}
      <motion.button
        onClick={onOpenGaurav}
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.92 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.7)] border-2 border-emerald-300/40 cursor-pointer"
        aria-label="Open AI Assistant Chat"
      >
        {/* Soft Outer Pulse Aura Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping pointer-events-none opacity-75"></span>

        {/* Ambient Subtle Continuous Floating Wave */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative z-10 flex items-center justify-center"
        >
          <Bot className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-md text-white transition-transform group-hover:rotate-12" />
        </motion.div>

        {/* Online Status Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full z-20 flex items-center justify-center shadow-sm">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
        </span>
      </motion.button>
    </div>
  );
};
