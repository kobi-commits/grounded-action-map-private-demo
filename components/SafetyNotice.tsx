type SafetyNoticeProps = {
  variant?: "default" | "public-health" | "youth" | "technology" | "capacity";
};

const notices = {
  default:
    "These pathways are for learning and responsible action planning. They do not replace professional medical, legal, humanitarian, or security guidance. Any field-facing action must go through vetted organizations, safeguarding protocols, and human review.",
  "public-health": "This pathway links to official public-health guidance. It does not provide medical advice.",
  youth:
    "No direct unsupervised contact with minors or vulnerable people. All programs must be partner-mediated and safeguarding-reviewed.",
  technology:
    "No sensitive data collection, no location exposure, no beneficiary identification, and no deployment without partner review.",
  capacity:
    "Capacity gaps are hypotheses based on available public data and sector analysis. They require human review and local validation."
};

export function SafetyNotice({ variant = "default" }: SafetyNoticeProps) {
  return (
    <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
      <strong>Safety notice:</strong> {notices[variant]}
    </div>
  );
}
