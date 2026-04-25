const sections = [
  ["Clarity", "Prototype ready", ["first-time user can understand the app in 5 minutes", "Start Here page works", "Living Map explains the system", "demo flow works"]],
  ["Evidence", "Needs review", ["sources visible", "live reports unreviewed", "methodology visible", "source limitations visible"]],
  ["Safety", "Prototype ready", ["no payments", "no organization rankings", "no direct beneficiary matching", "no direct contact with minors", "no tactical operational data"]],
  ["Learning", "Needs review", ["learning pathways visible", "simulations labeled educational", "no certification claims", "safety notices visible"]],
  ["Foresight", "Needs review", ["scenarios labeled not predictions", "assumptions visible", "capacity needs framed as hypotheses", "deep time labeled reflective"]],
  ["Trust", "Needs review", ["transparency passports visible", "organization disclaimers visible", "no endorsement language", "no safe labels"]],
  ["Deployment", "Prototype ready", ["build passes", "routes load", "mobile works", "live feed falls back safely", "no environment variables required for basic demo"]],
  ["Activation", "Needs review", ["partner kit visible", "campus kit visible", "media kit visible", "feedback page visible", "launch checklist visible"]]
];

export default function QualityScorecardPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Prototype Quality Scorecard</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">A final check before public sharing.</p>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        {sections.map(([title, status, items]) => (
          <article key={title as string} className="panel p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-ink">{title as string}</h2>
              <span className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-semibold text-slate-700">{status as string}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {(items as string[]).map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
