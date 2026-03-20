import PageHero from "@/components/PageHero";
import { site } from "@/lib/siteData";

export default function LineupPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-12xl px-4 sm:px-6 lg:px-8">
        <PageHero
          kicker="Lineup"
          title="Potential artist direction"
          text="The proposal balances mainstream appeal, heritage reggae, lovers rock and contemporary sounds, alongside local and regional talent."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {site.lineupGroups.map((group) => (
            <div key={group.title} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {group.artists.map((artist) => (
                  <li key={artist}>• {artist}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
