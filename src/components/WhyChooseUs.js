import { UserRound, MessagesSquare, Zap, Target } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: UserRound,
    title: "Personal Attention",
    description: "Every situation is different. We take the time to understand yours.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    description:
      "Understand your options, risks, and next steps without unnecessary legal jargon.",
  },
  {
    icon: Zap,
    title: "Responsive Support",
    description:
      "Stay informed throughout the process with clear and direct communication.",
  },
  {
    icon: Target,
    title: "Focused Representation",
    description: "Employment law guidance focused on protecting employee rights.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Why Marlowe
          </p>
          <h2 className="mt-4 font-heading text-3xl text-navy sm:text-4xl">
            Legal Guidance Built Around You
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 60} className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 sm:mx-0">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg text-navy">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
