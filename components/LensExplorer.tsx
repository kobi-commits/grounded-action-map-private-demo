"use client";

import { useMemo, useState } from "react";
import type { PeacebuildingFramework, Sector } from "@/types";

export function LensExplorer({ sectors, frameworks }: { sectors: Sector[]; frameworks: PeacebuildingFramework[] }) {
  const [sectorId, setSectorId] = useState("education-children");
  const [frameworkId, setFrameworkId] = useState("trauma-grief");
  const sector = sectors.find((item) => item.id === sectorId) ?? sectors[0];
  const framework = frameworks.find((item) => item.id === frameworkId) ?? frameworks[0];

  const output = useMemo(() => {
    if (sector.id === "education-children" && framework.id === "trauma-grief") {
      return {
        interpretation:
          "Education is not only school reconstruction. It is also psychosocial repair, safety, teacher recovery, grief-sensitive learning, youth agency, and prevention of future cycles of dehumanization.",
        visible: "Caregiver stress, teacher recovery, child protection, disability inclusion, grief-sensitive learning, and safe youth agency become visible.",
        action: "Support temporary learning and child protection only through vetted organizations with safeguarding protocols.",
        competencies: "Trauma-informed facilitation, safeguarding, child protection, ethical storytelling, and psychosocial referral awareness."
      };
    }
    return {
      interpretation: `${sector.name} is not only a service category. Through ${framework.name}, it becomes a question of dignity, trust, relationships, institutional capacity, and whether immediate help changes the conditions that keep producing harm.`,
      visible: `The lens highlights relationships, risks, power, incentives, and long-term repair needs that may be missed in a purely operational view.`,
      action: framework.actionImplication,
      competencies: "Source discipline, conflict sensitivity, cultural humility, safeguarding, and accountable partnership."
    };
  }, [sector, framework]);

  return (
    <section className="panel p-5">
      <h2 className="section-title">Lens Explorer</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Sector
          <select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={sectorId} onChange={(event) => setSectorId(event.target.value)}>
            {sectors.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Lens
          <select className="rounded-md border border-line bg-white px-3 py-2 font-normal" value={frameworkId} onChange={(event) => setFrameworkId(event.target.value)}>
            {frameworks.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5 border-l-4 border-l-moss bg-slatepanel p-4">
        <p className="text-sm font-semibold text-ink">{sector.name} through {framework.name}</p>
        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Interpretation</p>
            <p className="mt-1 text-sm leading-6 text-slate-800">{output.interpretation}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">What becomes visible</p>
            <p className="mt-1 text-sm leading-6 text-slate-800">{output.visible}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Responsible action implication</p>
            <p className="mt-1 text-sm leading-6 text-slate-800">{output.action}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Competencies needed</p>
            <p className="mt-1 text-sm leading-6 text-slate-800">{output.competencies}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
