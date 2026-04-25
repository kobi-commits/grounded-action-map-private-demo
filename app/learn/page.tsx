import Link from "next/link";
import { LearningArtifactCard, LearningDesignPrincipleCard, PracticeToActionPanel } from "@/components/DeepLearningCards";
import { JourneyRail } from "@/components/JourneyRail";
import { LearningCycle } from "@/components/LearningCycle";
import { CapacityGapCard, CompetencyCard, LearningPathwayCard, LearningResourceCard } from "@/components/LearningCards";
import { LearningPathBuilder } from "@/components/LearningPathBuilder";
import { LearnModuleCard } from "@/components/LearnModuleCard";
import { SafetyNotice } from "@/components/SafetyNotice";
import { capacityGaps, collectiveLearningModes, competencies, learningArtifacts, learningDesignPrinciples, learningPathways, learningResources, learnModules } from "@/lib/data";
import { capacityLevelLabels } from "@/lib/learning";

const capacityLevels = Object.entries(capacityLevelLabels);

export default function LearnPage() {
  return (
    <div className="page-shell space-y-10">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Learn What Is Needed Now</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Learn and Act</h1>
        <p className="mt-4 max-w-5xl text-base leading-7 text-slate-700">
          Build the knowledge and competencies needed to respond responsibly — from humanitarian basics and public-health
          preparedness to conflict transformation, trauma-informed leadership, emergency preparedness, social cohesion,
          and practical peacebuilding.
        </p>
        <p className="mt-3 text-sm font-semibold text-ink">When needs change, the learning path changes.</p>
        <p className="mt-2 text-sm font-semibold text-ink">
          Learning here is not passive. Users see a need, understand the system, practice through scenarios, build an
          artifact, and choose a responsible next step.
        </p>
      </section>

      <JourneyRail />
      <LearningCycle />

      <section className="panel p-5">
        <h2 className="section-title">Human Capacity Studio</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
          Build the capacities to act wisely, relate humanely, and contribute over time: self-awareness, conflict
          intelligence, communication, systems thinking, safeguarding, creativity, and long-arc action.
        </p>
        <Link href="/learn/human-capacity" className="mt-5 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
          Open Human Capacity Studio
        </Link>
      </section>

      <section className="panel p-5">
        <h2 className="section-title">Learn What Is Needed Now</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
          Choose an issue, your role, your goal, your available time, and whether you are learning alone or with others.
          The platform generates a structured pathway using free/public resources, internal modules, and
          responsible-action safeguards.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/learn/pathways" className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">Build my learning path</Link>
          <Link href="/learn/capacity-map" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">View capacity map</Link>
          <Link href="/learn/competencies" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Explore competency map</Link>
          <Link href="/learn/simulation-lab" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Open simulation lab</Link>
          <Link href="/learn/human-capacity" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Human Capacity Studio</Link>
          <Link href="/learn/competency-passport" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">View competency passport</Link>
          <Link href="/learn/collective-learning" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Explore collective learning</Link>
          <Link href="/learn/learning-design" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">See learning design</Link>
          <Link href="/foresight" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Future Capacity Map</Link>
          <Link href="/foresight/functioning-society" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Functioning Society Baseline</Link>
          <Link href="/foresight/long-arc-actions" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Long-Arc Actions</Link>
          <Link href="/foresight/action-ripples" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Action Ripple Map</Link>
          <Link href="/foresight/my-horizon" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Find My Horizon</Link>
          <Link href="/foresight/systems-map" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Systems Recovery Map</Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">How the Learning System Works</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
          Learning pathways are designed around roles, activities, resources, practice scenarios, reflection, and
          responsible action.
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningDesignPrinciples.map((principle) => <LearningDesignPrincipleCard key={principle.id} principle={principle} />)}
        </div>
      </section>

      <LearningPathBuilder pathways={learningPathways} />

      <section>
        <h2 className="section-title">Capacity Gap Map Preview</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
          Capacity gap hypotheses connect sector conditions to competencies needed for response and recovery. They require
          human review and local validation.
        </p>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {capacityGaps.slice(0, 2).map((gap) => <CapacityGapCard key={gap.id} gap={gap} />)}
        </div>
      </section>

      <section>
        <h2 className="section-title">Featured Learning Pathways</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {learningPathways.slice(0, 4).map((pathway) => <LearningPathwayCard key={pathway.id} pathway={pathway} />)}
        </div>
      </section>

      <section>
        <h2 className="section-title">Competency Map</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {competencies.slice(0, 4).map((competency) => <CompetencyCard key={competency.id} competency={competency} />)}
        </div>
      </section>

      <section className="panel p-5">
        <h2 className="section-title">Collective Learning Modes</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {collectiveLearningModes.map((mode) => (
            <article key={mode.id} className="rounded-md border border-line bg-slatepanel p-4">
              <h3 className="text-base font-semibold text-ink">{mode.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{mode.description}</p>
              <p className="mt-3 text-xs leading-5 text-slate-600">{mode.safetyNote}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Resource Library Preview</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {learningResources.slice(0, 4).map((resource) => <LearningResourceCard key={resource.id} resource={resource} />)}
        </div>
      </section>

      <SafetyNotice />

      <section>
        <h2 className="section-title">Learning Artifacts</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">
          Practice becomes useful when users build something reviewable: a briefing, checklist, workshop agenda, project
          plan, or partner question set.
        </p>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {learningArtifacts.slice(0, 4).map((artifact) => <LearningArtifactCard key={artifact.id} artifact={artifact} />)}
        </div>
      </section>

      <PracticeToActionPanel />

      <section className="panel p-5">
        <h2 className="section-title">Workshop Use Cases</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {learnModules.slice(0, 4).map((module) => <LearnModuleCard key={module.id} module={module} />)}
        </div>
      </section>

      <section className="panel p-5">
        <h2 className="section-title">Four-Level Capacity Model</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capacityLevels.map(([id, label]) => (
            <article key={id} className="rounded-md border border-line bg-slatepanel p-4">
              <h3 className="text-sm font-semibold text-ink">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {id === "individual_household" && "Knowledge and behaviors a person or family may need to protect health, dignity, safety, and informed action."}
                {id === "community_cohort" && "Skills and practices groups may need to coordinate, learn together, prevent harm, support children, reduce rumors, and build social cohesion."}
                {id === "organization_service_provider" && "Capacities needed by NGOs, schools, clinics, managers, community groups, and partners to deliver accountable, safe, coordinated support."}
                {id === "system_institution" && "Long-term capacities needed for recovery, public health, education, infrastructure, social cohesion, governance, and peacebuilding."}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
