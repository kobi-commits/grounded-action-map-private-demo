import { CompetencyPassportPreview, ReflectionPromptCard } from "@/components/DeepLearningCards";
import { SimulationSafetyNotice } from "@/components/SimulationSafetyNotice";
import { competencyPassport, reflectionPrompts } from "@/lib/data";

export default function CompetencyPassportPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Prototype only — no certification</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">Competency Passport</h1>
        <p className="mt-2 text-lg text-slate-700">A future way to track learning, practice, and responsible action readiness.</p>
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-700">
          This is not a credentialing system. It is a prototype for helping users reflect on learning and responsible
          action readiness. V1 does not create accounts, save personal progress, or issue credentials.
        </p>
      </section>
      <SimulationSafetyNotice />
      <CompetencyPassportPreview categories={competencyPassport} />
      <section className="panel p-5">
        <h2 className="section-title">Reflection Prompts</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reflectionPrompts.map((prompt) => <ReflectionPromptCard key={prompt.id} prompt={prompt} />)}
        </div>
      </section>
    </div>
  );
}
