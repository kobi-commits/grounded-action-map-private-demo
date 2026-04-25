import { notFound } from "next/navigation";
import { ReviewStatusBadge } from "@/components/Badges";
import { TransparencyPassport } from "@/components/TransparencyPassport";
import { getOrganization, getPassport, organizations } from "@/lib/data";

export function generateStaticParams() {
  return organizations.map((organization) => ({ id: organization.id }));
}

export default async function OrganizationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const organization = getOrganization(id);
  if (!organization) notFound();
  const passport = getPassport(organization.id);

  return (
    <div className="page-shell space-y-8">
      <section className="panel p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-ink">{organization.name}</h1>
            <p className="mt-2 text-sm text-slate-600">{organization.type}</p>
          </div>
          <ReviewStatusBadge status={organization.reviewStatus} />
        </div>
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-700">{organization.overview}</p>
        <div className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <p><strong className="text-ink">Sectors:</strong> {organization.sectors.join(", ")}</p>
          <p><strong className="text-ink">Geography:</strong> {organization.geographies.join(", ")}</p>
          <p><strong className="text-ink">Action pathways:</strong> {organization.actionTypes.join(", ")}</p>
          <p><strong className="text-ink">Evidence status:</strong> {organization.transparencySummary}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={organization.websiteUrl} className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">Official website</a>
          {organization.donationUrl && (
            <a href={organization.donationUrl} className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
              Official donation link
            </a>
          )}
        </div>
        <p className="mt-5 rounded-md border border-line bg-slatepanel p-4 text-sm leading-6 text-slate-700">
          This profile does not rank or endorse the organization. It displays public evidence and review status to support responsible decision-making.
        </p>
      </section>
      {passport && <TransparencyPassport passport={passport} />}
      <section className="panel p-5">
        <h2 className="section-title">Caveats</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
          {organization.caveats.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}
