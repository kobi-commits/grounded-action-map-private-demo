import Link from "next/link";

const tracks = [
  ["Humanitarian review", "Do sector claims use appropriate sources? Are action pathways bounded by humanitarian principles?", ["/", "/action", "/sources"], "Bad claims or unsafe action framing."],
  ["Gaza / oPt contextual review", "Does the language stay Gaza-centered, accurate, humble, and free from unsupported political claims?", ["/foresight/regional-context", "/methodology"], "Loss of credibility or contextual harm."],
  ["Trust and compliance review", "Are organization profiles, routing policies, evidence labels, and sanctions/compliance caveats appropriate?", ["/trust", "/organizations"], "False confidence, misrouting, or compliance risk."],
  ["Safeguarding review", "Do youth, children, community learning, and partner project flows prevent unsafe contact?", ["/learn", "/learn/collective-learning", "/start"], "Harm to minors or vulnerable people."],
  ["Peacebuilding review", "Are lenses conflict-sensitive, trauma-aware, and non-manipulative?", ["/peacebuilding", "/foresight"], "Polarization, narrative harm, or forced dialogue."],
  ["Learning design review", "Are learning pathways safe, role-based, practice-oriented, and clearly not certification?", ["/learn/pathways", "/learn/capacity-map"], "Misleading users about readiness."],
  ["Simulation review", "Are simulations educational, bounded, and connected to safeguards?", ["/learn/simulation-lab", "/demo/live"], "Users may mistake practice for professional guidance."],
  ["Foresight review", "Are scenarios labeled as assumptions, not predictions, with uncertainty and caveats visible?", ["/foresight/scenarios", "/foresight/future-capacity"], "False certainty or speculative framing."],
  ["Technology/data ethics review", "Are privacy, data minimization, no beneficiary identification, and no operational exposure explicit?", ["/learn/pathways/technology-tools-without-harm", "/deploy"], "Data exposure or harmful tool deployment."],
  ["Public communication review", "Do share assets avoid exaggeration, shame, slogans, unsupported numbers, and missing caveats?", ["/share", "/executive", "/briefing"], "Manipulative or inaccurate public diffusion."]
];

export default function AdvisorReviewPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Advisor Review Room</h1>
        <p className="mt-2 text-lg text-slate-700">What experts should review before public beta.</p>
        <p className="mt-4 text-sm font-semibold text-ink">Advisor review is part of the product, not an afterthought.</p>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        {tracks.map(([title, question, pages, risk]) => (
          <article key={title as string} className="panel p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-ink">{title as string}</h2>
              <span className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-semibold text-slate-700">needs_review</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">Review questions:</span> {question as string}</p>
            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">Risk if ignored:</span> {risk as string}</p>
            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">Next step:</span> Assign advisor, capture findings, and update readiness status.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(pages as string[]).map((page) => <Link key={page} href={page} className="rounded-full border border-line px-2.5 py-1 text-xs font-semibold text-signal">{page}</Link>)}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
