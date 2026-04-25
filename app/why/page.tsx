import Link from "next/link";

const sections = [
  ["The problem", "People care, but the information environment is fragmented, overwhelming, politicized, and hard to turn into responsible action."],
  ["The missing bridge", "People need trusted information, responsible action pathways, learning, trust evidence, and a way to understand the long arc."],
  ["The response", "Grounded Action Map connects humanitarian reporting, organization transparency, learning pathways, simulation, peacebuilding lenses, and future capacity."],
  ["The core belief", "No one has to remain stuck in helplessness. There is always a responsible pathway."]
];

const protectedItems = ["accuracy", "humility", "safeguarding", "local validation", "human review", "no manipulation", "no unsupported claims"];

export default function WhyPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Why This Matters</h1>
        <p className="mt-2 text-lg text-slate-700">From helplessness to responsible action.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/start" className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">Start here</Link>
          <Link href="/map" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Open Living Map</Link>
          <Link href="/demo/live" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">View demo</Link>
          <Link href="/methodology" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Read methodology</Link>
        </div>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        {sections.map(([title, body]) => (
          <article key={title} className="panel p-5">
            <h2 className="text-lg font-semibold text-ink">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{body}</p>
          </article>
        ))}
      </section>
      <section className="panel p-5">
        <h2 className="section-title">What Must Be Protected</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {protectedItems.map((item) => (
            <span key={item} className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-semibold text-slate-700">{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
