import PageHero from "../components/PageHero";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact Us — SAFE Guard FORCE" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact SAFE Guard FORCE"
        title={`Let's Make Your\nPremises Safer,\nCleaner & Better Managed.`}
        subtitle="Reach our team for a free consultation, site assessment or confidential discussion. Mumbai-based, nationwide capability."
        image="/images/team-inspection.png"
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0A1931] p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#C5A253] flex items-center justify-center text-[#0A1931] font-black text-sm">SG</div>
                <div>
                  <div className="font-black tracking-widest text-sm">SAFE GUARD FORCE</div>
                  <div className="text-[#C5A253] text-[10px] tracking-[0.24em] uppercase font-semibold">Nationwide Security Group</div>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="text-white/40 text-[11px] tracking-[0.18em] uppercase font-bold">Call Us — 24/7</div>
                  <a href="tel:9136645289" className="block text-2xl font-black mt-1 hover:text-[#C5A253] transition">9136645289</a>
                  <div className="flex gap-2 mt-3">
                    <a href="tel:9136645289" className="flex-1 bg-[#C5A253] text-[#0A1931] text-center py-3 text-xs tracking-[0.16em] uppercase font-bold">Call Now</a>
                    <a href="https://wa.me/919136645289?text=Hello%20SAFE%20Guard%20FORCE%2C%20I%20would%20like%20to%20discuss%20your%20services." target="_blank" className="flex-1 border border-white/20 text-center py-3 text-xs tracking-[0.16em] uppercase font-bold hover:bg-white hover:text-[#0A1931] transition">WhatsApp</a>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <div className="text-white/40 text-[11px] tracking-[0.18em] uppercase font-bold">Head Office</div>
                  <p className="text-white/80 text-sm leading-relaxed mt-2">
                    C 517, Kailash Esplanade<br />
                    Opp. Shreyash Cinema, LBS Marg<br />
                    Ghatkopar West, Mumbai — 400086
                  </p>
                  <a href="https://maps.google.com/?q=C+517+Kailash+Esplanade+Ghatkopar+West+Mumbai" target="_blank" className="inline-flex mt-3 bg-white text-[#0A1931] px-4 py-2 text-xs tracking-[0.14em] uppercase font-bold">Get Directions →</a>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <div className="text-white/40 text-[11px] tracking-[0.18em] uppercase font-bold">Assistance Hours</div>
                  <div className="text-white text-sm mt-2 font-semibold">24/7 Professional Assistance</div>
                  <div className="text-white/60 text-xs mt-1">Prompt response for enquiries and operational support.</div>
                </div>
              </div>
            </div>

            {/* Map card */}
            <div className="border border-slate-200 p-6 bg-[#F8FAFC]">
              <div className="text-[#0A1931] font-bold text-sm">Ghatkopar West, Mumbai</div>
              <p className="text-slate-500 text-sm mt-1">Located opposite Shreyash Cinema on LBS Marg — accessible from Ghatkopar Metro and Eastern Express Highway.</p>
              <div className="mt-4 h-48 bg-slate-200 relative overflow-hidden">
                <img src="/images/mumbai-business-district.png" alt="Map" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#0A1931] text-white px-4 py-2 text-xs tracking-widest uppercase font-bold shadow-lg">📍 Kailash Esplanade, LBS Marg</div>
                </div>
              </div>
              <a href="https://maps.google.com/?q=C+517+Kailash+Esplanade+Ghatkopar+West+Mumbai" target="_blank" className="block mt-3 bg-[#0A1931] text-white text-center py-3 text-xs tracking-[0.16em] uppercase font-bold">Open in Google Maps</a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="border border-slate-200 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <div className="bg-[#0A1931] px-8 py-6">
                <h2 className="text-white font-black text-xl tracking-tight">Request a Consultation</h2>
                <p className="text-white/60 text-sm mt-1">Tell us about your premises and service needs — we&apos;ll respond promptly.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
