import Link from "next/link";
import { CopyStakeholderBriefingButton } from "@/components/CopyStakeholderBriefingButton";
import { DownloadStakeholderBriefingButton } from "@/components/DownloadStakeholderBriefingButton";
import { generateStakeholderBriefing } from "@/lib/generateStakeholderBriefing";

const steps = [
  {
    title: "1. Start with the problem",
    script:
      "People want to help during a humanitarian crisis, but the information ecosystem is fragmented. It is hard to know what is happening, who is working on it, what is trustworthy, and how to act responsibly."
  },
  {
    title: "2. Show the homepage",
    body: "The homepage turns Gaza reporting into six current humanitarian priorities."
  },
  {
    title: "3. Open a sector page",
    body:
      "Suggested sector: Food & Nutrition. Each sector has a Now, Next, and Long Arc view. This helps users understand immediate needs, near-term risks, and long-term rebuilding implications.",
    href: "/sectors/food-nutrition",
    label: "Open Food & Nutrition"
  },
  {
    title: "4. Show action pathways",
    body: "The platform does not just describe suffering. It shows responsible ways to act, with caveats and safeguards.",
    href: "/action",
    label: "Open action pathways"
  },
  {
    title: "5. Show the Trust Evidence Layer",
    body:
      "We do not rank organizations. We show evidence and review status: legal identity, financial transparency, aid transparency, humanitarian accountability, sanctions screening, and action routing.",
    href: "/trust",
    label: "Open trust layer"
  },
  {
    title: "6. Show the live report feed",
    body:
      "The app can connect to live public reporting, but reports enter as unreviewed inputs. They do not automatically become published claims.",
    href: "/sources#live-report-feed",
    label: "Open live feed"
  },
  {
    title: "7. Show the Peacebuilding Lens",
    body:
      "Humanitarian need is also relational, institutional, psychological, historical, and civic. The Peacebuilding Lens helps users understand trauma, identity, narrative, reconciliation, systems thinking, and practical peacebuilding.",
    href: "/peacebuilding",
    label: "Open peacebuilding lens"
  },
  {
    title: "8. Show the briefing export",
    body: "Any workshop, donor meeting, or campus event can quickly generate a Google Docs-ready briefing.",
    href: "/briefing",
    label: "Open briefing"
  },
  {
    title: "9. Show the Simulation Lab",
    script:
      "This shows that the app does not only inform people. It helps them practice responsible decisions before acting.",
    href: "/learn/simulation-lab",
    label: "Open simulation lab"
  },
  {
    title: "10. Show the Future Capacity Map",
    script:
      "This layer connects urgent humanitarian needs to the capacities needed for recovery over 30 days, 6 months, 12 months, 5 years, 10 years, and 25 years.",
    href: "/foresight",
    label: "Open Future Capacity Map"
  },
  {
    title: "11. Show Find My Horizon",
    script:
      "This helps a user locate themselves: helping today, organizing this month, building a project this semester, supporting long-term recovery, or becoming a peacebuilder.",
    href: "/foresight/my-horizon",
    label: "Open Find My Horizon"
  },
  {
    title: "12. Show the Knowledge Spine",
    script:
      "This shows that the app is not built from opinion. It organizes humanitarian, development, demographic, economic, climate, skills, wellbeing, learning, and peacebuilding knowledge.",
    href: "/foresight/knowledge-spine",
    label: "Open Knowledge Spine"
  },
  {
    title: "13. Show the Action Ripple Map",
    script:
      "This helps people see how an action today can contribute to learning, trust, recovery, wellbeing, and long-term peace capacity.",
    href: "/foresight/action-ripples",
    label: "Open Action Ripple Map"
  },
  {
    title: "14. Show Deep Time Perspective",
    script:
      "This is not a prediction tool. It is a moral imagination tool. It helps people feel the generational meaning of responsible action.",
    href: "/foresight/deep-time",
    label: "Open Deep Time Perspective"
  },
  {
    title: "15. End with the vision",
    script:
      "This is not only a Gaza dashboard. It is a prototype for a responsible action-intelligence system that could be adapted to other humanitarian and conflict-affected contexts."
  }
];

const fiveMinuteFlow = [
  "Open the homepage and name the problem: fragmented information, trust uncertainty, and unclear action pathways.",
  "Scroll through current humanitarian priorities and verified weekly signals.",
  "Open Food & Nutrition to show Now, Next, Long Arc, sources, caveats, and action cards.",
  "Open Sources to show the live ReliefWeb feed and explain that live reports remain unreviewed raw inputs.",
  "Close with the Stakeholder Briefing export and ask what governance, evidence, and partner review should come next."
];

const screenshotChecklist = [
  "Homepage hero",
  "Current Humanitarian Priorities",
  "Food & Nutrition sector page",
  "Action pathway card",
  "Organization Transparency Passport",
  "Sources page with live unreviewed feed",
  "Peacebuilding Lens Explorer",
  "Stakeholder Briefing page",
  "Future Capacity Map",
  "Action Ripple Map",
  "Knowledge Spine",
  "Deep Time Perspective",
  "Methodology page"
];

const feedbackQuestions = [
  "Does the platform feel credible?",
  "What source or trust evidence is missing?",
  "What action pathway feels most useful?",
  "What safety risks should be addressed?",
  "What partner should review this next?"
];

export default function DemoPage() {
  const briefing = generateStakeholderBriefing();

  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Demo Walkthrough</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
          A simple walkthrough for presenting Grounded Action Map: Gaza V1 to collaborators, funders, universities, and
          technical partners.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <CopyStakeholderBriefingButton briefing={briefing} />
          <DownloadStakeholderBriefingButton briefing={briefing} />
          <Link href="/demo/live" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
            Open live demo flow
          </Link>
          <Link href="/demo/screenshots" className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
            Screenshot checklist
          </Link>
        </div>
      </section>
      <section className="grid gap-5">
        {steps.map((step) => (
          <article key={step.title} className="panel p-5">
            <h2 className="text-xl font-semibold text-ink">{step.title}</h2>
            {step.script && (
              <blockquote className="mt-3 rounded-md border-l-4 border-l-signal bg-slatepanel p-4 text-sm leading-6 text-slate-700">
                “{step.script}”
              </blockquote>
            )}
            {step.body && <p className="mt-3 text-sm leading-6 text-slate-700">{step.body}</p>}
            {step.href && (
              <Link href={step.href} className="mt-4 inline-flex rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-slatepanel">
                {step.label}
              </Link>
            )}
          </article>
        ))}
      </section>
      <section className="grid gap-5 lg:grid-cols-3">
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">How to Present This in 5 Minutes</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
            {fiveMinuteFlow.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Screenshot Checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
            {screenshotChecklist.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </article>
        <article className="panel p-5">
          <h2 className="text-xl font-semibold text-ink">Feedback to Ask For</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            {feedbackQuestions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>
      <section className="panel p-5">
        <h2 className="section-title">What we need next</h2>
        <ul className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
          {[
            "technical collaborators",
            "humanitarian advisors",
            "trust and compliance advisors",
            "university partners",
            "peacebuilding experts",
            "funding for safe public beta"
          ].map((item) => <li key={item} className="rounded-md border border-line bg-slatepanel p-3">{item}</li>)}
        </ul>
      </section>
    </div>
  );
}
