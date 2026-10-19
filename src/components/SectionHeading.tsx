type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col ${alignment} gap-4`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-[#b8946a] text-[11px] uppercase tracking-[0.3em] font-medium">
          <span className="h-px w-8 bg-[#b8946a]/60" />
          {eyebrow}
          <span className="h-px w-8 bg-[#b8946a]/60" />
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] text-[#1f1c19] max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#1f1c19]/65 text-base md:text-lg leading-relaxed max-w-2xl mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
