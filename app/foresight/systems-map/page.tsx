import { ForesightCaveatNotice, SystemsRecoveryMatrix } from "@/components/ForesightComponents";
import { systemsRecoveryMap } from "@/lib/data";

export default function SystemsMapPage() {
  return <div className="page-shell space-y-8"><section className="panel bg-slatepanel p-6 sm:p-8"><h1 className="text-3xl font-semibold text-ink">Systems Recovery Map</h1><p className="mt-2 text-lg text-slate-700">Recovery is not one sector. It is a network of systems.</p></section><ForesightCaveatNotice /><SystemsRecoveryMatrix items={systemsRecoveryMap} /></div>;
}
