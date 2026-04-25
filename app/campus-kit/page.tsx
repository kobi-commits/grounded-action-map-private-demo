const eventFlow = [
  "open Start Here",
  "inspect one humanitarian sector",
  "review one source",
  "choose one responsible action pathway",
  "review trust evidence",
  "build a learning pathway",
  "run one simulation",
  "discuss one peacebuilding lens",
  "map one long-arc contribution"
];

const simulations = [
  "Campus Firestorm",
  "Responsible Giving Decision",
  "Technology Tool Without Harm",
  "WASH Alert",
  "Temporary Learning",
  "Regional Shock and Access Constraint"
];

const safeguards = [
  "no performative debate",
  "no forced dialogue",
  "no direct contact with minors",
  "no unreviewed fundraising",
  "no dehumanizing language",
  "no unsourced claims",
  "no public shaming",
  "no forced disclosure of identity or trauma",
  "no collection of sensitive personal data"
];

const outputs = [
  "one-page briefing",
  "campus presentation",
  "partner intake checklist",
  "donor checklist",
  "responsible action plan",
  "technology risk checklist",
  "dialogue guide",
  "learning circle plan",
  "action ripple map"
];

const facultyUses = [
  "public health class",
  "peace and conflict studies",
  "humanitarian studies",
  "data ethics",
  "Middle East studies",
  "social entrepreneurship",
  "civic leadership",
  "design lab",
  "education in emergencies",
  "technology and society"
];

export default function CampusKitPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Campus Action Kit</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">
          For students, faculty, centers, and campus leaders.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-700">
          Help campus communities move from polarization and helplessness into structured learning, responsible action,
          and civic capacity.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Use the App in a Campus Event</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
            {eventFlow.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Recommended First Workshop</h2>
          <p className="mt-3 text-sm font-semibold text-ink">From Concern to Responsible Action - 90 minutes</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            <li>- 10 min: What is Grounded Action Map?</li>
            <li>- 15 min: Gaza current humanitarian priorities</li>
            <li>- 15 min: Trust evidence and responsible giving</li>
            <li>- 15 min: Learn What Is Needed Now</li>
            <li>- 15 min: Simulation Lab</li>
            <li>- 10 min: Peacebuilding Lens</li>
            <li>- 10 min: Action reflection</li>
          </ul>
        </article>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Campus Simulations", simulations],
          ["Campus Safeguards", safeguards],
          ["Student Outputs", outputs],
          ["Faculty / Center Use Cases", facultyUses]
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
        <h2 className="text-xl font-semibold text-ink">Suggested Campus Rule</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Do not ask students to agree on everything. Ask them to learn what is true, what is uncertain, what is needed,
          what is safe, and what responsible action looks like.
        </p>
      </section>
    </div>
  );
}
