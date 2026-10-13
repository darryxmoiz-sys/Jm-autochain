export default function Sec({ tone = 'dark', title, intro, id, children }) {
  const light = tone === 'light';
  return (
    <section id={id} className={`${light ? 'bg-chrome text-navy' : 'bg-navy text-white'} relative px-5 py-16 md:py-20`}>
      <div className="relative mx-auto max-w-6xl">
        {title && (
          <div className="mb-10 max-w-2xl">
            <h2 className="h text-2xl md:text-3xl">{light ? title : <span className="text-ice">{title}</span>}</h2>
            {intro && <p className={`mt-3 ${light ? 'text-navy/70' : 'text-white/70'}`}>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Card({ light = false, className = '', children }) {
  return (
    <div className={`rounded-xl p-6 transition hover:-translate-y-1 ${light ? 'bg-white shadow-md' : 'panel'} ${className}`}>
      {children}
    </div>
  );
}

export function Faq({ items, light = false }) {
  return (
    <div className={`max-w-3xl divide-y rounded-xl px-6 ${light ? 'divide-navy/15 bg-white shadow-md' : 'panel divide-white/15'}`}>
      {items.map(([q, a]) => (
        <details key={q} className="group">
          <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold ${light ? 'text-navy' : 'text-white'}`}>{q}<span className="text-xl text-ice transition group-open:rotate-45">+</span></summary>
          <p className={`pb-5 ${light ? 'text-navy/70' : 'text-white/70'}`}>{a}</p>
        </details>
      ))}
    </div>
  );
}
