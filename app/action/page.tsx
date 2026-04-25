import { ActionCard } from "@/components/ActionCard";
import { actionCards } from "@/lib/data";

const pathways = [
  "Donate through official channels",
  "Partner through vetted organizations",
  "Advocate for humanitarian access and civilian protection",
  "Learn through structured workshops",
  "Build tools with universities and labs",
  "Support capacity building"
];

export default function ActionPage() {
  return (
    <div className="page-shell space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-ink">Action Pathways</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
          Practical ways to help are shown with source evidence, safeguards, caveats, and organization review status.
          No donations are processed here.
        </p>
      </section>
      <section className="panel p-5">
        <h2 className="section-title">Practical ways to help</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {pathways.map((pathway) => (
            <div key={pathway} className="rounded-md border border-line bg-slatepanel p-4 text-sm font-medium text-ink">{pathway}</div>
          ))}
        </div>
      </section>
      <section className="grid gap-5">
        {actionCards.map((action) => <ActionCard key={action.id} action={action} />)}
      </section>
    </div>
  );
}
