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
              <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-white/15 bg-white/5">
                <Image src={site.logoImage} alt="Summer Breeze logo" fill className="object-contain p-2" />
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
