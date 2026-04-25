import { ForesightCaveatNotice, KnowledgeSpinePanel } from "@/components/ForesightComponents";
import { knowledgeSpine } from "@/lib/data";

export default function KnowledgeSpinePage() {
  return <div className="page-shell space-y-8"><section className="panel bg-slatepanel p-6 sm:p-8"><h1 className="text-3xl font-semibold text-ink">How We Know What We Know</h1><p className="mt-2 text-lg text-slate-700">The evidence architecture behind the Future Capacity Map.</p><p className="mt-4 max-w-5xl text-base leading-7 text-slate-700">The Future Capacity Map is not built from opinion. It organizes public knowledge from humanitarian reporting, development analysis, demographic data, public-health guidance, economic forecasting, climate and anticipatory action, skills and future-of-work research, peacebuilding science, learning design, wellbeing research, and trust/accountability systems.</p></section><ForesightCaveatNotice /><KnowledgeSpinePanel items={knowledgeSpine} /></div>;
}
