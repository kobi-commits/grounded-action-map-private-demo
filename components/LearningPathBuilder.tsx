"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LearnerRole, LearningGoal, LearningMode, LearningPathway, TimeAvailable } from "@/types";
import { goalLabels, issueOptions, matchLearningPathway, modeLabels, roleLabels, timeLabels } from "@/lib/learning";
import { ReviewStatusBadge } from "@/components/Badges";

const roles = Object.keys(roleLabels) as LearnerRole[];
const goals = Object.keys(goalLabels) as LearningGoal[];
const times = Object.keys(timeLabels) as TimeAvailable[];
const modes = Object.keys(modeLabels) as LearningMode[];

export function LearningPathBuilder({ pathways }: { pathways: LearningPathway[] }) {
  const [issue, setIssue] = useState("WASH / Disease Prevention");
  const [role, setRole] = useState<LearnerRole>("student");
  const [goal, setGoal] = useState<LearningGoal>("organize_workshop");
  const [timeAvailable, setTimeAvailable] = useState<TimeAvailable>("2_hours");
  const [learningMode, setLearningMode] = useState<LearningMode>("campus_action_lab");

  const pathway = useMemo(
    () => matchLearningPathway(pathways, issue, role, goal, timeAvailable, learningMode),
    [pathways, issue, role, goal, timeAvailable, learningMode]
  );

  return (
    <section className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="section-title">Build My Learning Path</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
            Choose an issue, role, goal, time, and learning mode. This V1 builder uses rules to match the closest sample
            pathway. It does not call AI.
          </p>
        </div>
        <span className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-semibold text-slate-700">
          Rule-based V1
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Select label="Issue" value={issue} onChange={setIssue} options={issueOptions.map((item): [string, string] => [item, item])} />
        <Select label="Role" value={role} onChange={(value) => setRole(value as LearnerRole)} options={roles.map((item): [string, string] => [item, roleLabels[item]])} />
        <Select label="Goal" value={goal} onChange={(value) => setGoal(value as LearningGoal)} options={goals.map((item): [string, string] => [item, goalLabels[item]])} />
        <Select label="Time" value={timeAvailable} onChange={(value) => setTimeAvailable(value as TimeAvailable)} options={times.map((item): [string, string] => [item, timeLabels[item]])} />
        <Select label="Mode" value={learningMode} onChange={(value) => setLearningMode(value as LearningMode)} options={modes.map((item): [string, string] => [item, modeLabels[item]])} />
      </div>

      <div className="mt-5 rounded-md border border-line bg-slatepanel p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recommended pathway</p>
            <h3 className="mt-1 text-xl font-semibold text-ink">{pathway.title}</h3>
          </div>
          <ReviewStatusBadge status={pathway.reviewStatus} />
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-700">{pathway.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {pathway.competencies.slice(0, 5).map((competency) => (
            <span key={competency} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
              {competency.replaceAll("-", " ")}
            </span>
          ))}
        </div>
        <Link href={`/learn/pathways/${pathway.id}`} className="mt-4 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
          Open pathway
        </Link>
      </div>
    </section>
  );
}

function Select({
  label,
  value,
  onChange,
  options
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[] | Array<[string, string]>;
}) {
  const normalized = options.map((option) => Array.isArray(option) ? option : [option, option]);
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={value} onChange={(event) => onChange(event.target.value)}>
        {normalized.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
