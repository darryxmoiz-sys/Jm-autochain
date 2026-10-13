import './globals.css';
import Link from 'next/link';
import { Rajdhani, Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Nav from '@/components/Nav';
import FloatingButtons from '@/components/FloatingButtons';
import { PHONE_DISPLAY, TEL, EMAIL, HOURS } from '@/lib/data';

const display = Rajdhani({ subsets: ['latin'], weight: ['700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body' });

export const metadata = {
  title: { default: 'JM Autochain | Mobile Mechanic, Newtownabbey & Belfast', template: '%s | JM Autochain' },
  description: 'Qualified and insured mobile mechanic covering Newtownabbey and Belfast. Servicing, repairs, brakes, suspension, diagnostics and timing belts at your door.',
};
const schema = { '@context': 'https://schema.org', '@type': 'AutoRepair', name: 'JM Autochain', telephone: '+447449916730', email: 'jmautochain@gmail.com', areaServed: ['Newtownabbey', 'Belfast', 'Greenisland'], openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' } };

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SmoothScroll /><Preloader /><Nav />
        <main className="overflow-x-clip">{children}</main>
        <footer className="bg-deep px-5 py-12 text-sm text-white/50">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div className="flex items-start gap-3"><img src="/logo-badge.png" alt="" className="h-12 w-12 rounded-full" /><div><p className="h text-lg text-white">JM <span className="text-ice">Autochain</span></p><p className="mt-1">Mobile mechanic, Newtownabbey &amp; Belfast.</p></div></div>
            <div className="space-y-1"><Link href="/services" className="block hover:text-ice">Services</Link><Link href="/jobs" className="block hover:text-ice">Recent work</Link><Link href="/contact" className="block hover:text-ice">Contact</Link></div>
            <div className="space-y-1"><a href={TEL} className="block hover:text-ice">{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`} className="block break-all hover:text-ice">{EMAIL}</a><p>{HOURS}</p></div>
          </div>
        </footer>
        <FloatingButtons />
      </body>
    </html>
  );
}
