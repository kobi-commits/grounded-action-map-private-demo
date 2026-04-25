import sectorsJson from "@/data/sectors.json";
import organizationsJson from "@/data/organizations.json";
import passportsJson from "@/data/transparencyPassports.json";
import actionsJson from "@/data/actionCards.json";
import sourcesJson from "@/data/sources.json";
import frameworksJson from "@/data/frameworks.json";
import learnModulesJson from "@/data/learnModules.json";
import weeklySignalsJson from "@/data/weeklySignals.json";
import foresightJson from "@/data/foresightScenarios.json";
import learningResourcesJson from "@/data/learningResources.json";
import competenciesJson from "@/data/competencies.json";
import learningPathwaysJson from "@/data/learningPathways.json";
import roleProfilesJson from "@/data/roleProfiles.json";
import scenarioPlaybooksJson from "@/data/scenarioPlaybooks.json";
import capacityGapsJson from "@/data/capacityGaps.json";
import collectiveLearningModesJson from "@/data/collectiveLearningModes.json";
import learningDesignPrinciplesJson from "@/data/learningDesignPrinciples.json";
import simulationScenariosJson from "@/data/simulationScenarios.json";
import learningArtifactsJson from "@/data/learningArtifacts.json";
import competencyPassportJson from "@/data/competencyPassport.json";
import reflectionPromptsJson from "@/data/reflectionPrompts.json";
import timeHorizonsJson from "@/data/timeHorizons.json";
import knowledgeSpineJson from "@/data/knowledgeSpine.json";
import regionalContextRingsJson from "@/data/regionalContextRings.json";
import functioningSocietyBaselinesJson from "@/data/functioningSocietyBaselines.json";
import futureCapacityNeedsJson from "@/data/futureCapacityNeeds.json";
import generationalScenariosJson from "@/data/generationalScenarios.json";
import longArcActionsJson from "@/data/longArcActions.json";
import actionRipplesJson from "@/data/actionRipples.json";
import systemsRecoveryMapJson from "@/data/systemsRecoveryMap.json";
import demographicRiskSignalsJson from "@/data/demographicRiskSignals.json";
import socialCohesionFuturesJson from "@/data/socialCohesionFutures.json";
import deepTimeReflectionsJson from "@/data/deepTimeReflections.json";
import userHorizonProfilesJson from "@/data/userHorizonProfiles.json";
import foresightMethodNotesJson from "@/data/foresightMethodNotes.json";
import complexityDecisionModesJson from "@/data/complexityDecisionModes.json";
import futureSkillsSignalsJson from "@/data/futureSkillsSignals.json";
import wellbeingSignalsJson from "@/data/wellbeingSignals.json";
import publicHealthRiskSignalsJson from "@/data/publicHealthRiskSignals.json";
import coherenceNodesJson from "@/data/coherenceNodes.json";
import coherenceEdgesJson from "@/data/coherenceEdges.json";
import userJourneyViewsJson from "@/data/userJourneyViews.json";
import productSpineJson from "@/data/productSpine.json";
import publicEcosystemJson from "@/data/publicEcosystem.json";
import strategyCascadeJson from "@/data/strategyCascade.json";
import innovationHabitsJson from "@/data/innovationHabits.json";
import diffusionAssetsJson from "@/data/diffusionAssets.json";
import shareableExplainersJson from "@/data/shareableExplainers.json";
import demoPersonasJson from "@/data/demoPersonas.json";
import pathTracesJson from "@/data/pathTraces.json";
import humanCapacityPracticesJson from "@/data/humanCapacityPractices.json";
import humanCapacityPathwaysJson from "@/data/humanCapacityPathways.json";
import conflictIntelligenceLevelsJson from "@/data/conflictIntelligenceLevels.json";
import humanComplexityModesJson from "@/data/complexityModes.json";
import biopsychosocialCheckinsJson from "@/data/biopsychosocialCheckins.json";
import communicationEcologyJson from "@/data/communicationEcology.json";
import compoundingImpactModelsJson from "@/data/compoundingImpactModels.json";
import humanCapacityScenariosJson from "@/data/humanCapacityScenarios.json";
import workshopTemplatesJson from "@/data/workshopTemplates.json";
import capacityPassportPreviewJson from "@/data/capacityPassportPreview.json";
import humanCapacityArtifactsJson from "@/data/humanCapacityArtifacts.json";
import type {
  ActionCard,
  CoherenceEdge,
  CoherenceNode,
  CapacityGap,
  CollectiveLearningMode,
  Competency,
  CompetencyPassportCategory,
  DemoPersona,
  DiffusionAsset,
  ActionRipple,
  DeepTimeReflection,
  ForesightScenario,
  ForesightMethodNote,
  FunctioningSocietyBaseline,
  FutureCapacityNeed,
  GenerationalScenario,
  BiopsychosocialCheckIn,
  CapacityPassportItem,
  CommunicationEcologyLevel,
  CompoundingImpactModel,
  ConflictIntelligenceLevel,
  HumanCapacityArtifact,
  HumanCapacityPathway,
  HumanCapacityPractice,
  HumanCapacityScenario,
  HumanComplexityMode,
  LearningArtifact,
  LearningDesignPrinciple,
  LearnModule,
  LearningPathway,
  LearningResource,
  InnovationHabit,
  Organization,
  PathTrace,
  PeacebuildingFramework,
  ProductSpineItem,
  PublicEcosystemItem,
  ReflectionPrompt,
  RoleProfile,
  ScenarioPlaybook,
  Sector,
  SignalItem,
  SimulationScenario,
  SocialCohesionFuture,
  Source,
  SystemsRecoveryItem,
  TimeHorizonItem,
  KnowledgeSpineItem,
  RegionalContextRingItem,
  ShareableExplainer,
  StrategyCascadeItem,
  UserHorizonProfile,
  UserJourneyView,
  LongArcAction,
  TransparencyPassport,
  WeeklySignal,
  WorkshopTemplate
} from "@/types";

export const sectors = sectorsJson as Sector[];
export const organizations = organizationsJson as Organization[];
export const transparencyPassports = passportsJson as TransparencyPassport[];
export const actionCards = actionsJson as ActionCard[];
export const sources = sourcesJson as Source[];
export const frameworks = frameworksJson as PeacebuildingFramework[];
export const learnModules = learnModulesJson as LearnModule[];
export const weeklySignals = weeklySignalsJson as WeeklySignal[];
export const foresightScenarios = foresightJson as ForesightScenario[];
export const learningResources = learningResourcesJson as LearningResource[];
export const competencies = competenciesJson as Competency[];
export const learningPathways = learningPathwaysJson as LearningPathway[];
export const roleProfiles = roleProfilesJson as RoleProfile[];
export const scenarioPlaybooks = scenarioPlaybooksJson as ScenarioPlaybook[];
export const capacityGaps = capacityGapsJson as CapacityGap[];
export const collectiveLearningModes = collectiveLearningModesJson as CollectiveLearningMode[];
export const learningDesignPrinciples = learningDesignPrinciplesJson as LearningDesignPrinciple[];
export const simulationScenarios = simulationScenariosJson as SimulationScenario[];
export const learningArtifacts = learningArtifactsJson as LearningArtifact[];
export const competencyPassport = competencyPassportJson as CompetencyPassportCategory[];
export const reflectionPrompts = reflectionPromptsJson as ReflectionPrompt[];
export const timeHorizons = timeHorizonsJson as TimeHorizonItem[];
export const knowledgeSpine = knowledgeSpineJson as KnowledgeSpineItem[];
export const regionalContextRings = regionalContextRingsJson as RegionalContextRingItem[];
export const functioningSocietyBaselines = functioningSocietyBaselinesJson as FunctioningSocietyBaseline[];
export const futureCapacityNeeds = futureCapacityNeedsJson as FutureCapacityNeed[];
export const generationalScenarios = generationalScenariosJson as GenerationalScenario[];
export const longArcActions = longArcActionsJson as LongArcAction[];
export const actionRipples = actionRipplesJson as ActionRipple[];
export const systemsRecoveryMap = systemsRecoveryMapJson as SystemsRecoveryItem[];
export const demographicRiskSignals = demographicRiskSignalsJson as SignalItem[];
export const socialCohesionFutures = socialCohesionFuturesJson as SocialCohesionFuture[];
export const deepTimeReflections = deepTimeReflectionsJson as DeepTimeReflection[];
export const userHorizonProfiles = userHorizonProfilesJson as UserHorizonProfile[];
export const foresightMethodNotes = foresightMethodNotesJson as ForesightMethodNote[];
export const complexityDecisionModes = complexityDecisionModesJson as Array<Record<string, string>>;
export const futureSkillsSignals = futureSkillsSignalsJson as SignalItem[];
export const wellbeingSignals = wellbeingSignalsJson as SignalItem[];
export const publicHealthRiskSignals = publicHealthRiskSignalsJson as SignalItem[];
export const coherenceNodes = coherenceNodesJson as CoherenceNode[];
export const coherenceEdges = coherenceEdgesJson as CoherenceEdge[];
export const userJourneyViews = userJourneyViewsJson as UserJourneyView[];
export const productSpine = productSpineJson as ProductSpineItem[];
export const publicEcosystem = publicEcosystemJson as PublicEcosystemItem[];
export const strategyCascade = strategyCascadeJson as StrategyCascadeItem[];
export const innovationHabits = innovationHabitsJson as InnovationHabit[];
export const diffusionAssets = diffusionAssetsJson as DiffusionAsset[];
export const shareableExplainers = shareableExplainersJson as ShareableExplainer[];
export const demoPersonas = demoPersonasJson as DemoPersona[];
export const pathTraces = pathTracesJson as PathTrace[];
export const humanCapacityPractices = humanCapacityPracticesJson as HumanCapacityPractice[];
export const humanCapacityPathways = humanCapacityPathwaysJson as HumanCapacityPathway[];
export const conflictIntelligenceLevels = conflictIntelligenceLevelsJson as ConflictIntelligenceLevel[];
export const humanComplexityModes = humanComplexityModesJson as HumanComplexityMode[];
export const biopsychosocialCheckins = biopsychosocialCheckinsJson as BiopsychosocialCheckIn[];
export const communicationEcology = communicationEcologyJson as CommunicationEcologyLevel[];
export const compoundingImpactModels = compoundingImpactModelsJson as CompoundingImpactModel[];
export const humanCapacityScenarios = humanCapacityScenariosJson as HumanCapacityScenario[];
export const workshopTemplates = workshopTemplatesJson as WorkshopTemplate[];
export const capacityPassportPreview = capacityPassportPreviewJson as CapacityPassportItem[];
export const humanCapacityArtifacts = humanCapacityArtifactsJson as HumanCapacityArtifact[];

export function sourceName(id: string) {
  return sources.find((source) => source.id === id)?.name ?? id;
}

export function orgName(id: string) {
  return organizations.find((org) => org.id === id)?.name ?? id;
}

export function getSector(id: string) {
  const aliases: Record<string, string> = {
    "protection-women-youth": "protection-social-cohesion"
  };
  return sectors.find((sector) => sector.id === (aliases[id] ?? id));
}

export function sectorHref(id: string) {
  return `/sectors/${id === "protection-social-cohesion" ? "protection-women-youth" : id}`;
}

export function getOrganization(id: string) {
  return organizations.find((org) => org.id === id);
}

export function getPassport(organizationId: string) {
  return transparencyPassports.find((passport) => passport.organizationId === organizationId);
}

export function getActionCards(ids: string[]) {
  return actionCards.filter((card) => ids.includes(card.id));
}

export function getLearningPathway(id: string) {
  return learningPathways.find((pathway) => pathway.id === id);
}

export function getLearningResource(id: string) {
  return learningResources.find((resource) => resource.id === id);
}

export function getCompetency(id: string) {
  return competencies.find((competency) => competency.id === id);
}

export function getCapacityGap(id: string) {
  return capacityGaps.find((gap) => gap.id === id);
}

export function getCapacityGapsForSector(sectorName: string) {
  const normalized = sectorName === "Water, Sanitation & Hygiene" ? "Water, Sanitation & Hygiene" : sectorName;
  return capacityGaps.filter((gap) => gap.sector === normalized || gap.sector === "Trust and Transparency");
}

export function briefingMarkdown() {
  const sectorLines = sectors.map((sector) => `- ${sector.name}: ${sector.severity}. ${sector.latestSignal}`).join("\n");
  const actionLines = actionCards
    .slice(0, 5)
    .map((card) => `- ${card.title}: ${card.need}`)
    .join("\n");

  return `# Gaza: What Needs Attention Now

## Mission
Grounded Action Map connects verified humanitarian reporting, organization transparency evidence, peacebuilding lenses, and responsible action pathways in a single prototype platform.

## Six sectors
${sectorLines}

## Top action pathways
${actionLines}

## Trust evidence layer
We do not rank organizations. We show evidence: legal identity, financial transparency, independent transparency signals, aid transparency, humanitarian accountability, sanctions and risk screening status, and action-routing restrictions.

## Peacebuilding lens
Humanitarian need is also relational, institutional, psychological, historical, and civic. The Peacebuilding Lens helps users view the same reality through conflict transformation, mediation, negotiation, systems thinking, trauma, narrative, reconciliation, youth leadership, and practical peacebuilding.

## Methodology note
AI-assisted synthesis requires human review before public use. This briefing does not process donations, certify organizations, provide operational details, or enable direct contact with vulnerable people.
`;
}
