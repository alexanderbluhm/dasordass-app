import "./globals.css";
import { Inter as createInter } from "@next/font/google";
import clsx from "clsx";
import PlausibleProvider from "next-plausible";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Das oder Dass",
  description: "Korrigiere 'das' und 'dass' in deinen Sätzen",
  keywords: "das, dass, korrektur, satz, KI, machine learning, german, deutsch",
  creator: "Alexander Bluhm",
  openGraph: {
    title: "Das oder Dass" as any, // TODO: Remove this cast once it is fixed in Next.js
    description: "Korrigiere 'das' und 'dass' in deinen Sätzen",
    locale: "de-DE",
    type: "website",
    url: "https://dasoderdass.de",
    images: [
      {
        url: "https://dasoderdass.de/og.png",
        width: 2400,
        height: 1200,
      },
    ],
  },
};

const inter = createInter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={clsx("bg-brand-50 dark:bg-brand-900 antialiased font-sans text-brand-900 dark:text-white", inter.variable)}>
      <head>
        <PlausibleProvider domain="dasoderdass.de" />
      </head>
      <body className="flex flex-col max-w-3xl mx-auto px-5 pt-12 pb-4">{children}</body>
    </html>
  );
}
