import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, Loader2, Calendar, Instagram, Facebook } from 'lucide-react';
import { useReveal, useStaggerReveal } from '@/lib/hooks';
import { SectionHeading } from '@/components/SectionHeading';
import { supabase } from '@/lib/supabase';
import { SERVICES } from '@/lib/data';

const TIME_SLOTS = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM', '7:00 PM'];

export function Contact() {
  const ref = useStaggerReveal<HTMLDivElement>();
  const infoRef = useStaggerReveal<HTMLDivElement>();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0].name,
    date: '',
    time: TIME_SLOTS[0],
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('bookings').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      date: form.date,
      time: form.time,
      notes: form.notes || null,
    });
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: SERVICES[0].name, date: '', time: TIME_SLOTS[0], notes: '' });
    }
  };

  return (
    <div className="bg-[#f7f2e9]">
      {/* Header */}
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#d4b48a]/20 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="animate-fade-up inline-flex items-center gap-3 text-[#b8946a] text-[11px] uppercase tracking-[0.3em] font-medium">
            <span className="h-px w-8 bg-[#b8946a]/60" /> Get in Touch <span className="h-px w-8 bg-[#b8946a]/60" />
          </span>
          <h1 className="animate-fade-up font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-6 text-[#1f1c19]" style={{ animationDelay: '0.1s' }}>
            Let's get you <span className="italic text-shimmer">booked</span>.
          </h1>
          <p className="animate-fade-up text-[#1f1c19]/70 text-lg leading-relaxed mt-7 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Reserve your slot in moments. Tell us what you'd like and when — we'll confirm by
            phone or email within a few hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <div ref={ref} className="bg-[#f7f2e9] border border-[#b8946a]/20 p-8 lg:p-12">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-16 animate-scale-in">
                <span className="w-16 h-16 rounded-full bg-[#b8946a] text-[#f7f2e9] flex items-center justify-center mb-6 animate-pulse-gold">
                  <Check size={30} strokeWidth={2} />
                </span>
                <h3 className="font-display text-3xl text-[#1f1c19]">Request received</h3>
                <p className="text-[#1f1c19]/65 mt-3 max-w-md">
                  Thank you — we've got your booking request. Our front desk will reach out shortly
                  to confirm your appointment.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-[12px] uppercase tracking-[0.18em] font-medium text-[#b8946a] link-underline"
                >
                  Book another visit
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-6">
                <div data-reveal>
                  <h2 className="font-display text-3xl text-[#1f1c19] mb-1">Appointment Request</h2>
                  <p className="text-sm text-[#1f1c19]/60">Fields marked with * are required.</p>
                </div>

                <div data-reveal data-delay="60" className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *">
                    <input required value={form.name} onChange={(e) => update('name', e.target.value)} type="text" placeholder="Your name" className={inputCls} />
                  </Field>
                  <Field label="Phone *">
                    <input required value={form.phone} onChange={(e) => update('phone', e.target.value)} type="tel" placeholder="+91 ..." className={inputCls} />
                  </Field>
                </div>

                <div data-reveal data-delay="120" className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email *">
                    <input required value={form.email} onChange={(e) => update('email', e.target.value)} type="email" placeholder="you@email.com" className={inputCls} />
                  </Field>
                  <Field label="Service *">
                    <select value={form.service} onChange={(e) => update('service', e.target.value)} className={inputCls}>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div data-reveal data-delay="180" className="grid sm:grid-cols-2 gap-5">
                  <Field label="Preferred Date *">
                    <input required value={form.date} onChange={(e) => update('date', e.target.value)} type="date" className={inputCls} />
                  </Field>
                  <Field label="Preferred Time *">
                    <select value={form.time} onChange={(e) => update('time', e.target.value)} className={inputCls}>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div data-reveal data-delay="240">
                  <Field label="Notes (optional)">
                    <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={4} placeholder="Tell us anything we should know..." className={`${inputCls} resize-none`} />
                  </Field>
                </div>

                {status === 'error' && (
                  <p className="text-sm text-[#c98a7d]">Something went wrong sending your request. Please try again or call us directly.</p>
                )}

                <button
                  data-reveal
                  data-delay="300"
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-shine inline-flex items-center justify-center gap-2.5 bg-[#1f1c19] text-[#f7f2e9] px-8 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#b8946a] transition-colors duration-500 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={15} strokeWidth={1.6} /> Request Booking</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div ref={infoRef} className="flex flex-col gap-6">
            <div data-reveal className="bg-[#1f1c19] text-[#f7f2e9] p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#b8946a]/20 blur-3xl" />
              <h3 className="font-display text-2xl text-[#b8946a] mb-6 relative z-10">Visit the Studio</h3>
              <ul className="space-y-5 text-sm relative z-10">
                <InfoRow icon={MapPin}><span>14 Heritage Lane, Indiranagar<br />Bengaluru, KA 560038</span></InfoRow>
                <InfoRow icon={Phone}><a href="tel:+918012345678" className="hover:text-[#b8946a] transition-colors">+91 80 1234 5678</a></InfoRow>
                <InfoRow icon={Mail}><a href="mailto:hello@showoffsalon.in" className="hover:text-[#b8946a] transition-colors">hello@showoffsalon.in</a></InfoRow>
              </ul>
              <div className="mt-8 pt-6 border-t border-[#f7f2e9]/12 relative z-10">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#f7f2e9]/60 mb-3">Follow</p>
                <div className="flex items-center gap-3">
                  {[Instagram, Facebook].map((Icon, i) => (
                    <a key={i} href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full border border-[#b8946a]/40 flex items-center justify-center text-[#b8946a] hover:bg-[#b8946a] hover:text-[#1f1c19] transition-all duration-400">
                      <Icon size={16} strokeWidth={1.6} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div data-reveal data-delay="120" className="bg-[#ede4d3]/50 border border-[#b8946a]/20 p-8 lg:p-10">
              <h3 className="font-display text-2xl text-[#1f1c19] mb-5 flex items-center gap-2">
                <Clock size={20} className="text-[#b8946a]" strokeWidth={1.6} /> Opening Hours
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  ['Monday — Friday', '10am – 8pm'],
                  ['Saturday', '9am – 9pm'],
                  ['Sunday', '10am – 6pm'],
                ].map(([d, h]) => (
                  <li key={d} className="flex items-center justify-between border-b border-[#b8946a]/12 pb-3">
                    <span className="text-[#1f1c19]/75">{d}</span>
                    <span className="text-[#1f1c19] font-medium">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-sm text-[#b8946a]">
                <Calendar size={16} strokeWidth={1.6} />
                <span>Walk-ins welcome, appointments preferred.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map strip */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Find Us"
            title={<>Right in the <span className="italic text-[#b8946a]">heart</span> of Indiranagar</>}
          />
          <div className="mt-10 rounded-[2px] overflow-hidden border border-[#b8946a]/20 h-80 bg-[#ede4d3]/40 flex items-center justify-center">
            <iframe
              title="ShowOff Salon location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.635%2C12.965%2C77.655%2C12.985&layer=mapnik&marker=12.975%2C77.645"
              className="w-full h-full grayscale-[0.3] contrast-[0.95]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const inputCls =
  'w-full bg-transparent border border-[#b8946a]/30 px-4 py-3 text-sm text-[#1f1c19] placeholder:text-[#1f1c19]/40 focus:outline-none focus:border-[#b8946a] transition-colors';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-[0.18em] text-[#1f1c19]/60 font-medium">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  const Icon = icon;
  return (
    <li className="flex items-start gap-3 text-[#f7f2e9]/80">
      <Icon size={16} className="text-[#b8946a] mt-0.5 shrink-0" strokeWidth={1.6} />
      {children}
    </li>
  );
}
