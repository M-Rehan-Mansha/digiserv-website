import { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';
import { resolveMediaUrl } from '../assets/media';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'DIGISERV Visual Showcase',
  priority = false,
}: ResilientImageProps) {
  const resolvedSrc = resolveMediaUrl(src);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [resolvedSrc]);

  if (failed || !resolvedSrc) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#101019] via-[#171326] to-[#08080D] border border-[#292638] text-[#A5A5B5] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Layers className="w-8 h-8 text-[#A855F7] mb-3" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide text-white/80">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
