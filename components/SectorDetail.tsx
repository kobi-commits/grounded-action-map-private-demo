import type { Sector } from "@/types";
import { capacityGaps, getActionCards, learningPathways, orgName, simulationScenarios, sourceName, sources } from "@/lib/data";
import { ActionCard } from "@/components/ActionCard";
import { ReviewStatusBadge, SeverityBadge, SourceBadge } from "@/components/Badges";
import Link from "next/link";

const sectorLearningMap: Record<string, { gaps: string[]; pathways: string[] }> = {
  wash: {
    gaps: ["wash-disease-prevention-capacity"],
    pathways: ["wash-cholera-campus-organizers", "anticipatory-action-preparedness"]
  },
  "education-children": {
    gaps: ["education-temporary-learning-capacity"],
    pathways: ["education-emergencies-temporary-learning", "youth-leadership-social-cohesion"]
  },
  "protection-social-cohesion": {
    gaps: ["maternal-health-dignity-capacity", "youth-social-cohesion-capacity"],
    pathways: ["maternal-health-dignity", "trauma-informed-peacebuilding"]
  },
  "food-nutrition": {
    gaps: ["trust-responsible-giving-capacity"],
    pathways: ["child-nutrition-responsible-support", "trust-evidence-responsible-giving"]
  },
  health: {
    gaps: ["maternal-health-dignity-capacity", "wash-disease-prevention-capacity"],
    pathways: ["maternal-health-dignity", "wash-cholera-campus-organizers"]
  },
  "shelter-displacement": {
    gaps: ["trust-responsible-giving-capacity"],
    pathways: ["anticipatory-action-preparedness", "technology-tools-without-harm"]
  }
};

const sectorSimulationMap: Record<string, string[]> = {
  wash: ["wash-alert-disease-risk"],
  "education-children": ["temporary-learning-tent-setting"],
  "protection-social-cohesion": ["temporary-learning-tent-setting", "campus-firestorm"],
  "food-nutrition": ["responsible-giving-decision"],
  health: ["wash-alert-disease-risk"],
  "shelter-displacement": ["regional-shock-access-constraint"]
};

export function SectorDetail({ sector }: { sector: Sector }) {
  const actions = getActionCards(sector.actionCardIds);
  const sectorSources = sector.sourceIds.map((id) => sources.find((source) => source.id === id)).filter(Boolean);
  const relatedLearning = sectorLearningMap[sector.id] ?? { gaps: [], pathways: [] };
  const relatedGaps = relatedLearning.gaps.map((id) => capacityGaps.find((gap) => gap.id === id)).filter(Boolean);
  const relatedPathways = relatedLearning.pathways.map((id) => learningPathways.find((pathway) => pathway.id === id)).filter(Boolean);
  const relatedSimulations = (sectorSimulationMap[sector.id] ?? []).map((id) => simulationScenarios.find((scenario) => scenario.id === id)).filter(Boolean);

  return (
    <div className="space-y-8">
      <section className="panel p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-normal text-ink">{sector.name}</h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Latest verified signal</p>
            <p className="mt-2 max-w-3xl text-base leading-7 text-slate-700">{sector.latestSignal}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <SeverityBadge severity={sector.severity} />
            <ReviewStatusBadge status={sector.reviewStatus} />
          </div>
        </div>
        <p className="mt-5 text-sm text-slate-700">
          <span className="font-semibold text-ink">Main constraints:</span> {sector.mainConstraint}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {sector.sourceIds.map((id) => <SourceBadge key={id} name={sourceName(id)} />)}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          ["NOW", sector.now],
          ["NEXT 30 DAYS", sector.next30Days],
          ["NEXT 6 MONTHS", sector.next6Months],
          ["LONG ARC: 5 TO 25 YEARS", sector.longArc]
        ].map(([label, text]) => (
          <div key={label} className="panel p-5">
            <h2 className="text-sm font-semibold text-ink">{label}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
          </div>
        ))}
      </section>

      <section className="panel p-5">
        <h2 className="section-title">Long-Arc Capacity</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Today", sector.now],
            ["30 days", sector.next30Days],
            ["6 months", sector.next6Months],
            ["12 months", "Transition planning, service continuity, safeguarding, and early recovery require local validation."],
            ["5 years", sector.longArc],
            ["10 years", "Youth leadership, livelihoods, public health, trust, and social cohesion may shape recovery capacity."],
            ["25 years", "Generational recovery depends on dignity, wellbeing, institutions, learning, and peace capacity."]
          ].map(([label, text]) => (
            <div key={label} className="rounded-md border border-line bg-slatepanel p-4">
              <h3 className="text-sm font-semibold text-ink">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/foresight/future-capacity" className="text-sm font-semibold text-signal underline">Related future capacity cards</Link>
          <Link href="/foresight/action-ripples" className="text-sm font-semibold text-signal underline">Related action ripples</Link>
          <Link href="/learn/pathways" className="text-sm font-semibold text-signal underline">Related learning pathways</Link>
          <Link href="/learn/simulation-lab" className="text-sm font-semibold text-signal underline">Related simulations</Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-5">
          <h2 className="section-title">Key figures</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {sector.keyFigures.map((figure) => <li key={figure}>{figure}</li>)}
          </ul>
        </div>
        <div className="panel p-5">
          <h2 className="section-title">Relevant organizations</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700">{sector.relevantOrganizationIds.map(orgName).join(", ")}</p>
        </div>
      </section>

      <section>
        <h2 className="section-title">Responsible action cards</h2>
        <div className="mt-4 grid gap-5">
          {actions.map((action) => <ActionCard key={action.id} action={action} />)}
        </div>
      </section>

      <section className="panel p-5">
        <h2 className="section-title">Related simulations</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Simulations help users practice responsible decisions before acting in the real world.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {relatedSimulations.map((scenario) => scenario && (
            <li key={scenario.id}>
              <Link href="/learn/simulation-lab" className="text-signal underline">{scenario.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-5">
          <h2 className="section-title">Related capacity gaps</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Capacity gap hypothesis — human review required.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {relatedGaps.map((gap) => gap && (
              <li key={gap.id}>
                <Link href="/learn/capacity-map" className="text-signal underline">{gap.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-5">
          <h2 className="section-title">Related learning pathways</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Pathways connect the sector to competencies needed for response and recovery.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {relatedPathways.map((pathway) => pathway && (
              <li key={pathway.id}>
                <Link href={`/learn/pathways/${pathway.id}`} className="text-signal underline">{pathway.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-5">
          <h2 className="section-title">Peacebuilding implications</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {sector.peacebuildingImplications.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="panel p-5">
          <h2 className="section-title">Source references</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {sector.sourceIds.map((id) => <SourceBadge key={id} name={sourceName(id)} />)}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {sectorSources.map((source) => source && (
              <li key={source.id}>
                <a className="text-signal underline" href={source.url}>{source.name}</a>: {source.usefulFor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-5">
          <h2 className="section-title">Caveats</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Prototype synthesis requires human review before external circulation.</li>
            <li>No tactical operational locations, routes, staff movements, or facility details are published.</li>
            <li>Action pathways must route through reviewed organizations and safeguarding protocols.</li>
          </ul>
        </div>
        <div className="panel p-5">
          <h2 className="section-title">Methodology note</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            This sector page combines local prototype data, public source references, review-status labels, and safety
            boundaries. Live reports are raw inputs until human reviewers approve a sector update.
          </p>
        </div>
      </section>
    </div>
  );
}
