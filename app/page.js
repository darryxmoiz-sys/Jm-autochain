import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Sec, { Card } from '@/components/Sec';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import { PHONE_DISPLAY, TEL, services, whyUs, jobs, q2 } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy md:flex md:min-h-[640px] md:items-center md:px-5 md:py-28">
        <picture className="hero-img relative block h-[250px] w-full md:absolute md:inset-y-0 md:right-0 md:-z-10 md:h-auto md:w-[72%]">
          <source media="(min-width: 768px)" srcSet="/hero.jpg" />
          <img src="/hero-mobile.jpg" alt="" className="h-full w-full object-cover object-center" />
        </picture>
        <div className="hero-shade absolute inset-0 -z-10 hidden md:block" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-2 md:p-0">
          <div className="max-w-lg">
            <Reveal delay={0.1}><p className="mb-3 font-semibold text-ice">Mobile mechanic &middot; Newtownabbey &amp; Belfast</p></Reveal>
            <Reveal delay={0.25}><h1 className="h text-4xl sm:text-5xl md:text-[3.2rem]">The garage <span className="text-ice">that comes to you.</span></h1></Reveal>
            <Reveal delay={0.4}><p className="mt-5 max-w-md text-lg text-white/80">Servicing, brakes, suspension, diagnostics and timing belts, done at your door by a qualified and insured technician.</p></Reveal>
            <Reveal delay={0.55} className="mt-8 flex flex-wrap gap-3">
              <a href={TEL} className="rounded-sm bg-ice px-7 py-4 font-semibold text-navy transition hover:bg-ice2">Call {PHONE_DISPLAY}</a>
              <Link href="/jobs" className="rounded-sm border border-white/30 px-7 py-4 transition hover:border-ice hover:text-ice">See recent work</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ice text-navy">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-5 text-center text-sm font-semibold md:grid-cols-4 md:text-base">
          {['Mobile mechanic', 'Qualified & insured', 'Mon to Fri, 9am to 5pm', 'Newtownabbey & Belfast'].map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      <Sec title="What we do" intro="Everyday servicing to proper fault finding, all at your location.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([t, d]) => <Card key={t}><h3 className="h text-lg">{t}</h3><p className="mt-2 text-sm text-white/70">{d}</p></Card>)}
        </div>
        <Link href="/services" className="mt-8 inline-block font-semibold text-ice hover:underline">All services</Link>
      </Sec>

      <Sec tone="light" title="Why JM Autochain"><WhyUs items={whyUs} keys={['home', 'shield', 'star', 'calendar']} light /></Sec>

      <Sec title="Recent work" intro="Real jobs from the last few weeks.">
        <div className="grid gap-5 md:grid-cols-3">
          {jobs.slice(0, 3).map(([t, d]) => <Card key={t}><h3 className="h text-lg text-ice">{t}</h3><p className="mt-2 text-sm text-white/70">{d}</p></Card>)}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {q2.slice(0, 4).map(([src, alt]) => <img key={src} src={src} alt={alt} loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover" />)}
        </div>
        <Link href="/jobs" className="mt-8 inline-block font-semibold text-ice hover:underline">See more jobs</Link>
      </Sec>
      <CTA />
    </>
  );
}
