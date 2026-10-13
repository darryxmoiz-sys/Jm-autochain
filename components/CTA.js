import { PHONE_DISPLAY, TEL, WA } from '@/lib/data';
export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-navy px-5 py-24 text-center text-white md:py-28">
      <img src="/cta-hands.jpg" alt="" loading="lazy" className="cta-img absolute inset-0 -z-10 h-full w-full object-cover object-[center_45%]" />
      <div className="cta-shade absolute inset-0 -z-10" />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="h text-3xl md:text-4xl">Need a mechanic? <span className="text-ice">We come to you.</span></h2>
        <p className="mt-3 text-white/80">Call or message to book. Open 9am to 5pm, Monday to Friday.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={TEL} className="rounded-sm bg-ice px-7 py-4 font-semibold text-navy transition hover:bg-ice2">Call {PHONE_DISPLAY}</a>
          <a href={WA} className="rounded-sm border border-white/40 px-7 py-4 font-semibold transition hover:border-ice hover:text-ice">WhatsApp us</a>
        </div>
      </div>
    </section>
  );
}
