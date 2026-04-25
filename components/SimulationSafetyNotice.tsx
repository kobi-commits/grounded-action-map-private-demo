type SimulationSafetyNoticeProps = {
  variant?: "default" | "public-health" | "youth" | "technology" | "cross-community";
};

const notices = {
  default:
    "These learning tools are for education and responsible action planning. They do not replace professional medical, legal, humanitarian, security, or local guidance. Field-facing action must go through vetted organizations, safeguarding protocols, and human review.",
  "public-health": "This simulation links to official public-health guidance and does not provide medical advice.",
  youth:
    "No direct unsupervised contact with minors or vulnerable people. All programs must be partner-mediated and safeguarding-reviewed.",
  technology:
    "No sensitive data collection, no location exposure, no beneficiary identification, and no deployment without partner review.",
  "cross-community":
    "Cross-community cohorts must be conflict-sensitive, partner-mediated, safeguarding-reviewed, and human-approved."
};

export function SimulationSafetyNotice({ variant = "default" }: SimulationSafetyNoticeProps) {
  return (
    <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
      <strong>Safety notice:</strong> {notices[variant]}
    </div>
  );
}
