import Link from "next/link";
import { JourneyRail } from "@/components/JourneyRail";
import {
  ActionRippleMap,
  DeepTimePerspective,
  DemographicRiskPanel,
  FindMyHorizon,
  ForesightCaveatNotice,
  FunctioningSocietyBaselineCard,
  FutureCapacityCard,
  GlassBoxModelNote,
  KnowledgeSpinePanel,
  RegionalContextRing,
  ScenarioExplorer,
  SocialCohesionFutureCard,
  SystemsRecoveryMatrix,
  TimeHorizonNavigator
} from "@/components/ForesightComponents";
import {
  actionRipples,
  deepTimeReflections,
  demographicRiskSignals,
  foresightMethodNotes,
  functioningSocietyBaselines,
  futureCapacityNeeds,
  futureSkillsSignals,
  generationalScenarios,
  knowledgeSpine,
  publicHealthRiskSignals,
  regionalContextRings,
  socialCohesionFutures,
  systemsRecoveryMap,
  timeHorizons,
  userHorizonProfiles,
  wellbeingSignals
} from "@/lib/data";
import { MethodNoteCard, WellbeingSignalCard } from "@/components/ForesightComponents";

const pages = [
  ["Future Capacity", "/foresight/future-capacity"],
  ["Scenarios", "/foresight/scenarios"],
  ["Functioning Society", "/foresight/functioning-society"],
  ["Long-Arc Actions", "/foresight/long-arc-actions"],
  ["Knowledge Spine", "/foresight/knowledge-spine"],
  ["Regional Context", "/foresight/regional-context"],
  ["Deep Time", "/foresight/deep-time"],
  ["Action Ripples", "/foresight/action-ripples"],
  ["Find My Horizon", "/foresight/my-horizon"],
  ["Systems Map", "/foresight/systems-map"]
];

export default function ForesightPage() {
  const signals = [...demographicRiskSignals, ...futureSkillsSignals, ...publicHealthRiskSignals, ...wellbeingSignals];
  return (
    <div className="page-shell space-y-10">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">From Emergency Response to Generational Recovery</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Future Capacity Map</h1>
        <p className="mt-2 text-lg text-slate-700">From urgent response to generational recovery.</p>
        <p className="mt-5 max-w-5xl text-base leading-7 text-slate-700">
          Grounded Action Map connects immediate humanitarian needs to longer-term recovery, regional systems,
          demographic pressure, public health, education, youth leadership, social cohesion, wellbeing, and peacebuilding
          capacity. The goal is not to predict the future, but to help people see what capacities may be needed across
          time horizons.
        </p>
        <div className="mt-5 grid gap-3 text-sm font-semibold text-ink md:grid-cols-2">
          <p>Gaza is the starting point. The region is the context. The long arc is the horizon.</p>
          <p>What we do today should connect to the capacities needed for recovery, dignity, wellbeing, and future peace.</p>
          <p>Scenarios are not predictions. They are structured ways to think about possible futures, assumptions, risks, and capacity needs.</p>
          <p>No one has to remain stuck in helplessness. There is always a responsible pathway.</p>
        </div>
      </section>
      <JourneyRail />
      <ForesightCaveatNotice />
      <section className="panel p-5">
        <h2 className="section-title">See → Understand → Learn → Act → Contribute to the long arc</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Gaza remains the center. Regional and long-range analysis exists to strengthen — not dilute — the urgent present.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">{pages.map(([label, href]) => <Link key={href} href={href} className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">{label}</Link>)}</div>
      </section>
      <TimeHorizonNavigator horizons={timeHorizons} />
      <FindMyHorizon profiles={userHorizonProfiles} />
      <KnowledgeSpinePanel items={knowledgeSpine.slice(0, 4)} />
      <RegionalContextRing rings={regionalContextRings} />
      <section><h2 className="section-title">Functioning Society Baseline</h2><div className="mt-5 grid gap-5 lg:grid-cols-2">{functioningSocietyBaselines.slice(0, 2).map((item) => <FunctioningSocietyBaselineCard key={item.id} baseline={item} />)}</div></section>
      <section><h2 className="section-title">Future Capacity Map</h2><div className="mt-5 grid gap-5 lg:grid-cols-2">{futureCapacityNeeds.map((item) => <FutureCapacityCard key={item.id} item={item} />)}</div></section>
      <section><h2 className="section-title">Action Ripple Map</h2><ActionRippleMap ripples={actionRipples} /></section>
      <section><h2 className="section-title">Scenario Explorer</h2><ScenarioExplorer scenarios={generationalScenarios} /></section>
      <section><h2 className="section-title">Systems Recovery Matrix</h2><SystemsRecoveryMatrix items={systemsRecoveryMap} /></section>
      <section><h2 className="section-title">Social Cohesion and Peace Capacity Futures</h2><p className="mt-3 text-sm leading-6 text-slate-700">Long-term recovery requires more than infrastructure. It requires safety, dignity, youth agency, civic trust, trauma-informed leadership, conflict transformation, wellbeing, and pathways for coexistence.</p><div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{socialCohesionFutures.map((item) => <SocialCohesionFutureCard key={item.id} future={item} />)}</div></section>
      <DemographicRiskPanel signals={signals} />
      <section className="panel p-5"><h2 className="section-title">Conflict-Intelligent Future Capacity</h2><p className="mt-3 text-sm leading-6 text-slate-700">Future recovery will require the ability to read conflict at multiple levels: self, social, situational, and systemic.</p><div className="mt-5 grid gap-4 md:grid-cols-4">{["Self level","Social level","Situational level","Systemic level"].map((item) => <div key={item} className="rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">{item}</div>)}</div><div className="mt-4 flex flex-wrap gap-2">{["Start smart","Grow rapport","Optimize opposites","Master adaptivity","Get wise","Play the long game","Find hidden levers"].map((item) => <span key={item} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">{item}</span>)}</div></section>
      <section><h2 className="section-title">Youth Futures: From Demographic Pressure to Peace Capacity</h2><p className="mt-3 text-sm leading-6 text-slate-700">Young people should not be treated only as a risk category. They are agents of recovery, leadership, learning, prevention of violence, social cohesion, and peacebuilding.</p><div className="mt-5 grid gap-4 md:grid-cols-5">{["Participation","Protection","Prevention","Partnerships","Reintegration / recovery pathways"].map((item) => <div key={item} className="panel p-4"><h3 className="text-sm font-semibold text-ink">{item}</h3><p className="mt-2 text-xs leading-5 text-slate-700">Youth pathways involving minors or vulnerable groups must be partner-mediated, safeguarding-reviewed, and human-approved.</p></div>)}</div></section>
      <section><h2 className="section-title">Wellbeing, Harmony, and Balance</h2><p className="mt-3 text-sm leading-6 text-slate-700">Recovery is not only infrastructure or income. People also need safety, balance, harmony, belonging, peace of mind, dignity, and contentment.</p><div className="mt-5 grid gap-3 md:grid-cols-5">{["safety","dignity","health","belonging","balance","harmony","inner peace","stability","future orientation","participation"].map((item) => <WellbeingSignalCard key={item} signal={{id:item,title:item,whyItMatters:"Prototype wellbeing lens — source review and local validation required.",relatedSectors:[],relatedCapacityNeeds:[],sourceCategoryPlaceholder:"wellbeing research",reviewStatus:"needs_review",caveat:"Do not claim to measure wellbeing in Gaza unless sourced."}} />)}</div></section>
      <DeepTimePerspective reflections={deepTimeReflections} />
      <GlassBoxModelNote />
      <section><h2 className="section-title">Methodology and Caveats</h2><div className="mt-5 grid gap-5 md:grid-cols-2">{foresightMethodNotes.map((note) => <MethodNoteCard key={note.id} note={note} />)}</div></section>
    </div>
  );
}
