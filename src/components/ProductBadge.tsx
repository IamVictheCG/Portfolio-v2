import { BadgeCheck } from 'lucide-react';

// Marks featured projects as real company products, as opposed to practice or hobby builds
export default function ProductBadge({ className = '' }: { className?: string }) {
  return (
    <span
      title="A real business product, not a practice or hobby project"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-200 border border-emerald-400/50 backdrop-blur-md shadow-lg ${className}`}
    >
      <BadgeCheck size={14} aria-hidden="true" />
      Company Product
    </span>
  );
}
