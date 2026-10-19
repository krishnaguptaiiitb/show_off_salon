import { useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '@/lib/hooks';

export function ScrollProgress({ navigate }: { navigate: (to: string) => void }) {
  const progress = useScrollProgress();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[55] h-[2px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#b8946a] via-[#d4b48a] to-[#b8946a] transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <button
        onClick={() => navigate('/contact')}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#1f1c19] text-[#f7f2e9] flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-[#b8946a] ${
          progress > 0.04 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Book now"
      >
        <ArrowUp size={18} strokeWidth={1.8} className="rotate-45" />
      </button>
    </>
  );
}
