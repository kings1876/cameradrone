import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, ShieldAlert } from 'lucide-react';
import { FAQ_LIST } from '../data/content';

export const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-4']);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'CASA Regulations', 'Shipping & Delivery', 'Crypto & Discounts', 'Warranty & Returns', 'Hardware & Selection'];

  const toggleFAQ = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_LIST.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-[#0c1322] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Pilot Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Clear guidelines on Australian CASA flight rules, 10% crypto payment deductions, warranty protection, and nationwide express shipping.
          </p>
        </div>

        {/* Search & Filter Tabs */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. CASA, crypto discount, sub-250g, delivery)..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
            />
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Official CASA Airspace Advisory Banner */}
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-3 text-xs text-amber-200">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-300 uppercase tracking-wider block">
              Official Australian Airspace Reminder
            </span>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              Always operate your drone safely under CASA Standard Operating Conditions: Max altitude 120m (400ft) above ground level, maintain visual line-of-sight, stay 30m away from people, and never fly over crowds or populated beaches.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
              No matching questions found. Use our Contact Form or Live Chat for instant assistance.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-850 transition-colors"
                  >
                    <div>
                      <span className="text-[10px] text-amber-400 font-mono uppercase tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-sm font-bold text-white font-display">
                        {faq.question}
                      </h3>
                    </div>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 font-normal">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
