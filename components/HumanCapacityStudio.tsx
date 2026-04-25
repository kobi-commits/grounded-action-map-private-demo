"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { ReviewStatusBadge } from "@/components/Badges";
import { TextExportButtons } from "@/components/TextExportButtons";
import type {
  BiopsychosocialCheckIn as BiopsychosocialCheckInItem,
  CapacityPassportItem,
  CommunicationEcologyLevel,
  CompoundingImpactModel,
  ConflictIntelligenceLevel,
  HumanCapacityArtifact,
  HumanCapacityPathway,
  HumanCapacityPractice,
  HumanCapacityScenario,
  HumanComplexityMode,
  WorkshopTemplate
} from "@/types";

const situations = [
  "I want to help Gaza responsibly",
  "I am overwhelmed by suffering",
  "I am organizing a campus conversation",
  "I want to donate responsibly",
  "I want to build a technology tool",
  "I want to support youth leadership",
  "I am leading through conflict",
  "I want to understand the long arc",
  "I want to support public health or WASH action",
  "I want to create a workshop"
];

const roles = ["student", "donor", "teacher", "technologist", "peacebuilder", "community leader", "parent or caregiver", "civic group", "humanitarian professional", "university or lab partner", "funder", "facilitator"];
const goals = ["understand", "regulate", "communicate", "facilitate", "verify", "organize", "support", "build", "lead", "reflect", "sustain action over time"];
const commitments = ["30 minutes once", "1 hour per week", "4 hours per month", "1 day sprint", "4-week practice", "90-day experiment", "annual deep-dive workshop"];
const learningModes = ["individual", "with a friend", "team", "workshop", "campus action lab", "community learning circle", "partner project"];
const actionTypes = ["learn", "verify sources", "share responsibly", "organize a discussion", "support a verified organization", "volunteer through a partner", "build a safe tool", "facilitate a learning circle", "advocate consistently"];
const impactCommitments = ["1 hour per week", "4 hours per month", "1 day per quarter", "3-day annual workshop", "90-day experiment"];
const durations = ["1 month", "3 months", "6 months", "1 year", "5 years", "25 years"];

function markdownForPath(path: HumanCapacityPathway) {
  return `# ${path.title}

## Situation
${path.situation}

## Recommended Practices
${path.recommendedPractices.map((practice) => `- ${practice}`).join("\n")}

## Competencies
${path.competencies.map((competency) => `- ${competency}`).join("\n")}

## Learning Pathway
${path.learningPathway}

## Simulation
${path.simulation}

## Action Artifact
${path.actionArtifact}

## Responsible Next Step
${path.responsibleNextStep}

## Long-Arc Contribution
${path.longArcContribution}

## Safeguard
${path.safeguard}

Prototype V1. Human review required. This is not therapy, certification, medical advice, legal advice, operational humanitarian guidance, or security guidance.
`;
}

function markdownForWorkshop(template: WorkshopTemplate) {
  return `# ${template.title}

Duration: ${template.duration}
Audience: ${template.audience}

## Goals
${template.goals.map((item) => `- ${item}`).join("\n")}

## Agenda Preview
${template.agenda.map((item) => `- ${item}`).join("\n")}

## Simulation
${template.simulation}

## Reflection Prompts
${template.reflectionPrompts.map((item) => `- ${item}`).join("\n")}

## Output Artifact
${template.outputArtifact}

## Safeguards
${template.safeguards.map((item) => `- ${item}`).join("\n")}
`;
}

export function CapacitySafetyNotice() {
  return (
    <section className="rounded-md border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
      <h2 className="text-lg font-semibold text-ink">Safety and Safeguards</h2>
      <p className="mt-3">
        Human Capacity Studio is for learning, reflection, and responsible action planning. It is not therapy,
        certification, medical advice, legal advice, operational humanitarian guidance, or security guidance. Field-facing
        action must go through vetted organizations, safeguarding protocols, and human review.
      </p>
      <p className="mt-3">
        No direct unsupervised contact with minors or vulnerable people. Youth and cross-community pathways must be
        partner-mediated and safeguarding-reviewed.
      </p>
      <p className="mt-3">
        Compounding impact visuals are illustrative, not predictions or verified impact claims. Capacity-building does
        not replace local knowledge, lived experience, or professional humanitarian coordination.
      </p>
    </section>
  );
}

export function TwelvePracticesGrid({ practices }: { practices: HumanCapacityPractice[] }) {
  return (
    <section>
      <h2 className="section-title">The 12 Practices for Responsible Action</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        These practices help people move from concern to wise action. They are not rules for perfection. They are
        practices for becoming more grounded, careful, useful, and humane.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {practices.map((practice, index) => (
          <article key={practice.id} className="panel p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-white">{index + 1}</span>
              <ReviewStatusBadge status={practice.reviewStatus} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink">{practice.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">{practice.shortDescription}</p>
            <Info title="Why it matters" text={practice.whyItMatters} />
            <Info title="Question to ask" text={practice.questionToAsk} />
            <Info title="Skill built" text={practice.skillBuilt} />
            <Info title="Safety note" text={practice.safetyNote} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function CopyHumanCapacityPathButton({ path }: { path: HumanCapacityPathway }) {
  return (
    <TextExportButtons
      text={markdownForPath(path)}
      filename={`${path.id}-human-capacity-path.md`}
      copyLabel="Copy capacity path"
      downloadLabel="Download capacity path"
    />
  );
}

export function DownloadHumanCapacityPathButton({ path }: { path: HumanCapacityPathway }) {
  return (
    <TextExportButtons
      text={markdownForPath(path)}
      filename={`${path.id}-human-capacity-path.md`}
      copyLabel="Copy path"
      downloadLabel="Download path as Markdown"
    />
  );
}

export function HumanCapacityPathBuilder({ pathways }: { pathways: HumanCapacityPathway[] }) {
  const [situation, setSituation] = useState(situations[0]);
  const [role, setRole] = useState(roles[0]);
  const [goal, setGoal] = useState(goals[0]);
  const [commitment, setCommitment] = useState(commitments[0]);
  const [mode, setMode] = useState(learningModes[0]);

  const path = useMemo(() => {
    const exact = pathways.find((item) => item.situation === situation);
    if (exact) return exact;
    if (situation.includes("donate")) return pathways.find((item) => item.id === "help-gaza-responsibly") ?? pathways[0];
    if (situation.includes("workshop")) return pathways.find((item) => item.id === "campus-conversation") ?? pathways[0];
    if (situation.includes("long arc")) return pathways.find((item) => item.id === "youth-leadership") ?? pathways[0];
    if (situation.includes("leading")) return pathways.find((item) => item.id === "campus-conversation") ?? pathways[0];
    return pathways[0];
  }, [pathways, situation]);

  return (
    <section className="panel p-5">
      <h2 className="section-title">Build My Human Capacity Path</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        Choose your situation, your role, and how you want to grow. The studio suggests practices, competencies,
        simulations, and responsible next steps. This is rule-based; no AI is used.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
        <Select label="Situation" value={situation} options={situations} onChange={setSituation} />
        <Select label="Role" value={role} options={roles} onChange={setRole} />
        <Select label="Growth goal" value={goal} options={goals} onChange={setGoal} />
        <Select label="Commitment" value={commitment} options={commitments} onChange={setCommitment} />
        <Select label="Learning mode" value={mode} options={learningModes} onChange={setMode} />
      </div>
      {path ? (
        <div className="mt-5 rounded-md border border-line bg-slatepanel p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Your Human Capacity Path</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{path.title}</h3>
            </div>
            <ReviewStatusBadge status={path.reviewStatus} />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ListInfo title="Recommended practices" items={path.recommendedPractices} />
            <ListInfo title="Competencies" items={path.competencies} />
            <Info title="Learning pathway" text={path.learningPathway} />
            <Info title="Simulation" text={path.simulation} />
            <Info title="Action artifact" text={path.actionArtifact} />
            <Info title="Responsible next step" text={path.responsibleNextStep} />
            <Info title="Long-arc contribution" text={path.longArcContribution} />
            <Info title="Safeguard" text={path.safeguard} />
            <Info title="Selected mode" text={`${role} / ${goal} / ${commitment} / ${mode}`} />
          </div>
          <div className="mt-5">
            <CopyHumanCapacityPathButton path={path} />
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function ConflictIntelligenceMap({ levels }: { levels: ConflictIntelligenceLevel[] }) {
  const chips = ["Start smart", "Grow rapport", "Optimize opposites", "Master adaptivity", "Get wise", "Play the long game", "Find hidden levers"];
  return (
    <section>
      <h2 className="section-title">Conflict Intelligence Map</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        Conflict intelligence helps people read conflict at multiple levels: self, social, situational, and systemic.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {levels.map((level) => (
          <article key={level.id} className="panel p-5">
            <h3 className="text-lg font-semibold text-ink">{level.level}</h3>
            <p className="mt-2 text-sm font-semibold text-signal">{level.title}</p>
            <ListInfo title="What to notice" items={level.whatToNotice} />
            <ListInfo title="What to practice" items={level.whatToPractice} />
            <ListInfo title="What to avoid" items={level.whatToAvoid} />
            <Info title="Useful question" text={level.usefulQuestion} />
          </article>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-slate-700">
            {chip}
          </span>
        ))}
      </div>
    </section>
  );
}

export function ComplexityModeCards({ modes }: { modes: HumanComplexityMode[] }) {
  return (
    <section>
      <h2 className="section-title">Read the Complexity Mode</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        Before acting, ask what kind of situation you are in. The wrong response to the wrong context can create harm.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {modes.map((mode) => (
          <article key={mode.id} className="panel p-5">
            <h3 className="text-lg font-semibold text-ink">{mode.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">{mode.plainLanguageDefinition}</p>
            <Info title="What to do" text={mode.whatToDo} />
            <Info title="Avoid" text={mode.whatToAvoid} />
            <Info title="Example" text={mode.example} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function BiopsychosocialCheckIn({ checkins }: { checkins: BiopsychosocialCheckInItem[] }) {
  return (
    <section className="panel p-5">
      <h2 className="section-title">Biopsychosocial Check-In</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        Responsible action starts with noticing your own state. This is a reflective leadership check-in, not therapy or
        medical advice.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {checkins.map((item) => (
          <article key={item.id} className="rounded-md border border-line bg-slatepanel p-4">
            <h3 className="text-base font-semibold text-ink">{item.domain}</h3>
            <Info title="Question" text={item.question} />
            <Info title="Prompt" text={item.reflectionPrompt} />
            <p className="mt-3 text-xs leading-5 text-slate-600">{item.safetyNote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CommunicationEcologyMap({ levels }: { levels: CommunicationEcologyLevel[] }) {
  return (
    <section>
      <h2 className="section-title">Communication Ecology</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        Every action communicates. Every conversation shapes what becomes possible.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {levels.map((level) => (
          <article key={level.id} className="panel p-5">
            <h3 className="text-lg font-semibold text-ink">{level.level}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">{level.description}</p>
            <Info title="Key question" text={level.keyQuestion} />
            <Info title="What can go wrong" text={level.whatCanGoWrong} />
            <Info title="Responsible practice" text={level.responsiblePractice} />
            <Info title="Related competency" text={level.relatedCompetency} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function CompoundingImpactVisualizer({ models }: { models: CompoundingImpactModel[] }) {
  const [actionType, setActionType] = useState(actionTypes[0]);
  const [commitment, setCommitment] = useState(impactCommitments[0]);
  const [duration, setDuration] = useState(durations[3]);
  const hours = estimateHours(commitment, duration);
  const nearestModel = models.find((model) => model.weeklyCommitment === commitment && model.duration === duration) ?? models[0];
  const cycles = Math.max(1, Math.round(hours / 4));

  return (
    <section className="panel p-5">
      <h2 className="section-title">Compounding Impact Visualizer</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        Small responsible actions, repeated over time, can build real capacity. This visual is illustrative, not a
        prediction.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <Select label="Action type" value={actionType} options={actionTypes} onChange={setActionType} />
        <Select label="Commitment" value={commitment} options={impactCommitments} onChange={setCommitment} />
        <Select label="Duration" value={duration} options={durations} onChange={setDuration} />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Info title="Illustrative hours" text={`${hours} hours of learning/action practice`} />
        <Info title="Reflection cycles" text={`${cycles} possible reflection cycles`} />
        <Info title="Possible artifacts" text={nearestModel.possibleOutputs.join(", ")} />
        <Info title="Capacity signal" text={`Possible capacity: ${actionType}, source discipline, communication, and action discipline.`} />
      </div>
      <p className="mt-4 rounded-md border border-line bg-slatepanel p-4 text-sm leading-6 text-slate-700">
        Real-world impact depends on context, quality, partners, safeguards, and review. This is not a prediction or
        verified impact claim.
      </p>
    </section>
  );
}

export function WorkshopBuilderPreview({ templates }: { templates: WorkshopTemplate[] }) {
  return (
    <section>
      <h2 className="section-title">Workshop Builder</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        Turn learning into a session for friends, students, teams, or civic communities.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {templates.map((template) => (
          <article key={template.id} className="panel p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-ink">{template.title}</h3>
              <ReviewStatusBadge status={template.reviewStatus} />
            </div>
            <Info title="Duration" text={template.duration} />
            <Info title="Audience" text={template.audience} />
            <ListInfo title="Goals" items={template.goals} />
            <ListInfo title="Agenda preview" items={template.agenda} />
            <Info title="Simulation" text={template.simulation} />
            <Info title="Action artifact" text={template.outputArtifact} />
            <div className="mt-4">
              <TextExportButtons
                text={markdownForWorkshop(template)}
                filename={`${template.id}-workshop-outline.md`}
                copyLabel="Copy workshop outline"
                downloadLabel="Download outline"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HumanCapacityScenarioCard({ scenario }: { scenario: HumanCapacityScenario }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{scenario.title}</h3>
        <ReviewStatusBadge status={scenario.reviewStatus} />
      </div>
      <Info title="Situation" text={scenario.situation} />
      <Info title="Role" text={scenario.role} />
      <Info title="Decision point" text={scenario.decisionPoint} />
      <ListInfo title="Risks" items={scenario.risks} />
      <ListInfo title="Possible responses" items={scenario.possibleResponses} />
      <ListInfo title="What to avoid" items={scenario.whatToAvoid} />
      <Info title="Responsible next step" text={scenario.responsibleNextStep} />
      <ListInfo title="Reflection prompts" items={scenario.reflectionPrompts} />
    </article>
  );
}

export function CapacityPassportPreview({ items }: { items: CapacityPassportItem[] }) {
  const grouped = groupBy(items, (item) => item.category);
  return (
    <section className="panel p-5">
      <h2 className="section-title">Capacity Passport Preview</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        A future way to reflect on growth. This is not certification.
      </p>
      <p className="mt-3 inline-flex rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-slate-700">
        Prototype only - not certification
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {Object.entries(grouped).map(([category, categoryItems]) => (
          <article key={category} className="rounded-md border border-line bg-slatepanel p-4">
            <h3 className="text-lg font-semibold text-ink">{category}</h3>
            <div className="mt-4 space-y-3">
              {categoryItems.map((item) => (
                <div key={item.id} className="rounded-md border border-line bg-white p-3">
                  <p className="text-sm font-semibold text-ink">{item.competency}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Aware: {item.beginner} | Practicing: {item.developing} | Applied: {item.applied} | Able to support others: {item.mentor}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HumanCapacityArtifactCard({ artifact }: { artifact: HumanCapacityArtifact }) {
  const markdown = `# ${artifact.title}

Purpose: ${artifact.purpose}
Who it is for: ${artifact.whoItIsFor}
Related practice: ${artifact.relatedPractice}
Related simulation: ${artifact.relatedSimulation}
`;
  return (
    <article className="panel p-5">
      <h3 className="text-lg font-semibold text-ink">{artifact.title}</h3>
      <Info title="Purpose" text={artifact.purpose} />
      <Info title="Who it is for" text={artifact.whoItIsFor} />
      <Info title="Related practice" text={artifact.relatedPractice} />
      <Info title="Related simulation" text={artifact.relatedSimulation} />
      <div className="mt-4">
        <TextExportButtons text={markdown} filename={`${artifact.id}.md`} copyLabel="Copy artifact" downloadLabel="Download artifact" />
      </div>
    </article>
  );
}

export function HumanCapacityStudio({
  practices,
  pathways,
  conflictLevels,
  complexityModes,
  checkins,
  communicationLevels,
  impactModels,
  scenarios,
  workshopTemplates,
  passportItems,
  artifacts
}: {
  practices: HumanCapacityPractice[];
  pathways: HumanCapacityPathway[];
  conflictLevels: ConflictIntelligenceLevel[];
  complexityModes: HumanComplexityMode[];
  checkins: BiopsychosocialCheckInItem[];
  communicationLevels: CommunicationEcologyLevel[];
  impactModels: CompoundingImpactModel[];
  scenarios: HumanCapacityScenario[];
  workshopTemplates: WorkshopTemplate[];
  passportItems: CapacityPassportItem[];
  artifacts: HumanCapacityArtifact[];
}) {
  return (
    <div className="space-y-10">
      <TwelvePracticesGrid practices={practices} />
      <HumanCapacityPathBuilder pathways={pathways} />
      <ConflictIntelligenceMap levels={conflictLevels} />
      <ComplexityModeCards modes={complexityModes} />
      <BiopsychosocialCheckIn checkins={checkins} />
      <CommunicationEcologyMap levels={communicationLevels} />
      <CompoundingImpactVisualizer models={impactModels} />
      <WorkshopBuilderPreview templates={workshopTemplates} />
      <section>
        <h2 className="section-title">Practice Scenarios</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
          Practice before acting. These scenarios are for learning and reflection, not professional advice.
        </p>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {scenarios.map((scenario) => <HumanCapacityScenarioCard key={scenario.id} scenario={scenario} />)}
        </div>
      </section>
      <CapacityPassportPreview items={passportItems} />
      <section>
        <h2 className="section-title">Action Artifacts</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
          Every learning path should produce something useful.
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {artifacts.map((artifact) => <HumanCapacityArtifactCard key={artifact.id} artifact={artifact} />)}
        </div>
      </section>
      <CapacitySafetyNotice />
    </div>
  );
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  const id = useId();
  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <select
        id={id}
        aria-label={label}
        className="rounded-md border border-line bg-white px-3 py-2 font-normal"
        value={value}
        onInput={(event) => onChange(event.currentTarget.value)}
        onChange={(event) => onChange(event.currentTarget.value)}
      >
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <p className="mt-1 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function ListInfo({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function groupBy<T>(items: T[], getKey: (item: T) => string) {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    const key = getKey(item);
    groups[key] = groups[key] ?? [];
    groups[key].push(item);
    return groups;
  }, {});
}

function estimateHours(commitment: string, duration: string) {
  const durationMonths: Record<string, number> = {
    "1 month": 1,
    "3 months": 3,
    "6 months": 6,
    "1 year": 12,
    "5 years": 60,
    "25 years": 300
  };
  const months = durationMonths[duration] ?? 12;
  if (commitment === "1 hour per week") return Math.round(months * 4.33);
  if (commitment === "4 hours per month") return months * 4;
  if (commitment === "1 day per quarter") return Math.max(8, Math.round((months / 3) * 8));
  if (commitment === "3-day annual workshop") return Math.max(18, Math.round((months / 12) * 18));
  return Math.max(24, Math.round((months / 3) * 24));
}
