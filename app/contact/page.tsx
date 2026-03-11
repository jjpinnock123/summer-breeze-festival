"use client";

export default function ContactPage() {
  return (
    <main className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-2 text-white/70">
          Tickets • Vendors • Artists • Sponsors
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! This is a demo form. We can connect it to email next.");
          }}
          className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <input
            required
            placeholder="Your name"
            className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none"
          />
          <select className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none">
            <option>General enquiry</option>
            <option>Tickets</option>
            <option>Artist / DJ</option>
            <option>Vendor / Trader</option>
            <option>Sponsor / Investor</option>
            <option>Media</option>
          </select>
          <textarea
            required
            rows={5}
            placeholder="Your message"
            className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none"
          />
          <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}