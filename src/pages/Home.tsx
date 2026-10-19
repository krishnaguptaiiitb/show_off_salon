import { ArrowRight, Star, Scissors, Sparkles, Heart, Calendar } from 'lucide-react';
import { useReveal, useStaggerReveal } from '@/lib/hooks';
import { SectionHeading } from '@/components/SectionHeading';
import { SERVICES, STATS, TESTIMONIALS, GALLERY, TEAM } from '@/lib/data';

type Props = { navigate: (to: string) => void };

export function Home({ navigate }: Props) {
  return (
    <div className="bg-[#f7f2e9]">
      <Hero navigate={navigate} />
      <Marquee />
      <Intro />
      <ServicesPreview navigate={navigate} />
      <Stats />
      <AboutTeaser navigate={navigate} />
      <GalleryPreview navigate={navigate} />
      <TeamPreview navigate={navigate} />
      <Testimonials />
      <CTA navigate={navigate} />
    </div>
  );
}

/* ============ HERO ============ */
function Hero({ navigate }: Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f7f2e9] pt-28 pb-20">
      {/* decorative blobs */}
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-[#d4b48a]/20 blur-3xl animate-floaty" />
      <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#c98a7d]/15 blur-3xl animate-floaty" style={{ animationDelay: '2s' }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left copy */}
        <div className="flex flex-col gap-7 max-w-xl">
          <span className="animate-fade-up inline-flex items-center gap-3 text-[#b8946a] text-[11px] uppercase tracking-[0.3em] font-medium">
            <span className="h-px w-10 bg-[#b8946a]/60" />
            Luxury Hair · Beauty · Grooming
          </span>
          <h1
            className="animate-fade-up font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04] text-[#1f1c19]"
            style={{ animationDelay: '0.1s' }}
          >
            Where style
            <br />
            meets <span className="italic text-shimmer">artistry</span>.
          </h1>
          <p
            className="animate-fade-up text-[#1f1c19]/70 text-lg leading-relaxed"
            style={{ animationDelay: '0.2s' }}
          >
            A modern sanctuary for hair, beauty and grooming — led by master stylists who treat
            every appointment as a personal collaboration. Step in, switch off, and leave looking
            unmistakably like the best version of you.
          </p>
          <div className="animate-fade-up flex flex-wrap items-center gap-4" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => navigate('/contact')}
              className="btn-shine inline-flex items-center gap-2.5 bg-[#1f1c19] text-[#f7f2e9] px-8 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#b8946a] transition-colors duration-500"
            >
              <Calendar size={16} strokeWidth={1.6} />
              Book Appointment
            </button>
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] font-medium text-[#1f1c19] link-underline"
            >
              View Services
              <ArrowRight size={15} strokeWidth={1.6} />
            </button>
          </div>

          <div className="animate-fade-up flex items-center gap-5 mt-3" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-1 text-[#b8946a]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-[#1f1c19]/70">
              <span className="font-semibold text-[#1f1c19]">4.9</span> · Loved by 25,000+ clients
            </p>
          </div>
        </div>

        {/* Right image collage */}
        <div className="relative h-[34rem] sm:h-[40rem] lg:h-[44rem] hidden sm:block">
          <div
            className="animate-scale-in absolute top-0 right-0 w-[62%] h-[72%] rounded-[2px] overflow-hidden shadow-2xl img-zoom"
            style={{ animationDelay: '0.2s' }}
          >
            <img
              src="https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900"
              alt="Bright salon interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="animate-scale-in absolute bottom-0 left-0 w-[52%] h-[58%] rounded-[2px] overflow-hidden shadow-2xl img-zoom"
            style={{ animationDelay: '0.35s' }}
          >
            <img
              src="https://images.pexels.com/photos/23349912/pexels-photo-23349912.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900"
              alt="Stylist at work"
              className="w-full h-full object-cover"
            />
          </div>
          {/* floating badge */}
          <div
            className="animate-floaty absolute top-[44%] left-[6%] bg-[#f7f2e9]/95 backdrop-blur-md border border-[#b8946a]/30 px-5 py-4 shadow-xl rounded-[2px]"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="font-display text-3xl text-[#b8946a] leading-none">12+</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#1f1c19]/70 mt-1">Years of craft</p>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#1f1c19]/40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-[#b8946a] to-transparent" />
      </div>
    </section>
  );
}

/* ============ MARQUEE ============ */
function Marquee() {
  const words = ['Precision Cuts', 'Balayage', 'Bridal Glam', 'Beard Sculpt', 'Keratin', 'Facials', 'Color Craft', 'Hot Towel Shave'];
  const track = [...words, ...words];
  return (
    <div className="bg-[#1f1c19] text-[#f7f2e9] py-5 overflow-hidden border-y border-[#b8946a]/20">
      <div className="marquee-track animate-marquee">
        {track.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 font-display text-2xl md:text-3xl italic text-[#f7f2e9]/90">
            {w}
            <Sparkles size={16} className="text-[#b8946a]" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============ INTRO ============ */
function Intro() {
  const ref = useStaggerReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <span data-reveal className="inline-flex items-center gap-3 text-[#b8946a] text-[11px] uppercase tracking-[0.3em] font-medium">
          <span className="h-px w-8 bg-[#b8946a]/60" /> Our Philosophy <span className="h-px w-8 bg-[#b8946a]/60" />
        </span>
        <h2 data-reveal data-delay="100" className="font-display text-3xl md:text-5xl leading-[1.15] mt-6 text-[#1f1c19]">
          Beauty isn't a trend we chase —
          <span className="italic text-[#b8946a]"> it's a craft we honor.</span>
        </h2>
        <p data-reveal data-delay="200" className="text-[#1f1c19]/65 text-lg leading-relaxed mt-7 max-w-3xl mx-auto">
          Every chair at ShowOff is a quiet conversation between you and a stylist who truly listens.
          We blend classical technique with a modern eye, premium products with a calm hand, and
          deliver looks that feel effortless long after you've left the mirror.
        </p>
        <div data-reveal data-delay="300" className="gold-divider mx-auto mt-10 max-w-xs" />
      </div>
    </section>
  );
}

/* ============ SERVICES PREVIEW ============ */
function ServicesPreview({ navigate }: Props) {
  const ref = useStaggerReveal<HTMLDivElement>();
  const featured = SERVICES.slice(0, 6);
  const icons = [Scissors, Sparkles, Heart, Sparkles, Scissors, Heart];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-[#ede4d3]/40">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div data-reveal>
          <SectionHeading
            eyebrow="What We Do"
            title={<>Services crafted <span className="italic text-[#b8946a]">around you</span></>}
            subtitle="From precision cuts to bridal glam, each service is a considered ritual — never rushed, always personal."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {featured.map((s, i) => {
            const Icon = icons[i];
            return (
              <article
                key={s.id}
                data-reveal
                data-delay={`${i * 90}`}
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
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1f1c19]/50">{s.duration}</span>
                  <span className="font-display text-xl text-[#b8946a]">{s.price}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div data-reveal className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/services')}
            className="btn-shine inline-flex items-center gap-2.5 border border-[#1f1c19] text-[#1f1c19] px-8 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#1f1c19] hover:text-[#f7f2e9] transition-colors duration-500"
          >
            See All Services
            <ArrowRight size={15} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============ STATS ============ */
function Stats() {
  const ref = useStaggerReveal<HTMLDivElement>();
  return (
    <section className="py-20 px-6 lg:px-10 bg-[#1f1c19] text-[#f7f2e9] relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#b8946a]/15 blur-3xl" />
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

/* ============ ABOUT TEASER ============ */
function AboutTeaser({ navigate }: Props) {
  const ref = useStaggerReveal<HTMLDivElement>();
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10">
      <div ref={ref} className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div data-reveal className="reveal-left relative h-[30rem] lg:h-[36rem]">
          <div className="absolute top-0 left-0 w-[68%] h-[80%] overflow-hidden rounded-[2px] shadow-xl img-zoom">
            <img src="https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&h=1100&w=850" alt="Salon detail" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[52%] h-[62%] overflow-hidden rounded-[2px] shadow-xl img-zoom border-4 border-[#f7f2e9]">
            <img src="https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&h=900&w=700" alt="Salon chairs" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-[42%] right-[2%] bg-[#b8946a] text-[#1f1c19] px-5 py-3 shadow-lg rounded-[2px] animate-floaty">
            <p className="font-display text-xl leading-none">Est. 2013</p>
          </div>
        </div>

        <div data-reveal data-delay="150" className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-3 text-[#b8946a] text-[11px] uppercase tracking-[0.3em] font-medium">
            <span className="h-px w-8 bg-[#b8946a]/60" /> Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.12] text-[#1f1c19]">
            A studio built on <span className="italic text-[#b8946a]">detail</span>, devotion and a love for the craft.
          </h2>
          <p className="text-[#1f1c19]/70 leading-relaxed">
            ShowOff began with a simple belief — that a great salon should feel less like a
            transaction and more like a retreat. Over a decade later, that belief shapes every
            detail: the warm light, the considered tools, the stylists who remember how you like
            your tea.
          </p>
          <p className="text-[#1f1c19]/70 leading-relaxed">
            Our team trains continuously, sources premium products, and treats each client as the
            only one in the room. The result is a look that feels entirely, unmistakably yours.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="self-start btn-shine inline-flex items-center gap-2.5 border border-[#1f1c19] text-[#1f1c19] px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#1f1c19] hover:text-[#f7f2e9] transition-colors duration-500"
          >
            More About Us
            <ArrowRight size={15} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============ GALLERY PREVIEW ============ */
function GalleryPreview({ navigate }: Props) {
  const ref = useStaggerReveal<HTMLDivElement>();
  const items = GALLERY.slice(0, 6);
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-[#ede4d3]/40">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div data-reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="The Look Book"
            title={<>Moments from <span className="italic text-[#b8946a]">the chair</span></>}
          />
          <button
            onClick={() => navigate('/gallery')}
            className="self-start md:self-auto inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] font-medium text-[#1f1c19] link-underline"
          >
            Full Gallery <ArrowRight size={15} strokeWidth={1.6} />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {items.map((g, i) => (
            <div
              key={i}
              data-reveal
              data-delay={`${i * 80}`}
              className={`img-zoom relative overflow-hidden rounded-[2px] group ${
                i === 0 ? 'lg:row-span-2 lg:h-full h-64' : 'h-48 lg:h-56'
              }`}
            >
              <img src={g.src} alt={g.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1c19]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#d4b48a]">{g.tag}</span>
                <p className="font-display text-xl text-[#f7f2e9]">{g.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TEAM PREVIEW ============ */
function TeamPreview({ navigate }: Props) {
  const ref = useStaggerReveal<HTMLDivElement>();
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div data-reveal>
          <SectionHeading
            eyebrow="The Artists"
            title={<>Meet the <span className="italic text-[#b8946a]">hands behind</span> the craft</>}
            subtitle="A close-knit team of specialists, each devoted to their corner of the craft."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              data-reveal
              data-delay={`${i * 100}`}
              className="group"
            >
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

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  const ref = useStaggerReveal<HTMLDivElement>();
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-[#ede4d3]/40">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div data-reveal>
          <SectionHeading
            eyebrow="Kind Words"
            title={<>What our <span className="italic text-[#b8946a]">clients say</span></>}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-reveal
              data-delay={`${i * 110}`}
              className="bg-[#f7f2e9] border border-[#b8946a]/15 p-8 lg:p-10 flex flex-col gap-5"
            >
              <div className="flex items-center gap-1 text-[#b8946a]">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display text-xl lg:text-2xl leading-relaxed text-[#1f1c19] italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-3 border-t border-[#b8946a]/15">
                <span className="w-10 h-10 rounded-full bg-[#b8946a] text-[#f7f2e9] flex items-center justify-center font-display text-lg">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-medium text-[#1f1c19]">{t.name}</p>
                  <p className="text-xs text-[#1f1c19]/55">{t.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA ============ */
function CTA({ navigate }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10">
      <div
        ref={ref}
        className="reveal reveal-scale mx-auto max-w-5xl relative overflow-hidden bg-[#1f1c19] text-[#f7f2e9] px-8 py-16 lg:px-16 lg:py-24 text-center"
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#b8946a]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#c98a7d]/15 blur-3xl" />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#b8946a]">Ready When You Are</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-2xl">
            Treat yourself to the <span className="italic text-[#b8946a]">show off</span> you deserve.
          </h2>
          <p className="text-[#f7f2e9]/70 max-w-xl leading-relaxed">
            Book your appointment today and let our artists craft a look that turns heads for all
            the right reasons.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="btn-shine inline-flex items-center gap-2.5 bg-[#b8946a] text-[#1f1c19] px-8 py-4 text-[12px] uppercase tracking-[0.18em] font-semibold hover:bg-[#d4b48a] transition-colors duration-500 animate-pulse-gold"
          >
            <Calendar size={16} strokeWidth={1.6} />
            Book Your Visit
          </button>
        </div>
      </div>
    </section>
  );
}
