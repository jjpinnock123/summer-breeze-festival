import { site } from "@/lib/siteData";

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function InfoPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Festival Info</p>
          <h1 className="mt-2 text-4xl font-semibold text-white">Venue, delivery and experience</h1>
          <p className="mt-4 text-white/70">
            Summer Breeze is being developed as a safe, professionally managed festival experience at {site.venueAddress}.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <InfoCard title="Why ACCU Stadium" items={site.whyAccu} />
          <InfoCard title="Operations & Delivery" items={site.operations} />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Travel & access</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Central Yorkshire location with strong regional access.</li>
              <li>• Public transport, local taxi and parking information can be added once the final event plan is confirmed.</li>
              <li>• Accessibility, welfare and entry guidance should be published here closer to launch.</li>
              <li>• This page is already structured so you can add maps, travel routes and FAQs later.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">FAQ</h2>
            <div className="mt-4 space-y-3">
              {site.faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="font-semibold text-white">{faq.q}</div>
                  <div className="mt-2 text-sm text-white/70">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
