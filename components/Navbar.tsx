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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div className="h-1.5 w-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500" />

      <div className="mx-auto flex min-h-[94px] w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:min-h-[108px] sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3 sm:gap-4" onClick={() => setOpen(false)}>
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_14px_34px_rgba(0,0,0,0.28)] ring-1 ring-yellow-300/10 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
            <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-yellow-300/10" />
            <Image src={site.logoImage} alt="Summer Breeze logo" fill className="object-contain p-1.5 sm:p-2" priority />
          </div>

          <div className="min-w-0 leading-tight">
            <div className="mb-1 inline-flex rounded-full border border-yellow-300/20 bg-yellow-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-yellow-200 sm:text-[11px]">
              Festival Brand
            </div>
            <div className="truncate text-lg font-semibold text-white sm:text-2xl lg:text-[1.75rem]">{site.shortName}</div>
            <div className="truncate text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300/90 sm:text-sm">
              {site.date} • {site.location}
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/8 hover:text-yellow-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href={site.ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 px-5 py-3 text-sm font-bold text-black shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Get Tickets
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/92 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            <div className="mb-4 flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-3">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                <Image src={site.logoImage} alt="Summer Breeze logo" fill className="object-contain p-1.5" priority />
              </div>
              <div className="min-w-0">
                <div className="truncate text-base font-semibold text-white">{site.shortName}</div>
                <div className="truncate text-xs uppercase tracking-[0.18em] text-yellow-300/85">{site.date}</div>
              </div>
            </div>

            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-2xl bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 px-4 py-3 text-sm font-bold text-black"
            >
              Get Tickets
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
