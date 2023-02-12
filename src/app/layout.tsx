import "./globals.css";
import { Inter as createInter } from "@next/font/google";
import clsx from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Das oder Dass",
  description: "Korrigiere 'das' und 'dass' in deinen Sätzen",
  keywords: "das, dass, korrektur, satz, KI, machine learning, german, deutsch",
  creator: "Alexander Bluhm",
};

const inter = createInter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={clsx("bg-brand-50 dark:bg-brand-900 antialiased font-sans text-brand-900 dark:text-white", inter.variable)}>
      <body className="max-w-3xl mx-auto px-5 py-12">{children}</body>
    </html>
  );
}
