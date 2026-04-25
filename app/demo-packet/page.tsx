import Link from "next/link";
import { TextExportButtons } from "@/components/TextExportButtons";

const packet = `# Grounded Action Map: Gaza V1 - Private Demo Packet

## One-Line Summary
Grounded Action Map helps people move from concern to responsible action by connecting humanitarian reporting, trust evidence, learning pathways, simulation, peacebuilding lenses, and future capacity.

## Private Launch Note
This is Prototype V1. It shows the system. It is not yet a public humanitarian coordination tool. Human review and advisory validation are required before public beta.

## Recommended Demo Flow
Start Here -> Living Map -> Current Priorities -> Action -> Trust -> Sources -> Learn -> Simulation -> Peacebuilding -> Future Capacity -> Briefing.

## Key Pages
- /
- /start
- /map
- /launch
- /demo/live
- /executive
- /sources
- /methodology
- /readiness
- /advisor-review

## Safety Caveats
- No donation processing.
- No organization ranking.
- No direct beneficiary matching.
- No direct contact with minors or vulnerable people.
- Live reports are unreviewed.
- Scenarios are not predictions.
- Capacity needs are hypotheses requiring local validation.

## Feedback Questions
- Does the platform feel credible?
- What safety risk should be addressed first?
- What source category is missing?
- What should be removed before wider sharing?
- Which advisors should review this next?

## Advisor Review Tracks
Humanitarian, Gaza/oPt context, trust/compliance, safeguarding, peacebuilding, learning design, simulation, foresight, technology/data ethics, and public communication.

## Next Steps
Deploy privately, gather advisor feedback, revise methodology and content, then prepare public beta only after review.`;

const keyPages = [
  ["/start", "Start Here"],
  ["/map", "Living Map"],
  ["/launch", "Private Launch"],
  ["/demo/live", "Live Demo Flow"],
  ["/executive", "Executive One-Pager"],
  ["/advisor-review", "Advisor Review Room"],
  ["/readiness", "Public Beta Readiness"]
];

export default function DemoPacketPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Private Demo Packet</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">
          Everything needed to share the prototype with trusted reviewers.
        </p>
        <div className="mt-5">
          <TextExportButtons
            text={packet}
            filename="grounded-action-map-private-demo-packet.md"
            copyLabel="Copy demo packet"
            downloadLabel="Download demo packet as Markdown"
          />
        </div>
      </section>
      <section className="panel p-5">
        <h2 className="text-xl font-semibold text-ink">Private Launch Note</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          This is Prototype V1. It shows the system. It is not yet a public humanitarian coordination tool. Human review
          and advisory validation are required before public beta.
        </p>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Recommended Demo Flow</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Start Here -&gt; Living Map -&gt; Current Priorities -&gt; Action -&gt; Trust -&gt; Sources -&gt; Learn -&gt;
            Simulation -&gt; Peacebuilding -&gt; Future Capacity -&gt; Briefing.
          </p>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Key Pages</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {keyPages.map(([href, label]) => (
              <Link key={href} href={href} className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-semibold text-signal">
                {label}
              </Link>
            ))}
          </div>
        </article>
      </section>
      <pre className="panel overflow-x-auto whitespace-pre-wrap p-5 text-sm leading-6 text-slate-700">{packet}</pre>
    </div>
  );
}
