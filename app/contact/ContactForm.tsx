"use client";

import { FormEvent } from "react";

const WHATSAPP_NUMBER = "919136645289";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const details = [
      ["Name", formData.get("name")],
      ["Phone", formData.get("phone")],
      ["Company / Society", formData.get("organization")],
      ["Email", formData.get("email")],
      ["Location", formData.get("location")],
      ["Property Type", formData.get("propertyType")],
      ["Service Required", formData.get("service")],
      ["Message", formData.get("message")],
    ]
      .filter(([, value]) => typeof value === "string" && value.trim())
      .map(([label, value]) => `*${label}:* ${value}`)
      .join("\n");

    const message = `Hello SAFE Guard FORCE, I would like to request a consultation.\n\n${details}`;
    window.location.assign(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`);
  };

  return (
    <form className="p-8 space-y-5" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="text-[#0A1931] text-xs tracking-[0.12em] uppercase font-bold">Full Name *</label>
          <input id="name" name="name" required placeholder="Your name" autoComplete="name" className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A253] focus:ring-1 focus:ring-[#C5A253] transition" />
        </div>
        <div>
          <label htmlFor="phone" className="text-[#0A1931] text-xs tracking-[0.12em] uppercase font-bold">Phone Number *</label>
          <input id="phone" name="phone" required type="tel" placeholder="91366 45289" autoComplete="tel" className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A253] transition" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organization" className="text-[#0A1931] text-xs tracking-[0.12em] uppercase font-bold">Company / Society Name</label>
          <input id="organization" name="organization" placeholder="e.g. Green Valley CHS / Acme Corp" autoComplete="organization" className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A253] transition" />
        </div>
        <div>
          <label htmlFor="email" className="text-[#0A1931] text-xs tracking-[0.12em] uppercase font-bold">Email</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A253] transition" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="location" className="text-[#0A1931] text-xs tracking-[0.12em] uppercase font-bold">Location</label>
          <input id="location" name="location" placeholder="e.g. Ghatkopar, Powai, Andheri" autoComplete="address-level2" className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A253] transition" />
        </div>
        <div>
          <label htmlFor="propertyType" className="text-[#0A1931] text-xs tracking-[0.12em] uppercase font-bold">Property Type</label>
          <select id="propertyType" name="propertyType" defaultValue="" className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C5A253]">
            <option value="">Select property type</option>
            <option>Residential Society</option><option>Corporate Office</option><option>Commercial Complex / Mall</option><option>Hospital / Clinic</option><option>Hotel / Restaurant</option><option>School / Institution</option><option>Factory / Warehouse</option><option>Construction Site</option><option>Event / Venue</option><option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-[#0A1931] text-xs tracking-[0.12em] uppercase font-bold">Service Required *</label>
        <select id="service" name="service" required defaultValue="" className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C5A253]">
          <option value="">Select a service</option>
          <option>Security Services</option><option>Facility Management</option><option>Housekeeping</option><option>Gardening & Landscaping</option><option>Fire & Safety</option><option>Dog Squad</option><option>Bouncer / Event Security</option><option>Technical Maintenance</option><option>Pest Control</option><option>Reception & Helpdesk Staffing</option><option>Detective & Investigation (Confidential)</option><option>STP Operation & Maintenance</option><option>Multiple / Integrated Services</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-[#0A1931] text-xs tracking-[0.12em] uppercase font-bold">Message</label>
        <textarea id="message" name="message" rows={4} placeholder="Describe your premises, headcount, shift timings and any specific requirements..." className="mt-2 w-full border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A253] transition" />
      </div>

      <button type="submit" className="w-full bg-[#C5A253] hover:bg-[#B8941F] text-[#0A1931] py-4 text-xs tracking-[0.18em] uppercase font-black transition">Send Enquiry on WhatsApp →</button>
      <p className="text-slate-400 text-xs leading-relaxed text-center">By submitting, you agree to our Privacy Policy. Your enquiry details will open in WhatsApp for sending.</p>
      <div className="flex gap-3 pt-2">
        <a href="tel:9136645289" className="flex-1 border border-slate-200 py-3 text-center text-xs tracking-[0.14em] uppercase font-bold text-[#0A1931] hover:bg-slate-50">Call 9136645289</a>
        <a href="https://wa.me/919136645289?text=Hello%20SAFE%20Guard%20FORCE%2C%20I%20would%20like%20to%20discuss%20your%20services." target="_blank" rel="noreferrer" className="flex-1 border border-slate-200 py-3 text-center text-xs tracking-[0.14em] uppercase font-bold text-[#0A1931] hover:bg-slate-50">WhatsApp Us</a>
      </div>
    </form>
  );
}
