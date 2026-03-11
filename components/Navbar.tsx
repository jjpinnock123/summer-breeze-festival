"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/siteData";

const links = [
  { label: "Tickets", href: "/tickets" },
  { label: "Lineup", href: "/lineup" },
  { label: "Festival Info", href: "/info" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="h-1 w-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500" />

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/15 bg-white/5">
            <Image src={site.logoImage} alt="Summer Breeze logo" fill className="object-contain p-1" priority />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{site.shortName}</div>
            <div className="text-xs text-white/60">{site.date}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-white/75 transition hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 sm:inline-flex"
          >
            Get Tickets
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-lg">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/90 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
            >
              Get Tickets
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
