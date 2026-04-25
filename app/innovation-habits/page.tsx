import { InnovationHabitCard } from "@/components/CoherenceComponents";
import { innovationHabits } from "@/lib/data";

export default function InnovationHabitsPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Innovation Habits</h1>
        <p className="mt-2 text-lg text-slate-700">Small behaviors that help the system become real.</p>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-700">
          Behavior → Enabler → Artifact → Nudge. These habits translate the big vision into repeatable micro-actions.
        </p>
      </section>
      <div className="grid gap-5 lg:grid-cols-2">
        {innovationHabits.map((habit) => <InnovationHabitCard key={habit.id} habit={habit} />)}
      </div>
    </div>
  );
}
