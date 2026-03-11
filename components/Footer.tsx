import Link from "next/link";
import { site } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 text-sm text-white/60 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold text-white">{site.name}</div>
            <p className="mt-2 max-w-sm">{site.intro}</p>
          </div>
          <div>
            <div className="font-semibold text-white">Quick Links</div>
            <div className="mt-2 flex flex-col gap-2">
              <Link href="/tickets" className="hover:text-white">Tickets</Link>
              <Link href="/lineup" className="hover:text-white">Lineup</Link>
              <Link href="/info" className="hover:text-white">Festival Info</Link>
              <Link href="/partners" className="hover:text-white">Partners</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white">Festival Details</div>
            <div className="mt-2 space-y-2">
              <p>{site.date}</p>
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
