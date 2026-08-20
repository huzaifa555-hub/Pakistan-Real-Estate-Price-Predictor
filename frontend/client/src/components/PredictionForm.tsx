/* Quiet Civic Modernism: structured controls, visible helper copy, and tactile but quiet interaction states. */
import { BedDouble, Building2, Droplets, Home, Loader2, MapPin, Sparkles } from 'lucide-react';
import type { FormEvent, ReactNode } from 'react';

export type PredictionValues = {
  city: string;
  bedrooms: number;
  washrooms: number;
  marla_size: number;
  is_furnished: number;
  is_apartment: number;
};
type Props = { values: PredictionValues; setValues: (next: PredictionValues) => void; onSubmit: (event: FormEvent) => void; loading: boolean };
const cities = ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad'];

type IconType = typeof Home;
function Field({ icon: Icon, label, children, hint }: { icon: IconType; label: string; children: ReactNode; hint?: string }) {
  return <label className="block"><span className="mb-2 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-[#536874]"><Icon className="h-3.5 w-3.5 text-[#4f7c96]" />{label}</span>{children}{hint && <span className="mt-1.5 block text-[11px] text-[#8a9aa2]">{hint}</span>}</label>;
}
function Toggle({ label, active, onClick, icon: Icon }: { label: string; active: boolean; onClick: () => void; icon: IconType }) {
  return <button type="button" onClick={onClick} aria-pressed={active} className={`flex w-full items-center justify-between rounded-xl border px-3.5 py-3 text-left transition-all duration-200 ${active ? 'border-[#a9d8cb] bg-[#eff9f5]' : 'border-[#dce5e8] bg-white hover:border-[#b8cbd3]'}`}><span className="flex items-center gap-2.5 text-sm font-bold text-[#263c47]"><Icon className={`h-4 w-4 ${active ? 'text-[#16836d]' : 'text-[#7e929c]'}`} />{label}</span><span className={`relative h-5 w-9 rounded-full transition-colors ${active ? 'bg-[#16836d]' : 'bg-[#d9e3e7]'}`}><span className={`absolute top-1 h-3 w-3 rounded-full bg-white shadow-sm transition-transform ${active ? 'translate-x-5' : 'translate-x-1'}`} /></span></button>;
}
export function PredictionForm({ values, setValues, onSubmit, loading }: Props) {
  const set = (key: keyof PredictionValues, value: string | number) => setValues({ ...values, [key]: value });
  return <form onSubmit={onSubmit} className="space-y-6">
    <div className="grid gap-5 sm:grid-cols-2"><Field icon={MapPin} label="City"><div className="relative"><select value={values.city} onChange={e => set('city', e.target.value)} className="w-full appearance-none rounded-xl border border-[#dce5e8] bg-white px-3.5 py-3 text-sm font-bold text-[#1f3540] outline-none transition focus:border-[#4f7c96] focus:ring-4 focus:ring-[#dcecf1]"><option value="Lahore">Lahore</option>{cities.slice(1).map(city => <option key={city}>{city}</option>)}</select><span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#647580]">⌄</span></div></Field><Field icon={Home} label="Home type"><div className="rounded-xl border border-[#dce5e8] bg-[#f8fafb] px-3.5 py-3 text-sm font-bold text-[#516772]">Residential property</div></Field></div>
    <div className="h-px bg-[#e7edef]" />
    <div><div className="mb-3 flex items-end justify-between"><div className="text-[11px] font-extrabold uppercase tracking-[.14em] text-[#536874]">Home profile</div><div className="mono text-[9px] uppercase tracking-[.13em] text-[#9aa8ae]">Required inputs</div></div><div className="grid gap-5 sm:grid-cols-3"><Field icon={BedDouble} label="Bedrooms"><input required type="number" min="0" max="20" value={values.bedrooms} onChange={e => set('bedrooms', Number(e.target.value))} className="w-full rounded-xl border border-[#dce5e8] bg-white px-3.5 py-3 text-sm font-bold text-[#1f3540] outline-none transition focus:border-[#4f7c96] focus:ring-4 focus:ring-[#dcecf1]" /></Field><Field icon={Droplets} label="Washrooms"><input required type="number" min="0" max="20" value={values.washrooms} onChange={e => set('washrooms', Number(e.target.value))} className="w-full rounded-xl border border-[#dce5e8] bg-white px-3.5 py-3 text-sm font-bold text-[#1f3540] outline-none transition focus:border-[#4f7c96] focus:ring-4 focus:ring-[#dcecf1]" /></Field><Field icon={Building2} label="Size in marlas" hint="Decimal values accepted"><input required type="number" min="0.5" max="100" step="0.5" value={values.marla_size} onChange={e => set('marla_size', Number(e.target.value))} className="w-full rounded-xl border border-[#dce5e8] bg-white px-3.5 py-3 text-sm font-bold text-[#1f3540] outline-none transition focus:border-[#4f7c96] focus:ring-4 focus:ring-[#dcecf1]" /></Field></div></div>
    <div className="grid gap-3 sm:grid-cols-2"><Toggle icon={Sparkles} label="Furnished home" active={values.is_furnished === 1} onClick={() => set('is_furnished', values.is_furnished ? 0 : 1)} /><Toggle icon={Building2} label="Apartment / flat" active={values.is_apartment === 1} onClick={() => set('is_apartment', values.is_apartment ? 0 : 1)} /></div>
    <button type="submit" disabled={loading} className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#14232d] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(20,35,45,.16)] transition duration-200 hover:bg-[#31586e] hover:shadow-[0_16px_30px_rgba(20,35,45,.22)] disabled:cursor-wait disabled:opacity-75">{loading ? <><Loader2 className="h-4 w-4 spin" />Analysing home profile…</> : <>Calculate rent estimate <span className="text-[#67c7a8] transition group-hover:translate-x-1">→</span></>}</button>
    <p className="text-center text-[11px] leading-5 text-[#8a9aa2]">The estimate is a data-informed starting point, not a property valuation.</p>
  </form>;
}
