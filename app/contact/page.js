import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, TEL, WA, EMAIL, HOURS, AREA } from '@/lib/data';
export const metadata = { title: 'Contact', description: 'Call, WhatsApp or email JM Autochain to book a mobile mechanic in Newtownabbey or Belfast.' };
export default function Contact() {
  return (
    <>
      <PageHead title="Book your appointment" text={`Call or message to book. Open ${HOURS}.`} />
      <Sec>
        <a href={TEL} className="h block text-4xl text-ice transition hover:text-white md:text-6xl">{PHONE_DISPLAY}</a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={TEL} className="rounded-sm bg-ice px-6 py-3 font-semibold text-navy transition hover:bg-ice2">Call now</a>
          <a href={WA} className="rounded-sm border border-white/30 px-6 py-3 font-semibold transition hover:border-ice hover:text-ice">WhatsApp</a>
        </div>
      </Sec>
      <Sec tone="light" title="Tell us about your car"><ContactForm light /></Sec>
      <Sec title="Other details">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="h text-lg">Email</h3><a href={`mailto:${EMAIL}`} className="mt-2 block break-all text-white/70 hover:text-ice">{EMAIL}</a></Card>
          <Card><h3 className="h text-lg">Hours</h3><p className="mt-2 text-white/70">{HOURS}</p></Card>
          <Card><h3 className="h text-lg">Covering</h3><p className="mt-2 text-white/70">{AREA}</p></Card>
        </div>
      </Sec>
    </>
  );
}
