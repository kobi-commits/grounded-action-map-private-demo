import Link from "next/link";

const screenshots = [
  ["Homepage hero", "Capture the core promise and primary entry points.", "/"],
  ["Start Here", "Show clear user pathways.", "/start"],
  ["The Living Map", "Show how the whole system connects.", "/map"],
  ["Current Humanitarian Priorities", "Show the six-sector priority view.", "/#sectors"],
  ["Food & Nutrition sector page", "Show sector analysis, sources, caveats, and long-arc capacity.", "/sectors/food-nutrition"],
  ["Action pathway card", "Show responsible action intelligence.", "/action"],
  ["Organization Transparency Passport", "Show evidence without endorsement.", "/organizations/unicef"],
  ["Sources page with live unreviewed feed", "Show live reports as raw inputs.", "/sources"],
  ["Learning Pathway Builder", "Show rule-based learning path generation.", "/learn/pathways"],
  ["Simulation Lab", "Show practice before acting.", "/learn/simulation-lab"],
  ["Peacebuilding Lens", "Show multiple interpretive frameworks.", "/peacebuilding"],
  ["Future Capacity Map", "Show urgent response to generational recovery.", "/foresight"],
  ["Action Ripple Map", "Show one action across time and systems.", "/foresight/action-ripples"],
  ["Coherence System", "Show public ecosystem and partner activation.", "/coherence"],
  ["Strategy Cascade", "Show choices and capabilities.", "/strategy"],
  ["Share Responsibly", "Show diffusion assets.", "/share"],
  ["Stakeholder Briefing", "Show Google Docs-ready export.", "/briefing"],
  ["Methodology page", "Show safety and review rules.", "/methodology"]
];

export default function ScreenshotChecklistPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Screenshot Checklist</h1>
        <p className="mt-2 text-lg text-slate-700">What to capture for a stakeholder demo.</p>
      </section>
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {screenshots.map(([title, body, route]) => (
          <article key={title} className="panel p-5">
            <h2 className="text-lg font-semibold text-ink">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{body}</p>
            <Link href={route} className="mt-4 inline-flex text-sm font-semibold text-signal underline">Open page</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
