const layers = [
  "Humanitarian Reality",
  "Foresight and Demographics",
  "Trust Evidence",
  "Responsible Action",
  "Peacebuilding Lens"
];

const buildPath = [
  "Prototype",
  "Human-reviewed source ingestion",
  "Transparency Passport expansion",
  "Adaptive Learning Pathways",
  "Partner pilots",
  "Public beta",
  "Replicable crisis-template system"
];

export default function ConceptPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Product Concept</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
          The strategic concept behind Grounded Action Map.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="panel p-5">
          <h2 className="section-title">What is Grounded Action Map?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Grounded Action Map is a humanitarian foresight, transparency evidence, peacebuilding lens, and responsible
            action platform.
          </p>
        </article>
        <article className="panel p-5">
          <h2 className="section-title">Why Gaza V1?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Gaza is a high-urgency humanitarian context where information, action, trust, and long-term peacebuilding are
            all deeply needed. The Gaza prototype tests whether verified public reporting can be transformed into a
            living map of needs, actors, evidence, and responsible action.
          </p>
        </article>
      </section>
      <section className="panel p-5">
        <h2 className="section-title">The Five Core Layers</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-5">
          {layers.map((layer, index) => (
            <div key={layer} className="rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">
              {index + 1}. {layer}
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-md border border-line bg-white p-4 text-sm text-slate-700">
          Future layer: 6. Adaptive Learning and Capacity Pathways
        </p>
      </section>
      <section className="panel p-5">
        <h2 className="section-title">Core Product Flow</h2>
        <p className="mt-4 text-lg font-semibold leading-8 text-ink">
          Concern → Understanding → Verified Need → Trusted Actor → Responsible Action → Long-Term Repair
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="panel p-5">
          <h2 className="section-title">What Makes It Different</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>It does not only aggregate reports.</li>
            <li>It does not only list organizations.</li>
            <li>It does not rank charities.</li>
            <li>It does not process donations in V1.</li>
            <li>It connects humanitarian data, trust evidence, peacebuilding science, and practical action.</li>
          </ul>
        </article>
        <article className="panel p-5">
          <h2 className="section-title">Prototype Non-Goals</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>no payment processing</li>
            <li>no direct donation routing to unreviewed organizations</li>
            <li>no direct beneficiary matching</li>
            <li>no tactical operational mapping</li>
            <li>no automatic use of live reports as verified analysis</li>
            <li>no replacement for official humanitarian coordination</li>
          </ul>
        </article>
      </section>
      <section className="panel p-5">
        <h2 className="section-title">Build Path</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {buildPath.map((item, index) => (
            <div key={item} className="rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">
              {index + 1}. {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
