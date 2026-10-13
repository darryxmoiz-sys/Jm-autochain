import { Card } from './Sec';

const icons = {
  home: <path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3z" />,
  shield: <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" />,
  star: <path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 7.1L12 17.9 5.8 21.3 7 14.2 2 9.3l7.1-1z" />,
  calendar: <path d="M7 2v3M17 2v3M3 9h18M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />,
};

export default function WhyUs({ items, keys, light = false }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(([t, d], i) => (
        <Card key={t} light={light}>
          <svg viewBox="0 0 24 24" className="h-9 w-9 stroke-ice fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">{icons[keys[i]]}</svg>
          <h3 className={`h mt-4 text-lg ${light ? 'text-navy' : 'text-white'}`}>{t}</h3>
          <p className={`mt-2 text-sm ${light ? 'text-navy/70' : 'text-white/70'}`}>{d}</p>
        </Card>
      ))}
    </div>
  );
}
