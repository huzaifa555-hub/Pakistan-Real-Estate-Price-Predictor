/* Quiet Civic Modernism: compact civic header with monospaced system state and restrained brand treatment. */
import { Activity, ArrowUpRight } from 'lucide-react';
import { BrandMark } from './BrandMark';

type ApiState = 'checking' | 'online' | 'offline';
export function AppHeader({ apiState }: { apiState: ApiState }) {
  const labels = { checking: 'Checking endpoint', online: 'API reachable', offline: 'API offline' };
  const colors = { checking: 'bg-amber-400', online: 'bg-[#35b790]', offline: 'bg-[#c75d52]' };
  return <header className="mx-auto flex w-full max-w-[1380px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
    <div className="flex items-center gap-3"><BrandMark small /><div><div className="text-[13px] font-extrabold tracking-[.12em] text-[#14232d]">PROPERTY SIGNAL</div><div className="mono mt-0.5 text-[9px] uppercase tracking-[.22em] text-[#80919a]">Pakistan · rent intelligence</div></div></div>
    <div className="hidden items-center gap-7 sm:flex"><div className="mono flex items-center gap-2 text-[10px] uppercase tracking-[.14em] text-[#647580]"><span className={`h-1.5 w-1.5 rounded-full ${colors[apiState]} ${apiState === 'checking' ? 'animate-pulse' : ''}`} />{labels[apiState]}</div><div className="h-4 w-px bg-[#dce5e8]" /><div className="flex items-center gap-1.5 text-xs font-bold text-[#526773]">Powered by XGBoost ML <ArrowUpRight className="h-3.5 w-3.5 text-[#4f7c96]" /></div></div>
    <div className="sm:hidden"><Activity className="h-5 w-5 text-[#4f7c96]" /></div>
  </header>;
}
