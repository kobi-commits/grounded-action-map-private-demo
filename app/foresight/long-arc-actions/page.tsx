import { ForesightCaveatNotice, GenerationalTimeline } from "@/components/ForesightComponents";
import { longArcActions } from "@/lib/data";

export default function LongArcActionsPage() {
  return <div className="page-shell space-y-8"><section className="panel bg-slatepanel p-6 sm:p-8"><h1 className="text-3xl font-semibold text-ink">What Can You Do Today That Matters in 25 Years?</h1><p className="mt-2 text-lg text-slate-700">Connect immediate action to long-term recovery, dignity, wellbeing, and peace capacity.</p></section><ForesightCaveatNotice /><GenerationalTimeline actions={longArcActions} /></div>;
}
