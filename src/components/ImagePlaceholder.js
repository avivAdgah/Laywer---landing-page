import { ImageIcon } from "lucide-react";

export default function ImagePlaceholder({ label, alt, className = "", aspect = "aspect-[4/5]" }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex ${aspect} w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-sm border border-dashed border-navy/25 bg-navy/[0.04] p-6 text-center ${className}`}
    >
      <ImageIcon className="h-8 w-8 text-navy/30" strokeWidth={1.25} aria-hidden="true" />
      <span className="max-w-[80%] text-xs font-medium uppercase tracking-wider text-navy/45">
        {label}
      </span>
    </div>
  );
}
