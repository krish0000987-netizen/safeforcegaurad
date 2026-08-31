import PageHero from "../components/PageHero";
import Link from "next/link";

export const metadata = { title: "Industries We Serve — SAFE Guard FORCE" };

const items = [
  { title: "Residential Societies", desc: "Security, housekeeping, facility management, gardening, STP and support staff for harmonious living.", img: "/images/service-facility-manager.png", points: ["Gate & visitor control", "Housekeeping & gardening", "Facility & STP ops"] },
  { title: "Corporate Offices", desc: "Reception, security, housekeeping and technical support for productive workplaces.", img: "/images/service-helpdesk.png", points: ["Front-office & helpdesk", "Access & CCTV", "AMC coordination"] },
  { title: "Commercial Complexes", desc: "High-footfall protocols for lobbies, parking and common areas.", img: "/images/service-event-security.png", points: ["Visitor management", "Parking discipline", "Technical upkeep"] },
  { title: "Malls", desc: "Crowd management, asset protection and hygiene at scale.", img: "/images/mumbai-business-district.png", points: ["Crowd & queue", "Lost-and-found liaison", "Emergency drills"] },
  { title: "Hospitals", desc: "Sensitive, hygienic and disciplined operations for healthcare.", img: "/images/service-housekeeping.png", points: ["Infection-control cleaning", "Gate & ward security", "Support staff"] },
  { title: "Hotels", desc: "Guest-facing excellence in security, housekeeping and maintenance.", img: "/images/hero-mumbai-security.png", points: ["Housekeeping", "Luggage & gate", "Technical rooms"] },
  { title: "Schools & Institutions", desc: "Child-safe, vigilant and clean campuses.", img: "/images/team-inspection.png", points: ["ID & visitor checks", "Patrols & CCTV", "Hygiene"] },
  { title: "Factories", desc: "Perimeter, material and workforce security with technical support.", img: "/images/service-technical.png", points: ["Material gate", "Shift supervision", "Safety audits"] },
  { title: "Warehouses", desc: "Inventory protection and dock discipline.", img: "/images/service-stp.png", points: ["Perimeter & CCTV", "Inward/outward logs", "Night patrols"] },
  { title: "Construction Sites", desc: "Overnight material, equipment and labour management.", img: "/images/technical-maintenance.png", points: ["Material watch", "Labour verification", "Equipment logs"] },
  { title: "Events", desc: "Bouncers, crowd control and discreet VIP protection.", img: "/images/fire-event-safety.png", points: ["Entry & stage", "Crowd flow", "Green-room"] },
  { title: "Other Institutions", desc: "Customized integrated solutions for any premises type.", img: "/images/hospital-security.png", points: ["Assessment first", "Custom SOPs", "One partner"] },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={`Solutions Designed\nAround Your Environment.`}
        subtitle="Every premises has distinct risks, footfall and operational rhythms — we tailor manpower, SOPs and supervision accordingly."
        image="/images/mumbai-business-district.png"
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <div key={it.title} className="border border-slate-100 overflow-hidden hover:shadow-xl hover:border-[#C5A253]/20 transition group bg-white">
                <div className="h-48 overflow-hidden relative">
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute bottom-0 left-0 bg-[#0A1931] px-4 py-2">
                    <span className="text-white text-xs font-bold tracking-widest uppercase">{it.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">{it.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {it.points.map((p) => (
                      <li key={p} className="text-xs text-slate-500 flex gap-2"><span className="text-[#C5A253]">•</span>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#0A1931] p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[#C5A253] text-xs tracking-[0.18em] uppercase font-bold">Not sure which package fits?</div>
              <div className="text-white font-bold text-lg mt-1">Tell us your property type — we&apos;ll propose a tailored plan.</div>
            </div>
            <Link href="/contact" className="bg-[#C5A253] text-[#0A1931] px-7 py-3.5 text-xs tracking-[0.16em] uppercase font-bold shrink-0">Request Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
