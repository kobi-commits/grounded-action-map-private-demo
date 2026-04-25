const steps = ["See", "Understand", "Learn", "Practice", "Act", "Long Arc"];

export function JourneyRail() {
  return (
    <section className="rounded-md border border-line bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Core pathway</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-full border border-line bg-slatepanel px-3 py-1">{step}</span>
            {index < steps.length - 1 ? <span className="text-slate-400">-&gt;</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
