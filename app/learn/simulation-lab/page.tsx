import { PracticeToActionPanel, ReflectionPromptCard, SimulationScenarioCard } from "@/components/DeepLearningCards";
import { SimulationSafetyNotice } from "@/components/SimulationSafetyNotice";
import { reflectionPrompts, simulationScenarios } from "@/lib/data";

export default function SimulationLabPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Learn What Is Needed Now</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">Simulation Lab</h1>
        <p className="mt-2 text-lg text-slate-700">Practice decisions before acting in the real world.</p>
        <p className="mt-5 max-w-5xl text-base leading-7 text-slate-700">
          Simulations help users explore complex situations safely. They do not replace professional guidance, field
          expertise, or local knowledge. They are learning tools for understanding systems, risks, trade-offs, and
          responsible action.
        </p>
      </section>
      <SimulationSafetyNotice />
      <PracticeToActionPanel />
      <section className="grid gap-5">
        {simulationScenarios.map((scenario) => <SimulationScenarioCard key={scenario.id} scenario={scenario} />)}
      </section>
      <section className="panel p-5">
        <h2 className="section-title">Reflection and Improvement</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reflectionPrompts.map((prompt) => <ReflectionPromptCard key={prompt.id} prompt={prompt} />)}
        </div>
      </section>
    </div>
  );
}
