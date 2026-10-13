import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import { services, whyUs, AREA, HOURS } from '@/lib/data';
export const metadata = { title: 'Services', description: 'Mobile servicing, repairs, brakes, suspension, diagnostics and timing belts in Newtownabbey and Belfast.' };
export default function Services() {
  return (
    <>
      <PageHead title="Our services" text={`Mobile mechanic covering ${AREA}. Open ${HOURS}.`} />
      <Sec>
        {services.map(([t, d]) => (
          <div key={t} className="group grid gap-2 border-t border-white/15 py-7 md:grid-cols-2 md:px-4">
            <h2 className="h text-xl transition group-hover:translate-x-2 group-hover:text-ice md:text-3xl">{t}</h2>
            <p className="text-white/70">{d}</p>
          </div>
        ))}
      </Sec>
      <Sec tone="light" title="Why JM Autochain"><WhyUs items={whyUs} keys={['home', 'shield', 'star', 'calendar']} light /></Sec>
      <CTA />
    </>
  );
}
