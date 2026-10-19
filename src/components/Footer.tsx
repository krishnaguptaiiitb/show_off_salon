import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Logo } from './Logo';

type Props = { navigate: (to: string) => void };

export function Footer({ navigate }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1f1c19] text-[#f7f2e9] relative overflow-hidden">
      <div className="gold-divider" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-5">
              <Logo className="[&_span:first-child]:text-[#f7f2e9]" />
            </div>
            <p className="text-[#f7f2e9]/65 text-sm leading-relaxed max-w-xs">
              Where style meets artistry. A modern salon devoted to craft, comfort and
              considered beauty — for hair, face and grooming.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full border border-[#b8946a]/40 flex items-center justify-center text-[#b8946a] hover:bg-[#b8946a] hover:text-[#1f1c19] transition-all duration-400"
                  aria-label="Social link"
                >
                  <Icon size={16} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-5 text-[#b8946a]">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Services', '/services'],
                ['Gallery', '/gallery'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <button
                    onClick={() => navigate(to)}
                    className="text-[#f7f2e9]/70 hover:text-[#b8946a] transition-colors link-underline"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-5 text-[#b8946a]">Visit Us</h4>
            <ul className="space-y-4 text-sm text-[#f7f2e9]/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#b8946a] mt-0.5 shrink-0" strokeWidth={1.6} />
                <span>14 Heritage Lane, Indiranagar<br />Bengaluru, KA 560038</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#b8946a] shrink-0" strokeWidth={1.6} />
                <a href="tel:+918012345678" className="hover:text-[#b8946a] transition-colors">+91 80 1234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#b8946a] shrink-0" strokeWidth={1.6} />
                <a href="mailto:hello@showoffsalon.in" className="hover:text-[#b8946a] transition-colors">hello@showoffsalon.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-5 text-[#b8946a]">Hours</h4>
            <ul className="space-y-3 text-sm text-[#f7f2e9]/70">
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#b8946a] shrink-0" strokeWidth={1.6} />
                <span>Mon — Fri · 10am – 8pm</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#b8946a] shrink-0" strokeWidth={1.6} />
                <span>Sat · 9am – 9pm</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#b8946a] shrink-0" strokeWidth={1.6} />
                <span>Sun · 10am – 6pm</span>
              </li>
            </ul>
            <button
              onClick={() => navigate('/contact')}
              className="btn-shine mt-6 inline-flex items-center gap-2 bg-[#b8946a] text-[#1f1c19] px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-[#d4b48a] transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#f7f2e9]/12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#f7f2e9]/50 tracking-wide">
            © {year} ShowOff Salon. All rights reserved.
          </p>
          <p className="text-xs text-[#f7f2e9]/50 tracking-wide font-display italic">
            Crafted with care · Where style meets artistry
          </p>
        </div>
      </div>
    </footer>
  );
}
