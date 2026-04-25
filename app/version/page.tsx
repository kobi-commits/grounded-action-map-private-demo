const working = [
  "static dashboard",
  "sector pages",
  "action cards",
  "source library",
  "live unreviewed ReliefWeb feed",
  "trust evidence prototype",
  "organization profiles",
  "learning pathways",
  "simulation lab",
  "peacebuilding lens",
  "future capacity map",
  "Living Map",
  "briefing export",
  "demo flow"
];

const sampleData = [
  "sector synthesis",
  "capacity gaps",
  "action pathways",
  "organization transparency passports",
  "future scenarios",
  "learning resources",
  "action ripples",
  "path traces",
  "regional context rings",
  "functioning society baselines",
  "advisor review tracks"
];

const requiresReview = [
  "humanitarian claims",
  "action pathways",
  "organization profiles",
  "transparency passports",
  "capacity hypotheses",
  "future scenarios",
  "regional context claims",
  "learning-resource recommendations",
  "public-health pathways",
  "peacebuilding language",
  "safeguarding policies"
];

const notEnabled = [
  "donations",
  "payments",
  "user accounts",
  "authentication",
  "direct matching",
  "direct beneficiary contact",
  "operational coordination",
  "private data collection",
  "public intake forms",
  "automated recommendations from live data"
];

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="panel p-5">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
        {items.map((item) => <li key={item}>- {item}</li>)}
      </ul>
    </article>
  );
}

export default function VersionPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Version and Review Status</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">What is live, what is sample, and what requires review.</p>
        <span className="mt-5 inline-flex rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-slate-700">
          Current version: Prototype V1
        </span>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        <ListCard title="What Is Working" items={working} />
        <ListCard title="What Is Sample Data" items={sampleData} />
        <ListCard title="What Requires Review" items={requiresReview} />
        <ListCard title="What Is Not Enabled" items={notEnabled} />
      </section>
      <section className="panel p-5">
        <h2 className="text-xl font-semibold text-ink">What Is Live</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          ReliefWeb feed only, if available. Live reports are unreviewed and do not automatically update sector analysis.
        </p>
      </section>
    </div>
  );
}
