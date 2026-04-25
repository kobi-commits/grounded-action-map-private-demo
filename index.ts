export type Severity = "Critical" | "Severe" | "High" | "Watch";
export type ReviewStatus = "human_review_required" | "source_profile" | "needs_review";
export type EvidenceStatus =
  | "confirmed"
  | "partially_available"
  | "not_found"
  | "not_applicable"
  | "under_review"
  | "do_not_route_support";

export interface Sector {
  id: string;
  name: string;
  severity: Severity;
  latestSignal: string;
  mainConstraint: string;
  topActors: string[];
  sourceIds: string[];
  now: string;
  next30Days: string;
  next6Months: string;
  longArc: string;
  keyFigures: string[];
  relevantOrganizationIds: string[];
  actionCardIds: string[];
  peacebuildingImplications: string[];
  reviewStatus: ReviewStatus;
}

export interface Organization {
  id: string;
  name: string;
  type: string;
  overview: string;
  sectors: string[];
  geographies: string[];
  actionTypes: string[];
  transparencySummary: string;
  reviewStatus: ReviewStatus;
  lederachLevel: "top" | "middle" | "grassroots" | "multi-level";
  websiteUrl: string;
  donationUrl?: string;
  caveats: string[];
}

export interface TransparencyPassport {
  organizationId: string;
  legalIdentity: EvidenceStatus;
  financialTransparency: EvidenceStatus;
  independentTransparencySignals: EvidenceStatus;
  aidTransparency: EvidenceStatus;
  humanitarianAccountability: EvidenceStatus;
  sanctionsAndRiskScreening: EvidenceStatus;
  actionRoutingPolicy: EvidenceStatus;
  notes: string[];
}

export interface ActionCard {
  id: string;
  title: string;
  need: string;
  whyNow: string;
  sourceIds: string[];
  relevantOrganizationIds: string[];
  whatSupportCanDo: string[];
  restrictionsAndSafeguards: string[];
  trustEvidenceSummary: string;
  sectorIds: string[];
}

export interface Source {
  id: string;
  name: string;
  owner: string;
  type: string;
  updateCadence: string;
  usefulFor: string;
  reliabilityLabel: string;
  url: string;
  reviewStatus: ReviewStatus;
}

export interface PeacebuildingFramework {
  id: string;
  name: string;
  means: string;
  whyGaza: string;
  practicalQuestion: string;
  actionImplication: string;
  relatedSectors: string[];
  learnMore: string;
}

export interface LearnModule {
  id: string;
  title: string;
  description: string;
  keyConcepts: string[];
  discussionQuestions: string[];
  actionExercise: string;
  copyableText: string;
}

export interface ForesightScenario {
  id: string;
  title: string;
  horizon: string;
  assumption: string;
  risks: string[];
  responsibleActions: string[];
}

export interface WeeklySignal {
  id: string;
  sectorId: string;
  text: string;
  sourceIds: string[];
  reviewStatus: ReviewStatus;
}

export type LearnerRole =
  | "community_member"
  | "student"
  | "donor"
  | "ngo_manager"
  | "teacher"
  | "health_worker"
  | "university_lab"
  | "peacebuilder"
  | "policy_advocate"
  | "technologist"
  | "community_leader"
  | "parent_or_caregiver";

export type LearningGoal =
  | "understand"
  | "donate_responsibly"
  | "organize_workshop"
  | "build_project"
  | "support_partner"
  | "advocate"
  | "teach_others"
  | "prepare_community"
  | "design_program"
  | "create_briefing";

export type TimeAvailable = "30_minutes" | "2_hours" | "1_day" | "1_week" | "4_weeks";
export type LearningMode =
  | "individual"
  | "team"
  | "workshop"
  | "campus_action_lab"
  | "community_learning_circle"
  | "cross_community_cohort"
  | "partner_project";
export type CapacityLevel = "individual_household" | "community_cohort" | "organization_service_provider" | "system_institution";
export type ResourceType =
  | "official_guidance"
  | "online_course"
  | "handbook"
  | "toolkit"
  | "video"
  | "worksheet"
  | "briefing"
  | "case_study"
  | "internal_module";

export interface LearningResource {
  id: string;
  title: string;
  provider: string;
  url: string;
  resourceType: ResourceType;
  sectors: string[];
  competencies: string[];
  roles: LearnerRole[];
  estimatedTime: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  language: string;
  cost: string;
  sourceReliability: string;
  reviewStatus: ReviewStatus;
  safetyNote?: string;
}

export interface Competency {
  id: string;
  name: string;
  category: "Humanitarian" | "Peacebuilding" | "Leadership" | "Technical / institutional";
  description: string;
  relatedSectors: string[];
  relatedCapacityLevels: CapacityLevel[];
  beginnerOutcome: string;
  intermediateOutcome: string;
  advancedOutcome: string;
  relatedPathwayIds: string[];
}

export interface CapacityGap {
  id: string;
  title: string;
  sector: string;
  geography: string;
  currentCondition: string;
  requiredCapacity: string;
  capacityLevel: CapacityLevel[];
  competencyIds: string[];
  gapHypothesis: string;
  evidenceSourceIds: string[];
  relatedLearningPathwayIds: string[];
  relatedActionCardIds: string[];
  reviewStatus: ReviewStatus;
  caveats: string[];
}

export interface LearningStep {
  id: string;
  title: string;
  purpose: string;
  resourceIds: string[];
  task: string;
  estimatedTime: string;
  completionOutput: string;
}

export interface LearningPathway {
  id: string;
  title: string;
  issue: string;
  role: LearnerRole;
  goal: LearningGoal;
  timeAvailable: TimeAvailable;
  learningMode: LearningMode;
  description: string;
  competencies: string[];
  steps: LearningStep[];
  safeguards: string[];
  outputOptions: string[];
  relatedActionCards: string[];
  relatedCapacityGaps: string[];
  reviewStatus: ReviewStatus;
}

export interface RoleProfile {
  id: LearnerRole;
  label: string;
  description: string;
}

export interface ScenarioPlaybook {
  id: string;
  title: string;
  issue: string;
  useCase: string;
  steps: string[];
  reviewStatus: ReviewStatus;
}

export interface CollectiveLearningMode {
  id: LearningMode;
  title: string;
  description: string;
  safetyNote: string;
}

export interface LearningDesignPrinciple {
  id: string;
  title: string;
  description: string;
}

export interface SimulationDecisionPoint {
  prompt: string;
  possibleActions: string[];
  risks: string[];
  whatToAvoid: string[];
  responsibleNextStep: string;
}

export interface SimulationScenario {
  id: string;
  title: string;
  sector: string;
  role: string;
  situation: string;
  decisionPoint: SimulationDecisionPoint;
  competencyIds: string[];
  relatedLearningPathwayId: string;
  relatedActionCardId: string;
  reviewStatus: ReviewStatus;
  safetyNotice: "default" | "public-health" | "youth" | "technology" | "cross-community";
}

export interface LearningArtifact {
  id: string;
  title: string;
  purpose: string;
  whoFor: string;
  relatedPathwayId: string;
  competencyIds: string[];
  safetyNote: string;
}

export interface CompetencyPassportCategory {
  id: string;
  title: string;
  competencies: string[];
}

export interface ReflectionPrompt {
  id: string;
  prompt: string;
  useCase: string;
}

export type TimeHorizon =
  | "now"
  | "seven_days"
  | "thirty_days"
  | "six_months"
  | "twelve_months"
  | "five_years"
  | "ten_years"
  | "twenty_five_years"
  | "one_hundred_years_reflection"
  | "two_hundred_fifty_years_reflection";
export type FutureNeedCategory =
  | "survival"
  | "stabilization"
  | "continuity"
  | "recovery"
  | "system_rebuilding"
  | "social_cohesion"
  | "peace_capacity"
  | "generational_resilience"
  | "wellbeing"
  | "skills_and_livelihoods"
  | "climate_resilience"
  | "public_health_readiness"
  | "digital_and_ai_readiness"
  | "trust_and_accountability"
  | "youth_leadership"
  | "emergency_preparedness";
export type ScenarioConfidence = "low" | "medium" | "high" | "not_assessed";
export type KnowledgeSourceCategory =
  | "humanitarian_reporting"
  | "development_and_reconstruction"
  | "demographics_and_youth"
  | "health_and_public_health"
  | "food_and_nutrition"
  | "climate_and_anticipatory_action"
  | "economic_forecasting"
  | "skills_and_future_of_work"
  | "foresight_and_scenario_analysis"
  | "peacebuilding_and_social_science"
  | "learning_design_and_simulation"
  | "wellbeing_and_human_development"
  | "trust_transparency_and_accountability"
  | "regional_risk_and_context";
export type CapacityScale =
  | "individual_household"
  | "community_cohort"
  | "organization_service_provider"
  | "system_institution"
  | "regional_system"
  | "generational_society";
export type RegionalRingLevel = "center" | "immediate_context" | "regional_context" | "global_systems_context";
export type ComplexityMode = "clear" | "complicated" | "complex" | "chaotic" | "uncertain_or_disordered";

export interface TimeHorizonItem {
  id: TimeHorizon;
  label: string;
  question: string;
  dominantNeeds: string[];
  capacityFocus: string;
  exampleAction: string;
  caveat: string;
  reviewStatus: ReviewStatus;
}

export interface KnowledgeSpineItem {
  id: string;
  category: KnowledgeSourceCategory;
  name: string;
  owner: string;
  description: string;
  whatItHelpsUsSee: string;
  whatItDoesNotTellUs: string;
  exampleSources: string[];
  relatedPages: string[];
  reviewStatus: ReviewStatus;
  caveats: string[];
}

export interface RegionalContextRingItem {
  id: string;
  ringLevel: RegionalRingLevel;
  name: string;
  description: string;
  systemsConnections: string[];
  possibleRelevanceToGaza: string;
  sourceCategories: KnowledgeSourceCategory[];
  capacityImplications: string[];
  reviewStatus: ReviewStatus;
  caveats: string[];
}

export interface FutureCapacityNeed {
  id: string;
  sector: string;
  geography: string;
  timeHorizon: TimeHorizon;
  category: FutureNeedCategory;
  capacityScale: CapacityScale;
  currentCondition: string;
  futureCapacityNeed: string;
  whyItMatters: string;
  assumptions: string[];
  risks: string[];
  relatedCompetencies: string[];
  relatedLearningPathways: string[];
  relatedSimulations: string[];
  relatedActionCards: string[];
  relatedPeacebuildingLenses: string[];
  sourceIds: string[];
  reviewStatus: ReviewStatus;
  caveats: string[];
}

export interface FunctioningSocietyBaseline {
  id: string;
  sector: string;
  baselineDescription: string;
  coreElements: string[];
  currentDisruptions: string[];
  disruptedCapacities: string[];
  recoveryCapacities: string[];
  wellbeingDimensions: string[];
  relatedLearningPathways: string[];
  relatedSimulations: string[];
  relatedActionCards: string[];
  reviewStatus: ReviewStatus;
  caveats: string[];
}

export interface GenerationalScenario {
  id: string;
  title: string;
  timeHorizon: string;
  description: string;
  assumptions: string[];
  possibleRisks: string[];
  possibleOpportunities: string[];
  regionalImplications: string[];
  sectorImplications: string[];
  capacityNeeds: string[];
  actionImplications: string[];
  confidence: ScenarioConfidence;
  complexityMode: ComplexityMode;
  whatWouldChangeThisScenario: string[];
  sourceIds: string[];
  reviewStatus: ReviewStatus;
  caveats: string[];
}

export interface LongArcAction {
  id: string;
  title: string;
  immediateAction: string;
  thirtyDayContribution: string;
  sixMonthContribution: string;
  twelveMonthContribution: string;
  fiveYearContribution: string;
  tenYearContribution: string;
  twentyFiveYearContribution: string;
  relatedSectors: string[];
  relatedOrganizations: string[];
  relatedLearningPathways: string[];
  relatedSimulations: string[];
  trustRequirements: string[];
  safeguards: string[];
  reviewStatus: ReviewStatus;
}

export interface ActionRipple {
  id: string;
  title: string;
  startingAction: string;
  immediateEffect: string;
  sectorRipple: string;
  learningRipple: string;
  trustRipple: string;
  peacebuildingRipple: string;
  wellbeingRipple: string;
  regionalRipple: string;
  generationalRipple: string;
  relatedCompetencies: string[];
  relatedPathways: string[];
  relatedSimulations: string[];
  caveats: string[];
  reviewStatus: ReviewStatus;
}

export interface SystemsRecoveryItem {
  id: string;
  system: string;
  sector: string;
  currentStress: string;
  recoveryNeed: string;
  capacityNeeded: string;
  timeHorizon: TimeHorizon;
  relatedActions: string[];
  relatedCompetencies: string[];
  relatedLearningPathways: string[];
  reviewStatus: ReviewStatus;
}

export interface DeepTimeReflection {
  id: string;
  title: string;
  horizon: string;
  reflection: string;
  userPrompt: string;
  actionMeaning: string;
  caveat: string;
  reviewStatus: ReviewStatus;
}

export interface UserHorizonProfile {
  id: string;
  label: string;
  description: string;
  userNeed: string;
  recommendedTimeHorizons: string[];
  recommendedPages: string[];
  suggestedAction: string;
  suggestedLearningPathway: string;
  suggestedSimulation: string;
  reviewStatus: ReviewStatus;
}

export interface ForesightMethodNote {
  id: string;
  title: string;
  principle: string;
  explanation: string;
  userFacingCaveat: string;
  reviewStatus: ReviewStatus;
}

export interface SignalItem {
  id: string;
  title: string;
  whyItMatters: string;
  relatedSectors: string[];
  relatedCapacityNeeds: string[];
  sourceCategoryPlaceholder: string;
  reviewStatus: ReviewStatus;
  caveat: string;
}

export interface SocialCohesionFuture {
  id: string;
  title: string;
  description: string;
  relatedLearningPathways: string[];
  relatedCompetencies: string[];
  relatedPeacebuildingLenses: string[];
  relatedActionPathways: string[];
  relatedSimulations: string[];
  relatedFutureCapacityCards: string[];
  reviewStatus: ReviewStatus;
}

export type CoherenceNodeType =
  | "humanitarian_sector"
  | "source"
  | "report"
  | "action_card"
  | "organization"
  | "transparency_passport"
  | "learning_pathway"
  | "simulation"
  | "competency"
  | "peacebuilding_lens"
  | "future_capacity"
  | "time_horizon"
  | "public_project"
  | "workshop"
  | "podcast"
  | "video"
  | "partner"
  | "methodology"
  | "advisory_review"
  | "deep_time_reflection";

export interface CoherenceNode {
  id: string;
  label: string;
  type: CoherenceNodeType;
  layer: string;
  description: string;
  route: string;
  status: string;
  reviewStatus: ReviewStatus;
  caveat: string;
}

export interface CoherenceEdge {
  id: string;
  from: string;
  to: string;
  relationshipType: string;
  label: string;
  explanation: string;
  strength: "sample" | "strong" | "medium" | "weak";
  reviewStatus: ReviewStatus;
  caveat: string;
}

export interface UserJourneyView {
  id: string;
  label: string;
  description: string;
  recommendedNodes: string[];
  recommendedRoutes: string[];
  openingQuestion: string;
  suggestedNextStep: string;
  recommendedAction: string;
  recommendedLearningPath: string;
  whatToShare: string;
  reviewStatus: ReviewStatus;
}

export interface ProductSpineItem {
  id: string;
  step: string;
  whatHappens: string;
  whatMustBeReviewed: string;
  outputCreated: string;
  pageRoute: string;
  reviewStatus: ReviewStatus;
}

export interface PublicEcosystemItem {
  id: string;
  name: string;
  type: string;
  role: string;
  description: string;
  route: string;
  connectedNodes: string[];
  reviewStatus: ReviewStatus;
}

export interface StrategyCascadeItem {
  id: string;
  level: string;
  question: string;
  answer: string;
  designImplication: string;
  relatedRoutes: string[];
  reviewStatus: ReviewStatus;
}

export interface InnovationHabit {
  id: string;
  title: string;
  behavior: string;
  enabler: string;
  artifact: string;
  nudge: string;
  whyItMatters: string;
  relatedUserType: string;
  relatedRoute: string;
  reviewStatus: ReviewStatus;
}

export interface DiffusionAsset {
  id: string;
  title: string;
  assetType: string;
  audience: string;
  message: string;
  suggestedUse: string;
  route: string;
  reviewStatus: ReviewStatus;
}

export interface ShareableExplainer {
  id: string;
  title: string;
  format: string;
  text: string;
  audience: string;
  reviewStatus: ReviewStatus;
}

export interface DemoPersona {
  id: string;
  label: string;
  journey: string[];
  whatTheySee: string;
  whatTheyLearn: string;
  whatTheyCanDo: string;
  safeguards: string[];
  nextRoute: string;
  reviewStatus: ReviewStatus;
}

export interface PathTrace {
  id: string;
  title: string;
  startingPoint: string;
  signal: string;
  sourceIds: string[];
  sectorIds: string[];
  need: string;
  responsibleAction: string;
  trustEvidence: string;
  learningPathwayIds: string[];
  simulationIds: string[];
  peacebuildingLensIds: string[];
  futureCapacityIds: string[];
  shareableOutput: string;
  caveats: string[];
  reviewStatus: ReviewStatus;
}

export interface HumanCapacityPractice {
  id: string;
  title: string;
  shortDescription: string;
  whyItMatters: string;
  questionToAsk: string;
  skillBuilt: string;
  relatedLearningPathways: string[];
  relatedSimulations: string[];
  relatedActionPathways: string[];
  relatedFutureCapacity: string[];
  safetyNote: string;
  reviewStatus: ReviewStatus;
}

export interface HumanCapacityPathway {
  id: string;
  title: string;
  situation: string;
  role: string;
  growthGoal: string;
  recommendedPractices: string[];
  competencies: string[];
  learningPathway: string;
  simulation: string;
  actionArtifact: string;
  responsibleNextStep: string;
  longArcContribution: string;
  safeguard: string;
  reviewStatus: ReviewStatus;
}

export interface ConflictIntelligenceLevel {
  id: string;
  level: string;
  title: string;
  whatToNotice: string[];
  whatToPractice: string[];
  whatToAvoid: string[];
  usefulQuestion: string;
  relatedSimulation: string;
  relatedLearningPathway: string;
  reviewStatus: ReviewStatus;
}

export interface HumanComplexityMode {
  id: string;
  title: string;
  plainLanguageDefinition: string;
  whatToDo: string;
  whatToAvoid: string;
  example: string;
  relatedPractice: string;
  reviewStatus: ReviewStatus;
}

export interface BiopsychosocialCheckIn {
  id: string;
  domain: string;
  question: string;
  whyItMatters: string;
  reflectionPrompt: string;
  safetyNote: string;
  reviewStatus: ReviewStatus;
}

export interface CommunicationEcologyLevel {
  id: string;
  level: string;
  description: string;
  keyQuestion: string;
  whatCanGoWrong: string;
  responsiblePractice: string;
  relatedCompetency: string;
  reviewStatus: ReviewStatus;
}

export interface CompoundingImpactModel {
  id: string;
  title: string;
  actionType: string;
  weeklyCommitment: string;
  duration: string;
  illustrativeHours: number;
  possibleOutputs: string[];
  possibleRipple: string;
  caveat: string;
  reviewStatus: ReviewStatus;
}

export interface HumanCapacityScenario {
  id: string;
  title: string;
  situation: string;
  role: string;
  decisionPoint: string;
  risks: string[];
  possibleResponses: string[];
  whatToAvoid: string[];
  responsibleNextStep: string;
  reflectionPrompts: string[];
  relatedPractices: string[];
  reviewStatus: ReviewStatus;
}

export interface WorkshopTemplate {
  id: string;
  title: string;
  duration: string;
  audience: string;
  goals: string[];
  agenda: string[];
  materials: string[];
  simulation: string;
  reflectionPrompts: string[];
  outputArtifact: string;
  safeguards: string[];
  reviewStatus: ReviewStatus;
}

export interface CapacityPassportItem {
  id: string;
  category: string;
  competency: string;
  beginner: string;
  developing: string;
  applied: string;
  mentor: string;
  relatedPractice: string;
  reviewStatus: ReviewStatus;
}

export interface HumanCapacityArtifact {
  id: string;
  title: string;
  purpose: string;
  whoItIsFor: string;
  relatedPractice: string;
  relatedSimulation: string;
  reviewStatus: ReviewStatus;
}
