import { LearningPathwayCard } from "@/components/LearningCards";
import { PathwayDirectory } from "@/components/PathwayDirectory";
import { SafetyNotice } from "@/components/SafetyNotice";
import { learningPathways } from "@/lib/data";

export default function LearningPathwaysPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Adaptive Learning & Capacity Gap Engine</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">Learning Pathways</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
          Build a rule-based learning path from current humanitarian issues, learner roles, goals, time available, and
          collective learning modes.
        </p>
      </section>
      <SafetyNotice />
      <section>
        <h2 className="section-title">Featured Pathways</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {learningPathways.slice(0, 3).map((pathway) => <LearningPathwayCard key={pathway.id} pathway={pathway} />)}
        </div>
      </section>
      <PathwayDirectory pathways={learningPathways} />
    </div>
  );
}
