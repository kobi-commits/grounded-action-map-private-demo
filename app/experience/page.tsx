import { PersonaJourneyCard } from "@/components/CoherenceComponents";
import { demoPersonas } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">The User Experience</h1>
        <p className="mt-2 text-lg text-slate-700">How a person moves through the platform.</p>
      </section>
      <div className="grid gap-5">
        {demoPersonas.map((persona) => <PersonaJourneyCard key={persona.id} persona={persona} />)}
      </div>
    </div>
  );
}
