import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Lock, LogOut } from 'lucide-react';
import { REPLY } from '../../lib/reply';

const KEY = 'cda-admin-passcode';

interface AdminCtx {
  passcode: string;
  api: <T = any>(path: string, init?: RequestInit) => Promise<T>;
}

const Ctx = createContext<AdminCtx | null>(null);

export function useAdmin(): AdminCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAdmin must be used inside AdminShell');
  return v;
}

function readStored(): string {
  try {
    return localStorage.getItem(KEY) || '';
  } catch {
    return '';
  }
}

export const AdminShell: React.FC = () => {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState('');
  const [input, setInput] = useState('');
  const [state, setState] = useState<'checking' | 'locked' | 'open'>('checking');
  const [error, setError] = useState('');

  // Verify a passcode by calling the orders endpoint with it — no dedicated /verify route.
  const verify = useCallback(async (code: string) => {
    if (!code) return setState('locked');
    try {
      const res = await fetch('/api/admin/orders', { headers: { 'X-Admin-Passcode': code } });
      if (res.ok) {
        try {
          localStorage.setItem(KEY, code);
        } catch {
          /* private browsing */
        }
        setPasscode(code);
        setState('open');
        setError('');
      } else {
        setState('locked');
        setError(res.status === 503 ? 'The admin passcode has not been configured on the server yet.' : res.status === 401 ? 'Incorrect passcode.' : 'Could not reach the server.');
      }
    } catch {
      setState('locked');
      setError('Could not reach the server.');
    }
  }, []);

  useEffect(() => {
    verify(readStored());
  }, [verify]);

  const signOut = () => {
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
    setPasscode('');
    setInput('');
    setState('locked');
    navigate('/admin');
  };

  const api: AdminCtx['api'] = async (path, init = {}) => {
    const res = await fetch(path, {
      ...init,
      headers: { ...(init.headers || {}), 'X-Admin-Passcode': passcode, 'Content-Type': 'application/json' }
    });
    const data = await res.json().catch(() => ({}));
    if (res.status === 401) {
      signOut();
      throw new Error('Session expired');
    }
    if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
    return data;
  };

  if (state === 'checking') {
    return <div className="min-h-screen bg-[#0b0f17] text-slate-400 flex items-center justify-center text-sm">Checking access…</div>;
  }

  if (state === 'locked') {
    return (
      <div className="min-h-screen bg-[#0b0f17] flex items-center justify-center px-4">
        <form
          onSubmit={e => {
            e.preventDefault();
            verify(input.trim());
          }}
          className="w-full max-w-sm bg-[#0f172a] border border-slate-800 rounded-2xl p-6 space-y-4"
        >
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <Lock className="w-4 h-4" />
            <span>{REPLY.siteName} — Reply Portal</span>
          </div>
          <label className="block text-xs text-slate-400" htmlFor="passcode">
            Admin passcode
          </label>
          <input
            id="passcode"
            type="password"
            autoComplete="current-password"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-amber-400"
          />
          {error && <p className="text-xs text-red-400" role="alert">{error}</p>}
          <button type="submit" className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm">
            Unlock
          </button>
        </form>
      </div>
    );
  }

  const link = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-lg text-sm ${isActive ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`;

  return (
    <Ctx.Provider value={{ passcode, api }}>
      <div className="min-h-screen bg-[#0b0f17] text-slate-100">
        <header className="border-b border-slate-800 bg-[#080c13]">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
            <Link to="/admin" className="font-bold text-white">{REPLY.siteName} · Admin</Link>
            <nav className="flex items-center gap-1" aria-label="Admin">
              <NavLink to="/admin" end className={link}>Dashboard</NavLink>
              <NavLink to="/admin/orders" className={link}>Orders</NavLink>
              <NavLink to="/admin/enquiries" className={link}>Enquiries</NavLink>
            </nav>
            <button type="button" onClick={signOut} className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white">
              <LogOut className="w-3.5 h-3.5" /> Sign out
            </button>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </Ctx.Provider>
  );
};

export const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const map: Record<string, [string, string]> = {
    pending: ['Pending', 'bg-amber-500/15 text-amber-300 border-amber-500/30'],
    'payment-sent': ['Payment sent', 'bg-sky-500/15 text-sky-300 border-sky-500/30'],
    'payment-confirmed': ['Payment confirmed', 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'],
    new: ['New', 'bg-amber-500/15 text-amber-300 border-amber-500/30'],
    replied: ['Replied', 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30']
  };
  const [label, cls] = map[status] || [status, 'bg-slate-700 text-slate-200 border-slate-600'];
  return <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${cls}`}>{label}</span>;
};

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleString('en-AU', { dateStyle: 'medium', timeStyle: 'short' });
