"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { useState } from "react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2, "State is required").max(2, "Use 2-letter state code"),
  zip: z.string().min(5, "Zip is required").max(10, "Invalid zip"),
  email: z.email("Valid email is required"),
  phone: z.string().min(7, "Phone number is required"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  serviceType: z.string().optional(),
  hasCentralSystem: z.string().optional(),
  servedBefore: z.string().optional(),
  isHomeowner: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, { error: "You must agree to receive communications" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputBase =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";
const labelBase = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-300";
const errorBase = "mt-1 text-xs text-brand-red";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/q1ub3x2umJ61FLwgleKl/webhook-trigger/fdebe3b3-90b1-43f8-81fb-76dcfc62f559";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "itsnosweat.net contact form",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Webhook returned ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission failed:", err);
      setSubmitError(
        "Something went wrong submitting your request. Please call us directly at (951) 331-3310."
      );
    }
  };

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-[#0F172A]/50 to-[#0F172A]/50 p-8 sm:p-12 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-emerald-500/10 backdrop-blur-md">
        {/* Ambient glow */}
        <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          {/* Luminous checkmark */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_0_30px_rgba(16,185,129,0.4)]">
            <svg className="h-10 w-10 text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Request Received</p>
          <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
            Thanks — we&apos;ve got it from here.
          </h3>
          <p className="mx-auto mt-4 max-w-md text-sm sm:text-base font-light leading-relaxed text-slate-400">
            A representative will reach out to you shortly to confirm your appointment or answer your questions. For immediate assistance, call us directly.
          </p>

          {/* Divider */}
          <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* CTAs */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="tel:+19513313310"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-red-500 to-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call (951) 331-3310
            </a>
            <a
              href="/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all hover:bg-white/[0.08] hover:ring-white/30 hover:-translate-y-0.5 backdrop-blur-md"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelBase}>Name *</label>
          <input id="firstName" type="text" placeholder="First name" className={cn(inputBase, errors.firstName && "border-brand-red")} {...register("firstName")} />
          {errors.firstName && <p className={errorBase}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelBase}>Last Name *</label>
          <input id="lastName" type="text" placeholder="Last name" className={cn(inputBase, errors.lastName && "border-brand-red")} {...register("lastName")} />
          {errors.lastName && <p className={errorBase}>{errors.lastName.message}</p>}
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className={labelBase}>Street Address *</label>
        <input
          id="address"
          type="text"
          placeholder="123 Main St"
          className={cn(inputBase, errors.address && "border-brand-red")}
          {...register("address")}
        />
        {errors.address && <p className={errorBase}>{errors.address.message}</p>}
      </div>

      {/* City / State / Zip */}
      <div className="grid gap-5 sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <label htmlFor="city" className={labelBase}>City *</label>
          <input
            id="city"
            type="text"
            placeholder="Moreno Valley"
            className={cn(inputBase, errors.city && "border-brand-red")}
            {...register("city")}
          />
          {errors.city && <p className={errorBase}>{errors.city.message}</p>}
        </div>
        <div>
          <label htmlFor="state" className={labelBase}>State *</label>
          <input
            id="state"
            type="text"
            placeholder="CA"
            maxLength={2}
            className={cn(inputBase, "uppercase", errors.state && "border-brand-red")}
            {...register("state")}
          />
          {errors.state && <p className={errorBase}>{errors.state.message}</p>}
        </div>
        <div>
          <label htmlFor="zip" className={labelBase}>Zip *</label>
          <input
            id="zip"
            type="text"
            inputMode="numeric"
            placeholder="92553"
            maxLength={10}
            className={cn(inputBase, errors.zip && "border-brand-red")}
            {...register("zip")}
          />
          {errors.zip && <p className={errorBase}>{errors.zip.message}</p>}
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelBase}>Email *</label>
          <input id="email" type="email" placeholder="you@email.com" className={cn(inputBase, errors.email && "border-brand-red")} {...register("email")} />
          {errors.email && <p className={errorBase}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelBase}>Phone Number *</label>
          <input id="phone" type="tel" placeholder="(555) 555-5555" className={cn(inputBase, errors.phone && "border-brand-red")} {...register("phone")} />
          {errors.phone && <p className={errorBase}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* Date + Time */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className={labelBase}>Preferred Date?</label>
          <input id="preferredDate" type="date" className={inputBase} {...register("preferredDate")} />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelBase}>Preferred Time?</label>
          <select id="preferredTime" className={inputBase} {...register("preferredTime")}>
            <option value="">— Please choose an option —</option>
            <option value="08:00-11:00">08:00am–11:00am</option>
            <option value="11:00-13:00">11:00am–1:00pm</option>
            <option value="13:00-15:00">01:00pm–3:00pm</option>
            <option value="15:00-17:00">03:00pm–5:00pm</option>
          </select>
        </div>
      </div>

      {/* Service type */}
      <div>
        <label htmlFor="serviceType" className={labelBase}>Type of Service Needed?</label>
        <select id="serviceType" className={inputBase} {...register("serviceType")}>
          <option value="">— Please choose an option —</option>
          <option value="ac-repair">AC Repair</option>
          <option value="ac-installation">AC Installation</option>
          <option value="furnace-repair">Furnace Repair</option>
          <option value="furnace-installation">Furnace Installation</option>
          <option value="maintenance">HVAC Maintenance / Tune-Up</option>
          <option value="indoor-air-quality">Indoor Air Quality</option>
          <option value="new-system">New System Estimate</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Three selects row */}
      <div className="grid gap-5 sm:grid-cols-[2fr_2fr_1fr]">
        <div>
          <label htmlFor="hasCentralSystem" className={labelBase}>Do You Have a Central System?</label>
          <select id="hasCentralSystem" className={inputBase} {...register("hasCentralSystem")}>
            <option value="">— Choose —</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="servedBefore" className={labelBase}>Have We Served You Before?</label>
          <select id="servedBefore" className={inputBase} {...register("servedBefore")}>
            <option value="">— Choose —</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="isHomeowner" className={labelBase}>Homeowner?</label>
          <select id="isHomeowner" className={inputBase} {...register("isHomeowner")}>
            <option value="">— Choose —</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="renter">Renter</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelBase}>
          What can you tell us about the issue or service you are requesting?
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe the issue or service needed..."
          className={inputBase}
          {...register("message")}
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-blue accent-brand-blue"
          {...register("consent", { setValueAs: (v: boolean) => v === true ? true : undefined })}
        />
        <label htmlFor="consent" className="text-xs leading-relaxed text-slate-400">
          I agree to receive communications including appointment reminders, marketing promotions and special offers from It&apos;s No Sweat Heat &amp; Air via email, mail and / or SMS. View our{" "}
          <a href="/privacy-policy/" className="font-semibold text-brand-blue underline underline-offset-2 decoration-brand-blue/30 hover:decoration-brand-blue transition-colors">Privacy Policy</a>.
        </label>
      </div>
      {errors.consent && <p className={errorBase}>{errors.consent.message}</p>}

      {submitError && (
        <div className="rounded-lg border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-red-light">
          {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-brand-red px-8 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-brand-red-dark hover:shadow-xl disabled:opacity-50 sm:w-auto"
      >
        {isSubmitting ? "Submitting..." : "Yes, I Agree — Submit Request"}
      </button>
    </form>
  );
}
