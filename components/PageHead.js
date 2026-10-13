export default function PageHead({ title, text }) {
  return (
    <section className="relative overflow-hidden bg-deep px-5 py-16 md:py-20">
      <div className="relative mx-auto max-w-6xl">
        <h1 className="h text-3xl md:text-5xl"><span className="text-ice">{title}</span></h1>
        <p className="mt-4 max-w-xl text-white/70">{text}</p>
      </div>
    </section>
  );
}
