const checklistGroups = [
  ["Before sharing privately", ["build passes", "homepage works", "Start Here works", "Living Map works", "demo works", "briefing works", "executive one-pager works", "sources live feed works or falls back", "methodology visible", "safety labels visible", "prototype banner visible"]],
  ["Before sharing with funders", ["executive page reviewed", "briefing reviewed", "readiness page visible", "advisor review page visible", "no unsupported claims", "no donation routing", "build roadmap visible", "partner kit visible"]],
  ["Before sharing with universities", ["campus kit visible", "simulation lab visible", "learning pathways visible", "safeguarding visible", "no direct contact with minors", "no unreviewed fundraising", "campus workshop flow visible"]],
  ["Before sharing with humanitarian advisors", ["source library visible", "live feed labeled unreviewed", "methodology visible", "sector caveats visible", "claim review workflow described", "action pathway caveats visible"]],
  ["Before public beta", ["advisory review complete", "claims reviewed", "organization profiles reviewed", "source policy reviewed", "safeguarding policy reviewed", "legal/compliance reviewed", "feedback mechanism ready", "governance model approved", "local validation process defined"]]
];

function statusFor(group: string, item: string) {
  if (group === "Before sharing privately" && ["build passes", "homepage works", "Start Here works", "Living Map works", "methodology visible", "safety labels visible", "prototype banner visible"].includes(item)) {
    return "Prototype ready";
  }
  return "Needs review";
}

export default function LaunchChecklistPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Launch Checklist</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">What to test before sharing the link.</p>
      </section>
      <section className="grid gap-5">
        {checklistGroups.map(([title, items]) => (
          <article key={title as string} className="panel p-5">
            <h2 className="text-xl font-semibold text-ink">{title as string}</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {(items as string[]).map((item) => (
                <div key={item} className="rounded-md border border-line bg-slatepanel p-3">
                  <p className="text-sm font-semibold text-ink">{item}</p>
                  <span className="mt-2 inline-flex rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {statusFor(title as string, item)}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
