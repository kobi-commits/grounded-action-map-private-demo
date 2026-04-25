import { actionCards, frameworks, organizations, sectors, sources } from "@/lib/data";

export function generateStakeholderBriefing() {
  const sectorList = sectors.map((sector, index) => `${index + 1}. ${sector.name}`).join("\n");
  const actionList = actionCards
    .slice(0, 5)
    .map((action) => `- ${action.title.toLowerCase()}`)
    .join("\n");
  const organizationExamples = organizations
    .slice(0, 6)
    .map((organization) => `- ${organization.name}: ${organization.type}, ${organization.reviewStatus.replaceAll("_", " ")}`)
    .join("\n");
  const sourceExamples = sources
    .slice(0, 8)
    .map((source) => `- ${source.name}: ${source.usefulFor}`)
    .join("\n");
  const lensExamples = frameworks
    .slice(0, 12)
    .map((framework) => `- ${framework.name}`)
    .join("\n");

  return `# Grounded Action Map: Gaza V1

## One-Line Summary
Grounded Action Map is a humanitarian foresight, trust evidence, peacebuilding lens, and responsible action platform. The Gaza prototype shows how verified public reporting can be transformed into sector analysis, organization transparency, and practical pathways for support.

## Mission
Grounded Action Map helps people move from concern to responsible action by turning verified humanitarian reporting, transparency evidence, peacebuilding lenses, and practical action pathways into one clear platform.

## The Problem
People want to help during humanitarian crises, but information is fragmented, emotionally overwhelming, politically charged, and difficult to translate into responsible action. Many people do not know which sources to trust, which organizations are working on which needs, or how to act without causing harm.

## The Solution
Grounded Action Map brings together:
- current humanitarian signals
- six sector dashboards
- live unreviewed report feeds
- source libraries
- organization transparency passports
- responsible action cards
- peacebuilding lenses
- learning and workshop pathways
- human-review methodology

## Gaza V1 Focus
The first prototype focuses on Gaza and six humanitarian sectors:
${sectorList}

## What the Prototype Demonstrates
- A user can see urgent needs by sector.
- A user can inspect source evidence.
- A user can see responsible action pathways.
- A user can review organization transparency evidence.
- A user can understand humanitarian needs through peacebuilding lenses.
- A user can access live reports without treating them as automatically verified.
- A user can copy or download a briefing for workshops, funders, or partners.

## Trust Evidence Layer
The platform does not rank organizations. It displays evidence:
- legal identity
- financial transparency
- independent transparency signals
- aid transparency
- humanitarian accountability
- sanctions and risk screening status
- action-routing restrictions

## Peacebuilding Lens
Humanitarian need is also relational, institutional, psychological, historical, and civic. The Peacebuilding Lens helps users understand the same reality through:
- conflict transformation
- mediation and negotiation
- complexity and dynamic systems
- polarization and attractor patterns
- identity, grief, and intergenerational trauma
- narrative and memory
- reconciliation, justice, acknowledgment, and coexistence
- nonviolence and dialogue
- youth leadership and civic capacity
- systems thinking
- practical peacebuilding

## Responsible Action Pathways
The prototype currently shows pathways such as:
${actionList}

## Learning, Simulation, and Capacity Building
The learning layer helps users move from information to practice:
- role-based learning for students, donors, technologists, educators, peacebuilders, and partner teams
- capacity needs mapped across individual, community, organization, and system levels
- simulations for practicing decisions before acting in the real world
- collective learning modes for teams, workshops, campus labs, learning circles, and partner projects
- a prototype competency passport for reflection only, not certification
- responsible action artifacts such as briefings, workshop agendas, donor checklists, partner questions, and technology risk checklists

## Human Capacity Studio
Responsible action requires human capacity. The studio helps users practice self-awareness, source verification, conflict intelligence, communication, safeguarding, systems thinking, and sustained action. It is for learning, reflection, and responsible action planning only. It is not therapy, certification, medical advice, legal advice, operational humanitarian guidance, or security guidance.

## The Living Map
The Living Map is the integrative visual center of the prototype. It shows how urgent needs, source evidence, trust evidence, organization profiles, learning pathways, simulations, peacebuilding lenses, action pathways, future capacity, and public education connect.

## Coherence System
The Coherence System connects the app to workshops, podcast prompts, videos, campus action labs, partner review, public education, and responsible share assets.

## Strategy Cascade
The strategy is visible: start with Gaza V1, serve public learners and institutional partners, win through trusted synthesis and responsible pathways, build advisory and review capabilities, and govern the system before public beta.

## Innovation Habits
The prototype uses small repeatable behaviors to protect quality:
- review before publishing
- turn concern into a pathway
- show assumptions
- practice before acting
- make learning social
- share responsibly
- protect vulnerable people

## Share Responsibly
Share assets are designed to spread understanding without exaggeration, manipulation, unsupported numbers, or missing caveats.

## Advisor Review Room
Public beta requires humanitarian, Gaza/oPt contextual, trust/compliance, safeguarding, peacebuilding, learning design, foresight, and technology review.

## Public Beta Readiness
Before public release, the platform needs source readiness, trust readiness, safeguarding readiness, learning readiness, simulation readiness, peacebuilding readiness, foresight readiness, regional context readiness, deployment readiness, and public communication readiness.

## Future Capacity Map
The Future Capacity Map extends the prototype from urgent response to generational recovery:
- Gaza remains the center, regional context helps explain systems pressure, and the long arc is the horizon.
- Scenarios are not predictions. They show assumptions, uncertainty, caveats, and what would change the analysis.
- Functioning society baselines describe capacities needed for dignity, health, learning, safety, participation, wellbeing, and recovery.
- The Knowledge Spine explains how humanitarian, development, demographic, public-health, economic, climate, skills, wellbeing, learning, trust, and peacebuilding knowledge inform the platform.
- Action Ripple cards show how responsible action today can support learning, trust, recovery, wellbeing, and long-term peace capacity.
- Future capacity needs connect sectors to time horizons such as 30 days, 6 months, 12 months, 5 years, 10 years, and 25 years.
- Conflict-intelligent future capacity highlights self, social, situational, and systemic capacities for leaders and institutions.
- Youth peace and security futures frame young people as agents of recovery, leadership, learning, prevention of violence, social cohesion, and peacebuilding.
- Wellbeing and harmony remind users that recovery is more than infrastructure or income.
- Deep time perspective is reflective, not predictive; it asks what future generations may inherit from today's choices.

## Organization Evidence Examples
${organizationExamples}

## Source Library Examples
${sourceExamples}

## Peacebuilding Lens Examples
${lensExamples}

## Safety and Methodology
The platform follows these rules:
- no claim without a source
- no organization ranking
- no unsupported action pathway
- no direct routing to unreviewed organizations
- no tactical operational details
- no direct unsupervised contact with minors
- human review required before public use
- live reports are unreviewed until reviewed by humans
- peacebuilding science is used as an interpretive lens, not propaganda

## Prototype Status
This is Prototype V1. It is designed for demonstration, feedback, partnership exploration, and further technical development. It is not yet a public humanitarian coordination tool.

## Next Build Priorities
1. Strengthen the source ingestion system.
2. Add human-review admin workflow.
3. Expand the Transparency Passport system.
4. Add adaptive learning pathways.
5. Add better data visualization and scenario tools.
6. Build partner review and governance model.
7. Prepare for safe public beta.
`;
}
