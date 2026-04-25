import Link from "next/link";
import { TraceOnePath } from "@/components/CoherenceComponents";
import { JourneyRail } from "@/components/JourneyRail";
import { TextExportButtons } from "@/components/TextExportButtons";
import { pathTraces } from "@/lib/data";

const steps = [
  ["Homepage", "Show the promise, human line, and primary pathways.", "This is the front door: concern becomes responsible action.", "/"],
  ["Start Here", "Show six simple user choices.", "A first-time user can find themselves quickly.", "/start"],
  ["Living Map", "Show the big picture.", "The system is connected, not a pile of pages.", "/map"],
  ["Trace One Path", "Select Food & Nutrition or Responsible Giving.", "One pathway makes the architecture concrete.", "/map"],
  ["Current Humanitarian Priorities", "Show the six sector cards.", "Needs are organized and sourced.", "/#sectors"],
  ["One sector page", "Open Food & Nutrition.", "Now, next, long arc, sources, caveats, and action are in one view.", "/sectors/food-nutrition"],
  ["Action pathway", "Show one responsible action card.", "The platform points toward safe next steps, not helplessness.", "/action"],
  ["Trust Evidence", "Show evidence language and Transparency Passport concepts.", "The platform does not rank or endorse organizations.", "/trust"],
  ["Live Report Feed", "Show unreviewed ReliefWeb feed or fallback.", "Live inputs do not automatically become published claims.", "/sources#live-report-feed"],
  ["Learning Pathway", "Open the pathway builder.", "Needs connect to competencies and learning outputs.", "/learn/pathways"],
  ["Human Capacity Studio", "Show the practice studio.", "This is where concern becomes capacity: self-awareness, source verification, conflict intelligence, communication, safeguarding, and long-arc practice.", "/learn/human-capacity"],
  ["Simulation Lab", "Open one scenario.", "Users practice before acting.", "/learn/simulation-lab"],
  ["Peacebuilding Lens", "Show lens explorer.", "Humanitarian need also has relational, psychological, and civic dimensions.", "/peacebuilding"],
  ["Future Capacity Map", "Show horizons and scenarios.", "Scenarios are not predictions; capacity needs are hypotheses.", "/foresight"],
  ["Action Ripple Map", "Show one action over time.", "One action can support learning, trust, wellbeing, and long-arc capacity.", "/foresight/action-ripples"],
  ["Coherence System", "Show ecosystem view.", "The app connects to workshops, partners, review, and public education.", "/coherence"],
  ["Briefing export", "Show copy/download briefing.", "Stakeholders can take the story into a meeting.", "/briefing"]
];

const demoScript = `# Grounded Action Map: Gaza V1 — Live Demo Flow

This is a 7-minute walkthrough.

${steps.map((step, index) => `${index + 1}. ${step[0]}: ${step[2]}`).join("\n")}

Safety note: this prototype does not process donations, rank organizations, enable direct beneficiary matching, or use live reports as verified analysis. Scenarios are not predictions. Capacity needs are hypotheses requiring human review and local validation.`;

export default function LiveDemoPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Live Demo Flow</h1>
        <p className="mt-2 text-lg text-slate-700">A 7-minute walkthrough.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <TextExportButtons text={demoScript} filename="grounded-action-map-gaza-v1-live-demo-script.md" copyLabel="Copy demo script" downloadLabel="Download demo script as Markdown" />
          <Link href="/demo/screenshots" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Open screenshot checklist</Link>
          <Link href="/executive" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Open executive one-pager</Link>
        </div>
      </section>
      <JourneyRail />
      <TraceOnePath traces={pathTraces} />
      <section className="grid gap-4 md:grid-cols-2">
        {steps.map(([title, show, why, href], index) => (
          <article key={title} className="panel p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step {index + 1}</p>
            <h2 className="mt-2 text-lg font-semibold text-ink">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">What to show:</span> {show}</p>
            <p className="mt-2 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">What to say:</span> {why}</p>
            <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-signal underline">Open page</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
