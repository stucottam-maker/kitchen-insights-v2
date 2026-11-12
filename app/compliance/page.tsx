'use client';

import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';

type Task = { id: string; label: string; detail: string; done: boolean };
const initialTasks: Task[] = [
  { id: 'opening', label: 'Opening checklist', detail: 'Kitchen, hygiene & service readiness', done: false },
  { id: 'fridges', label: 'Fridge temperatures', detail: 'Fridges, freezers & cold storage', done: false },
  { id: 'deliveries', label: 'Delivery checks', detail: 'Incoming goods & temperatures', done: false },
  { id: 'closing', label: 'Closing checklist', detail: 'Cleaning, waste & security', done: false },
];

export default function CompliancePage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [site, setSite] = useState<{id:string;organisation_id:string;name:string}|null>(null);
  const [feedback, setFeedback] = useState('');
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    let active = true;
    (async () => {
      const {data:{user}} = await supabase.auth.getUser();
      if (!user) { if(active) setFeedback('Sign in to record compliance checks.'); return; }
      const {data: memberships, error} = await supabase.from('site_memberships').select('site_id').eq('user_id',user.id).limit(1);
      if(error || !memberships?.length) {if(active) setFeedback('No site membership found. Ask your manager for access.');return;}
      const {data: selected, error: siteError} = await supabase.from('sites').select('id,organisation_id,name').eq('id',memberships[0].site_id).single();
      if(active && selected && !siteError) setSite(selected);
      else if(active) setFeedback('Unable to load your site.');
    })();
    return () => {active=false};
  }, []);
  async function saveCheck(input:{check_type:string;label:string;measured_temperature_c?:number;equipment_name?:string;notes?:string}) {
    if(!site) {setFeedback('Select an authorised site before saving.');return false;}
    setSaving(true);setFeedback('');
    try {
      const {data:{user},error:authError}=await supabase.auth.getUser();
      if(authError||!user) throw new Error('Please sign in again.');
      const {error}=await supabase.from('compliance_checks').insert({
        ...input,organisation_id:site.organisation_id,site_id:site.id,recorded_by:user.id,status:'needs_review'
      });
      if(error) throw error;
      setFeedback('Record submitted for supervisor review.');
      return true;
    } catch(err) {setFeedback(err instanceof Error?err.message:'Could not save record.');return false;}
    finally {setSaving(false);}
  }
  const [tab, setTab] = useState<'today' | 'temperatures' | 'deliveries'>('today');
  const [equipment, setEquipment] = useState('Walk-in fridge');
  const [temperature, setTemperature] = useState('');
  const [readings, setReadings] = useState<{equipment:string; temperature:number; at:string}[]>([]);
  const [supplier, setSupplier] = useState('');
  const [deliveryTemp, setDeliveryTemp] = useState('');
  const [deliveries, setDeliveries] = useState<{supplier:string; temperature:number; at:string}[]>([]);
  const completed = useMemo(() => tasks.filter(t => t.done).length, [tasks]);
  const card = 'rounded-2xl border border-slate-200 bg-white p-4 shadow-sm';
  const field = 'w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900';
  const btn = 'rounded-xl bg-teal-800 px-4 py-3 font-semibold text-white disabled:opacity-40';
  const now = () => new Date().toLocaleString('en-GB');

  return <main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900">
    <div className="mx-auto max-w-2xl space-y-5">
      <header className="flex items-center justify-between">
        <div><Link href="/" className="text-sm text-teal-800">← Kitchen Insights</Link><h1 className="mt-2 text-3xl font-bold">Compliance</h1><p className="text-slate-500">Daily kitchen checks</p></div>
        <span className="rounded-xl bg-teal-50 px-3 py-2 text-sm font-medium text-teal-900">MVP preview</span>
      </header>
      <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-900">Development preview: checklist ticks are temporary. Submitted measurements are marked for review and must not replace the site's approved food safety procedures.</p>{site && <p className="text-sm text-slate-600">Site: {site.name}</p>}{feedback && <p role="status" className="rounded-xl bg-slate-100 p-3 text-sm">{feedback}</p>}
      <nav className="flex gap-2 overflow-x-auto">
        {(['today','temperatures','deliveries'] as const).map(t => <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-4 py-2 text-sm font-medium capitalize ${tab === t ? 'bg-teal-800 text-white' : 'bg-white text-slate-700'}`}>{t}</button>)}
      </nav>
      {tab === 'today' && <>
        <section className="rounded-2xl bg-teal-900 p-5 text-white"><p className="text-sm opacity-80">Today's checks</p><div className="mt-1 text-3xl font-bold">{completed} / {tasks.length}</div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-emerald-400" style={{width:`${completed / tasks.length * 100}%`}} /></div></section>
        <section className="space-y-3">{tasks.map(t => <label key={t.id} className={`${card} flex cursor-pointer items-center gap-4`}><input type="checkbox" checked={t.done} onChange={e => setTasks(old => old.map(x => x.id === t.id ? {...x, done:e.target.checked} : x))} className="h-5 w-5 accent-teal-700" /><span className="flex-1"><span className="block font-semibold">{t.label}</span><span className="text-sm text-slate-500">{t.detail}</span></span><span className="text-sm text-slate-500">{t.done ? 'Complete' : 'Due'}</span></label>)}</section>
      </>}
      {tab === 'temperatures' && <section className={card}><h2 className="mb-4 text-xl font-bold">Record temperature</h2><form className="space-y-4" onSubmit={async e => {e.preventDefault();if(temperature.trim() && Number.isFinite(Number(temperature))){const ok=await saveCheck({check_type:'temperature',label:'Equipment temperature',equipment_name:equipment,measured_temperature_c:Number(temperature)});if(ok){setReadings(r => [{equipment,temperature:Number(temperature),at:now()},...r]);setTemperature('');}}}><label className="block text-sm font-medium">Equipment<select className={`${field} mt-1`} value={equipment} onChange={e=>setEquipment(e.target.value)}>{['Walk-in fridge','Prep fridge','Upright fridge','Freezer','Other equipment'].map(x=><option key={x}>{x}</option>)}</select></label><label className="block text-sm font-medium">Temperature (°C)<input className={`${field} mt-1`} type="number" step="0.1" required value={temperature} onChange={e=>setTemperature(e.target.value)}/></label><p className="text-xs text-slate-500">Configured equipment limits and corrective-action workflows will be added before production use.</p><button disabled={saving || !site} className={btn}>{saving?'Saving…':'Submit reading for review'}</button></form><div className="mt-5 space-y-2">{readings.map((r,i)=><div className="rounded-xl bg-slate-50 p-3 text-sm" key={i}>{r.equipment}: <strong>{r.temperature}°C</strong><span className="block text-slate-500">{r.at}</span></div>)}</div></section>}
      {tab === 'deliveries' && <section className={card}><h2 className="mb-4 text-xl font-bold">Delivery check</h2><form className="space-y-4" onSubmit={async e=>{e.preventDefault();if(supplier.trim()&&deliveryTemp.trim()&&Number.isFinite(Number(deliveryTemp))){const ok=await saveCheck({check_type:'delivery',label:'Delivery temperature',measured_temperature_c:Number(deliveryTemp),notes:'Supplier: '+supplier.trim()});if(ok){setDeliveries(d=>[{supplier:supplier.trim(),temperature:Number(deliveryTemp),at:now()},...d]);setSupplier('');setDeliveryTemp('');}}}><label className="block text-sm font-medium">Supplier<input className={`${field} mt-1`} required value={supplier} onChange={e=>setSupplier(e.target.value)} placeholder="Supplier name"/></label><label className="block text-sm font-medium">Measured temperature (°C)<input className={`${field} mt-1`} type="number" step="0.1" required value={deliveryTemp} onChange={e=>setDeliveryTemp(e.target.value)}/></label><p className="text-xs text-slate-500">Product condition, acceptance, evidence and invoice matching will be added before production use.</p><button disabled={saving || !site} className={btn}>{saving?'Saving…':'Submit delivery for review'}</button></form><div className="mt-5 space-y-2">{deliveries.map((d,i)=><div className="rounded-xl bg-slate-50 p-3 text-sm" key={i}>{d.supplier}: <strong>{d.temperature}°C</strong><span className="block text-slate-500">{d.at}</span></div>)}</div></section>}
    </div>
  </main>;
}
