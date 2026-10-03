import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck, User, Bot, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  time: string;
}

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'agent',
      text: "G'day! Welcome to Camera Drone Sales Australia. I'm Marcus from the Sydney flight desk. How can I help you with drone specs, CASA rules, or claiming your 10% crypto discount today?",
      time: 'Just now'
    }
  ]);

  const quickPrompts = [
    'How do I claim the 10% crypto discount?',
    'What are Australian CASA flight altitude limits?',
    'How fast is express delivery to NSW / VIC?'
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate intelligent Australian drone specialist response
    setTimeout(() => {
      let reply = "Thanks for asking! Our Australian dispatch and support team is here to assist. You can also reach our operations directly at koloonjo@gmail.com.";
      const lower = query.toLowerCase();

      if (lower.includes('crypto') || lower.includes('discount') || lower.includes('10%')) {
        reply = "Great question! When checking out via our Order Form, select 'Crypto' (BTC, ETH, USDT, or SOL) and a 10% discount is automatically deducted from your total. We process hardware allocation immediately once the transaction hash is received.";
      } else if (lower.includes('casa') || lower.includes('rule') || lower.includes('altitude') || lower.includes('limit')) {
        reply = "Under CASA Australian drone rules, maximum flight altitude is 120 metres (400ft) above ground level. You must keep your UAV within visual line-of-sight and stay at least 30 metres away from other people. For sub-249g drones like the DJI Mini 4 Pro, no recreational registration is required!";
      } else if (lower.includes('delivery') || lower.includes('ship') || lower.includes('express') || lower.includes('time')) {
        reply = "All products qualify for 100% Free Nationwide Express Courier shipping! Metro deliveries (Sydney, Melbourne, Brisbane) take 1–2 business days. Regional areas and WA take 2–4 business days with signature and insurance included.";
      } else if (lower.includes('warranty') || lower.includes('genuine') || lower.includes('stock')) {
        reply = "All our hardware is 100% genuine Australian stock with manufacturer warranty and full protection under the Australian Consumer Law (ACL). Local repair and firmware support is guaranteed.";
      }

      setMessages(prev => [
        ...prev,
        {
          id: `ag-${Date.now()}`,
          sender: 'agent',
          text: reply,
          time: 'Just now'
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-2.5 px-4 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-full shadow-2xl transition-all hover:scale-105"
          aria-label="Open live chat support"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
          </span>
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span className="font-semibold">Live Flight Specialist</span>
        </button>
      )}

      {/* Tawk.to Style Chat Box */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="bg-[#0c1322] border-b border-slate-800 p-3.5 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                  AU
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0f172a]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1">
                  <span>Flight Operations Desk</span>
                </h4>
                <p className="text-[10px] text-emerald-400">Sydney / Melbourne · Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs bg-gradient-to-b from-[#0f172a] to-[#070b12]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'agent' && (
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    AU
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
                  }`}
                >
                  <p>{m.text}</p>
                  <span className="block text-[9px] mt-1 opacity-70 text-right">
                    {m.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-slate-950/80 border-t border-slate-800/80 flex flex-wrap gap-1.5">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(prompt)}
                className="text-[10px] text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-amber-400 px-2 py-1 rounded border border-slate-800 transition-colors truncate max-w-full text-left"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#0c1322] border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Ask an Australian flight technician..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
            />
            <button
              type="button"
              onClick={() => handleSend()}
              className="p-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5 fill-slate-950" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
