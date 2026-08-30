const FOOTER_LINKS = [
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const LEGAL_LINKS = ["Privacy Policy", "Disclaimer"];

export default function Footer() {
  return (
    <footer className="bg-navy pb-24 pt-16 text-offwhite/70 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-xl tracking-[0.08em] text-offwhite">
                MARLOWE
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold">
                Employment Law
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-offwhite/55">
              Clear legal guidance for workplace matters.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-offwhite/50">
              Navigate
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-offwhite">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-offwhite/50">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>+1 (000) 000-0000</li>
              <li>contact@marloweemploymentlaw.example</li>
              <li>Office location placeholder</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-offwhite/50">
              Legal
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {LEGAL_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm transition-colors hover:text-offwhite">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-offwhite/10 pt-8 text-xs text-offwhite/45">
          <p>&copy; 2026 Marlowe Employment Law.</p>
          <p>
            Portfolio demonstration project. This is a fictional law firm and does not
            provide legal services.
          </p>
        </div>
      </div>
    </footer>
  );
}
