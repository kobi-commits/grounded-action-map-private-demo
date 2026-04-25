import type { EvidenceStatus, ReviewStatus, Severity } from "@/types";

const severityStyles: Record<Severity, string> = {
  Critical: "border-red-200 bg-red-50 text-red-800",
  Severe: "border-amber-200 bg-amber-50 text-amber-800",
  High: "border-orange-200 bg-orange-50 text-orange-800",
  Watch: "border-slate-200 bg-slate-50 text-slate-700"
};

const reviewLabels: Record<ReviewStatus, string> = {
  human_review_required: "Human review required",
  source_profile: "Source profile",
  needs_review: "Needs review"
};

const evidenceLabels: Record<EvidenceStatus, string> = {
  confirmed: "Evidence confirmed",
  partially_available: "Evidence partially available",
  not_found: "Evidence not found",
  not_applicable: "Not applicable",
  under_review: "Under review",
  do_not_route_support: "Do not route support"
};

export function SeverityBadge({ severity }: { severity: Severity }) {
  return <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${severityStyles[severity]}`}>{severity}</span>;
}

export function ReviewStatusBadge({ status }: { status: ReviewStatus }) {
  return <span className="rounded-full border border-line bg-slatepanel px-3 py-1 text-xs font-medium text-slate-700">{reviewLabels[status]}</span>;
}

export function EvidenceStatusBadge({ status }: { status: EvidenceStatus }) {
  const style = status === "do_not_route_support" ? "border-red-200 bg-red-50 text-red-800" : "border-line bg-white text-slate-700";
  return <span className={`rounded-full border px-3 py-1 text-xs font-medium ${style}`}>{evidenceLabels[status]}</span>;
}

export function ComplianceStatusBadge({ label }: { label: string }) {
  return <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-slate-700">{label}</span>;
}

export function SourceBadge({ name }: { name: string }) {
  return <span className="rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">{name}</span>;
}
