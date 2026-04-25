"use client";

import { useMemo, useState } from "react";
import type { LearnerRole, LearningGoal, LearningMode, LearningPathway, TimeAvailable } from "@/types";
import { goalLabels, issueOptions, modeLabels, roleLabels, timeLabels } from "@/lib/learning";
import { LearningPathBuilder } from "@/components/LearningPathBuilder";
import { LearningPathwayCard } from "@/components/LearningCards";

const roles = Object.keys(roleLabels) as LearnerRole[];
const goals = Object.keys(goalLabels) as LearningGoal[];
const times = Object.keys(timeLabels) as TimeAvailable[];
const modes = Object.keys(modeLabels) as LearningMode[];

export function PathwayDirectory({ pathways }: { pathways: LearningPathway[] }) {
  const [issue, setIssue] = useState("All");
  const [role, setRole] = useState("All");
  const [goal, setGoal] = useState("All");
  const [time, setTime] = useState("All");
  const [mode, setMode] = useState("All");

  const visible = useMemo(() => pathways.filter((pathway) =>
    (issue === "All" || pathway.issue === issue) &&
    (role === "All" || pathway.role === role) &&
    (goal === "All" || pathway.goal === goal) &&
    (time === "All" || pathway.timeAvailable === time) &&
    (mode === "All" || pathway.learningMode === mode)
  ), [pathways, issue, role, goal, time, mode]);

  return (
    <div className="space-y-8">
      <LearningPathBuilder pathways={pathways} />
      <section className="panel p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="section-title">Filter Learning Pathways</h2>
          <span className="text-sm font-medium text-slate-600">{visible.length} pathways shown</span>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Select label="Issue" value={issue} onChange={setIssue} options={["All", ...issueOptions].map((item): [string, string] => [item, item])} />
          <Select label="Role" value={role} onChange={setRole} options={[["All", "All"], ...roles.map((item): [string, string] => [item, roleLabels[item]])]} />
          <Select label="Goal" value={goal} onChange={setGoal} options={[["All", "All"], ...goals.map((item): [string, string] => [item, goalLabels[item]])]} />
          <Select label="Time" value={time} onChange={setTime} options={[["All", "All"], ...times.map((item): [string, string] => [item, timeLabels[item]])]} />
          <Select label="Mode" value={mode} onChange={setMode} options={[["All", "All"], ...modes.map((item): [string, string] => [item, modeLabels[item]])]} />
        </div>
      </section>
      <section>
        <h2 className="section-title">All Pathways</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {visible.map((pathway) => <LearningPathwayCard key={pathway.id} pathway={pathway} />)}
        </div>
      </section>
    </div>
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
  options: Array<[string, string]>;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map(([optionValue, optionLabel]) => <option key={optionValue} value={optionValue}>{optionLabel}</option>)}
      </select>
    </label>
  );
}
