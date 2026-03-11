import { site } from "@/lib/siteData";

export default function LineupPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Lineup</p>
          <h1 className="mt-2 text-4xl font-semibold text-white">Potential artist direction</h1>
          <p className="mt-4 text-white/70">
            The proposal balances mainstream appeal, heritage reggae, lovers rock and contemporary sounds, alongside local and regional talent.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {site.lineupGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {group.artists.map((artist) => (
                  <li key={artist}>• {artist}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Programming approach</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-white/70">
              <div className="font-semibold text-white">Main Stage</div>
              <p className="mt-2">Headline artists, heritage reggae icons and premium live performances.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-white/70">
              <div className="font-semibold text-white">DJ Arena / Soundsystem</div>
              <p className="mt-2">Selectors, dancehall sessions, lovers rock, dub and crowd energy throughout the day.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
