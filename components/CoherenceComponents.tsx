"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ReviewStatusBadge } from "@/components/Badges";
import { TextExportButtons } from "@/components/TextExportButtons";
import type {
  CoherenceEdge,
  CoherenceNode,
  DemoPersona,
  DiffusionAsset,
  InnovationHabit,
  PathTrace,
  ProductSpineItem,
  PublicEcosystemItem,
  ShareableExplainer,
  StrategyCascadeItem,
  UserJourneyView
} from "@/types";

const columnOrder = [
  "Humanitarian Reality",
  "Evidence and Trust",
  "Responsible Action",
  "Learning and Practice",
  "Peacebuilding and Meaning",
  "Future Capacity",
  "Public Ecosystem"
];

const actionRippleRules: Record<string, Record<string, string>> = {
  "support child nutrition": {
    immediateEffect: "Helps address urgent nutrition risk through verified nutrition and food-security actors.",
    sectorRipple: "Food, health, maternal care, and child development.",
    learningRipple: "Nutrition basics, responsible giving, and public-health awareness.",
    trustRipple: "Requires official channels and visible organization evidence.",
    peacebuildingRipple: "Protects dignity and reduces social stress.",
    futureCapacityRipple: "Supports child development, learning readiness, and long-term human capital.",
    safeguard: "No direct contact with minors. Route through reviewed partners only."
  },
  "support temporary learning": {
    immediateEffect: "Helps children regain structure, safety, and learning continuity through partner-mediated programs.",
    sectorRipple: "Education, protection, psychosocial support, and youth leadership.",
    learningRipple: "Safeguarding, education in emergencies, and trauma-informed learning.",
    trustRipple: "Requires vetted education and child-protection partners.",
    peacebuildingRipple: "Supports youth agency and future civic capacity.",
    futureCapacityRipple: "Contributes to education recovery, livelihoods, and long-term peace capacity.",
    safeguard: "No direct unsupervised contact with minors or vulnerable people."
  },
  "support WASH and disease prevention": {
    immediateEffect: "Supports safe water, hygiene, and disease-prevention awareness.",
    sectorRipple: "WASH, health, shelter, and protection.",
    learningRipple: "Public-health preparedness, safe communication, and rumor prevention.",
    trustRipple: "Requires verified WASH and public-health partners.",
    peacebuildingRipple: "Reduces fear and supports dignity.",
    futureCapacityRipple: "Builds public-health resilience and infrastructure recovery.",
    safeguard: "This is not medical advice. Use official public-health guidance."
  },
  "support emergency health services": {
    immediateEffect: "Supports emergency care, primary care continuity, supplies, and referral systems through official actors.",
    sectorRipple: "Health, WASH, maternal health, rehabilitation, and protection.",
    learningRipple: "Humanitarian health basics, public-health preparedness, and referral awareness.",
    trustRipple: "Requires official health partners and evidence review.",
    peacebuildingRipple: "Protects life and dignity as foundations for recovery.",
    futureCapacityRipple: "Supports health workforce recovery and public-health readiness.",
    safeguard: "Do not give medical advice or publish operational facility details."
  },
  "support youth leadership and social cohesion": {
    immediateEffect: "Creates safe learning and leadership opportunities when partner-mediated.",
    sectorRipple: "Protection, education, peacebuilding, and civic capacity.",
    learningRipple: "Conflict intelligence, emotional intelligence, cultural intelligence, and dialogue.",
    trustRipple: "Requires safeguarding and partner review.",
    peacebuildingRipple: "Supports nonviolence, narrative repair, and civic agency.",
    futureCapacityRipple: "Builds generational peacebuilding and shared-society capacity.",
    safeguard: "Youth pathways require safeguarding review and human approval."
  },
  "support trust evidence and responsible giving": {
    immediateEffect: "Helps people route support responsibly and avoid unreviewed claims.",
    sectorRipple: "All sectors benefit from clearer evidence and routing discipline.",
    learningRipple: "Source verification, transparency review, sanctions awareness, and aid accountability.",
    trustRipple: "Strengthens a culture of evidence rather than endorsement.",
    peacebuildingRipple: "Reduces rumor, manipulation, and harmful action.",
    futureCapacityRipple: "Supports accountable solidarity and transparent humanitarian ecosystems.",
    safeguard: "No rankings, certifications, or claims that any organization is risk-free."
  },
  "build responsible technology": {
    immediateEffect: "Helps teams build public-data tools without exposing vulnerable people.",
    sectorRipple: "Trust, learning, public communication, and safe civic technology.",
    learningRipple: "Privacy, data minimization, source verification, and partner review.",
    trustRipple: "Requires visible review workflow and no sensitive data collection.",
    peacebuildingRipple: "Prevents technology from amplifying harm or misinformation.",
    futureCapacityRipple: "Supports digital and AI readiness over time.",
    safeguard: "No location exposure, no beneficiary identification, and no deployment without partner review."
  },
  "organize a workshop": {
    immediateEffect: "Creates a structured learning space for understanding and responsible action planning.",
    sectorRipple: "Can connect any sector to learning, trust evidence, and action pathways.",
    learningRipple: "Participants build artifacts such as briefings, checklists, and partner questions.",
    trustRipple: "Keeps sources, review status, and caveats visible.",
    peacebuildingRipple: "Can lower harm when facilitation is trauma-aware and conflict-sensitive.",
    futureCapacityRipple: "Builds civic learning and leadership capacity.",
    safeguard: "Avoid manipulative messaging and direct contact with vulnerable groups."
  },
  "create a campus action lab": {
    immediateEffect: "Turns concern into a guided project with review, safeguards, and partner questions.",
    sectorRipple: "Can support education, WASH, trust, technology, advocacy, and public learning.",
    learningRipple: "Teams practice role-based learning and simulation before action.",
    trustRipple: "Requires advisor review and source discipline.",
    peacebuildingRipple: "Builds conflict intelligence and healthier public discourse.",
    futureCapacityRipple: "Supports university partnerships and long-term civic capacity.",
    safeguard: "No field-facing deployment without vetted partners and human review."
  }
};

const horizons = ["today", "30 days", "6 months", "12 months", "5 years", "10 years", "25 years"];
const audiences = ["student", "donor", "university", "technologist", "peacebuilder", "civic group", "foundation", "advisor"];

export function BigPictureMap() {
  const steps = ["Gaza Now", "Evidence", "Needs", "Trust", "Learning", "Human Capacity", "Practice", "Action", "Future Capacity", "Public Activation"];
  return (
    <section className="panel p-5">
      <h2 className="section-title">The Big Picture</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
        One simple path holds the whole system together.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3 lg:grid-cols-9">
        {steps.map((step, index) => (
          <div key={step} className="rounded-md border border-line bg-slatepanel p-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{index + 1}</p>
            <p className="mt-2 text-sm font-semibold text-ink">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TraceOnePath({ traces }: { traces: PathTrace[] }) {
  const [selected, setSelected] = useState(traces[0]?.id ?? "");
  const trace = traces.find((item) => item.id === selected) ?? traces[0];
  const markdown = trace ? pathTraceMarkdown(trace) : "";

  if (!trace) return null;

  const chain = [
    ["Signal", trace.signal],
    ["Source", trace.sourceIds.join(", ")],
    ["Sector", trace.sectorIds.join(", ")],
    ["Need", trace.need],
    ["Responsible Action", trace.responsibleAction],
    ["Trust Evidence", trace.trustEvidence],
    ["Learning Pathway", trace.learningPathwayIds.join(", ")],
    ["Simulation", trace.simulationIds.join(", ")],
    ["Peacebuilding Lens", trace.peacebuildingLensIds.join(", ")],
    ["Future Capacity", trace.futureCapacityIds.join(", ")],
    ["Shareable Output", trace.shareableOutput]
  ];

  return (
    <section className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="section-title">Trace One Path</h2>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
            Follow one complete pathway from a signal to a responsible action and long-arc contribution. This uses sample local data only.
          </p>
        </div>
        <ReviewStatusBadge status={trace.reviewStatus} />
      </div>
      <label className="mt-5 grid max-w-xl gap-2 text-sm font-semibold text-ink">
        Starting point
        <select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={selected} onChange={(event) => setSelected(event.target.value)}>
          {traces.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
      </label>
      <div className="mt-5 rounded-md border border-line bg-slatepanel p-4">
        <h3 className="text-xl font-semibold text-ink">{trace.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          This path shows how one concern can become a reviewed, safeguarded learning and action pathway.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {chain.map(([label, value], index) => (
            <article key={label} className="rounded-md border border-line bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{index + 1}. {label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{value}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            <p className="font-semibold">Source and review caveat</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {trace.caveats.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="rounded-md border border-line bg-white p-4">
            <p className="text-sm font-semibold text-ink">Next pages</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="/action" className="rounded-full border border-line px-2.5 py-1 text-xs font-semibold text-signal">Action</Link>
              <Link href="/trust" className="rounded-full border border-line px-2.5 py-1 text-xs font-semibold text-signal">Trust</Link>
              <Link href="/learn/pathways" className="rounded-full border border-line px-2.5 py-1 text-xs font-semibold text-signal">Learning</Link>
              <Link href="/learn/simulation-lab" className="rounded-full border border-line px-2.5 py-1 text-xs font-semibold text-signal">Simulation</Link>
              <Link href="/peacebuilding" className="rounded-full border border-line px-2.5 py-1 text-xs font-semibold text-signal">Peacebuilding</Link>
              <Link href="/foresight" className="rounded-full border border-line px-2.5 py-1 text-xs font-semibold text-signal">Future</Link>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <TextExportButtons text={markdown} filename={`${trace.id}-path-trace.md`} copyLabel="Copy this path" downloadLabel="Download path as Markdown" />
        </div>
      </div>
    </section>
  );
}

export function DynamicCoherenceMap({ nodes, edges }: { nodes: CoherenceNode[]; edges: CoherenceEdge[] }) {
  const [layer, setLayer] = useState("All");
  const visibleLayers = layer === "All" ? columnOrder : [layer];
  const layers = useMemo(() => ["All", ...columnOrder], []);

  return (
    <section className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="section-title">Dynamic Coherence Map</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Gaza now → Evidence → Needs → Trust → Learning → Action → Future capacity
          </p>
        </div>
        <label className="grid gap-1 text-sm font-semibold text-ink">
          Filter map
          <select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={layer} onChange={(event) => setLayer(event.target.value)}>
            {layers.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-7">
        {visibleLayers.map((name) => (
          <div key={name} className="rounded-md border border-line bg-slatepanel p-3">
            <h3 className="text-sm font-semibold text-ink">{name}</h3>
            <div className="mt-3 space-y-3">
              {nodes.filter((node) => node.layer === name).map((node) => <CoherenceNodeCard key={node.id} node={node} />)}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-ink">Sample Connections</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {edges.slice(0, 6).map((edge) => <CoherenceEdgeCard key={edge.id} edge={edge} />)}
        </div>
      </div>
    </section>
  );
}

export function ChooseYourView({ views }: { views: UserJourneyView[] }) {
  const [selected, setSelected] = useState(views[0]?.id ?? "");
  const view = views.find((item) => item.id === selected) ?? views[0];

  return (
    <section className="panel p-5">
      <h2 className="section-title">Choose Your View</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">Pick the lens that matches why you came here.</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {views.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item.id)}
            className={`rounded-md border p-4 text-left ${selected === item.id ? "border-signal bg-slatepanel" : "border-line bg-white hover:bg-slatepanel"}`}
          >
            <span className="text-sm font-semibold text-ink">{item.label}</span>
            <span className="mt-2 block text-xs leading-5 text-slate-600">{item.openingQuestion}</span>
          </button>
        ))}
      </div>
      {view && (
        <div className="mt-5 rounded-md border border-line bg-slatepanel p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-xl font-semibold text-ink">{view.label}</h3>
            <ReviewStatusBadge status={view.reviewStatus} />
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700">{view.description}</p>
          <p className="mt-3 text-sm font-semibold text-ink">{view.openingQuestion}</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Info title="First pages" text={view.recommendedRoutes.join(" → ")} />
            <Info title="Recommended action" text={view.recommendedAction} />
            <Info title="Recommended learning path" text={view.recommendedLearningPath} />
            <Info title="What to share" text={view.whatToShare} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {view.recommendedRoutes.map((route) => (
              <Link key={route} href={route} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                Open {route}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function WhatMakesDifferent() {
  const cards = [
    ["Not just a dashboard", "It connects reporting to learning, action, trust, peacebuilding, and future capacity."],
    ["Not just a donation directory", "It does not process donations and does not route support without review."],
    ["Not a charity ranking tool", "It shows evidence and caveats, not scores or endorsements."],
    ["Not just a learning portal", "Learning connects to simulations, artifacts, safeguards, and action pathways."],
    ["Not a prediction engine", "Scenarios show assumptions and caveats; they are not predictions."],
    ["A living map", "It helps people move from concern to responsible action and long-arc contribution."]
  ];
  return (
    <section>
      <h2 className="section-title">What Makes This Different</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(([title, body]) => (
          <article key={title} className="panel p-5">
            <h3 className="text-base font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProductSpinePanel({ items }: { items: ProductSpineItem[] }) {
  return (
    <section className="panel p-5">
      <h2 className="section-title">The Product Spine</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        The product is designed so that information does not stop at awareness. It moves toward understanding,
        capacity, responsible action, and long-term repair.
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <article key={item.id} className="rounded-md border border-line bg-slatepanel p-4">
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-white">{index + 1}</span>
              <ReviewStatusBadge status={item.reviewStatus} />
            </div>
            <h3 className="mt-3 text-base font-semibold text-ink">{item.step}</h3>
            <Info title="What happens" text={item.whatHappens} />
            <Info title="Must be reviewed" text={item.whatMustBeReviewed} />
            <Info title="Output" text={item.outputCreated} />
            <Link href={item.pageRoute} className="mt-3 inline-flex text-sm font-semibold text-signal underline">Open page</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ActionRippleExplorer() {
  const [action, setAction] = useState(Object.keys(actionRippleRules)[0]);
  const [horizon, setHorizon] = useState(horizons[0]);
  const [audience, setAudience] = useState(audiences[0]);
  const result = actionRippleRules[action];

  return (
    <section className="panel p-5">
      <h2 className="section-title">Action Ripple Explorer</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
        Choose an action, horizon, and audience to see a sample rule-based ripple. No AI is used.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <Select label="Action" value={action} options={Object.keys(actionRippleRules)} onChange={setAction} />
        <Select label="Time horizon" value={horizon} options={horizons} onChange={setHorizon} />
        <Select label="Audience" value={audience} options={audiences} onChange={setAudience} />
      </div>
      <div className="mt-5 rounded-md border border-line bg-slatepanel p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sample output for {audience} over {horizon}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Info title="Immediate effect" text={result.immediateEffect} />
          <Info title="Sector ripple" text={result.sectorRipple} />
          <Info title="Learning ripple" text={result.learningRipple} />
          <Info title="Trust ripple" text={result.trustRipple} />
          <Info title="Peacebuilding ripple" text={result.peacebuildingRipple} />
          <Info title="Future capacity ripple" text={result.futureCapacityRipple} />
        </div>
        <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900">
          <span className="font-semibold">Safeguard:</span> {result.safeguard}
        </p>
        <p className="mt-3 text-sm font-semibold text-ink">Next responsible step: review sources, choose the relevant learning pathway, practice with a simulation, and act through reviewed partners.</p>
      </div>
    </section>
  );
}

export function LearningToActionBridge() {
  const examples = [
    ["WASH risk", "public-health preparedness", "WASH and Cholera Preparedness pathway", "WASH Alert simulation", "campus briefing", "support verified WASH partners"],
    ["Education disruption", "safeguarding + education in emergencies", "Education in Emergencies pathway", "Temporary Learning simulation", "partner intake checklist", "support temporary learning safely"],
    ["Campus polarization", "conflict intelligence + dialogue", "Conflict Transformation for Student Leaders", "Campus Firestorm simulation", "facilitated conversation plan", "reduce harm and create learning space"],
    ["Trust confusion", "source verification + transparency review", "Trust Evidence and Responsible Giving", "Responsible Giving simulation", "donor checklist", "route support through official channels"]
  ];
  return <Bridge title="Learning-to-Action Bridge" intro="Learning becomes useful when it changes what people are able to see, practice, build, and support." flow="Need → Competency → Learning Pathway → Simulation → Artifact → Action" examples={examples} />;
}

export function PeacebuildingFutureBridge() {
  const examples = [
    ["Children in tents", "disrupted safety, learning, belonging", "trauma-informed education and youth leadership", "Education in Emergencies pathway", "support temporary learning", "future civic capacity"],
    ["Polarized campus", "hardened identity and fear", "conflict intelligence and dialogue capacity", "Campus Firestorm simulation", "facilitated learning space", "healthier public discourse"],
    ["Aid confusion", "mistrust and misinformation", "transparency literacy", "Responsible Giving pathway", "trust evidence review", "culture of accountable solidarity"]
  ];
  return <Bridge title="Peacebuilding-to-Future Bridge" intro="Peacebuilding is not only a theory layer. It helps users understand what capacities are needed over time: safety, dignity, trust, dialogue, narrative repair, youth leadership, civic participation, and shared future." flow="Humanitarian need → Relational harm → Social capacity needed → Learning pathway → Action pathway → Future capacity" examples={examples} />;
}

export function PublicEcosystemMap({ items }: { items: PublicEcosystemItem[] }) {
  return (
    <section className="panel p-5">
      <h2 className="section-title">Public Ecosystem Map</h2>
      <p className="mt-3 rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">
        Concern → Understanding → Verified Need → Trust Evidence → Learning Pathway → Simulation → Responsible Action → Long-Term Capacity → Public Education → Partner Ecosystem
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="rounded-md border border-line bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-ink">{item.name}</h3>
              <ReviewStatusBadge status={item.reviewStatus} />
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{item.type}</p>
            <Info title="Role" text={item.role} />
            <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
            <Link href={item.route} className="mt-3 inline-flex text-sm font-semibold text-signal underline">Open related page</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StrategyCascadePanel({ items }: { items: StrategyCascadeItem[] }) {
  return (
    <section className="panel p-5">
      <h2 className="section-title">Strategy Cascade</h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">Strategy is a set of choices. This page makes the choices visible.</p>
      <div className="mt-5 grid gap-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-md border border-line bg-slatepanel p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-ink">{item.level}</h3>
              <ReviewStatusBadge status={item.reviewStatus} />
            </div>
            <p className="mt-2 text-sm font-semibold text-ink">{item.question}</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
            <Info title="Design implication" text={item.designImplication} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function InnovationHabitCard({ habit }: { habit: InnovationHabit }) {
  return (
    <article className="panel p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{habit.title}</h3>
        <ReviewStatusBadge status={habit.reviewStatus} />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Info title="Behavior" text={habit.behavior} />
        <Info title="Enabler" text={habit.enabler} />
        <Info title="Artifact" text={habit.artifact} />
        <Info title="Nudge" text={habit.nudge} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{habit.whyItMatters}</p>
    </article>
  );
}

export function DiffusionAssetCard({ asset }: { asset: DiffusionAsset }) {
  return (
    <article className="rounded-md border border-line bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-ink">{asset.title}</h3>
        <ReviewStatusBadge status={asset.reviewStatus} />
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{asset.assetType} · {asset.audience}</p>
      <p className="mt-3 text-sm leading-6 text-slate-700">{asset.message}</p>
      <Info title="Suggested use" text={asset.suggestedUse} />
    </article>
  );
}

export function ShareableExplainerCard({ explainer }: { explainer: ShareableExplainer }) {
  return (
    <article className="rounded-md border border-line bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-ink">{explainer.title}</h3>
        <ReviewStatusBadge status={explainer.reviewStatus} />
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{explainer.format} · {explainer.audience}</p>
      <p className="mt-3 text-sm leading-6 text-slate-700">{explainer.text}</p>
    </article>
  );
}

export function PersonaJourneyCard({ persona }: { persona: DemoPersona }) {
  return (
    <article className="panel p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-ink">{persona.label}</h3>
        <ReviewStatusBadge status={persona.reviewStatus} />
      </div>
      <p className="mt-3 rounded-md border border-line bg-slatepanel p-3 text-sm font-semibold text-ink">{persona.journey.join(" → ")}</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Info title="What they see" text={persona.whatTheySee} />
        <Info title="What they learn" text={persona.whatTheyLearn} />
        <Info title="What they can do" text={persona.whatTheyCanDo} />
        <Info title="Safeguards" text={persona.safeguards.join("; ")} />
      </div>
      <Link href={persona.nextRoute} className="mt-4 inline-flex rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Open next page</Link>
    </article>
  );
}

function CoherenceNodeCard({ node }: { node: CoherenceNode }) {
  return (
    <Link href={node.route} className="block rounded-md border border-line bg-white p-3 hover:border-signal">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-ink">{node.label}</h4>
        <ReviewStatusBadge status={node.reviewStatus} />
      </div>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">{node.type.replaceAll("_", " ")}</p>
      <p className="mt-2 text-xs leading-5 text-slate-700">{node.description}</p>
      <p className="mt-2 text-[11px] leading-4 text-slate-500">{node.caveat}</p>
    </Link>
  );
}

function CoherenceEdgeCard({ edge }: { edge: CoherenceEdge }) {
  return (
    <article className="rounded-md border border-line bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-ink">{edge.label}</h4>
        <ReviewStatusBadge status={edge.reviewStatus} />
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{edge.relationshipType}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{edge.explanation}</p>
      <p className="mt-2 text-xs leading-5 text-slate-600">{edge.caveat}</p>
    </article>
  );
}

function Bridge({ title, intro, flow, examples }: { title: string; intro: string; flow: string; examples: string[][] }) {
  return (
    <section className="panel p-5">
      <h2 className="section-title">{title}</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">{intro}</p>
      <p className="mt-4 rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">{flow}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {examples.map((example) => (
          <article key={example.join("|")} className="rounded-md border border-line bg-white p-4">
            <div className="grid gap-2 text-sm text-slate-700">
              {example.map((item, index) => (
                <p key={item}><span className="font-semibold text-ink">{index + 1}.</span> {item}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return <p className="text-sm leading-6 text-slate-700"><span className="font-semibold text-ink">{title}:</span> {text}</p>;
}

function pathTraceMarkdown(trace: PathTrace) {
  return `# ${trace.title} Path Trace

Review status: ${trace.reviewStatus.replaceAll("_", " ")}

## Signal
${trace.signal}

## Source
${trace.sourceIds.join(", ")}

## Sector
${trace.sectorIds.join(", ")}

## Need
${trace.need}

## Responsible Action
${trace.responsibleAction}

## Trust Evidence
${trace.trustEvidence}

## Learning Pathway
${trace.learningPathwayIds.join(", ")}

## Simulation
${trace.simulationIds.join(", ")}

## Peacebuilding Lens
${trace.peacebuildingLensIds.join(", ")}

## Future Capacity
${trace.futureCapacityIds.join(", ")}

## Shareable Output
${trace.shareableOutput}

## Caveats
${trace.caveats.map((item) => `- ${item}`).join("\n")}
`;
}
