"use client";

import { useState } from "react";
import { Lock, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const MATTER_OPTIONS = [
  "Wrongful Termination",
  "Unpaid Wages",
  "Discrimination",
  "Changes to Employment Terms",
  "Workplace Harassment",
  "Employment Dispute",
  "Other",
];

const INITIAL_STATE = {
  fullName: "",
  phone: "",
  email: "",
  matter: "",
  details: "",
};

const inputClasses =
  "w-full rounded-sm border bg-offwhite/5 px-4 py-3 text-sm text-offwhite placeholder:text-offwhite/35 outline-none transition-colors focus:border-gold";

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter a phone number.";
    } else if (!/^[\d\s()+.-]{7,}$/.test(values.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.matter) nextErrors.matter = "Please select an option.";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      setValues(INITIAL_STATE);
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-sm border border-gold/30 bg-offwhite/5 px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold" aria-hidden="true" />
        <h3 className="mt-5 font-heading text-2xl text-offwhite">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-offwhite/65">
          We&apos;ve received your inquiry and will be in touch soon to discuss the next
          step. This is a simulated submission for demonstration purposes.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-sm border border-gold px-6 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="fullName" className="mb-2 block text-xs font-medium uppercase tracking-wider text-offwhite/70">
          Full Name <span className="text-gold">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange("fullName")}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={`${inputClasses} ${errors.fullName ? "border-red-400/70" : "border-offwhite/20"}`}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1.5 text-xs text-red-300">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-offwhite/70">
          Phone Number <span className="text-gold">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange("phone")}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`${inputClasses} ${errors.phone ? "border-red-400/70" : "border-offwhite/20"}`}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1.5 text-xs text-red-300">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-offwhite/70">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputClasses} ${errors.email ? "border-red-400/70" : "border-offwhite/20"}`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-300">
            {errors.email}
          </p>
        )}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="matter" className="mb-2 block text-xs font-medium uppercase tracking-wider text-offwhite/70">
          What can we help with? <span className="text-gold">*</span>
        </label>
        <select
          id="matter"
          value={values.matter}
          onChange={handleChange("matter")}
          aria-invalid={Boolean(errors.matter)}
          aria-describedby={errors.matter ? "matter-error" : undefined}
          className={`${inputClasses} ${errors.matter ? "border-red-400/70" : "border-offwhite/20"} ${values.matter ? "text-offwhite" : "text-offwhite/35"}`}
        >
          <option value="" disabled className="text-charcoal">
            Select an option
          </option>
          {MATTER_OPTIONS.map((option) => (
            <option key={option} value={option} className="text-charcoal">
              {option}
            </option>
          ))}
        </select>
        {errors.matter && (
          <p id="matter-error" className="mt-1.5 text-xs text-red-300">
            {errors.matter}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="details" className="mb-2 block text-xs font-medium uppercase tracking-wider text-offwhite/70">
          Tell us briefly what happened
        </label>
        <textarea
          id="details"
          rows={4}
          value={values.details}
          onChange={handleChange("details")}
          className={`${inputClasses} border-offwhite/20 resize-none`}
        />
      </div>

      <div className="sm:col-span-2 mt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-sm border border-gold bg-gold px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold-light disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Request a Consultation"}
        </button>
        <p className="mt-4 flex items-center gap-2 text-xs text-offwhite/55">
          <Lock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          Your information will be treated confidentially.
        </p>
      </div>
    </form>
  );
}
