import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/schema/local-business";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dancingScript = Dancing_Script({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itsnosweat.net"),
  title: {
    default: "It's No Sweat Heat & Air | Moreno Valley HVAC & AC Repair",
    template: "%s | It's No Sweat Heat & Air",
  },
  description:
    "Trusted HVAC experts serving Moreno Valley & the Inland Empire. AC repair, furnace installation, indoor air quality, and maintenance. Same-day service. Call (951) 331-3310.",
  openGraph: {
    siteName: "It's No Sweat Heat & Air",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/nosweatvan.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-foreground">
        <LocalBusinessSchema />
        <OrganizationSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
