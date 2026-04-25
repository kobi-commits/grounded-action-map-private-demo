import { CapacityGapCard } from "@/components/LearningCards";
import { SafetyNotice } from "@/components/SafetyNotice";
import { capacityGaps } from "@/lib/data";
import { capacityLevelLabels } from "@/lib/learning";

export default function CapacityMapPage() {
  const sectors = Array.from(new Set(capacityGaps.map((gap) => gap.sector)));

  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Learn What Is Needed Now</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">Capacity Gap Map</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
          Sector-by-sector capacity needs, capacity gap hypotheses, competencies needed for response and recovery, and
          related learning and action pathways.
        </p>
      </section>

      <SafetyNotice variant="capacity" />

      <section className="panel p-5">
        <h2 className="section-title">Four-Level Capacity Model</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(capacityLevelLabels).map(([id, label]) => (
            <article key={id} className="rounded-md border border-line bg-slatepanel p-4">
              <h3 className="text-sm font-semibold text-ink">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {id === "individual_household" && "Knowledge and behaviors a person or family may need to protect health, dignity, safety, and informed action."}
                {id === "community_cohort" && "Skills and practices groups may need to coordinate, learn together, prevent harm, support children, reduce rumors, and build social cohesion."}
                {id === "organization_service_provider" && "Capacities needed by NGOs, schools, clinics, managers, community groups, and partners to deliver accountable, safe, coordinated support."}
                {id === "system_institution" && "Long-term capacities needed for recovery, public health, education, infrastructure, social cohesion, governance, and peacebuilding."}
              </p>
            </article>
          ))}
        </div>
      </section>

      {sectors.map((sector) => (
        <section key={sector}>
          <h2 className="section-title">{sector}</h2>
          <div className="mt-5 grid gap-5">
            {capacityGaps.filter((gap) => gap.sector === sector).map((gap) => <CapacityGapCard key={gap.id} gap={gap} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
