import {
  Ban,
  Wallet,
  ShieldAlert,
  FileEdit,
  MessageCircleWarning,
  Handshake,
} from "lucide-react";
import Reveal from "./Reveal";

const AREAS = [
  {
    icon: Ban,
    title: "Wrongful Termination",
    description:
      "Legal guidance for employees who believe they were dismissed unfairly or unlawfully.",
  },
  {
    icon: Wallet,
    title: "Unpaid Wages",
    description:
      "Assistance with unpaid salary, overtime, commissions, and other compensation.",
  },
  {
    icon: ShieldAlert,
    title: "Workplace Discrimination",
    description:
      "Guidance for employees experiencing discriminatory treatment in the workplace.",
  },
  {
    icon: FileEdit,
    title: "Changes to Employment Terms",
    description:
      "Advice regarding significant changes to salary, responsibilities, hours, or employment conditions.",
  },
  {
    icon: MessageCircleWarning,
    title: "Workplace Harassment",
    description:
      "Confidential guidance for employees dealing with harassment or inappropriate workplace conduct.",
  },
  {
    icon: Handshake,
    title: "Employment Disputes",
    description:
      "Strategic representation in disputes and negotiations between employees and employers.",
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Employment Law
          </p>
          <h2 className="mt-4 font-heading text-3xl text-navy sm:text-4xl">
            Protecting Your Rights in the Workplace
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            Workplace problems can affect your career, finances, and future. We help
            employees understand their rights and determine the appropriate next step.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={i * 60}>
                <div className="group h-full rounded-sm border border-navy/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_12px_30px_-14px_rgba(11,31,51,0.25)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/40 bg-gold/8">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-heading text-lg text-navy">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
