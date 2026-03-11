import { site } from "@/lib/siteData";

export default function PartnersPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Partners & Investment</p>
          <h1 className="mt-2 text-4xl font-semibold text-white">Build with Summer Breeze</h1>
          <p className="mt-4 text-white/70">
            The festival is designed to create commercial return, visitor economy impact and strong social value through jobs, skills and community collaboration.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {site.partnerTiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xl font-semibold text-white">{tier.name}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {tier.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white">Commercial case</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Projected surplus: {site.financial.projectedSurplus}</li>
              <li>• Break-even point: {site.financial.breakEven}</li>
              <li>• Estimated profit margin: {site.financial.profitMargin}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white">Social value</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {site.impact.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
