import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Let&apos;s Talk
          </p>
          <h2 className="mt-4 font-heading text-3xl text-offwhite sm:text-4xl">
            Having a Problem at Work?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-offwhite/65">
            Tell us briefly what happened. We&apos;ll review your inquiry and get in
            touch to discuss the next step.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
