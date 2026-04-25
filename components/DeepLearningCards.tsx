"use client";

import { useState } from "react";
import Link from "next/link";
import type {
  CollectiveLearningMode,
  CompetencyPassportCategory,
  LearningArtifact,
  LearningDesignPrinciple,
  ReflectionPrompt,
  SimulationScenario
} from "@/types";
import { actionCards, getCompetency, getLearningPathway } from "@/lib/data";
import { ReviewStatusBadge } from "@/components/Badges";
import { SimulationSafetyNotice } from "@/components/SimulationSafetyNotice";

function chipLabel(id: string) {
  return getCompetency(id)?.name ?? id.replaceAll("-", " ");
}

export function LearningDesignPrincipleCard({ principle }: { principle: LearningDesignPrinciple }) {
  return (
    <article className="panel p-5">
      <h3 className="text-lg font-semibold text-ink">{principle.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{principle.description}</p>
    </article>
  );
}

export function SimulationDecisionPoint({ scenario }: { scenario: SimulationScenario }) {
  return (
    <div className="rounded-md border border-line bg-slatepanel p-4">
      <p className="text-sm font-semibold text-ink">Decision point</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{scenario.decisionPoint.prompt}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <List title="Possible actions" items={scenario.decisionPoint.possibleActions} />
        <List title="Risks" items={scenario.decisionPoint.risks} />
        <List title="What to avoid" items={scenario.decisionPoint.whatToAvoid} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-700">
        <span className="font-semibold text-ink">Responsible next step:</span> {scenario.decisionPoint.responsibleNextStep}
      </p>
    </div>
  );
}

export function SimulationScenarioCard({ scenario }: { scenario: SimulationScenario }) {
  const pathway = getLearningPathway(scenario.relatedLearningPathwayId);
  const action = actionCards.find((item) => item.id === scenario.relatedActionCardId);

  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-ink">{scenario.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{scenario.sector} | {scenario.role}</p>
        </div>
        <ReviewStatusBadge status={scenario.reviewStatus} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-700">{scenario.situation}</p>
      <div className="mt-4">
        <SimulationDecisionPoint scenario={scenario} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {scenario.competencyIds.map((id) => (
          <span key={id} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
            {chipLabel(id)}
          </span>
        ))}
      </div>
      <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
        {pathway && <Link href={`/learn/pathways/${pathway.id}`} className="text-signal underline">Related pathway: {pathway.title}</Link>}
        {action && <span className="text-slate-700">Related action card: {action.title}</span>}
      </div>
      <div className="mt-4">
        <SimulationSafetyNotice variant={scenario.safetyNotice} />
      </div>
    </article>
  );
}

export function LearningArtifactCard({ artifact }: { artifact: LearningArtifact }) {
  const [copied, setCopied] = useState(false);
  const pathway = getLearningPathway(artifact.relatedPathwayId);
  const text = `# ${artifact.title}\n\nPurpose: ${artifact.purpose}\n\nFor: ${artifact.whoFor}\n\nRelated pathway: ${pathway?.title ?? artifact.relatedPathwayId}\n\nSafety note: ${artifact.safetyNote}\n`;

  async function copy() {
    try {
      await navigator.clipboard?.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function download() {
    const url = URL.createObjectURL(new Blob([text], { type: "text/markdown;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${artifact.id}.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <article className="panel p-5">
      <h3 className="text-lg font-semibold text-ink">{artifact.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{artifact.purpose}</p>
      <p className="mt-3 text-sm text-slate-700"><span className="font-semibold text-ink">For:</span> {artifact.whoFor}</p>
      {pathway && <Link href={`/learn/pathways/${pathway.id}`} className="mt-3 inline-flex text-sm font-semibold text-signal underline">{pathway.title}</Link>}
      <div className="mt-3 flex flex-wrap gap-2">
        {artifact.competencyIds.map((id) => (
          <span key={id} className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-semibold text-slate-700">{chipLabel(id)}</span>
        ))}
      </div>
      <p className="mt-3 rounded-md border border-line bg-slatepanel p-3 text-sm leading-6 text-slate-700">{artifact.safetyNote}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={copy} className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">{copied ? "Artifact copied" : "Copy artifact"}</button>
        <button onClick={download} className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Download artifact</button>
      </div>
    </article>
  );
}

export function CompetencyPassportPreview({ categories }: { categories: CompetencyPassportCategory[] }) {
  const levels = ["Beginner", "Developing", "Applied", "Mentor / facilitator"];
  return (
    <section className="grid gap-5">
      {categories.map((category) => (
        <article key={category.id} className="panel p-5">
          <h2 className="section-title">{category.title}</h2>
          <div className="mt-4 grid gap-3">
            {category.competencies.map((competency) => (
              <div key={competency} className="rounded-md border border-line bg-slatepanel p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-ink">{competency}</h3>
                  <span className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">Prototype only — no certification</span>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-4">
                  {levels.map((level) => <span key={level} className="rounded-md border border-line bg-white px-3 py-2 text-xs font-semibold text-slate-700">{level}</span>)}
                </div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export function CollectiveLearningModeCard({ mode }: { mode: CollectiveLearningMode }) {
  return (
    <article className="panel p-5">
      <h3 className="text-lg font-semibold text-ink">{mode.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{mode.description}</p>
      <p className="mt-3 rounded-md border border-line bg-slatepanel p-3 text-sm leading-6 text-slate-700">{mode.safetyNote}</p>
    </article>
  );
}

export function ReflectionPromptCard({ prompt }: { prompt: ReflectionPrompt }) {
  return (
    <article className="rounded-md border border-line bg-white p-4">
      <h3 className="text-sm font-semibold text-ink">{prompt.prompt}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{prompt.useCase}</p>
    </article>
  );
}

export function PracticeToActionPanel() {
  return (
    <section className="panel p-5">
      <h2 className="section-title">Practice to Responsible Action</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {["Plan", "Practice", "Reflect", "Improve"].map((item) => (
          <div key={item} className="rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">{item}</div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-700">
        The goal is not to finish a module. The goal is to produce a reviewed artifact, name the safeguards, and choose a
        responsible next step.
      </p>
    </section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
