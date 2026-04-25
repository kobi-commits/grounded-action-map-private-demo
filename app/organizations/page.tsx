"use client";

import { useMemo, useState } from "react";
import { OrganizationCard } from "@/components/OrganizationCard";
import { organizations } from "@/lib/data";

function unique(values: string[]) {
  return Array.from(new Set(values)).sort();
}

function optionLabel(value: string) {
  const labels: Record<string, string> = {
    human_review_required: "Human review required",
    source_profile: "Source profile",
    needs_review: "Needs review",
    top: "Top leadership",
    middle: "Middle-range actors",
    grassroots: "Grassroots",
    "multi-level": "Multi-level"
  };
  return labels[value] ?? value;
}

export default function OrganizationsPage() {
  const [sector, setSector] = useState("All");
  const [type, setType] = useState("All");
  const [geography, setGeography] = useState("All");
  const [action, setAction] = useState("All");
  const [status, setStatus] = useState("All");
  const [level, setLevel] = useState("All");

  const filters = useMemo(() => ({
    sectors: unique(organizations.flatMap((org) => org.sectors)),
    types: unique(organizations.map((org) => org.type)),
    geographies: unique(organizations.flatMap((org) => org.geographies)),
    actions: unique(organizations.flatMap((org) => org.actionTypes)),
    statuses: unique(organizations.map((org) => org.reviewStatus)),
    levels: unique(organizations.map((org) => org.lederachLevel))
  }), []);

  const visible = organizations.filter((org) =>
    (sector === "All" || org.sectors.includes(sector)) &&
    (type === "All" || org.type === type) &&
    (geography === "All" || org.geographies.includes(geography)) &&
    (action === "All" || org.actionTypes.includes(action)) &&
    (status === "All" || org.reviewStatus === status) &&
    (level === "All" || org.lederachLevel === level)
  );

  const Select = ({ label, value, setValue, options }: { label: string; value: string; setValue: (value: string) => void; options: string[] }) => (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={value} onChange={(event) => setValue(event.target.value)}>
        <option value="All">All</option>
        {options.map((option) => <option key={option} value={option}>{optionLabel(option)}</option>)}
      </select>
    </label>
  );

  return (
    <div className="page-shell space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-ink">Organizations Directory</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          Public profiles show evidence, caveats, and review status for responsible decision-making. They do not rank,
          certify, or endorse organizations.
        </p>
      </section>
      <section className="panel p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-ink">Filter evidence profiles</h2>
          <span className="text-sm font-medium text-slate-600">{visible.length} organizations shown</span>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Select label="Sector" value={sector} setValue={setSector} options={filters.sectors} />
        <Select label="Organization type" value={type} setValue={setType} options={filters.types} />
        <Select label="Geography" value={geography} setValue={setGeography} options={filters.geographies} />
        <Select label="Action type" value={action} setValue={setAction} options={filters.actions} />
        <Select label="Transparency status" value={status} setValue={setStatus} options={filters.statuses} />
        <Select label="Lederach level" value={level} setValue={setLevel} options={filters.levels} />
        </div>
      </section>
      <section className="grid gap-5">
        {visible.map((organization) => <OrganizationCard key={organization.id} organization={organization} />)}
      </section>
    </div>
  );
}
