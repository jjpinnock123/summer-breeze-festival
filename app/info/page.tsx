import PageHero from "@/components/PageHero";
import { site } from "@/lib/siteData";

export default function InfoPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-12xl px-4 sm:px-6 lg:px-8">
        <PageHero
          kicker="Festival Info"
          title="Venue, arrival and experience"
          text={`Summer Breeze is being developed as a safe, professionally managed festival experience at ${site.venueAddress}.`}
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Why ACCU Stadium</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {site.whyAccu.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Travel & access</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Central Yorkshire location with strong regional access.</li>
              {site.travelNotes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-sm font-semibold text-white">Local taxi numbers</div>
              <div className="mt-3 grid gap-2 text-sm text-white/75">
                {site.taxiNumbers.map((taxi) => (
                  <div key={taxi.name} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <span>{taxi.name}</span>
                    <a href={`tel:${taxi.phone.replace(/\s+/g, "")}`} className="font-semibold text-yellow-300 hover:text-yellow-200">
                      {taxi.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-3 backdrop-blur">
          <div className="mb-3 flex items-center justify-between gap-3 px-2 pt-2">
            <div>
              <h2 className="text-xl font-semibold text-white">Map</h2>
              <p className="text-sm text-white/65">{site.venueAddress}</p>
            </div>
            <ImagePlaceholder />
          </div>
          <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
            <iframe
              title="ACCU Stadium map"
              src="https://www.google.com/maps?q=The%20Accu%20Stadium%20Huddersfield&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function ImagePlaceholder() {
  return <div className="rounded-full bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 px-4 py-1 text-xs font-bold text-black">ACCU Stadium</div>;
}
