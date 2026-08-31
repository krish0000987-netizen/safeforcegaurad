import PageHero from "../components/PageHero";
import Link from "next/link";

export const metadata = { title: "Fire, Safety, Dog Squad & Event Security — SAFE Guard FORCE" };

export default function FireSafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Fire • Safety • Dog Squad • Events"
        title={`Prepared for\nEvery Situation.`}
        subtitle="Specialized safety, canine and event-security capabilities for proactive risk mitigation and large-gathering management."
        image="/images/service-fire-safety.png"
        cta={{ label: "Plan Your Security Coverage", href: "/contact" }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <div className="border border-slate-100 p-8 bg-[#F8FAFC]">
            <div className="text-[#C5A253] text-[11px] tracking-[0.20em] uppercase font-bold">Fire & Safety</div>
            <h2 className="text-[#0A1931] font-black text-xl mt-2">Prevention. Preparedness. Response.</h2>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
              <li className="flex gap-2"><span className="text-[#C5A253]">▸</span> Fire marshals & safety officers</li>
              <li className="flex gap-2"><span className="text-[#C5A253]">▸</span> Fire equipment inspection & readiness</li>
              <li className="flex gap-2"><span className="text-[#C5A253]">▸</span> Evacuation planning & signage review</li>
              <li className="flex gap-2"><span className="text-[#C5A253]">▸</span> Fire drills & staff training</li>
              <li className="flex gap-2"><span className="text-[#C5A253]">▸</span> Safety audits & emergency response</li>
            </ul>
            <img src="/images/service-fire-safety.png" alt="Fire safety" className="w-full h-48 object-cover mt-6" />
          </div>

          <div className="border border-slate-100 p-8 bg-[#070F1F] text-white">
            <div className="text-[#C5A253] text-[11px] tracking-[0.20em] uppercase font-bold">Dog Squad Services</div>
            <h2 className="font-black text-xl mt-2">Trained Canine Security</h2>
            <ul className="mt-5 space-y-2.5 text-sm text-white/70">
              <li className="flex gap-2"><span className="text-[#C5A253]">▸</span> Trained sniffer dogs with certified handlers</li>
              <li className="flex gap-2"><span className="text-[#C5A253]">▸</span> Entrance monitoring & perimeter patrols</li>
              <li className="flex gap-2"><span className="text-[#C5A253]">▸</span> Suspicious-object detection support</li>
              <li className="flex gap-2"><span className="text-[#C5A253]">▸</span> Event and VIP security augmentation</li>
            </ul>
            <img src="/images/canine-handler.png" alt="Canine security handler" className="w-full h-48 object-cover mt-6 opacity-90" />
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-8 mt-8">
          <div className="border border-slate-100 p-8">
            <div className="text-[#C5A253] text-[11px] tracking-[0.20em] uppercase font-bold">Bouncer Services</div>
            <h2 className="text-[#0A1931] font-black text-xl mt-2">Disciplined Crowd & Venue Control</h2>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-slate-600">
              <li>• Crowd control</li>
              <li>• Entry management</li>
              <li>• Venue security</li>
              <li>• VIP protection</li>
              <li>• Queue discipline</li>
              <li>• Conflict de-escalation</li>
            </ul>
            <img src="/images/service-event-security.png" alt="Event security professional" className="w-full h-48 object-cover mt-6" />
          </div>
          <div className="border border-slate-100 p-8 bg-[#F8FAFC]">
            <div className="text-[#C5A253] text-[11px] tracking-[0.20em] uppercase font-bold">Event Security</div>
            <h2 className="text-[#0A1931] font-black text-xl mt-2">Secure, Seamless Events</h2>
            <p className="text-slate-500 text-sm mt-3">Coverage for weddings, corporate events, exhibitions, clubs and private functions — from guest screening to stage and green-room protection.</p>
            <div className="grid grid-cols-3 gap-2 mt-5">
              <img src="/images/guard-visitor-control.png" className="h-28 w-full object-cover" alt="Event entry security" />
              <img src="/images/fire-event-safety.png" className="h-28 w-full object-cover" alt="Safety marshal at event" />
              <img src="/images/service-dog-squad.png" className="h-28 w-full object-cover" alt="Canine security at venue" />
            </div>
            <Link href="/contact" className="inline-flex mt-6 bg-[#0A1931] text-white px-6 py-3 text-xs tracking-[0.16em] uppercase font-bold">Plan Your Security Coverage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
