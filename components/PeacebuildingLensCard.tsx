import type { PeacebuildingFramework } from "@/types";

export function PeacebuildingLensCard({ framework }: { framework: PeacebuildingFramework }) {
  return (
    <article className="panel p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-7 text-ink">{framework.name}</h3>
        <span className="rounded-full border border-line bg-slatepanel px-2.5 py-1 text-xs font-semibold text-slate-600">Lens</span>
      </div>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
        <p><span className="font-semibold text-ink">What it means:</span> {framework.means}</p>
        <p><span className="font-semibold text-ink">Why it matters:</span> {framework.whyGaza}</p>
        <p><span className="font-semibold text-ink">Practical question:</span> {framework.practicalQuestion}</p>
        <p><span className="font-semibold text-ink">Action implication:</span> {framework.actionImplication}</p>
        <div>
          <p className="font-semibold text-ink">Related sectors</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {framework.relatedSectors.map((sector) => (
              <span key={sector} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
      <details className="mt-4 rounded-md border border-line bg-slatepanel p-3 text-sm text-slate-700">
        <summary className="font-semibold text-ink">Learn more</summary>
        <p className="mt-2">{framework.learnMore}</p>
      </details>
    </article>
  );
}
