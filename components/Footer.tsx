import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/35 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 text-sm text-white/65 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/8 shadow-[0_14px_34px_rgba(0,0,0,0.24)] ring-1 ring-yellow-300/10 sm:h-28 sm:w-28">
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-yellow-300/10" />
                <Image src={site.logoImage} alt="Summer Breeze logo" fill className="object-contain p-2.5" />
              </div>
              <Image src="/images/accu-badge.svg" alt="ACCU Stadium badge" width={180} height={62} className="h-auto w-[160px]" />
            </div>
            <p className="mt-4 max-w-md">{site.intro}</p>
          </div>
          <div>
            <div className="font-semibold text-white">Quick Links</div>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/tickets" className="hover:text-white">Tickets</Link>
              <Link href="/lineup" className="hover:text-white">Lineup</Link>
              <Link href="/info" className="hover:text-white">Festival Info</Link>
              <Link href="/partners" className="hover:text-white">Partners</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white">Festival Details</div>
            <div className="mt-3 space-y-2">
              <p className="font-semibold text-yellow-300">{site.date}</p>
              <p>{site.location}</p>
              <p>Tickets via {site.ticketProvider}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          © {new Date().getFullYear()} {site.name}
        </div>
      </div>
    </footer>
  );
}
