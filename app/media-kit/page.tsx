const videoScripts = [
  "What is Grounded Action Map?",
  "Why people need responsible action pathways",
  "What is the Trust Evidence Layer?",
  "Why learning belongs in humanitarian response",
  "What is the Simulation Lab?",
  "What is the Peacebuilding Lens?",
  "What is the Future Capacity Map?",
  "What is the Living Map?",
  "What can students do responsibly?",
  "Why scenarios are not predictions",
  "Why capacity needs are not judgments",
  "How to share responsibly"
];

const podcastPrompts = [
  "Gaza, humanitarian action, and the long arc",
  "Peacebuilding in real life",
  "Learning as civic capacity",
  "Trust evidence and responsible giving",
  "Conflict intelligence for public life",
  "Youth leadership and social cohesion",
  "What action today can mean in 25 years",
  "Technology without harm",
  "How ideas spread responsibly",
  "The ethics of foresight"
];

const shareCards = [
  "There is always a responsible pathway.",
  "No claim without a source.",
  "No action without context.",
  "We do not rank organizations; we show evidence.",
  "Learn what is needed now.",
  "Practice before acting.",
  "From today to 25 years.",
  "Scenarios are not predictions.",
  "Capacity needs are hypotheses, not judgments.",
  "The present is urgent; it is also part of a longer human arc."
];

export default function MediaKitPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Media and Video Kit</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">
          Short explanations for podcast, video, workshops, and public education.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">One-Sentence Description</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Grounded Action Map helps people move from concern to responsible action by connecting verified humanitarian
            reporting, trust evidence, learning pathways, peacebuilding lenses, and future capacity.
          </p>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Thirty-Second Description</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Gaza V1 shows how public reporting, sector analysis, trust evidence, learning pathways, simulations, and
            peacebuilding lenses can become one responsible action platform. It is a prototype that requires human review
            before public beta.
          </p>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Two-Minute Explanation</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            People want to help, but information is fragmented and hard to translate into responsible action. Grounded
            Action Map creates a missing bridge: source-aware priorities, organization transparency, learning and
            simulation, peacebuilding lenses, and a future capacity map. The next step is advisor review and trusted
            partner activation.
          </p>
        </article>
      </section>

      <section className="panel p-5">
        <h2 className="text-xl font-semibold text-ink">Ten-Minute Talk Structure</h2>
        <div className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 md:grid-cols-2">
          {["open with helplessness problem", "show the current needs", "show action pathway", "show trust evidence", "show learning pathway", "show simulation", "show peacebuilding lens", "show future capacity", "show Living Map", "end with responsible invitation"].map((item) => (
            <p key={item}>- {item}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Short Video Scripts</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            {videoScripts.map((script) => (
              <li key={script}>- {script}: hook, core idea, simple example, safety caveat, closing question.</li>
            ))}
          </ul>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Podcast Episode Prompts</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            {podcastPrompts.map((prompt) => <li key={prompt}>- {prompt}</li>)}
          </ul>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Social Share Cards</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            {shareCards.map((card) => <li key={card}>- {card}</li>)}
          </ul>
        </article>
      </section>

      <section className="panel p-5">
        <h2 className="text-xl font-semibold text-ink">Safety Language for Public Communication</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          No sensational claims, unsupported numbers, political slogans, shame-based messaging, “safe organization”
          claims, or “this app solves Gaza” framing. Always preserve review caveats and call it Prototype V1 unless
          reviewed.
        </p>
      </section>
    </div>
  );
}
