const phases = [
  {
    title: "Phase 1: Prototype V1",
    goal: "Show the system safely.",
    deliverables: ["static app", "sample data", "live unreviewed feed", "stakeholder demo", "learning and foresight prototype", "Living Map"],
    risks: "Prototype can be mistaken for a public coordination tool.",
    gate: "Prototype labels, methodology, and noindex policy visible.",
    success: "Trusted reviewers understand the system in one demo."
  },
  {
    title: "Phase 2: Advisory Review",
    goal: "Validate the method and safety boundaries.",
    deliverables: ["humanitarian review", "Gaza/oPt contextual review", "trust/compliance review", "safeguarding review", "peacebuilding review", "learning design review", "technical review"],
    risks: "Unreviewed language creates credibility or safety issues.",
    gate: "Advisor tracks have named reviewers and notes.",
    success: "Reviewers identify what must change before public beta."
  },
  {
    title: "Phase 3: Data and Review Workflow",
    goal: "Move from sample content to reviewed claims.",
    deliverables: ["source ingestion", "claim extraction", "human review panel", "evidence library", "source versioning", "audit trail"],
    risks: "Live data could be misread as verified analysis.",
    gate: "No claim publishes without source and review status.",
    success: "Reviewed sector updates can be traced to sources."
  },
  {
    title: "Phase 4: Transparency Passport Expansion",
    goal: "Strengthen organization evidence without ranking.",
    deliverables: ["organization evidence", "official links", "public financials", "IATI/FTS", "sanctions screening workflow", "safeguarding evidence", "action routing policy"],
    risks: "Users may interpret evidence as endorsement.",
    gate: "Disclaimer and action-routing rules reviewed.",
    success: "Profiles support responsible decisions without rankings."
  },
  {
    title: "Phase 5: Learning and Simulation Expansion",
    goal: "Make learning useful before action.",
    deliverables: ["real learning-resource review", "workshop mode", "campus action lab", "simulation design", "competency passport prototype", "pathway artifact exports"],
    risks: "Learning could be mistaken for certification or professional guidance.",
    gate: "Learning and simulation safety notices reviewed.",
    success: "Users can practice and create safe action artifacts."
  },
  {
    title: "Phase 6: Public Beta",
    goal: "Launch a reviewed Gaza layer.",
    deliverables: ["reviewed Gaza layer", "reviewed action pathways", "reviewed organization profiles", "partner network", "feedback process", "public methodology", "advisory board"],
    risks: "Public misunderstanding or misuse.",
    gate: "Governance and public communication review complete.",
    success: "Public beta is useful, cautious, and accountable."
  },
  {
    title: "Phase 7: Replication",
    goal: "Adapt the method only after validation.",
    deliverables: ["West Bank layer", "regional context layers", "other humanitarian contexts", "crisis template system", "localized learning pathways"],
    risks: "Template spreads faster than validation.",
    gate: "Replication policy and local validation process approved.",
    success: "The method becomes reusable without flattening context."
  }
];

export default function BuildRoadmapPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Build Roadmap</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">From prototype to public beta.</p>
      </section>
      <section className="grid gap-5">
        {phases.map((phase) => (
          <article key={phase.title} className="panel p-5">
            <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <h2 className="text-xl font-semibold text-ink">{phase.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700"><strong className="text-ink">Goal:</strong> {phase.goal}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700"><strong className="text-ink">Key risks:</strong> {phase.risks}</p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Deliverables</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">{phase.deliverables.map((item) => <li key={item}>- {item}</li>)}</ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Review Gate</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{phase.gate}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Success Indicator</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{phase.success}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
