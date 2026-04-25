const partnerGroups = [
  ["Humanitarian advisors", ["source review", "sector methodology", "action pathway safety", "humanitarian principles review"]],
  ["Gaza / oPt contextual advisors", ["language review", "local validation", "sensitivity and accuracy", "source prioritization"]],
  ["Trust and compliance advisors", ["transparency passport protocol", "sanctions screening process", "donation-routing policy", "anti-diversion safeguards"]],
  ["Safeguarding advisors", ["child protection", "youth pathways", "cross-community learning safeguards", "direct-contact restrictions"]],
  ["Peacebuilding experts", ["conflict transformation", "reconciliation", "trauma-informed practice", "social cohesion", "dialogue and mediation frameworks"]],
  ["Learning design experts", ["pathway design", "simulation design", "competency mapping", "workshop design", "assessment without certification"]],
  ["Universities and labs", ["responsible technology", "data visualization", "public data tools", "source ingestion", "campus action labs", "learning cohorts"]],
  ["Funders", ["advisory review", "technical build", "public beta", "partner pilots", "learning content", "video/podcast/public education"]]
];

const entryPoints = [
  "review the prototype",
  "join advisor review",
  "sponsor a build sprint",
  "host a workshop",
  "build a safe technical module",
  "help validate sources",
  "support learning pathways",
  "support public education",
  "support trust evidence research",
  "support safeguarding review"
];

const safetyRules = [
  "no direct beneficiary matching",
  "no direct unsupervised contact with minors",
  "no sensitive data collection",
  "no unreviewed public recommendations",
  "no donation routing without legal/compliance review",
  "no field-facing programs without vetted local/institutional partners",
  "no public claims without source review"
];

export default function PartnerKitPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Partner Kit</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">
          For universities, labs, funders, advisors, and civic partners.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-700">
          Grounded Action Map is a prototype for a humanitarian foresight, trust evidence, learning, simulation,
          peacebuilding, and responsible action platform.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {partnerGroups.map(([title, items]) => (
          <article key={title as string} className="panel p-5">
            <h2 className="text-lg font-semibold text-ink">{title as string}</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {(items as string[]).map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Partner Entry Points</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {entryPoints.map((item) => (
              <span key={item} className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-semibold text-slate-700">{item}</span>
            ))}
          </div>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Partner Safety Rules</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            {safetyRules.map((item) => <li key={item}>- {item}</li>)}
          </ul>
        </article>
      </section>

      <section className="panel p-5">
        <h2 className="text-xl font-semibold text-ink">Contact Placeholder</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Contact / intake form coming soon. For now, use direct outreach with trusted partners only.
        </p>
        <a href="mailto:partners@example.org" className="mt-4 inline-flex rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
          Partner outreach placeholder
        </a>
      </section>
    </div>
  );
}
