import { Signal, Wifi, BatteryFull, Check } from "lucide-react";
import Reveal from "./Reveal";

const MESSAGES = [
  {
    name: "Client",
    time: "9:41 AM",
    text: "Thank you for taking the time to explain everything so clearly. I went into this situation feeling completely lost and finally understood what my options were.",
  },
  {
    name: "Client",
    time: "2:14 PM",
    text: "I really appreciate how responsive and patient you were throughout the process. Having someone guide me through each step made a difficult situation much easier.",
  },
  {
    name: "Client",
    time: "11:02 AM",
    text: "Thank you again for your help. After our conversation I felt much more confident about how to handle the situation with my employer.",
  },
];

function PhoneMockup({ message, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[2rem] border border-navy/10 bg-navy shadow-[0_20px_45px_-20px_rgba(11,31,51,0.4)]">
        <div className="flex items-center justify-between px-5 pt-3 text-[11px] font-medium text-offwhite/80">
          <span>{message.time}</span>
          <div className="flex items-center gap-1">
            <Signal className="h-3 w-3" aria-hidden="true" />
            <Wifi className="h-3 w-3" aria-hidden="true" />
            <BatteryFull className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 border-b border-offwhite/10 px-5 pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-xs font-semibold text-gold">
            {message.name.charAt(0)}
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-offwhite">{message.name}</span>
            <span className="text-[11px] text-offwhite/50">Employment Matter</span>
          </div>
        </div>

        <div className="flex min-h-[220px] flex-col justify-end gap-2 bg-navy-light/40 px-4 py-5">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-gold/90 px-4 py-3 text-sm leading-relaxed text-navy">
            {message.text}
          </div>
          <div className="ml-auto flex items-center gap-1 pr-1 text-[10px] text-offwhite/40">
            {message.time}
            <Check className="h-3 w-3 text-gold" aria-hidden="true" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Client Experiences
          </p>
          <h2 className="mt-4 font-heading text-3xl text-navy sm:text-4xl">
            What Clients Might Say
          </h2>
          <p className="mt-4 inline-block rounded-sm border border-navy/15 bg-white px-4 py-2 text-xs font-medium text-navy/60">
            Sample messages for website demonstration purposes.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {MESSAGES.map((message, i) => (
            <PhoneMockup key={message.time} message={message} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
