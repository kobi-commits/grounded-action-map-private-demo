import { LensExplorer } from "@/components/LensExplorer";
import { PeacebuildingLensCard } from "@/components/PeacebuildingLensCard";
import { frameworks, sectors } from "@/lib/data";
import Link from "next/link";

export default function PeacebuildingPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-signal">Layer 5</p>
          <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-slate-700">
            Interpretive framework / Human review required
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Peacebuilding Lens</h1>
        <p className="mt-2 text-lg text-slate-700">Same reality. Multiple lenses. Responsible action.</p>
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-700">
          Humanitarian need is also relational, institutional, psychological, historical, and civic. This layer helps
          users understand the same reality through conflict transformation, mediation, negotiation, trauma, narrative,
          reconciliation, systems thinking, and practical peacebuilding.
        </p>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
          Layer 5 is an interpretive framework for responsible action. It does not replace source review, humanitarian
          coordination, legal analysis, safeguarding, or local expertise.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {["Humanitarian reality", "Relational and institutional effects", "Long-term civic repair"].map((item) => (
            <div key={item} className="rounded-md border border-line bg-white p-4 text-sm font-semibold text-ink">{item}</div>
          ))}
        </div>
      </section>
      <LensExplorer sectors={sectors} frameworks={frameworks} />
      <section className="panel p-5">
        <h2 className="section-title">Practice: Campus Firestorm Simulation</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
          The Simulation Lab helps student leaders and facilitators practice lowering harm, holding complexity, and
          preventing escalation in polarized learning spaces.
        </p>
        <Link href="/learn/simulation-lab" className="mt-4 inline-flex rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
          Open campus firestorm simulation
        </Link>
        <Link href="/foresight" className="ml-3 mt-4 inline-flex rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
          View peacebuilding across time horizons
        </Link>
      </section>
      <section className="panel p-5">
        <h2 className="section-title">Conflict-Intelligent Future Capacity</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Future recovery will require the ability to read conflict at multiple levels: self, social, situational, and
          systemic. Leaders, students, communities, and institutions need capacities to regulate themselves, understand
          group dynamics, adapt to different contexts, and identify systemic patterns.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[
            ["Self level", "self-awareness, emotional regulation, grief awareness, humility", "prepare before speaking or organizing"],
            ["Social level", "interpersonal trust, intergroup dynamics, moral conflict awareness, dialogue", "design safe learning and conversation spaces"],
            ["Situational level", "context reading, complexity mode, negotiation, mediation, adaptive response", "match action to the situation"],
            ["Systemic level", "feedback loops, polarization patterns, institutions, incentives, narrative systems", "look for leverage points and hidden levers"]
          ].map(([title, capacity, action]) => (
            <div key={title} className="rounded-md border border-line bg-slatepanel p-4">
              <h3 className="text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-700"><span className="font-semibold">Capacity:</span> {capacity}</p>
              <p className="mt-2 text-xs leading-5 text-slate-700"><span className="font-semibold">Action implication:</span> {action}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Start smart", "Grow rapport", "Optimize opposites", "Master adaptivity", "Get wise", "Play the long game", "Find hidden levers"].map((item) => (
            <span key={item} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">{item}</span>
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-title">Peacebuilding Frameworks</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {frameworks.map((framework) => <PeacebuildingLensCard key={framework.id} framework={framework} />)}
        </div>
      </section>
    </div>
  );
}
