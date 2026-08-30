import { Quote } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <ImagePlaceholder
            label="[ATTORNEY PORTRAIT / OFFICE PLACEHOLDER]"
            alt="Ethan Marlowe at the Marlowe Employment Law office"
            aspect="aspect-[4/5]"
            className="max-w-md lg:max-w-none"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            About
          </p>
          <h2 className="mt-4 font-heading text-3xl text-navy sm:text-4xl">
            Ethan Marlowe
          </h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-navy/60">
            Employment Attorney
          </p>

          <p className="mt-7 text-base leading-relaxed text-charcoal/75">
            Workplace disputes can quickly become overwhelming. My role is to bring
            clarity to the situation, explain the options available to you, and help
            you make informed decisions about what comes next.
          </p>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75">
            Marlowe Employment Law provides employees with focused, personal legal
            guidance across a range of workplace matters. Every case begins with
            understanding the individual, the circumstances, and the outcome they are
            trying to achieve.
          </p>

          <blockquote className="relative mt-9 border-l-2 border-gold py-1 pl-6">
            <Quote className="absolute -left-1 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-180 text-gold/50" aria-hidden="true" />
            <p className="font-heading text-xl italic leading-snug text-navy">
              &ldquo;Good legal representation starts with listening.&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
