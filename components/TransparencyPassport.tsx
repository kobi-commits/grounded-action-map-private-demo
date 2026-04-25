import type { TransparencyPassport as Passport } from "@/types";
import { EvidenceStatusBadge } from "@/components/Badges";

const fields: Array<[keyof Passport, string]> = [
  ["legalIdentity", "Legal identity"],
  ["financialTransparency", "Financial transparency"],
  ["independentTransparencySignals", "Independent transparency signals"],
  ["aidTransparency", "Aid transparency"],
  ["humanitarianAccountability", "Humanitarian accountability"],
  ["sanctionsAndRiskScreening", "Sanctions and risk screening"],
  ["actionRoutingPolicy", "Action routing policy"]
];

export function TransparencyPassport({ passport }: { passport: Passport }) {
  return (
    <section className="panel p-5">
      <h2 className="section-title">Transparency Passport</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
        Evidence fields describe what is visible, partial, not found, not applicable, or still under review. They are not
        ratings or endorsements.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {fields.map(([key, label]) => (
          <div key={String(key)} className="rounded-md border border-line bg-slatepanel p-4">
            <span className="text-sm font-medium text-ink">{label}</span>
            <div className="mt-3">
              <EvidenceStatusBadge status={passport[key] as Passport["legalIdentity"]} />
            </div>
          </div>
        ))}
      </div>
      <ul className="mt-5 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {passport.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
