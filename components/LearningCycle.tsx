const cycle = ["See", "Understand", "Practice", "Reflect", "Act", "Improve"];

export function LearningCycle() {
  return (
    <section className="panel p-5">
      <h2 className="section-title">Learning Cycle</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
        {cycle.map((item, index) => (
          <div key={item} className="rounded-md border border-line bg-slatepanel p-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step {index + 1}</span>
            <p className="mt-2 text-base font-semibold text-ink">{item}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-700">
        Learning here is not passive. Users see a need, understand the system, practice through scenarios, build an
        artifact, and choose a responsible next step.
      </p>
    </section>
  );
}
