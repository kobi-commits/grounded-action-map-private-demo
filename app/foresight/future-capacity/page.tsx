import { ForesightCaveatNotice, FutureCapacityFilters, GlassBoxModelNote, SystemsRecoveryMatrix } from "@/components/ForesightComponents";
import { futureCapacityNeeds, systemsRecoveryMap } from "@/lib/data";

export default function FutureCapacityPage() {
  return <div className="page-shell space-y-8"><section className="panel bg-slatepanel p-6 sm:p-8"><h1 className="text-3xl font-semibold text-ink">Future Capacity Needs</h1><p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">Capacity needs by sector and time horizon. All cards are hypotheses requiring human review and local validation.</p></section><ForesightCaveatNotice /><GlassBoxModelNote /><FutureCapacityFilters items={futureCapacityNeeds} /><section><h2 className="section-title">Systems Recovery Matrix</h2><div className="mt-5"><SystemsRecoveryMatrix items={systemsRecoveryMap} /></div></section></div>;
}
