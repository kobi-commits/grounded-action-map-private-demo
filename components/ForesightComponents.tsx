"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type {
  ActionRipple,
  DeepTimeReflection,
  ForesightMethodNote,
  FunctioningSocietyBaseline,
  FutureCapacityNeed,
  GenerationalScenario,
  KnowledgeSpineItem,
  LongArcAction,
  RegionalContextRingItem,
  SignalItem,
  SocialCohesionFuture,
  SystemsRecoveryItem,
  TimeHorizonItem,
  UserHorizonProfile
} from "@/types";
import { ReviewStatusBadge, SourceBadge } from "@/components/Badges";
import { sourceName } from "@/lib/data";

export function HorizonBadge({ label }: { label: string }) {
  return <span className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-semibold text-slate-700">{label}</span>;
}

export function ForesightCaveatNotice() {
  return (
    <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
      <strong>Caveat:</strong> Scenarios are not predictions. Capacity needs are hypotheses requiring human review and local validation. Regional context is used to understand systems pressure, not to make speculative political claims.
    </div>
  );
}

export function GlassBoxModelNote() {
  return (
    <section className="panel p-5">
      <h2 className="section-title">Glass-Box Foresight</h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        Every future card should show its assumptions, source categories, uncertainty, caveats, and what would change the
        analysis. The model is meant to be inspectable, not mysterious.
      </p>
    </section>
  );
}

export function TimeHorizonNavigator({ horizons }: { horizons: TimeHorizonItem[] }) {
  return (
    <section className="panel p-5">
      <h2 className="section-title">Time Horizon Navigator</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {horizons.map((horizon) => (
          <article key={horizon.id} className="rounded-md border border-line bg-slatepanel p-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-ink">{horizon.label}</h3>
              <ReviewStatusBadge status={horizon.reviewStatus} />
            </div>
            <p className="mt-3 text-sm font-semibold text-ink">{horizon.question}</p>
            <p className="mt-2 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">Capacity focus:</span> {horizon.capacityFocus}</p>
            <p className="mt-2 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">Example action:</span> {horizon.exampleAction}</p>
            <p className="mt-2 text-xs leading-5 text-slate-600">{horizon.caveat}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FindMyHorizon({ profiles }: { profiles: UserHorizonProfile[] }) {
  const [selected, setSelected] = useState(profiles[0]?.id ?? "");
  const profile = profiles.find((item) => item.id === selected) ?? profiles[0];
  return (
    <section className="panel p-5">
      <h2 className="section-title">Find My Horizon</h2>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
        Where are you entering?
        <select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={selected} onChange={(event) => setSelected(event.target.value)}>
          {profiles.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
        </select>
      </label>
      {profile && (
        <div className="mt-5 rounded-md border border-line bg-slatepanel p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-ink">{profile.label}</h3>
            <ReviewStatusBadge status={profile.reviewStatus} />
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700">{profile.description}</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Info title="Recommended horizons" text={profile.recommendedTimeHorizons.join(", ")} />
            <Info title="Suggested action" text={profile.suggestedAction} />
            <Info title="Suggested learning pathway" text={profile.suggestedLearningPathway} />
            <Info title="Suggested simulation" text={profile.suggestedSimulation} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.recommendedPages.map((page) => <Link key={page} href={page} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">{page}</Link>)}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-700">Safety note: act through verified pathways, safeguards, and human review.</p>
        </div>
      )}
    </section>
  );
}

export function KnowledgeSpineCard({ item }: { item: KnowledgeSpineItem }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
        <ReviewStatusBadge status={item.reviewStatus} />
      </div>
      <p className="mt-2 text-sm text-slate-600">{item.description}</p>
      <Info title="What it helps us see" text={item.whatItHelpsUsSee} />
      <Info title="What it does not tell us" text={item.whatItDoesNotTellUs} />
      <div className="mt-4 flex flex-wrap gap-2">{item.exampleSources.map((source) => <SourceCategoryBadge key={source} label={source} />)}</div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">{item.caveats.map((caveat) => <li key={caveat}>{caveat}</li>)}</ul>
    </article>
  );
}

export function KnowledgeSpinePanel({ items }: { items: KnowledgeSpineItem[] }) {
  return (
    <section>
      <h2 className="section-title">Knowledge Spine: How We Know What We Know</h2>
      <div className="mt-4 rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">
        Humanitarian reality → development systems → demographics/youth → public health → climate/economics → future skills → peacebuilding/social science → learning/simulation → wellbeing → action
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">{items.map((item) => <KnowledgeSpineCard key={item.id} item={item} />)}</div>
    </section>
  );
}

export function RegionalContextRing({ rings }: { rings: RegionalContextRingItem[] }) {
  return (
    <section>
      <h2 className="section-title">Regional Context Ring</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {["Gaza", "Immediate context", "Regional context", "Global systems"].map((ring) => <div key={ring} className="rounded-md border border-line bg-slatepanel p-4 text-center text-sm font-semibold text-ink">{ring}</div>)}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">{rings.map((ring) => <RegionalRippleCard key={ring.id} ring={ring} />)}</div>
    </section>
  );
}

export function RegionalRippleCard({ ring }: { ring: RegionalContextRingItem }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{ring.name}</h3>
        <ReviewStatusBadge status={ring.reviewStatus} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{ring.description}</p>
      <Info title="Possible relevance to Gaza" text={ring.possibleRelevanceToGaza} />
      <div className="mt-4 flex flex-wrap gap-2">{ring.systemsConnections.map((item) => <SourceCategoryBadge key={item} label={item} />)}</div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">{ring.caveats.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  );
}

export function FutureCapacityCard({ item }: { item: FutureCapacityNeed }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-lg font-semibold text-ink">{item.futureCapacityNeed}</h3><ReviewStatusBadge status={item.reviewStatus} /></div>
      <div className="mt-3 flex flex-wrap gap-2"><HorizonBadge label={item.timeHorizon.replaceAll("_", " ")} /><CapacityScaleBadge label={item.capacityScale.replaceAll("_", " ")} /></div>
      <Info title="Sector" text={`${item.sector} | ${item.geography}`} />
      <Info title="Current condition" text={item.currentCondition} />
      <Info title="Why it matters" text={item.whyItMatters} />
      <List title="Assumptions" items={item.assumptions} />
      <List title="Risks" items={item.risks} />
      <div className="mt-4 flex flex-wrap gap-2">{item.sourceIds.map((id) => <SourceBadge key={id} name={sourceName(id)} />)}</div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">{item.caveats.map((c) => <li key={c}>{c}</li>)}</ul>
    </article>
  );
}

export function FutureCapacityFilters({ items }: { items: FutureCapacityNeed[] }) {
  const [sector, setSector] = useState("All");
  const sectors = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.sector)))], [items]);
  const visible = sector === "All" ? items : items.filter((item) => item.sector === sector);
  return (
    <section>
      <div className="panel p-5">
        <h2 className="section-title">Future Capacity Needs</h2>
        <label className="mt-4 grid max-w-md gap-2 text-sm font-semibold text-ink">Filter by sector<select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={sector} onChange={(e) => setSector(e.target.value)}>{sectors.map((s) => <option key={s}>{s}</option>)}</select></label>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">{visible.map((item) => <FutureCapacityCard key={item.id} item={item} />)}</div>
    </section>
  );
}

export function FunctioningSocietyBaselineCard({ baseline }: { baseline: FunctioningSocietyBaseline }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-xl font-semibold text-ink">{baseline.sector}</h3><ReviewStatusBadge status={baseline.reviewStatus} /></div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{baseline.baselineDescription}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <List title="Core elements" items={baseline.coreElements} />
        <List title="Current disruptions" items={baseline.currentDisruptions} />
        <List title="Recovery capacities" items={baseline.recoveryCapacities} />
        <List title="Wellbeing dimensions" items={baseline.wellbeingDimensions} />
      </div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">{baseline.caveats.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  );
}

export function GenerationalTimeline({ actions }: { actions: LongArcAction[] }) {
  return <div className="grid gap-5">{actions.map((action) => <LongArcActionCard key={action.id} action={action} />)}</div>;
}

export function ScenarioExplorer({ scenarios }: { scenarios: GenerationalScenario[] }) {
  return <section className="grid gap-5 lg:grid-cols-2">{scenarios.map((scenario) => <ScenarioCard key={scenario.id} scenario={scenario} />)}</section>;
}

export function ScenarioCard({ scenario }: { scenario: GenerationalScenario }) {
  return (
    <article className="panel p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-clay">Scenario — not prediction</p>
      <div className="mt-2 flex flex-wrap items-start justify-between gap-3"><h3 className="text-xl font-semibold text-ink">{scenario.title}</h3><ReviewStatusBadge status={scenario.reviewStatus} /></div>
      <div className="mt-3 flex flex-wrap gap-2"><HorizonBadge label={scenario.timeHorizon} /><ComplexityModeBadge mode={scenario.complexityMode} /><AssumptionBadge label={`confidence: ${scenario.confidence}`} /></div>
      <p className="mt-4 text-sm leading-6 text-slate-700">{scenario.description}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2"><List title="Assumptions" items={scenario.assumptions} /><List title="Possible risks" items={scenario.possibleRisks} /><List title="Capacity needs" items={scenario.capacityNeeds} /><List title="What would change this scenario" items={scenario.whatWouldChangeThisScenario} /></div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">{scenario.caveats.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  );
}

export function AssumptionBadge({ label }: { label: string }) {
  return <span className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">{label}</span>;
}

export function ComplexityModeBadge({ mode }: { mode: string }) {
  return <span className="rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">{mode.replaceAll("_", " ")}</span>;
}

export function LongArcActionCard({ action }: { action: LongArcAction }) {
  const steps = [["Immediate", action.immediateAction], ["30 days", action.thirtyDayContribution], ["6 months", action.sixMonthContribution], ["12 months", action.twelveMonthContribution], ["5 years", action.fiveYearContribution], ["10 years", action.tenYearContribution], ["25 years", action.twentyFiveYearContribution]];
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-xl font-semibold text-ink">{action.title}</h3><ReviewStatusBadge status={action.reviewStatus} /></div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">{steps.map(([label, text]) => <div key={label} className="rounded-md border border-line bg-slatepanel p-3"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p><p className="mt-2 text-sm leading-6 text-slate-700">{text}</p></div>)}</div>
      <List title="Safeguards" items={action.safeguards} />
    </article>
  );
}

export function ActionRippleMap({ ripples }: { ripples: ActionRipple[] }) {
  return <section className="grid gap-5">{ripples.map((ripple) => <ActionRippleCard key={ripple.id} ripple={ripple} />)}</section>;
}

export function ActionRippleCard({ ripple }: { ripple: ActionRipple }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-xl font-semibold text-ink">{ripple.title}</h3><ReviewStatusBadge status={ripple.reviewStatus} /></div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries({ "Starting action": ripple.startingAction, "Immediate effect": ripple.immediateEffect, "Sector ripple": ripple.sectorRipple, "Learning ripple": ripple.learningRipple, "Trust ripple": ripple.trustRipple, "Peacebuilding ripple": ripple.peacebuildingRipple, "Wellbeing ripple": ripple.wellbeingRipple, "Regional ripple": ripple.regionalRipple, "Generational ripple": ripple.generationalRipple }).map(([title, text]) => <Info key={title} title={title} text={text} />)}
      </div>
      <List title="Caveats" items={ripple.caveats} />
    </article>
  );
}

export function SystemsRecoveryMatrix({ items }: { items: SystemsRecoveryItem[] }) {
  return <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <article key={item.id} className="panel p-4"><div className="flex justify-between gap-3"><h3 className="text-base font-semibold text-ink">{item.system}</h3><ReviewStatusBadge status={item.reviewStatus} /></div><Info title="Current stress" text={item.currentStress} /><Info title="Recovery need" text={item.recoveryNeed} /><Info title="Capacity needed" text={item.capacityNeeded} /><HorizonBadge label={item.timeHorizon.replaceAll("_", " ")} /></article>)}</section>;
}

export function DemographicRiskPanel({ signals }: { signals: SignalItem[] }) {
  return <section><h2 className="section-title">Signals Shaping the Future</h2><p className="mt-2 text-sm text-slate-700">Demographic, climate, economic, skills, health, wellbeing, and systems signals.</p><div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{signals.map((signal) => <WellbeingSignalCard key={signal.id} signal={signal} />)}</div></section>;
}

export function SocialCohesionFutureCard({ future }: { future: SocialCohesionFuture }) {
  return <article className="panel p-5"><div className="flex justify-between gap-3"><h3 className="text-lg font-semibold text-ink">{future.title}</h3><ReviewStatusBadge status={future.reviewStatus} /></div><p className="mt-3 text-sm leading-6 text-slate-700">{future.description}</p><div className="mt-4 flex flex-wrap gap-2">{future.relatedCompetencies.map((item) => <SourceCategoryBadge key={item} label={item} />)}</div></article>;
}

export function DeepTimePerspective({ reflections }: { reflections: DeepTimeReflection[] }) {
  return <section><h2 className="section-title">Deep Time Perspective</h2><HumanTimeBridge /><div className="mt-5 grid gap-5 md:grid-cols-3">{reflections.map((r) => <article key={r.id} className="panel p-5"><div className="flex justify-between gap-3"><h3 className="text-lg font-semibold text-ink">{r.title}</h3><ReviewStatusBadge status={r.reviewStatus} /></div><p className="mt-3 text-sm leading-6 text-slate-700">{r.reflection}</p><p className="mt-3 text-sm font-semibold text-ink">{r.userPrompt}</p><p className="mt-3 text-xs leading-5 text-slate-600">{r.caveat}</p></article>)}</div></section>;
}

export function HumanTimeBridge() {
  return <div className="mt-4 rounded-md border border-line bg-slatepanel p-5 text-sm leading-6 text-slate-700"><strong className="text-ink">Human Time Bridge:</strong> One human life can touch nearly two centuries. An elder carries memory from before our birth. A child carries the future beyond our lifetime. The present is a bridge between inherited memory and future responsibility.</div>;
}

export function SourceCategoryBadge({ label }: { label: string }) {
  return <span className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">{label}</span>;
}

export function CapacityScaleBadge({ label }: { label: string }) {
  return <span className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">{label}</span>;
}

export function WellbeingSignalCard({ signal }: { signal: SignalItem }) {
  return <article className="panel p-4"><div className="flex justify-between gap-3"><h3 className="text-base font-semibold text-ink">{signal.title}</h3><ReviewStatusBadge status={signal.reviewStatus} /></div><p className="mt-3 text-sm leading-6 text-slate-700">{signal.whyItMatters}</p><p className="mt-3 text-xs font-semibold text-slate-600">Prototype signal — source review required</p><p className="mt-2 text-xs leading-5 text-slate-600">{signal.caveat}</p></article>;
}

export function MethodNoteCard({ note }: { note: ForesightMethodNote }) {
  return <article className="panel p-5"><div className="flex justify-between gap-3"><h3 className="text-lg font-semibold text-ink">{note.title}</h3><ReviewStatusBadge status={note.reviewStatus} /></div><p className="mt-3 text-sm font-semibold text-ink">{note.principle}</p><p className="mt-2 text-sm leading-6 text-slate-700">{note.explanation}</p><p className="mt-3 text-xs leading-5 text-slate-600">{note.userFacingCaveat}</p></article>;
}

function Info({ title, text }: { title: string; text: string }) {
  return <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">{title}:</span> {text}</p>;
}

function List({ title, items }: { title: string; items: string[] }) {
  return <div className="mt-4"><p className="text-sm font-semibold text-ink">{title}</p><ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}
