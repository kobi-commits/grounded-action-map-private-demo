const advisory = [
  "humanitarian advisory",
  "Gaza / oPt contextual advisory",
  "trust and compliance advisory",
  "safeguarding advisory",
  "peacebuilding advisory",
  "learning design advisory",
  "technology and data ethics advisory",
  "public communication advisory",
  "local validation partners"
];

const labels = ["raw", "needs review", "reviewed", "published", "archived", "do not publish", "blocked"];

const decisionRules = [
  "no source, no claim",
  "no review, no recommendation",
  "no transparency evidence, no donation routing",
  "no safeguards, no youth pathway",
  "no local validation, no community-level claim",
  "no assumptions, no scenario",
  "no official channel, no donation link",
  "no partner review, no field-facing action"
];

const risks = [
  "misinformation",
  "overclaiming",
  "political capture",
  "aid diversion",
  "unsafe youth contact",
  "privacy risks",
  "local legitimacy gaps",
  "false certainty in scenarios",
  "technology misuse",
  "public misunderstanding"
];

const outputs = [
  "source policy",
  "trust evidence protocol",
  "safeguarding policy",
  "anti-diversion policy",
  "editorial policy",
  "public-health disclaimer",
  "local validation process",
  "advisory board charter",
  "versioning process",
  "incident response process"
];

export default function GovernancePage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Governance Model</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">How this prototype should become trustworthy.</p>
      </section>
      <section className="grid gap-5 lg:grid-cols-3">
        {[
          ["Human review workflow", "Source -> Report -> Claim -> Sector update -> Action card -> Review -> Publish"],
          ["Learning and foresight workflow", "Condition -> Capacity hypothesis -> Learning pathway -> Simulation -> Safeguard review -> Publish"],
          ["Organization workflow", "Organization -> Evidence collection -> Transparency Passport -> Compliance review -> Action routing decision -> Publish"]
        ].map(([title, flow]) => (
          <article key={title} className="panel p-5">
            <h2 className="text-lg font-semibold text-ink">{title}</h2>
            <p className="mt-4 rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold leading-6 text-ink">{flow}</p>
          </article>
        ))}
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        {[
          ["Advisory Structure", advisory],
          ["Review Labels", labels],
          ["Decision Rules", decisionRules],
          ["Governance Risks", risks],
          ["Governance Outputs Needed", outputs]
        ].map(([title, items]) => (
          <article key={title as string} className="panel p-5">
            <h2 className="text-lg font-semibold text-ink">{title as string}</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {(items as string[]).map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <section className="panel p-5">
        <h2 className="text-xl font-semibold text-ink">Public Beta Gate</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          The platform should not be public-facing as an action tool until advisory review is complete.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Future analytics may measure page visits, demo flow completion, briefing downloads, learning pathway interest,
          action pathway interest, source feed usage, feedback themes, and partner interest. No analytics should collect
          sensitive personal data. Any analytics should be privacy-preserving and reviewed before public use.
        </p>
      </section>
    </div>
  );
}
