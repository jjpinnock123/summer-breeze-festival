import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/siteData";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
      {children}
    </span>
  );
}

function MiniCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
      <div className="text-xl font-semibold text-white">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={site.heroImage} alt="Summer Breeze hero" fill priority className="object-cover opacity-30 saturate-125" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.20),transparent_35%),radial-gradient(circle_at_top,rgba(250,204,21,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_35%),linear-gradient(to_right,rgba(0,0,0,0.92),rgba(0,0,0,0.72),rgba(0,0,0,0.82))]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/5 sm:h-24 sm:w-24">
                <Image src={site.logoImage} alt="Summer Breeze logo" fill className="object-contain p-2" priority />
              </div>
              <Image src="/images/accu-badge.svg" alt="ACCU Stadium badge" width={200} height={69} className="h-auto w-[170px] sm:w-[220px]" />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>{site.location}</Pill>
              <Pill>{site.duration}</Pill>
            </div>

            <div className="mt-6 inline-flex rounded-full border border-yellow-300/35 bg-yellow-300/10 px-5 py-2 text-lg font-bold tracking-[0.18em] text-yellow-200 shadow-[0_0_35px_rgba(250,204,21,0.18)] sm:text-2xl">
              {site.date}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>

            <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{site.tagline}</p>
            <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">{site.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 px-5 py-3 text-sm font-bold text-black transition hover:brightness-105"
              >
                Buy Tickets ({site.ticketProvider})
              </a>
              <Link href="/lineup" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore Lineup
              </Link>
              <Link href="/info" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Festival Info
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-4 backdrop-blur sm:p-6">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
              <Image src={site.heroImage} alt="Festival poster" width={1200} height={900} className="h-auto w-full object-cover saturate-125" />
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500" />
            </div>

            <div className="mt-5 rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
              <div className="text-lg font-semibold text-white">What to expect</div>
              <ul className="mt-3 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
                <li>• Headline reggae talent</li>
                <li>• Main stage + secondary stage</li>
                <li>• DJ arena and soundsystem culture</li>
                <li>• Caribbean food and traders</li>
                <li>• Jobs, skills and volunteering pathways</li>
                <li>• Safe, managed event delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            <MiniCard title="Audience" bullets={site.audience} />
            <MiniCard title="Why ACCU Stadium" bullets={site.whyAccu} />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">Start building momentum now</h2>
                <p className="mt-3 max-w-2xl text-white/75">
                  Ticket phases, artist announcements, vendor applications and sponsorship conversations can all be driven from this website as the festival moves toward launch.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/tickets" className="rounded-xl bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 px-5 py-3 text-sm font-bold text-black hover:brightness-105">
                    View Tickets
                  </Link>
                  <Link href="/partners" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                    Partner With Us
                  </Link>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
                <div className="text-lg font-semibold text-white">Frequently Asked</div>
                <div className="mt-4 space-y-3">
                  {site.faqs.slice(0, 3).map((faq) => (
                    <div key={faq.q} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-semibold text-white">{faq.q}</div>
                      <div className="mt-1 text-sm text-white/65">{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
