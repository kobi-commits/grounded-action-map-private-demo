import { ForesightCaveatNotice, GlassBoxModelNote, ScenarioExplorer } from "@/components/ForesightComponents";
import { generationalScenarios } from "@/lib/data";

export default function ScenariosPage() {
  return <div className="page-shell space-y-8"><section className="panel bg-slatepanel p-6 sm:p-8"><h1 className="text-3xl font-semibold text-ink">Scenario Explorer</h1><p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">Scenario cards show assumptions, uncertainty, caveats, complexity mode, and review status. Scenario — not prediction.</p></section><ForesightCaveatNotice /><GlassBoxModelNote /><ScenarioExplorer scenarios={generationalScenarios} /></div>;
}
