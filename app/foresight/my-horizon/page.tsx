import { FindMyHorizon, ForesightCaveatNotice } from "@/components/ForesightComponents";
import { userHorizonProfiles } from "@/lib/data";

export default function MyHorizonPage() {
  return <div className="page-shell space-y-8"><section className="panel bg-slatepanel p-6 sm:p-8"><h1 className="text-3xl font-semibold text-ink">Find My Horizon</h1><p className="mt-2 text-lg text-slate-700">Locate yourself between urgent action and long-term contribution.</p><p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">Help users see where they are entering the system and what they can do next.</p></section><ForesightCaveatNotice /><FindMyHorizon profiles={userHorizonProfiles} /></div>;
}
