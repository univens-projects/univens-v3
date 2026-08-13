import React, { useState, useEffect } from 'react';
import { Search, X, Command, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGaurav: () => void;
  onOpenBooking: () => void;
}

interface SearchResult {
  title: string;
  type: string;
  category: string;
  description: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onOpenGaurav,
  onOpenBooking
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        });
        const data = await res.json();
        setResults(data.results || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  const isAskDirectly = query.trim().startsWith('?');

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-emerald-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask Univens or type a command…"
            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-700 text-xs cursor-pointer"
            >
              Clear
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-500">
            <Command className="w-3 h-3" /> ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {loading && (
            <div className="py-8 text-center text-xs font-mono text-slate-500 animate-pulse">
              Searching Univens capability index...
            </div>
          )}

          {!loading && query.trim() !== '' && results.length === 0 && (
            <div className="py-12 text-center space-y-3">
              <p className="text-sm font-semibold text-slate-800">Nothing matches yet</p>
              <p className="text-xs text-slate-500 font-mono">
                Try rephrasing — or type <code className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">?</code> to ask Univens directly.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenGaurav();
                }}
                className="mt-4 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ask Gaurav AI Chatbot</span>
              </button>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase text-slate-500 px-2 font-semibold">
                Matching Index ({results.length})
              </div>
              {results.map((res, i) => (
                <div
                  key={i}
                  onClick={() => {
                    onClose();
                    if (res.title.includes('Book')) onOpenBooking();
                    else if (res.title.includes('Email')) window.location.href = 'mailto:hello@univens.in';
                    else window.location.hash = '#solutions';
                  }}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/90 hover:border-emerald-300 transition-all flex items-center justify-between cursor-pointer group shadow-xs"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {res.title}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold">
                        {res.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 font-normal">{res.description}</p>
                  </div>
                  <CornerDownLeft className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          )}

          {!loading && query.trim() === '' && (
            <div className="py-6 space-y-4">
              <div className="text-[10px] font-mono uppercase text-slate-500 px-2 font-semibold">
                Suggested Actions
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left cursor-pointer flex items-center justify-between"
                >
                  <span className="text-xs font-bold text-slate-800">Book a Call</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenGaurav();
                  }}
                  className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 text-left cursor-pointer flex items-center justify-between"
                >
                  <span className="text-xs font-bold text-emerald-800">Ask Gaurav AI</span>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[10px] font-mono text-slate-500 flex justify-between">
          <span>Search index covers Solutions, Case Studies, and Engagement options.</span>
          <span>Univens Search ⌘K</span>
        </div>

      </div>
    </div>
  );
};
