import Link from "next/link";
import type { Sector } from "@/types";
import { sectorHref, sourceName } from "@/lib/data";
import { ReviewStatusBadge, SeverityBadge, SourceBadge } from "@/components/Badges";

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <article className="panel flex h-full flex-col p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-6 text-ink">{sector.name}</h3>
        <SeverityBadge severity={sector.severity} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{sector.latestSignal}</p>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        <span className="font-semibold text-ink">Main constraint:</span> {sector.mainConstraint}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        <span className="font-semibold text-ink">Top actors:</span> {sector.topActors.join(", ")}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {sector.sourceIds.map((id) => (
          <SourceBadge key={id} name={sourceName(id)} />
        ))}
      </div>
      <div className="mt-3">
        <ReviewStatusBadge status={sector.reviewStatus} />
      </div>
      <Link href={sectorHref(sector.id)} className="mt-4 inline-flex w-fit rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
        Open sector
      </Link>
    </article>
  );
}
