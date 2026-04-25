import { CollectiveLearningModeCard, LearningDesignPrincipleCard, PracticeToActionPanel } from "@/components/DeepLearningCards";
import { LearningCycle } from "@/components/LearningCycle";
import { SimulationSafetyNotice } from "@/components/SimulationSafetyNotice";
import { collectiveLearningModes, learningDesignPrinciples } from "@/lib/data";

const flow = ["Need", "Role", "Competency", "Resource", "Practice", "Artifact", "Action"];

export default function LearningDesignPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Adaptive Learning, Simulation & Capacity Engine</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">Learning Design</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
          Every pathway is built from issue, role, goal, time available, learning mode, competencies, resources, practice
          scenario, reflection, output artifact, action pathway, and safeguards.
        </p>
      </section>
      <SimulationSafetyNotice />
      <LearningCycle />
      <section className="panel p-5">
        <h2 className="section-title">Learning Design Flow</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-4 lg:grid-cols-7">
          {flow.map((item) => <div key={item} className="rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">{item}</div>)}
        </div>
      </section>
      <section>
        <h2 className="section-title">How the Learning System Works</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
          Learning pathways are designed around roles, activities, resources, practice scenarios, reflection, and
          responsible action.
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningDesignPrinciples.map((principle) => <LearningDesignPrincipleCard key={principle.id} principle={principle} />)}
        </div>
      </section>
      <PracticeToActionPanel />
      <section>
        <h2 className="section-title">Learning Design Cards</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collectiveLearningModes.map((mode) => <CollectiveLearningModeCard key={mode.id} mode={mode} />)}
        </div>
      </section>
    </div>
  );
}
