import PageHero from "@/components/PageHero";
import { site } from "@/lib/siteData";

function TicketCard({ name, desc, bullets }: { name: string; desc: string; bullets: string[] }) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="text-xl font-semibold text-white">{name}</div>
      <p className="mt-2 text-sm text-white/75">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function TicketsPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-12xl px-4 sm:px-6 lg:px-8">
        <PageHero
          kicker="Tickets"
          title={`Tickets via ${site.ticketProvider}`}
          text="Add your live Skiddle link in lib/siteData.ts when tickets are ready to go on sale and all ticket buttons across the site will update automatically."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {site.tickets.map((ticket) => (
            <TicketCard key={ticket.name} {...ticket} />
          ))}
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">Ready to connect Skiddle?</h2>
              <p className="mt-3 text-sm text-white/75">
                Replace the placeholder <span className="font-mono text-white">ticketUrl: \"#\"</span> with your live Skiddle link and every ticket button on the site will update automatically.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-lg font-semibold text-white">Open Ticket Page</div>
              <a
                href={site.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 px-5 py-3 text-sm font-bold text-black hover:brightness-105"
              >
                Open Ticket Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
