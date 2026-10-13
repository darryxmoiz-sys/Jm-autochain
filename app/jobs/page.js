import PageHead from '@/components/PageHead';
import ReelEmbed from '@/components/ReelEmbed';
import Sec, { Card } from '@/components/Sec';
import CTA from '@/components/CTA';
import { jobs, reels, q2 } from '@/lib/data';
export const metadata = { title: 'Recent work', description: 'Real jobs by JM Autochain: diagnostics, brakes, timing belts, coolant leaks and more.' };
export default function Jobs() {
  return (
    <>
      <PageHead title="Recent work" text="Real jobs from real customers' cars, done on site." />
      <Sec title="Toyota Land Cruiser diagnostic" intro="Multiple warning lights and a rough running engine. P2009 intake runner control: damaged wiring found and repaired at the intake VSV. P1605 rough idling: mass air flow sensor found damaged and replaced.">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{reels.map((u) => <ReelEmbed key={u} url={u} />)}</div>
      </Sec>
      <Sec tone="light" title="Audi Q2 brakes & spark plugs" intro="Front brake pads and discs replaced along with all four spark plugs. While under the bonnet, leaking EVAP pipes were spotted, so the customer was advised to have them replaced at some stage and a temporary repair was done for now.">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {q2.map(([src, alt]) => <img key={src} src={src} alt={alt} loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover" />)}
        </div>
      </Sec>
      <Sec title="More recent jobs">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map(([t, d]) => <Card key={t}><h3 className="h text-lg text-ice">{t}</h3><p className="mt-2 text-sm text-white/70">{d}</p></Card>)}
        </div>
      </Sec>
      <CTA />
    </>
  );
}
