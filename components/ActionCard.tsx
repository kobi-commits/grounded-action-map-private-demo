import type { ActionCard as ActionCardType } from "@/types";
import { orgName, sourceName } from "@/lib/data";
import { ReviewStatusBadge, SourceBadge } from "@/components/Badges";

export function ActionCard({ action }: { action: ActionCardType }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{action.title}</h3>
        <ReviewStatusBadge status="human_review_required" />
      </div>
      <dl className="mt-4 grid gap-4 text-sm md:grid-cols-2">
        <div>
          <dt className="font-semibold text-ink">Need</dt>
          <dd className="mt-1 text-slate-700">{action.need}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Why now</dt>
          <dd className="mt-1 text-slate-700">{action.whyNow}</dd>
        </div>
      </dl>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-ink">Relevant organizations</p>
          <p className="mt-1 text-sm text-slate-700">{action.relevantOrganizationIds.map(orgName).join(", ")}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Source evidence</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {action.sourceIds.map((id) => (
              <SourceBadge key={id} name={sourceName(id)} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-md border border-line bg-slatepanel p-4">
        <p className="text-sm font-semibold text-ink">Trust evidence summary</p>
        <p className="mt-1 text-sm leading-6 text-slate-700">{action.trustEvidenceSummary}</p>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-ink">What support can do</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {action.whatSupportCanDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Restrictions and safeguards</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {action.restrictionsAndSafeguards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
