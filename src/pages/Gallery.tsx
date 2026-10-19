import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useStaggerReveal, useReveal } from '@/lib/hooks';
import { GALLERY } from '@/lib/data';

type Props = { navigate: (to: string) => void };

const TAGS = ['All', 'Interior', 'Hair', 'Beauty', 'Grooming'] as const;

export function Gallery({ navigate }: Props) {
  const [tag, setTag] = useState<(typeof TAGS)[number]>('All');
  const [active, setActive] = useState<number | null>(null);
  const ref = useStaggerReveal<HTMLDivElement>();

  const items = tag === 'All' ? GALLERY : GALLERY.filter((g) => g.tag === tag);

  return (
    <div className="bg-[#f7f2e9]">
      <section className="relative pt-40 pb-12 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#c98a7d]/15 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="animate-fade-up inline-flex items-center gap-3 text-[#b8946a] text-[11px] uppercase tracking-[0.3em] font-medium">
            <span className="h-px w-8 bg-[#b8946a]/60" /> The Look Book <span className="h-px w-8 bg-[#b8946a]/60" />
          </span>
          <h1 className="animate-fade-up font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-6 text-[#1f1c19]" style={{ animationDelay: '0.1s' }}>
            A glimpse inside <span className="italic text-shimmer">ShowOff</span>.
          </h1>
          <p className="animate-fade-up text-[#1f1c19]/70 text-lg leading-relaxed mt-7 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            The space, the work, the moments — a curated look at what happens when craft meets care.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-3">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium border transition-all duration-400 ${
                tag === t ? 'bg-[#1f1c19] text-[#f7f2e9] border-[#1f1c19]' : 'bg-transparent text-[#1f1c19]/70 border-[#b8946a]/30 hover:border-[#b8946a]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10">
        <div ref={ref} className="mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {items.map((g, i) => (
            <button
              key={`${g.label}-${i}`}
              data-reveal
              data-delay={`${(i % 6) * 70}`}
              onClick={() => setActive(i)}
              className="img-zoom group relative w-full mb-4 overflow-hidden rounded-[2px] break-inside-avoid block"
            >
              <img src={g.src} alt={g.label} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1c19]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-left">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#d4b48a]">{g.tag}</span>
                <p className="font-display text-xl text-[#f7f2e9]">{g.label}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <CTA navigate={navigate} />

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[70] bg-[#1f1c19]/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button className="absolute top-6 right-6 text-[#f7f2e9]/80 hover:text-[#b8946a] transition-colors p-2" aria-label="Close">
            <X size={28} strokeWidth={1.5} />
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={items[active].src} alt={items[active].label} className="w-full max-h-[78vh] object-contain rounded-[2px] animate-scale-in" />
            <figcaption className="mt-4 text-center">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#d4b48a]">{items[active].tag}</span>
              <p className="font-display text-2xl text-[#f7f2e9]">{items[active].label}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

function CTA({ navigate }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 px-6 lg:px-10">
      <div ref={ref} className="reveal reveal-scale mx-auto max-w-5xl bg-[#ede4d3]/50 border border-[#b8946a]/20 px-8 py-14 lg:px-16 lg:py-20 text-center flex flex-col items-center gap-5">
        <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-[#1f1c19] max-w-2xl">
          Like what you <span className="italic text-[#b8946a]">see</span>?
        </h2>
        <button
          onClick={() => navigate('/contact')}
          className="btn-shine inline-flex items-center gap-2.5 bg-[#1f1c19] text-[#f7f2e9] px-8 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#b8946a] transition-colors duration-500"
        >
          Book Appointment <ArrowRight size={15} strokeWidth={1.6} />
        </button>
      </div>
    </section>
  );
}
