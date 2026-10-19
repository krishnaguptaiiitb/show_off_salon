import { Scissors } from 'lucide-react';

type Props = {
  className?: string;
  size?: number;
};

export function Logo({ className = '', size = 28 }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative flex items-center justify-center rounded-full border border-[#b8946a]/60 text-[#b8946a]"
        style={{ width: size + 8, height: size + 8 }}
      >
        <Scissors size={size - 8} strokeWidth={1.5} />
      </span>
      <span className="font-display text-2xl tracking-wide leading-none">
        <span className="text-[#1f1c19]">Show</span>
        <span className="italic text-[#b8946a]">Off</span>
      </span>
    </span>
  );
}
