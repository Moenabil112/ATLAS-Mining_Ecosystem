/**
 * Typed data access layer.
 *
 * The JSON files in this directory are the local data model generated from the
 * Markdown knowledge package (treated as the single source of truth). This
 * module imports them and re-exports them as fully typed objects so the rest of
 * the application never touches loosely-typed JSON.
 */
import type {
  AccessMatrixRow,
  AssayHighlight,
  AssumptionRow,
  CapexComponent,
  ClaimRule,
  CommercialOffer,
  DataRoomFolderModel,
  DecisionGate,
  DisclosureTier,
  EcosystemLayer,
  EvidenceMatrixRow,
  FieldVisitFact,
  InfrastructureFact,
  KeyMetric,
  LicenseRegister,
  LicenseRegisterRow,
  NextDecision,
  PathwayStep,
  ProcessStep,
  RegulatoryReviewArea,
  RiskItem,
  RoadmapPhase,
  ScenarioCase,
  SystemModule,
  TrenchSampleRow,
  ValueMechanism,
} from "@/types";

import ecosystemRaw from "./ecosystem.json";
import licenseRaw from "./license.json";
import evidenceRaw from "./evidence.json";
import orientationRaw from "./orientationStudy.json";
import validationRaw from "./validationSystem.json";
import roadmapRaw from "./roadmap180.json";
import commercialRaw from "./commercialOffer.json";
import claimsRaw from "./claimControls.json";
import dataRoomRaw from "./dataRoom.json";
import decisionRoomRaw from "./decisionRoom.json";

/* ---------------- Ecosystem ---------------- */
export const project = ecosystemRaw.project;
export const ecosystemLayers = ecosystemRaw.layers as EcosystemLayer[];
export const keyMetrics = ecosystemRaw.keyMetrics as KeyMetric[];

/* ---------------- License ---------------- */
export const licenseRegister = licenseRaw.register as LicenseRegister;
export const licenseRegisterRows = licenseRaw.registerRows as LicenseRegisterRow[];
export const regulatoryReviewAreas =
  licenseRaw.regulatoryReviewAreas as RegulatoryReviewArea[];
export const disclosureTiers = licenseRaw.disclosureTiers as DisclosureTier[];
export const licenseRiskNotes = licenseRaw.riskNotes as string[];

/* ---------------- Evidence ---------------- */
export const fieldVisit = evidenceRaw.fieldVisit as {
  source: string;
  facts: FieldVisitFact[];
  summaryPoints: string[];
};
export const assayHighlights = evidenceRaw.assayHighlights as AssayHighlight[];
export const trenchSampleRegister =
  evidenceRaw.trenchSampleRegister as TrenchSampleRow[];
export const evidenceConfidenceMatrix =
  evidenceRaw.confidenceMatrix as EvidenceMatrixRow[];
export const afrilabReports = evidenceRaw.reports;
export const evidenceNextActions = evidenceRaw.nextActions as string[];
export const evidenceInterpretation = evidenceRaw.interpretation as string;

/* ---------------- Orientation study ---------------- */
export const aipsStudy = orientationRaw.study;
export const productionScenario =
  orientationRaw.productionScenario as InfrastructureFact[];
export const capex = orientationRaw.capex as {
  totalMad: number;
  components: CapexComponent[];
  note: string;
};
export const processSteps = orientationRaw.processSteps as ProcessStep[];
export const infrastructure = orientationRaw.infrastructure as InfrastructureFact[];
export const studyValidationNeeds = orientationRaw.validationNeeds as string[];
export const scenarioCases = orientationRaw.scenarios as ScenarioCase[];
export const assumptionRegister = orientationRaw.assumptions as AssumptionRow[];
export const materialBalanceWarning =
  orientationRaw.materialBalanceWarning as string;

/* ---------------- Validation system ---------------- */
export const validationCoreStatement = validationRaw.coreStatement as string;
export const validationBusinessQuestion =
  validationRaw.businessQuestion as string;
export const validationIndependenceNote =
  validationRaw.independenceNote as string;
export const systemConcepts = validationRaw.concepts as SystemModule[];
export const systemModules = validationRaw.modules as SystemModule[];
export const valueMechanisms = validationRaw.valueMechanisms as ValueMechanism[];
export const decisionStates = validationRaw.decisionStates as string[];
export const governanceRules = validationRaw.governanceRules as string[];
export const approvalFlow = validationRaw.approvalFlow as string[];

/* ---------------- 180-day roadmap ---------------- */
export const roadmapGoal = roadmapRaw.goal as string;
export const roadmapPhases = roadmapRaw.phases as RoadmapPhase[];

/* ---------------- Commercial offer ---------------- */
export const commercialOffer = commercialRaw.offer as CommercialOffer;
export const coreOffer = commercialRaw.coreOffer as string;
export const feeRepresents = commercialRaw.feeRepresents as string[];
export const feeIsNot = commercialRaw.feeIsNot as string[];
export const pilotPathway = commercialRaw.pilotPathway as PathwayStep & {
  scope: string[];
};
export const longTermPathway = commercialRaw.longTermPathway as PathwayStep & {
  principle: string;
};
export const investorBenefits = commercialRaw.investorBenefits as string[];
export const atlasBenefits = commercialRaw.atlasBenefits as string[];
export const technologyIndependence =
  commercialRaw.technologyIndependence as string;

/* ---------------- Claim controls ---------------- */
export const claimRules = claimsRaw.rules as ClaimRule[];
export const documentedNumbers = claimsRaw.documentedNumbers as KeyMetric[];
export const prohibitedClaims = claimsRaw.prohibitedClaims as string[];
export const baseCaseLanguage = claimsRaw.baseCaseLanguage;
export const upsideCaseLanguage = claimsRaw.upsideCaseLanguage;

/* ---------------- Data room ---------------- */
export const dataRoomFolders =
  dataRoomRaw.folders as DataRoomFolderModel[];
export const accessMatrix = dataRoomRaw.accessMatrix as AccessMatrixRow[];
export const accessLevels = dataRoomRaw.accessLevels;
export const disclosureRules = dataRoomRaw.disclosureRules as string[];

/* ---------------- Decision room ---------------- */
export const decisionGates = decisionRoomRaw.decisionGates as DecisionGate[];
export const nextDecisions = decisionRoomRaw.nextDecisions as NextDecision[];
export const riskControls = decisionRoomRaw.riskControls as RiskItem[];
export const claimControlsStatus =
  decisionRoomRaw.claimControlsStatus as string[];
export const feasibilityUpgradeStatus = decisionRoomRaw.feasibilityUpgradeStatus;
export const operatingEntryStatus = decisionRoomRaw.operatingEntryStatus;
export const unresolvedValidationItems =
  decisionRoomRaw.unresolvedValidationItems as string[];
