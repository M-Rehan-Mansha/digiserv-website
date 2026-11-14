import { useRef, type PointerEvent, type ReactNode } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export function InteractiveCard({ children, className = '' }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`interactive-card group relative overflow-hidden rounded-xl border border-[#292638] transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-[#762BFF]/85 hover:shadow-[0_18px_46px_-22px_rgba(118,43,255,0.55)] ${className}`}
    >
      {/* Pointer-following electric purple & silver spotlight */}
      <span
        aria-hidden="true"
        className="interactive-spotlight pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(168, 85, 247, 0.14), rgba(118, 43, 255, 0.04) 42%, transparent 72%)',
        }}
      />
      {/* Top specular silver-to-purple hairline accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2E2F0]/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
