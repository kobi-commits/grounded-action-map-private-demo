import { CollectiveLearningModeCard } from "@/components/DeepLearningCards";
import { SimulationSafetyNotice } from "@/components/SimulationSafetyNotice";
import { collectiveLearningModes } from "@/lib/data";

export default function CollectiveLearningPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Learn What Is Needed Now</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">Collective Learning</h1>
        <p className="mt-2 text-lg text-slate-700">Some capacities are built together.</p>
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-700">
          Collective learning can support shared understanding, reflection, practice, and responsible action. Collective
          learning involving minors, vulnerable people, or crisis-affected communities must be partner-mediated,
          safeguarding-reviewed, and human-approved.
        </p>
      </section>
      <SimulationSafetyNotice variant="cross-community" />
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {collectiveLearningModes.map((mode) => <CollectiveLearningModeCard key={mode.id} mode={mode} />)}
      </section>
    </div>
  );
}
