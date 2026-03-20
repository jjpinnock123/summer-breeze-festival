"use client";

import PageHero from "@/components/PageHero";
import { site } from "@/lib/siteData";

export default function ContactPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <PageHero
          kicker="Contact"
          title="Tickets • Vendors • Artists • Partners"
          text="This page is set up as a polished contact page. The form currently runs as a front-end demo and can later be connected to Formspree, EmailJS or a custom email endpoint."
        />

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">Get in touch</h2>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                <p><span className="font-semibold text-white">Festival:</span> {site.name}</p>
                <p><span className="font-semibold text-white">Date:</span> {site.date}</p>
                <p><span className="font-semibold text-white">Location:</span> {site.location}</p>
                <p><span className="font-semibold text-white">Ticket provider:</span> {site.ticketProvider}</p>
                <p><span className="font-semibold text-white">Email placeholder:</span> {site.contactEmail}</p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — this demo form is ready to connect to email when you are.");
              }}
              className="grid gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Your name" className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none" />
                <input required type="email" placeholder="Your email" className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none" />
              </div>
              <select className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none">
                <option>General enquiry</option>
                <option>Vendor / trader</option>
                <option>Artist / management</option>
                <option>Sponsor / investor</option>
                <option>Media / press</option>
              </select>
              <textarea required rows={6} placeholder="How can we help?" className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none" />
              <button className="rounded-xl bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 px-5 py-3 text-sm font-bold text-black hover:brightness-105">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
