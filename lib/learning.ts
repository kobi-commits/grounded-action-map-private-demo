import type { CapacityLevel, LearnerRole, LearningGoal, LearningMode, LearningPathway, TimeAvailable } from "@/types";
import { getCapacityGap, getCompetency, getLearningResource } from "@/lib/data";

export const issueOptions = [
  "Food & Nutrition",
  "Health",
  "Shelter & Displacement",
  "WASH / Disease Prevention",
  "Education & Children",
  "Protection, Women, Youth & Social Cohesion",
  "Peacebuilding and Reconciliation",
  "Trust and Transparency",
  "Emergency Preparedness and Anticipatory Action",
  "Youth Leadership and Civic Capacity"
];

export const roleLabels: Record<LearnerRole, string> = {
  community_member: "Community member",
  student: "Student",
  donor: "Donor",
  ngo_manager: "NGO manager",
  teacher: "Teacher",
  health_worker: "Health worker",
  university_lab: "University lab",
  peacebuilder: "Peacebuilder",
  policy_advocate: "Policy advocate",
  technologist: "Technologist",
  community_leader: "Community leader",
  parent_or_caregiver: "Parent or caregiver"
};

export const goalLabels: Record<LearningGoal, string> = {
  understand: "Understand",
  donate_responsibly: "Donate responsibly",
  organize_workshop: "Organize a workshop",
  build_project: "Build a project",
  support_partner: "Support a partner",
  advocate: "Advocate",
  teach_others: "Teach others",
  prepare_community: "Prepare a community",
  design_program: "Design a program",
  create_briefing: "Create a briefing"
};

export const timeLabels: Record<TimeAvailable, string> = {
  "30_minutes": "30 minutes",
  "2_hours": "2 hours",
  "1_day": "1 day",
  "1_week": "1 week",
  "4_weeks": "4 weeks"
};

export const modeLabels: Record<LearningMode, string> = {
  individual: "Learn alone",
  team: "Learn with a team",
  workshop: "Create a workshop",
  campus_action_lab: "Create a campus action lab",
  community_learning_circle: "Create a community learning circle",
  cross_community_cohort: "Create a cross-community cohort",
  partner_project: "Create a partner project"
};

export const capacityLevelLabels: Record<CapacityLevel, string> = {
  individual_household: "Individual / household",
  community_cohort: "Community / cohort",
  organization_service_provider: "Organization / service provider",
  system_institution: "System / institution"
};

const issueFallbacks: Record<string, string> = {
  "Food & Nutrition": "child-nutrition-responsible-support",
  Health: "maternal-health-dignity",
  "Shelter & Displacement": "anticipatory-action-preparedness",
  "WASH / Disease Prevention": "wash-cholera-campus-organizers",
  "Education & Children": "education-emergencies-temporary-learning",
  "Protection, Women, Youth & Social Cohesion": "maternal-health-dignity",
  "Peacebuilding and Reconciliation": "trauma-informed-peacebuilding",
  "Trust and Transparency": "trust-evidence-responsible-giving",
  "Emergency Preparedness and Anticipatory Action": "anticipatory-action-preparedness",
  "Youth Leadership and Civic Capacity": "youth-leadership-social-cohesion"
};

export function matchLearningPathway(
  pathways: LearningPathway[],
  issue: string,
  role: LearnerRole,
  goal: LearningGoal,
  timeAvailable: TimeAvailable,
  learningMode: LearningMode
) {
  const scored = pathways
    .map((pathway) => ({
      pathway,
      score:
        (pathway.issue === issue ? 6 : 0) +
        (pathway.role === role ? 3 : 0) +
        (pathway.goal === goal ? 3 : 0) +
        (pathway.timeAvailable === timeAvailable ? 1 : 0) +
        (pathway.learningMode === learningMode ? 2 : 0)
    }))
    .sort((a, b) => b.score - a.score);

  if (scored[0]?.score > 0) return scored[0].pathway;
  return pathways.find((pathway) => pathway.id === issueFallbacks[issue]) ?? pathways[0];
}

export function pathwayMarkdown(pathway: LearningPathway) {
  const competencies = pathway.competencies.map((id) => getCompetency(id)?.name ?? id).join(", ");
  const gaps = pathway.relatedCapacityGaps.map((id) => getCapacityGap(id)?.title ?? id).join(", ");
  const steps = pathway.steps
    .map((step, index) => {
      const resources = step.resourceIds.map((id) => getLearningResource(id)?.title ?? id).join(", ");
      return `${index + 1}. ${step.title}
   - Purpose: ${step.purpose}
   - Resources: ${resources}
   - Task: ${step.task}
   - Estimated time: ${step.estimatedTime}
   - Completion output: ${step.completionOutput}`;
    })
    .join("\n");

  return `# ${pathway.title}

## Purpose
${pathway.description}

## Fit
- Issue: ${pathway.issue}
- Role: ${roleLabels[pathway.role]}
- Goal: ${goalLabels[pathway.goal]}
- Time available: ${timeLabels[pathway.timeAvailable]}
- Learning mode: ${modeLabels[pathway.learningMode]}
- Review status: Capacity gap hypothesis — human review required

## Competencies Built
${competencies}

## Step-by-Step Learning Path
${steps}

## Safeguards
${pathway.safeguards.map((item) => `- ${item}`).join("\n")}

## Suggested Outputs
${pathway.outputOptions.map((item) => `- ${item}`).join("\n")}

## Related Capacity Gaps
${gaps}

## Methodology Note
These pathways are for learning and responsible action planning. They do not replace professional medical, legal, humanitarian, or security guidance. Any field-facing action must go through vetted organizations, safeguarding protocols, and human review.
`;
}

export function pathwayFilename(pathway: LearningPathway) {
  return `${pathway.id}-pathway.md`;
}
