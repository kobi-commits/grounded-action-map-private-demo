import { ActionRippleMap, ForesightCaveatNotice } from "@/components/ForesightComponents";
import { actionRipples } from "@/lib/data";

export default function ActionRipplesPage() {
  return <div className="page-shell space-y-8"><section className="panel bg-slatepanel p-6 sm:p-8"><h1 className="text-3xl font-semibold text-ink">Action Ripple Map</h1><p className="mt-2 text-lg text-slate-700">See how responsible action today can ripple across time, sectors, and systems.</p><p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">Every responsible action has more than one effect. The Action Ripple Map helps users see how immediate support can connect to learning, trust, recovery, wellbeing, and long-term peace capacity.</p></section><ForesightCaveatNotice /><ActionRippleMap ripples={actionRipples} /></div>;
}
