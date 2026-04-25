import Link from "next/link";
import { PublicEcosystemMap } from "@/components/CoherenceComponents";
import { publicEcosystem } from "@/lib/data";

const enables = [
  "A student can build a responsible learning path.",
  "A donor can review trust evidence.",
  "A technologist can build safely.",
  "A university can host an action lab.",
  "A peacebuilder can use the lens system.",
  "A funder can understand the roadmap.",
  "An advisor can identify what must be reviewed."
];

export default function CoherencePage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">The Coherence System</h1>
        <p className="mt-2 text-lg text-slate-700">How the app, workshops, podcast, videos, partners, and public education fit together.</p>
      </section>
      <section className="panel p-5">
        <h2 className="section-title">Ecosystem View</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-md border border-line bg-ink p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Center</p>
            <h3 className="mt-3 text-2xl font-semibold">Grounded Action Map</h3>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Living platform organizing needs, evidence, trust, learning, action, peacebuilding, and future capacity.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {publicEcosystem.filter((item) => item.id !== "grounded-action-map").slice(0, 10).map((item) => (
              <Link key={item.id} href={item.route} className="rounded-md border border-line bg-slatepanel p-4 hover:border-signal">
                <h3 className="text-sm font-semibold text-ink">{item.name}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-700">{item.role}</p>
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-5 rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">
          Concern → Understanding → Verified Need → Trust Evidence → Learning Pathway → Simulation → Responsible Action → Future Capacity → Public Education → Partner Ecosystem
        </p>
      </section>
      <section>
        <h2 className="section-title">What This Enables</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {enables.map((item) => <article key={item} className="panel p-5 text-sm font-semibold text-ink">{item}</article>)}
        </div>
      </section>
      <PublicEcosystemMap items={publicEcosystem} />
    </div>
  );
}
