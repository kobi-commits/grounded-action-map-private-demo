import Link from "next/link";
import type { CapacityGap, Competency, LearningPathway, LearningResource } from "@/types";
import { actionCards, getCapacityGap, getCompetency, getLearningPathway, sourceName } from "@/lib/data";
import { capacityLevelLabels, goalLabels, modeLabels, roleLabels, timeLabels } from "@/lib/learning";
import { ReviewStatusBadge, SourceBadge } from "@/components/Badges";

export function LearningPathwayCard({ pathway }: { pathway: LearningPathway }) {
  return (
    <article className="panel flex h-full flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-7 text-ink">{pathway.title}</h3>
        <ReviewStatusBadge status={pathway.reviewStatus} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{pathway.description}</p>
      <dl className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        <div><dt className="font-semibold text-ink">Role</dt><dd>{roleLabels[pathway.role]}</dd></div>
        <div><dt className="font-semibold text-ink">Goal</dt><dd>{goalLabels[pathway.goal]}</dd></div>
        <div><dt className="font-semibold text-ink">Time</dt><dd>{timeLabels[pathway.timeAvailable]}</dd></div>
        <div><dt className="font-semibold text-ink">Mode</dt><dd>{modeLabels[pathway.learningMode]}</dd></div>
      </dl>
      <div className="mt-4 flex flex-wrap gap-2">
        {pathway.competencies.slice(0, 4).map((id) => (
          <span key={id} className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-semibold text-slate-700">
            {getCompetency(id)?.name ?? id}
          </span>
        ))}
      </div>
      <Link href={`/learn/pathways/${pathway.id}`} className="mt-5 inline-flex w-fit rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
        Open pathway
      </Link>
    </article>
  );
}

export function CapacityGapCard({ gap }: { gap: CapacityGap }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold leading-7 text-ink">{gap.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{gap.sector} | {gap.geography}</p>
        </div>
        <ReviewStatusBadge status={gap.reviewStatus} />
      </div>
      <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-700 lg:grid-cols-2">
        <p><span className="font-semibold text-ink">Current condition:</span> {gap.currentCondition}</p>
        <p><span className="font-semibold text-ink">Required capacity:</span> {gap.requiredCapacity}</p>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-ink">Capacity level</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {gap.capacityLevel.map((level) => (
            <span key={level} className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-semibold text-slate-700">
              {capacityLevelLabels[level]}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-ink">Competencies needed for response and recovery</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {gap.competencyIds.map((id) => (
            <span key={id} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
              {getCompetency(id)?.name ?? id}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-4 rounded-md border border-line bg-slatepanel p-3 text-sm leading-6 text-slate-700">
        <span className="font-semibold text-ink">Capacity gap hypothesis — human review required:</span> {gap.gapHypothesis}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {gap.evidenceSourceIds.map((id) => <SourceBadge key={id} name={sourceName(id)} />)}
      </div>
      <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
        <div>
          <p className="font-semibold text-ink">Related learning pathways</p>
          <ul className="mt-2 space-y-1 text-slate-700">
            {gap.relatedLearningPathwayIds.map((id) => {
              const pathway = getLearningPathway(id);
              return <li key={id}>{pathway ? <Link href={`/learn/pathways/${id}`} className="text-signal underline">{pathway.title}</Link> : id}</li>;
            })}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-ink">Related action pathways</p>
          <ul className="mt-2 space-y-1 text-slate-700">
            {gap.relatedActionCardIds.map((id) => <li key={id}>{actionCards.find((action) => action.id === id)?.title ?? id}</li>)}
          </ul>
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {gap.caveats.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

export function CompetencyCard({ competency }: { competency: Competency }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{competency.name}</h3>
        <span className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-semibold text-slate-700">{competency.category}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{competency.description}</p>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
        <p><span className="font-semibold text-ink">Beginner:</span> {competency.beginnerOutcome}</p>
        <p><span className="font-semibold text-ink">Intermediate:</span> {competency.intermediateOutcome}</p>
        <p><span className="font-semibold text-ink">Advanced:</span> {competency.advancedOutcome}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {competency.relatedSectors.map((sector) => (
          <span key={sector} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">{sector}</span>
        ))}
      </div>
      <div className="mt-4 text-sm text-slate-700">
        <span className="font-semibold text-ink">Related pathways:</span>{" "}
        {competency.relatedPathwayIds.map((id) => getLearningPathway(id)?.title ?? id).join(", ")}
      </div>
    </article>
  );
}

export function LearningResourceCard({ resource }: { resource: LearningResource }) {
  return (
    <article className="rounded-md border border-line bg-white p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-6 text-ink">{resource.title}</h3>
        <ReviewStatusBadge status={resource.reviewStatus} />
      </div>
      <p className="mt-2 text-sm text-slate-600">{resource.provider} | {resource.resourceType.replaceAll("_", " ")}</p>
      <dl className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
        <div><dt className="font-semibold text-ink">Estimated time</dt><dd>{resource.estimatedTime}</dd></div>
        <div><dt className="font-semibold text-ink">Cost</dt><dd>{resource.cost}</dd></div>
        <div><dt className="font-semibold text-ink">Reliability</dt><dd>{resource.sourceReliability}</dd></div>
        <div><dt className="font-semibold text-ink">Language</dt><dd>{resource.language}</dd></div>
      </dl>
      {resource.safetyNote && <p className="mt-3 rounded-md border border-line bg-slatepanel p-3 text-sm leading-6 text-slate-700">{resource.safetyNote}</p>}
      <a href={resource.url} className="mt-3 inline-flex text-sm font-semibold text-signal underline">Resource link</a>
    </article>
  );
}
