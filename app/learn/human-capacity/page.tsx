import { HumanCapacityStudio } from "@/components/HumanCapacityStudio";
import { JourneyRail } from "@/components/JourneyRail";
import {
  biopsychosocialCheckins,
  capacityPassportPreview,
  communicationEcology,
  compoundingImpactModels,
  conflictIntelligenceLevels,
  humanCapacityArtifacts,
  humanCapacityPathways,
  humanCapacityPractices,
  humanCapacityScenarios,
  humanComplexityModes,
  workshopTemplates
} from "@/lib/data";

export default function HumanCapacityPage() {
  return (
    <div className="page-shell space-y-10">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Human Capacity, Conflict Intelligence, and Practice Lab</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Human Capacity Studio</h1>
        <p className="mt-2 text-lg text-slate-700">
          Build the capacities to act wisely, relate humanely, and contribute over time.
        </p>
        <p className="mt-5 max-w-5xl text-base leading-7 text-slate-700">
          Grounded Action Map helps people understand what is happening and practice the capacities needed to respond
          with care, discipline, and humility.
        </p>
        <p className="mt-4 rounded-md border border-line bg-white p-4 text-sm font-semibold text-ink">
          Prototype V1 - learning, reflection, and responsible action planning. Not therapy, certification, medical
          advice, legal advice, or operational humanitarian guidance.
        </p>
        <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-700">
          Information alone is not enough in crisis and conflict. People need to verify reality, regulate urgency,
          communicate without dehumanization, protect vulnerable people, work across difference, and sustain responsible
          action over time.
        </p>
      </section>

      <JourneyRail />

      <HumanCapacityStudio
        practices={humanCapacityPractices}
        pathways={humanCapacityPathways}
        conflictLevels={conflictIntelligenceLevels}
        complexityModes={humanComplexityModes}
        checkins={biopsychosocialCheckins}
        communicationLevels={communicationEcology}
        impactModels={compoundingImpactModels}
        scenarios={humanCapacityScenarios}
        workshopTemplates={workshopTemplates}
        passportItems={capacityPassportPreview}
        artifacts={humanCapacityArtifacts}
      />
    </div>
  );
}
