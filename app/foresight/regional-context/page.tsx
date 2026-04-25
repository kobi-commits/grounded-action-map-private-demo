import { ForesightCaveatNotice, RegionalContextRing } from "@/components/ForesightComponents";
import { regionalContextRings } from "@/lib/data";

export default function RegionalContextPage() {
  return <div className="page-shell space-y-8"><section className="panel bg-slatepanel p-6 sm:p-8"><h1 className="text-3xl font-semibold text-ink">Regional Context Ring</h1><p className="mt-2 text-lg text-slate-700">Gaza is the center. The region is the context.</p><p className="mt-4 max-w-5xl text-base leading-7 text-slate-700">Gaza’s humanitarian reality is immediate and specific. At the same time, Gaza is connected to regional systems: humanitarian access, borders, economics, energy, migration pressure, climate stress, public health, technology, security, and narratives. This layer shows context carefully without turning the Gaza prototype into a regional politics dashboard.</p><p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">Use this as a context signal, not causal claim. All regional analysis requires source review.</p></section><ForesightCaveatNotice /><RegionalContextRing rings={regionalContextRings} /></div>;
}
