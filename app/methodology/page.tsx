const rules: Array<[string, string]> = [
  ["Source discipline", "No claim without a source. Claims should connect to cited public evidence or remain draft."],
  ["Human review", "Automation can assist synthesis, but humans approve public claims, pathways, and caveats."],
  ["Live reports", "The ReliefWeb feed is unreviewed and does not automatically update sector analysis."],
  ["Trust evidence", "No organization ranking. The platform does not rank or endorse organizations. It shows evidence, caveats, and review status."],
  ["Action safeguards", "No action without context, source evidence, routing policy, and caveats."],
  ["Learning safeguards", "Learning pathways are not certification, professional advice, or proof of readiness."],
  ["Simulation safeguards", "Simulations are educational tools, not professional medical, legal, humanitarian, security, or local guidance."],
  ["Public health safeguards", "No medical advice. Public-health pathways should link to official guidance only."],
  ["Children/youth safeguards", "No direct contact with minors or vulnerable people without vetted partners, supervision, safeguarding review, and human approval. Programs must be partner-mediated and safeguarding-reviewed."],
  ["Foresight safeguards", "Scenarios are not predictions. They show assumptions, uncertainty, and caveats."],
  ["Capacity language", "Capacity needs are hypotheses, not judgments. Local validation is required."],
  ["Regional context", "Regional context helps users understand systems pressure. It is not used for speculation."],
  ["Deep time", "Deep time is reflective, not operational forecasting."],
  ["Diffusion ethics", "Share assets spread responsible understanding, not manipulation, shame, slogans, or exaggerated claims."]
];

export default function MethodologyPage() {
  return (
    <div className="page-shell space-y-8">
      <section className="panel bg-slatepanel p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-ink">Methodology</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
          These rules protect the project: source discipline, human review, safeguards, evidence language, and humility.
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {rules.map(([title, body]) => (
          <article key={title} className="panel p-5">
            <h2 className="text-base font-semibold text-ink">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
          </article>
        ))}
      </section>
      <section className="panel p-5">
        <h2 className="section-title">Boundary Statement</h2>
        <p className="mt-4 text-sm leading-6 text-slate-700">
          This platform does not process donations, certify organizations, publish sensitive operational locations,
          show real-time routes, enable direct beneficiary matching, enable direct contact with children or vulnerable
          people, or replace legal, sanctions, safeguarding, humanitarian, or editorial review.
        </p>
      </section>
    </div>
  );
}
