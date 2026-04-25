const seeking = [
  "source accuracy",
  "humanitarian methodology",
  "trust evidence",
  "safeguarding",
  "learning pathways",
  "simulation design",
  "peacebuilding lens",
  "future capacity map",
  "user experience",
  "technical issues",
  "partner opportunities",
  "public communication risk"
];

const questions = [
  "What felt credible?",
  "What felt unclear?",
  "What felt missing?",
  "What felt risky?",
  "What page would you show someone first?",
  "What should be reviewed before public beta?",
  "What partner should be involved?",
  "What action pathway seems most useful?",
  "What learning pathway seems most useful?",
  "What language should be changed?",
  "What should be removed?"
];

export default function FeedbackPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Feedback for Prototype V1</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">Help us improve the prototype responsibly.</p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Feedback We Are Seeking</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {seeking.map((item) => (
              <span key={item} className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-semibold text-slate-700">{item}</span>
            ))}
          </div>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Feedback Questions</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            {questions.map((question) => <li key={question}>- {question}</li>)}
          </ul>
        </article>
      </section>
      <section className="panel p-5">
        <h2 className="text-xl font-semibold text-ink">Submit Feedback Placeholder</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Feedback form coming soon. This prototype does not collect personal data or store responses.
        </p>
        <a href="mailto:feedback@example.org" className="mt-4 inline-flex rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
          Email feedback placeholder
        </a>
        <p className="mt-4 rounded-md border border-line bg-slatepanel p-4 text-sm leading-6 text-slate-700">
          This prototype should not be used to route urgent field requests. For urgent humanitarian needs, use official
          humanitarian channels.
        </p>
      </section>
    </div>
  );
}
