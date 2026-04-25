import type { ForesightScenario } from "@/types";

export function ScenarioCard({ scenario }: { scenario: ForesightScenario }) {
  return (
    <article className="panel p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-clay">Assumption, not prediction</p>
      <h3 className="mt-2 text-lg font-semibold text-ink">{scenario.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{scenario.horizon}</p>
      <p className="mt-4 text-sm text-slate-700">{scenario.assumption}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-ink">Risks</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {scenario.risks.map((risk) => <li key={risk}>{risk}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Responsible actions</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {scenario.responsibleActions.map((action) => <li key={action}>{action}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}
