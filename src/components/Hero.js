import { Check } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";

const TRUST_INDICATORS = [
  "Personal Attention",
  "Confidential Consultation",
  "Clear Legal Guidance",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Employment Law &middot; Employee Rights
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-[1.1] text-navy sm:text-5xl lg:text-[3.25rem]">
            Your Rights at Work Deserve the Right Representation.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">
            Clear, strategic legal guidance for employees facing wrongful termination,
            unpaid wages, workplace disputes, discrimination, and unfair treatment.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm border border-gold bg-navy px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-navy-light"
            >
              Schedule a Consultation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm border border-navy/20 px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
            >
              Message Us
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {TRUST_INDICATORS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-navy/80">
                <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <ImagePlaceholder
            label="[ATTORNEY PORTRAIT — ETHAN MARLOWE]"
            alt="Employment attorney Ethan Marlowe"
            aspect="aspect-[4/5]"
            className="mx-auto max-w-md lg:max-w-none"
          />
        </Reveal>
      </div>
    </section>
  );
}
