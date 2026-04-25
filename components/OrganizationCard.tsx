import Link from "next/link";
import type { Organization } from "@/types";
import { ReviewStatusBadge } from "@/components/Badges";

export function OrganizationCard({ organization }: { organization: Organization }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-ink">{organization.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{organization.type}</p>
        </div>
        <ReviewStatusBadge status={organization.reviewStatus} />
      </div>
      <p className="mt-4 muted">{organization.overview}</p>
      <div className="mt-4 grid gap-4 text-sm text-slate-700 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-ink">Sectors</p>
          <p className="mt-1 leading-6">{organization.sectors.join(", ")}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Geographies</p>
          <p className="mt-1 leading-6">{organization.geographies.join(", ")}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Action types</p>
          <p className="mt-1 leading-6">{organization.actionTypes.join(", ")}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Lederach level</p>
          <p className="mt-1 leading-6 capitalize">{organization.lederachLevel}</p>
        </div>
      </div>
      <p className="mt-4 rounded-md border border-line bg-slatepanel p-3 text-sm leading-6 text-slate-700">{organization.transparencySummary}</p>
      <Link href={`/organizations/${organization.id}`} className="mt-5 inline-flex rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
        Open profile
      </Link>
    </article>
  );
}
