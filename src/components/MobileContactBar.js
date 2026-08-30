import { Phone, MessageCircle } from "lucide-react";

const PLACEHOLDER_PHONE = "+1 (000) 000-0000";
const DEFAULT_MESSAGE =
  "Hi, I visited the Marlowe Employment Law website and would like to ask about an employment matter.";

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-navy/10 bg-white/95 backdrop-blur-sm shadow-[0_-6px_20px_-10px_rgba(11,31,51,0.25)] lg:hidden">
      <a
        href={`tel:${PLACEHOLDER_PHONE.replace(/[^\d+]/g, "")}`}
        className="flex flex-1 items-center justify-center gap-2 border-r border-navy/10 py-4 text-sm font-medium text-navy"
      >
        <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
        Call
      </a>
      <a
        href={`sms:${PLACEHOLDER_PHONE.replace(/[^\d+]/g, "")}?body=${encodeURIComponent(
          DEFAULT_MESSAGE
        )}`}
        className="flex flex-1 items-center justify-center gap-2 bg-navy py-4 text-sm font-medium text-offwhite"
      >
        <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
        Message
      </a>
    </div>
  );
}
