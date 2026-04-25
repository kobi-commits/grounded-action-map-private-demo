import { notFound } from "next/navigation";
import Link from "next/link";
import { ReviewStatusBadge } from "@/components/Badges";
import { LearningResourceCard } from "@/components/LearningCards";
import { PathwayExportButtons } from "@/components/PathwayExportButtons";
import { SafetyNotice } from "@/components/SafetyNotice";
import { actionCards, capacityGaps, competencies, getLearningPathway, getLearningResource, learningPathways } from "@/lib/data";
import { reflectionPrompts } from "@/lib/data";
import { PracticeToActionPanel, ReflectionPromptCard } from "@/components/DeepLearningCards";
import { goalLabels, modeLabels, roleLabels, timeLabels } from "@/lib/learning";

export function generateStaticParams() {
  return learningPathways.map((pathway) => ({ id: pathway.id }));
}

export default async function LearningPathwayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pathway = getLearningPathway(id);
  if (!pathway) notFound();

  const resources = Array.from(new Set(pathway.steps.flatMap((step) => step.resourceIds)))
    .map(getLearningResource)
    .filter(Boolean);
  const relatedCompetencies = pathway.competencies.map((competencyId) => competencies.find((item) => item.id === competencyId)).filter(Boolean);
  const relatedGaps = pathway.relatedCapacityGaps.map((gapId) => capacityGaps.find((gap) => gap.id === gapId)).filter(Boolean);
  const relatedActions = pathway.relatedActionCards.map((actionId) => actionCards.find((action) => action.id === actionId)).filter(Boolean);
  const safetyVariant = pathway.issue.includes("WASH") || pathway.issue.includes("Health") ? "public-health" :
    pathway.issue.includes("Children") || pathway.issue.includes("Youth") ? "youth" :
    pathway.title.includes("Technology") ? "technology" : "default";

  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal">Learning pathway</p>
            <h1 className="mt-3 text-3xl font-semibold text-ink">{pathway.title}</h1>
          </div>
          <ReviewStatusBadge status={pathway.reviewStatus} />
        </div>
        <p className="mt-4 max-w-5xl text-base leading-7 text-slate-700">{pathway.description}</p>
        <div className="mt-5 grid gap-3 rounded-md border border-line bg-white p-4 text-sm text-slate-700 md:grid-cols-5">
          <span><strong className="text-ink">For:</strong> {roleLabels[pathway.role]}</span>
          <span><strong className="text-ink">Issue:</strong> {pathway.issue}</span>
          <span><strong className="text-ink">Goal:</strong> {goalLabels[pathway.goal]}</span>
          <span><strong className="text-ink">Time:</strong> {timeLabels[pathway.timeAvailable]}</span>
          <span><strong className="text-ink">Mode:</strong> {modeLabels[pathway.learningMode]}</span>
        </div>
        <div className="mt-5">
          <PathwayExportButtons pathway={pathway} />
        </div>
      </section>

      <SafetyNotice variant={safetyVariant} />

      <section className="panel p-5">
        <h2 className="section-title">Competencies Built</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {relatedCompetencies.map((competency) => competency && (
            <Link key={competency.id} href="/learn/competencies" className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-white">
              {competency.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Step-by-Step Learning Path</h2>
        <div className="mt-5 grid gap-4">
          {pathway.steps.map((step, index) => (
            <article key={step.id} className="panel p-5">
              <div className="flex flex-wrap gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{step.purpose}</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-3">
                <p><span className="font-semibold text-ink">Task:</span> {step.task}</p>
                <p><span className="font-semibold text-ink">Estimated time:</span> {step.estimatedTime}</p>
                <p><span className="font-semibold text-ink">Completion output:</span> {step.completionOutput}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PracticeToActionPanel />

      <section className="panel p-5">
        <h2 className="section-title">Reflection and Improvement</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reflectionPrompts.map((prompt) => <ReflectionPromptCard key={prompt.id} prompt={prompt} />)}
        </div>
      </section>

      <section>
        <h2 className="section-title">Resources</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {resources.map((resource) => resource && <LearningResourceCard key={resource.id} resource={resource} />)}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="panel p-5">
          <h2 className="section-title">Safeguards</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {pathway.safeguards.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="panel p-5">
          <h2 className="section-title">Suggested Outputs</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {pathway.outputOptions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="panel p-5">
          <h2 className="section-title">Related Action Cards</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {relatedActions.map((action) => action && <li key={action.id}>{action.title}</li>)}
          </ul>
        </article>
        <article className="panel p-5">
          <h2 className="section-title">Related Capacity Gaps</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {relatedGaps.map((gap) => gap && <li key={gap.id}>{gap.title}</li>)}
          </ul>
        </article>
      </section>
    </div>
  );
}
