"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const PLACEHOLDER_PHONE = "+1 (000) 000-0000";
const DEFAULT_MESSAGE =
  "Hi, I visited the Marlowe Employment Law website and would like to ask about an employment matter.";

export default function FloatingMessageButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
      <div
        className={`mb-4 w-80 origin-bottom-right rounded-sm border border-navy/10 bg-white shadow-[0_20px_45px_-15px_rgba(11,31,51,0.35)] transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between rounded-t-sm bg-navy px-5 py-4">
          <div className="flex flex-col leading-none">
            <span className="font-heading text-sm tracking-wide text-offwhite">MARLOWE</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold">
              Employment Law
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close message panel"
            className="text-offwhite/70 transition-colors hover:text-offwhite"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="px-5 py-4">
          <p className="rounded-sm bg-navy/5 px-4 py-3 text-sm leading-relaxed text-charcoal/75">
            {DEFAULT_MESSAGE}
          </p>
          <p className="mt-3 text-xs text-charcoal/45">{PLACEHOLDER_PHONE}</p>
          <a
            href={`sms:${PLACEHOLDER_PHONE.replace(/[^\d+]/g, "")}?body=${encodeURIComponent(
              DEFAULT_MESSAGE
            )}`}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gold bg-navy px-4 py-2.5 text-sm font-medium text-offwhite transition-colors hover:bg-navy-light"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close message panel" : "Open message panel"}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-navy text-offwhite shadow-[0_10px_30px_-10px_rgba(11,31,51,0.5)] transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
