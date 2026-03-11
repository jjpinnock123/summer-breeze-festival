import { site } from "@/lib/siteData";

function TicketCard({ name, desc, bullets }: { name: string; desc: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="text-xl font-semibold text-white">{name}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Tickets</p>
          <h1 className="mt-2 text-4xl font-semibold text-white">Ticket releases via {site.ticketProvider}</h1>
          <p className="mt-4 text-white/70">
            The site is set up for phased ticket releases to help build momentum and cash flow. Add your live Skiddle link in <span className="font-mono text-white">lib/siteData.ts</span> when tickets are ready to go on sale.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {site.tickets.map((ticket) => (
            <TicketCard key={ticket.name} {...ticket} />
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">Ticketing strategy</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• Early-bird release to reward first supporters.</li>
                <li>• Standard release as the main on-sale phase.</li>
                <li>• VIP tier for premium facilities and upgraded experience.</li>
                <li>• Artist reveals and marketing phases can support each ticket wave.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-lg font-semibold text-white">Ready to connect Skiddle?</div>
              <p className="mt-3 text-sm text-white/70">
                Replace the placeholder <span className="font-mono text-white">ticketUrl: "#"</span> with your live Skiddle link and every ticket button on the site will update automatically.
              </p>
              <a
                href={site.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
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
