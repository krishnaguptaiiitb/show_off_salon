import { useState } from 'react';
import { Clock, ArrowRight, Check, Sparkles, Scissors, Heart } from 'lucide-react';
import { useReveal, useStaggerReveal } from '@/lib/hooks';
import { SectionHeading } from '@/components/SectionHeading';
import { SERVICES, type Service } from '@/lib/data';

type Props = { navigate: (to: string) => void };

const CATEGORIES = ['All', 'Hair', 'Beauty', 'Grooming'] as const;

export function Services({ navigate }: Props) {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>('All');
  const ref = useStaggerReveal<HTMLDivElement>();

  const filtered: Service[] = cat === 'All' ? SERVICES : SERVICES.filter((s) => s.category === cat);

  return (
    <div className="bg-[#f7f2e9]">
      {/* Header */}
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#d4b48a]/20 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="animate-fade-up inline-flex items-center gap-3 text-[#b8946a] text-[11px] uppercase tracking-[0.3em] font-medium">
            <span className="h-px w-8 bg-[#b8946a]/60" /> Our Menu <span className="h-px w-8 bg-[#b8946a]/60" />
          </span>
          <h1 className="animate-fade-up font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-6 text-[#1f1c19]" style={{ animationDelay: '0.1s' }}>
            Services for every <span className="italic text-shimmer">moment</span>.
          </h1>
          <p className="animate-fade-up text-[#1f1c19]/70 text-lg leading-relaxed mt-7 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            From everyday cuts to once-in-a-lifetime glam — each service is a considered ritual,
            tailored to you and never rushed.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium border transition-all duration-400 ${
                cat === c
                  ? 'bg-[#1f1c19] text-[#f7f2e9] border-[#1f1c19]'
                  : 'bg-transparent text-[#1f1c19]/70 border-[#b8946a]/30 hover:border-[#b8946a]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-20 px-6 lg:px-10">
        <div ref={ref} className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s, i) => {
            const Icon = s.category === 'Hair' ? Scissors : s.category === 'Beauty' ? Sparkles : Heart;
            return (
              <article
                key={s.id}
                data-reveal
                data-delay={`${i * 70}`}
                className="tilt-card group bg-[#f7f2e9] border border-[#b8946a]/15 p-8 flex flex-col gap-5"
              >
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-full bg-[#b8946a]/12 flex items-center justify-center text-[#b8946a] group-hover:bg-[#b8946a] group-hover:text-[#f7f2e9] transition-all duration-500">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#1f1c19]/50">{s.category}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-[#1f1c19] leading-tight">{s.name}</h3>
                  <p className="text-sm text-[#1f1c19]/65 leading-relaxed mt-3">{s.blurb}</p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#b8946a]/15">
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#1f1c19]/50">
                    <Clock size={13} strokeWidth={1.6} /> {s.duration}
                  </span>
                  <span className="font-display text-xl text-[#b8946a]">{s.price}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Includes band */}
      <section className="py-20 px-6 lg:px-10 bg-[#ede4d3]/40">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center gap-4">
            <SectionHeading
              eyebrow="Every Visit Includes"
              title={<>The little <span className="italic text-[#b8946a]">extras</span>, always</>}
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {['Consultation', 'Scalp massage', 'Hot towel finish', 'Style & aftercare tips'].map((p, i) => (
              <div key={p} className="bg-[#f7f2e9] border border-[#b8946a]/15 p-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#b8946a] text-[#f7f2e9] flex items-center justify-center shrink-0">
                  <Check size={15} strokeWidth={2} />
                </span>
                <span className="text-sm text-[#1f1c19]/80">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA navigate={navigate} />
    </div>
  );
}

function CTA({ navigate }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 px-6 lg:px-10">
      <div ref={ref} className="reveal reveal-scale mx-auto max-w-5xl relative overflow-hidden bg-[#1f1c19] text-[#f7f2e9] px-8 py-14 lg:px-16 lg:py-20 text-center">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#b8946a]/20 blur-3xl" />
        <div className="relative z-10 flex flex-col items-center gap-5">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] max-w-2xl">
            Found something you <span className="italic text-[#b8946a]">love</span>?
          </h2>
          <p className="text-[#f7f2e9]/70 max-w-xl">Reserve your slot in seconds — we'll handle the rest.</p>
          <button
            onClick={() => navigate('/contact')}
            className="btn-shine inline-flex items-center gap-2.5 bg-[#b8946a] text-[#1f1c19] px-8 py-4 text-[12px] uppercase tracking-[0.18em] font-semibold hover:bg-[#d4b48a] transition-colors duration-500"
          >
            Book Appointment <ArrowRight size={15} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}
