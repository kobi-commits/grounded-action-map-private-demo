import { CompetencyCard } from "@/components/LearningCards";
import { SafetyNotice } from "@/components/SafetyNotice";
import { competencies } from "@/lib/data";

export default function CompetenciesPage() {
  const categories = Array.from(new Set(competencies.map((competency) => competency.category)));

  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Competencies needed for response and recovery</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">Competency Library</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
          A public-facing map of humanitarian, peacebuilding, leadership, and technical competencies connected to sectors,
          capacity levels, and learning pathways.
        </p>
      </section>
      <SafetyNotice />
      {categories.map((category) => (
        <section key={category}>
          <h2 className="section-title">{category}</h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {competencies.filter((competency) => competency.category === category).map((competency) => (
              <CompetencyCard key={competency.id} competency={competency} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
