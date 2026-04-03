import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and SMS terms and conditions for It's No Sweat Heat & Air. Learn how we collect, use, and protect your data.",
  openGraph: {
    images: [{ url: "/images/fullservice.webp", width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
        <div className="absolute inset-0">
          <Image src="/images/fullservice.webp" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red drop-shadow-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <span className="text-white">Privacy Policy</span>
            </p>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">Privacy Policy</h1>
            <div className="mt-6 h-1.5 w-16 rounded-full bg-brand-red" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="prose max-w-none">
            <h2>Who We Are</h2>
            <p>
              Our website address is: <a href="https://itsnosweat.net/">https://itsnosweat.net/</a>.
            </p>

            <h2>SMS Terms and Conditions / Privacy Policy</h2>
            <p>
              {companyInfo.name} respects your privacy. By opting into our SMS messaging service, you agree to the following terms regarding how we handle your data:
            </p>

            <h3>Data Collection</h3>
            <p>
              We will collect your name, email address, mailing address, and mobile phone number when you sign up for SMS updates. The information will be collected via the website contact form, email, rental agreement, or third-party reservation systems.
            </p>

            <h3>Data Usage</h3>
            <p>
              We use your data solely for sending messages regarding appointment reminders and customer support.
            </p>

            <h3>Data Security</h3>
            <p>
              We protect your data with secure storage measures to prevent unauthorized access.
            </p>

            <h3>Data Retention</h3>
            <p>
              We retain your information as long as you are subscribed to our SMS service. You may request deletion at any time.
            </p>

            <h3>Message &amp; Data Rates</h3>
            <p>
              <strong>MESSAGE AND DATA RATES MAY APPLY.</strong> Your mobile carrier may charge fees for sending or receiving text messages, especially if you do not have an unlimited texting or data plan.
            </p>
            <p>
              Messages are recurring, and message frequency varies.
            </p>

            <h3>Help &amp; Support</h3>
            <p>
              Contact {companyInfo.name} at <a href={companyInfo.phoneHref}>{companyInfo.phone}</a> or <a href={companyInfo.emailHref}>{companyInfo.email}</a> for HELP or to STOP receiving messages.
            </p>
            <p>
              You can send <strong>HELP</strong> for additional assistance, and you will receive a text including our phone number, email, and website. We are here to help you.
            </p>

            <h3>Opt-Out</h3>
            <p>
              You can opt out of the SMS list at any time by texting, emailing, or replying <strong>STOP</strong> or <strong>CANCEL</strong> to <a href={companyInfo.emailHref}>{companyInfo.email}</a> or <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>. After unsubscribing, you will receive a final SMS to confirm you have unsubscribed, and we will remove your number from our list within 24 hours.
            </p>

            <h3>Non-Sharing Clause</h3>
            <p>
              We do not share your data with third parties for marketing purposes. {companyInfo.name} will not sell, rent, or share the collected mobile numbers.
            </p>
            <p>
              All sharing mentioned in this policy excludes mobile opt-in and consent; opt-in information is never shared with anyone for any purpose.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
