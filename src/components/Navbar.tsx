import { useEffect, useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Logo } from './Logo';

type Props = {
  current: string;
  navigate: (to: string) => void;
};

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar({ current, navigate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (to: string) => {
    navigate(to);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#f7f2e9]/90 backdrop-blur-xl border-b border-[#b8946a]/15 py-3 shadow-[0_8px_30px_-12px_rgba(31,28,25,0.12)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
          <button onClick={() => go('/')} className="transition-transform hover:scale-[1.02]">
            <Logo />
          </button>

          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => {
              const active = current === l.to;
              return (
                <button
                  key={l.to}
                  onClick={() => go(l.to)}
                  className={`link-underline text-[13px] uppercase tracking-[0.18em] font-medium transition-colors ${
                    active ? 'text-[#b8946a] active' : 'text-[#1f1c19]/80 hover:text-[#b8946a]'
                  }`}
                >
                  {l.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => go('/contact')}
              className="btn-shine inline-flex items-center gap-2 bg-[#1f1c19] text-[#f7f2e9] px-6 py-3 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#b8946a] transition-colors duration-500"
            >
              <Calendar size={15} strokeWidth={1.6} />
              Book Now
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#1f1c19] p-2"
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#1f1c19]/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-[#f7f2e9] shadow-2xl transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-[#b8946a]/20">
            <Logo />
            <button onClick={() => setOpen(false)} className="p-2 text-[#1f1c19]" aria-label="Close menu">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-2">
            {LINKS.map((l, i) => {
              const active = current === l.to;
              return (
                <button
                  key={l.to}
                  onClick={() => go(l.to)}
                  style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
                  className={`text-left font-display text-3xl py-3 border-b border-[#b8946a]/12 transition-all duration-500 ${
                    open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  } ${active ? 'text-[#b8946a]' : 'text-[#1f1c19]'}`}
                >
                  {l.label}
                </button>
              );
            })}
            <button
              onClick={() => go('/contact')}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#1f1c19] text-[#f7f2e9] px-6 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#b8946a] transition-colors"
            >
              <Calendar size={15} strokeWidth={1.6} />
              Book Appointment
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
