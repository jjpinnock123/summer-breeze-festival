import PageHero from "@/components/PageHero";
import { site } from "@/lib/siteData";

export default function PartnersPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageHero
          kicker="Partners & Investment"
          title="Build with Summer Breeze"
          text="The festival is designed to create visitor economy impact and strong social value through jobs, skills and community collaboration."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {site.partnerTiers.map((tier) => (
            <div key={tier.name} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xl font-semibold text-white">{tier.name}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {tier.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Social value</h2>
          <ul className="mt-4 grid gap-2 text-sm text-white/75 md:grid-cols-2">
            {site.impact.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
