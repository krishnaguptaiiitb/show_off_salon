import { Check, Award, Leaf, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { useReveal, useStaggerReveal } from '@/lib/hooks';
import { SectionHeading } from '@/components/SectionHeading';
import { TEAM, STATS } from '@/lib/data';

type Props = { navigate: (to: string) => void };

export function About({ navigate }: Props) {
  return (
    <div className="bg-[#f7f2e9]">
      <Header />
      <Story />
      <Values />
      <Stats />
      <Team navigate={navigate} />
      <CTA navigate={navigate} />
    </div>
  );
}

function Header() {
  return (
    <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#d4b48a]/20 blur-3xl" />
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <span className="animate-fade-up inline-flex items-center gap-3 text-[#b8946a] text-[11px] uppercase tracking-[0.3em] font-medium">
          <span className="h-px w-8 bg-[#b8946a]/60" /> About ShowOff <span className="h-px w-8 bg-[#b8946a]/60" />
        </span>
        <h1 className="animate-fade-up font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-6 text-[#1f1c19]" style={{ animationDelay: '0.1s' }}>
          More than a salon —
          <br />
          a <span className="italic text-shimmer">sanctuary</span> for self-care.
        </h1>
        <p className="animate-fade-up text-[#1f1c19]/70 text-lg leading-relaxed mt-7 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
          Founded in 2013 on a simple belief: that beauty rituals should feel like a retreat, not a
          transaction. A decade later, that belief shapes every detail.
        </p>
      </div>
    </section>
  );
}

function Story() {
  const ref = useStaggerReveal<HTMLDivElement>();
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10">
      <div ref={ref} className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal className="reveal-left relative h-[32rem] lg:h-[40rem]">
          <div className="absolute top-0 left-0 w-[60%] h-[78%] overflow-hidden rounded-[2px] shadow-xl img-zoom">
            <img src="https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&h=1100&w=850" alt="Salon interior" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[54%] h-[60%] overflow-hidden rounded-[2px] shadow-xl img-zoom border-4 border-[#f7f2e9]">
            <img src="https://images.pexels.com/photos/7750120/pexels-photo-7750120.jpeg?auto=compress&cs=tinysrgb&h=900&w=700" alt="Salon nook" className="w-full h-full object-cover" />
          </div>
        </div>
        <div data-reveal data-delay="150" className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-3 text-[#b8946a] text-[11px] uppercase tracking-[0.3em] font-medium">
            <span className="h-px w-8 bg-[#b8946a]/60" /> Our Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.12] text-[#1f1c19]">
            From a single chair to a <span className="italic text-[#b8946a]">beloved studio</span>.
          </h2>
          <p className="text-[#1f1c19]/70 leading-relaxed">
            ShowOff opened its doors in a quiet Bengaluru lane with one stylist, one chair, and an
            unwavering commitment to craft. Word traveled. Clients became regulars; regulars
            became friends. Today we're a team of nine specialists, each chosen for their skill and
            their warmth.
          </p>
          <p className="text-[#1f1c19]/70 leading-relaxed">
            We've grown, but our ethos hasn't moved an inch: take time, listen closely, use the
            best products, and never rush the person in your chair.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mt-2">
            {['Master stylists, trained yearly', 'Premium, cruelty-free products', 'Calm, light-filled space', 'Personal consultations always'].map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-[#1f1c19]/80">
                <Check size={16} className="text-[#b8946a] mt-0.5 shrink-0" strokeWidth={2} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const ref = useStaggerReveal<HTMLDivElement>();
  const values = [
    { icon: Award, title: 'Craft First', body: 'Continuous training and classical technique underpin every cut, color and shave we perform.' },
    { icon: Heart, title: 'Genuine Care', body: 'We remember your name, your preferences, your tea. The chair is yours, never ours.' },
    { icon: Leaf, title: 'Considered Products', body: 'Premium, sustainably-sourced products that respect your hair, your skin and the planet.' },
    { icon: Sparkles, title: 'Refined Space', body: 'A calm, light-filled studio designed to make every visit feel like a small retreat.' },
  ];
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 bg-[#ede4d3]/40">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div data-reveal>
          <SectionHeading
            eyebrow="What We Stand For"
            title={<>Values that shape <span className="italic text-[#b8946a]">every visit</span></>}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                data-reveal
                data-delay={`${i * 100}`}
                className="tilt-card bg-[#f7f2e9] border border-[#b8946a]/15 p-8 flex flex-col items-start gap-4"
              >
                <span className="w-12 h-12 rounded-full bg-[#b8946a]/12 flex items-center justify-center text-[#b8946a]">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-2xl text-[#1f1c19]">{v.title}</h3>
                <p className="text-sm text-[#1f1c19]/65 leading-relaxed">{v.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const ref = useStaggerReveal<HTMLDivElement>();
  return (
    <section className="py-20 px-6 lg:px-10 bg-[#1f1c19] text-[#f7f2e9] relative overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#b8946a]/15 blur-3xl" />
      <div ref={ref} className="mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {STATS.map((s, i) => (
          <div key={s.label} data-reveal data-delay={`${i * 110}`} className="text-center">
            <p className="font-display text-5xl lg:text-6xl text-[#b8946a] leading-none">{s.value}</p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#f7f2e9]/70 mt-3">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Team({ navigate }: Props) {
  const ref = useStaggerReveal<HTMLDivElement>();
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div data-reveal>
          <SectionHeading
            eyebrow="The Artists"
            title={<>Hands you can <span className="italic text-[#b8946a]">trust</span></>}
            subtitle="A close-knit team of specialists, each devoted to their corner of the craft."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {TEAM.map((m, i) => (
            <article key={m.name} data-reveal data-delay={`${i * 100}`} className="group">
              <div className="img-zoom relative overflow-hidden rounded-[2px] h-80">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1c19]/60 to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-2xl text-[#1f1c19]">{m.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#b8946a] mt-1">{m.role}</p>
                <p className="text-sm text-[#1f1c19]/60 mt-2">{m.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ navigate }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 px-6 lg:px-10">
      <div ref={ref} className="reveal reveal-scale mx-auto max-w-5xl bg-[#ede4d3]/50 border border-[#b8946a]/20 px-8 py-14 lg:px-16 lg:py-20 text-center flex flex-col items-center gap-5">
        <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-[#1f1c19] max-w-2xl">
          Come see why clients <span className="italic text-[#b8946a]">stay</span> for years.
        </h2>
        <button
          onClick={() => navigate('/contact')}
          className="btn-shine inline-flex items-center gap-2.5 bg-[#1f1c19] text-[#f7f2e9] px-8 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#b8946a] transition-colors duration-500"
        >
          Book a Visit <ArrowRight size={15} strokeWidth={1.6} />
        </button>
      </div>
    </section>
  );
}
