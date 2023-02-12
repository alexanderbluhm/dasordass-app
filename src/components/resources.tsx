import Link from "next/link";
import React from "react";

const links = [
  {
    href: "https://www.scoyo.de/magazin/lernen/lerntipps-lernmotivation/unterschied-das-und-dass-uebung/#:~:text=Zusammenfassung%20%E2%80%93%20Unterschied%20zwischen%20%E2%80%9Cdass%E2%80%9D%20und%20%E2%80%9Cdas%E2%80%9D%3A,-Ist%20%E2%80%9Cdas%E2%80%9D%20ein&text=In%20jedem%20Fall%20bezieht%20sich,durch%20kein%20anderes%20Wort%20ersetzen.",
    label: 'Scoyo Artikel über "das" und "dass"',
  },
  {
    href: "https://www.youtube.com/watch?v=7hXNs5sYnT8",
    label: 'Video über "das" und "dass"',
  },
];

export const Resources = () => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} rel="noopener noreferrer" target="_blank" className="text-tiny focus:outline-none focus:ring-2 rounded p-1 -m-1 text-blue-500 hover:text-blue-600 transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
