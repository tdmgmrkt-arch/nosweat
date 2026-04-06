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
const labelBase = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy";
const errorBase = "mt-1 text-xs text-brand-red";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Payload ready for CRM/GHL webhook
    console.log("Form payload:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10">
          <svg className="h-7 w-7 text-brand-green" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-extrabold text-navy">Request Received!</h3>
        <p className="mt-2 text-sm text-slate-600">
          A representative will reach out to you shortly. For immediate assistance, call us directly.
        </p>
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
        <label htmlFor="address" className={labelBase}>Address *</label>
        <input id="address" type="text" placeholder="Street address" className={cn(inputBase, errors.address && "border-brand-red")} {...register("address")} />
        {errors.address && <p className={errorBase}>{errors.address.message}</p>}
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
            <option value="morning">Morning (8AM – 12PM)</option>
            <option value="afternoon">Afternoon (12PM – 4PM)</option>
            <option value="evening">Evening (4PM – 7PM)</option>
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
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="hasCentralSystem" className={labelBase}>Central System?</label>
          <select id="hasCentralSystem" className={inputBase} {...register("hasCentralSystem")}>
            <option value="">— Choose —</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="servedBefore" className={labelBase}>Served Before?</label>
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
        <label htmlFor="consent" className="text-xs leading-relaxed text-slate-600">
          I agree to receive communications including appointment reminders, marketing promotions and special offers from It&apos;s No Sweat Heat &amp; Air via email, mail and / or SMS. View our{" "}
          <a href="/privacy-policy/" className="font-semibold text-brand-blue underline underline-offset-2 decoration-brand-blue/30 hover:decoration-brand-blue transition-colors">Privacy Policy</a>.
        </label>
      </div>
      {errors.consent && <p className={errorBase}>{errors.consent.message}</p>}

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
