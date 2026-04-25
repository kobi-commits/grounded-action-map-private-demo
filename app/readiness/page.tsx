const sections = [
  "source readiness",
  "trust readiness",
  "safeguarding readiness",
  "learning readiness",
  "simulation readiness",
  "peacebuilding readiness",
  "foresight readiness",
  "regional context readiness",
  "deployment readiness",
  "public communication readiness"
];

export default function ReadinessPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Public Beta Readiness</h1>
        <p className="mt-2 text-lg text-slate-700">What must be true before this prototype becomes public-facing.</p>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        {sections.map((section, index) => (
          <article key={section} className="panel p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-lg font-semibold capitalize text-ink">{section}</h2>
              <span className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-semibold text-slate-700">
                {index === 8 ? "Prototype ready" : "Needs review"}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">Owner placeholder:</span> Advisor or product lead to be assigned.</p>
            <p className="mt-2 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">Note:</span> Review criteria must be documented before public beta.</p>
            <p className="mt-2 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">Risk if ignored:</span> Credibility, safety, trust, or public communication harm.</p>
          </article>
        ))}
      </section>
    </div>
  );
}
