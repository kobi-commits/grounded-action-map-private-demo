import Link from "next/link";
import { JourneyRail } from "@/components/JourneyRail";

const cards = [
  ["I want to understand what is happening now.", "Open the current humanitarian priorities.", "/#sectors"],
  ["I want to help responsibly.", "Start with action pathways and safeguards.", "/action"],
  ["I want to learn what is needed.", "Build a role-based learning pathway.", "/learn/pathways"],
  ["I want to practice before acting.", "Use a simulation before public action.", "/learn/simulation-lab"],
  ["I want to understand conflict and peacebuilding.", "Explore lenses for trauma, narrative, systems, and civic repair.", "/peacebuilding"],
  ["I want to think about the future or support the project.", "Connect today’s choices to long-arc capacity.", "/foresight"]
];

export default function StartPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Start Here</h1>
        <p className="mt-2 text-lg text-slate-700">Find your pathway through Grounded Action Map.</p>
        <p className="mt-5 rounded-md border border-line bg-white p-4 text-sm font-semibold text-ink">
          No claim without a source. No action without context. No pathway without safeguards.
        </p>
      </section>
      <JourneyRail />
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(([title, body, buttonHref]) => (
          <article key={title} className="panel p-5">
            <h2 className="text-lg font-semibold text-ink">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{body}</p>
            <Link href={buttonHref} className="mt-5 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
              Start this path
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
