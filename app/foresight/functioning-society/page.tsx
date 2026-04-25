import { ForesightCaveatNotice, FunctioningSocietyBaselineCard } from "@/components/ForesightComponents";
import { functioningSocietyBaselines } from "@/lib/data";

export default function FunctioningSocietyPage() {
  return <div className="page-shell space-y-8"><section className="panel bg-slatepanel p-6 sm:p-8"><h1 className="text-3xl font-semibold text-ink">Functioning Society Baseline</h1><p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">What capacities people and institutions generally need for dignity, health, learning, safety, participation, wellbeing, and recovery.</p><p className="mt-3 text-sm font-semibold text-ink">Functioning society baselines are not used to judge communities. They require local validation.</p></section><ForesightCaveatNotice /><section className="grid gap-5">{functioningSocietyBaselines.map((baseline) => <FunctioningSocietyBaselineCard key={baseline.id} baseline={baseline} />)}</section></div>;
}
