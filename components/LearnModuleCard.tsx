import type { LearnModule } from "@/types";

export function LearnModuleCard({ module }: { module: LearnModule }) {
  return (
    <article className="panel p-5">
      <h3 className="text-lg font-semibold text-ink">{module.title}</h3>
      <p className="mt-3 muted">{module.description}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-ink">Key concepts</p>
          <p className="mt-1 text-sm text-slate-700">{module.keyConcepts.join(", ")}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Action exercise</p>
          <p className="mt-1 text-sm text-slate-700">{module.actionExercise}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-ink">Discussion questions</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {module.discussionQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </div>
      <textarea className="mt-4 min-h-24 w-full rounded-md border border-line bg-slatepanel p-3 text-sm text-slate-700" readOnly value={module.copyableText} />
    </article>
  );
}
