import Link from "next/link";

const statusBadges = [
  "Prototype V1",
  "Public-source synthesis",
  "Sample data",
  "Live ReliefWeb feed is unreviewed",
  "Human review required",
  "No donation processing",
  "No organization ranking",
  "No direct beneficiary matching",
  "No operational coordination"
];

const firstReviewers = [
  "humanitarian advisors",
  "Gaza / oPt contextual advisors",
  "trust and compliance advisors",
  "safeguarding advisors",
  "peacebuilding experts",
  "learning design experts",
  "university and lab partners",
  "funders",
  "technologists",
  "civic education partners",
  "public-health advisors",
  "data ethics reviewers"
];

const feedbackQuestions = [
  "Does the platform feel credible?",
  "Is the methodology clear?",
  "Are safety risks visible?",
  "What source categories are missing?",
  "What action pathways are most useful?",
  "Which learning pathways should be built first?",
  "Which simulations feel useful?",
  "Which advisors should review this next?",
  "What should be removed before wider sharing?",
  "What would make this useful for a university, donor, lab, or civic partner?"
];

const doNotDoYet = [
  "do not ask the public to donate through this app",
  "do not claim organizations are approved",
  "do not publish unreviewed claims",
  "do not invite direct contact with vulnerable people",
  "do not use as operational coordination",
  "do not promote as final",
  "do not collect sensitive user data",
  "do not treat scenarios as predictions"
];

const launchChecklist = [
  "build passes",
  "prototype banner visible",
  "methodology visible",
  "live feed labeled unreviewed",
  "no broken navigation",
  "mobile works",
  "briefing export works",
  "executive one-pager works",
  "Start Here is clear",
  "Living Map is understandable"
];

export default function LaunchPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Private Demo Launch</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">
          How to share Grounded Action Map safely with serious reviewers.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {statusBadges.map((badge) => (
            <span key={badge} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              {badge}
            </span>
          ))}
        </div>
        <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-700">
          Grounded Action Map: Gaza V1 is a prototype for demonstration, feedback, advisory review, and partner
          exploration. It is not yet a public humanitarian coordination tool.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Who Should See This First</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {firstReviewers.map((item) => (
              <span key={item} className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-semibold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Suggested Demo Flow</h2>
          <p className="mt-4 rounded-md border border-line bg-slatepanel p-4 text-sm font-semibold text-ink">
            Start Here -&gt; Living Map -&gt; Current Priorities -&gt; Action -&gt; Trust -&gt; Sources -&gt; Learn -&gt;
            Simulation -&gt; Peacebuilding -&gt; Future Capacity -&gt; Briefing
          </p>
          <Link href="/demo/live" className="mt-4 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            Open live demo flow
          </Link>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="panel p-5 lg:col-span-2">
          <h2 className="text-xl font-semibold text-ink">What Feedback We Need</h2>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 md:grid-cols-2">
            {feedbackQuestions.map((question) => <li key={question}>- {question}</li>)}
          </ul>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Do Not Do Yet</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            {doNotDoYet.map((item) => <li key={item}>- {item}</li>)}
          </ul>
        </article>
      </section>

      <section className="panel p-5">
        <h2 className="text-xl font-semibold text-ink">Private Launch Checklist</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {launchChecklist.map((item) => (
            <div key={item} className="rounded-md border border-line bg-slatepanel p-3 text-sm font-semibold text-ink">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
