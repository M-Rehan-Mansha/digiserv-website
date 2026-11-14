import {
  Award,
  Code2,
  Compass,
  Cpu,
  Film,
  Gamepad2,
  Globe,
  Layers,
  Palette,
  Share2,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react';

export function ServiceIcon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  switch (name) {
    case 'Code2':
      return <Code2 className={className} aria-hidden="true" />;
    case 'TrendingUp':
      return <TrendingUp className={className} aria-hidden="true" />;
    case 'Share2':
      return <Share2 className={className} aria-hidden="true" />;
    case 'Film':
      return <Film className={className} aria-hidden="true" />;
    case 'Palette':
      return <Palette className={className} aria-hidden="true" />;
    case 'Cpu':
      return <Cpu className={className} aria-hidden="true" />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} aria-hidden="true" />;
    case 'Layers':
      return <Layers className={className} aria-hidden="true" />;
    case 'Globe':
      return <Globe className={className} aria-hidden="true" />;
    case 'Gamepad2':
      return <Gamepad2 className={className} aria-hidden="true" />;
    case 'Award':
      return <Award className={className} aria-hidden="true" />;
    case 'Compass':
      return <Compass className={className} aria-hidden="true" />;
    default:
      return <Layers className={className} aria-hidden="true" />;
  }
}
