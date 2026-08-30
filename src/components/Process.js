import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Tell Us What Happened",
    description: "Send us a short description of your workplace situation.",
  },
  {
    number: "02",
    title: "Initial Conversation",
    description: "We discuss the circumstances and identify the key issues.",
  },
  {
    number: "03",
    title: "Understand Your Options",
    description: "We explain the available legal options and possible next steps.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "If representation is appropriate, we develop a strategy and begin taking action.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            How It Works
          </p>
          <h2 className="mt-4 font-heading text-3xl text-navy sm:text-4xl">
            A Clear Path Forward
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            className="pointer-events-none absolute top-6 right-0 left-0 hidden h-px bg-navy/10 lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-offwhite font-heading text-sm text-navy">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-lg text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
