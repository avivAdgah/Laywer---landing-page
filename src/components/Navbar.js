"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-navy/10 bg-offwhite/90 backdrop-blur-md shadow-[0_1px_0_rgba(11,31,51,0.04)]"
          : "border-transparent bg-offwhite"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-heading text-xl tracking-[0.08em] text-navy">MARLOWE</span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold">
            Employment Law
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/75 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm border border-gold bg-navy px-5 py-2.5 text-sm font-medium text-offwhite transition-colors hover:bg-navy-light lg:inline-block"
        >
          Schedule a Consultation
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-navy/15 text-navy lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-navy/10 bg-offwhite transition-[grid-template-rows] duration-300 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-base font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-sm border border-gold bg-navy px-5 py-3 text-center text-sm font-medium text-offwhite"
            >
              Schedule a Consultation
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
