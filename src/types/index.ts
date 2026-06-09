/**
 * ATLAS Isseksi Copper Digital Ecosystem — Core type system.
 *
 * These types implement the data-model requirements from the knowledge package
 * (09_SYSTEM_BUILD_NOTES/02_Data_Model_Requirements.md) and the claims-control
 * language (00_MASTER_CONTEXT/03_Claims_Control_and_Number_Language.md).
 *
 * They are the single typed contract for every dashboard, card and data file.
 */

/** Evidence maturity — every claim must carry one of these. */
export type EvidenceStatus =
  | "document-supported"
  | "field-observed"
  | "assay-supported"
  | "preliminary-assumption"
  | "requires-validation"
  | "requires-legal-review"
  | "requires-engineering-review"
  | "investor-visible-with-caution"
  | "internal-only";

/** Data-room / disclosure access tiers. */
export type AccessLevel =
  | "public-teaser"
  | "qualified-review"
  | "nda-review"
  | "restricted-technical"
  | "internal-only";

/** Number maturity — controls how figures may be presented. */
export type NumberStatus =
  | "documented"
  | "preliminary-base-case"
  | "upside-case"
  | "indicative"
  | "requires-validation"
  | "do-not-use-publicly";

/** The six strategic layers of the ecosystem. */
export type LayerId =
  | "license-position"
  | "field-lab-evidence"
  | "orientation-study"
  | "intelligent-validation"
  | "feasibility-180"
  | "operating-entry";

/** Decision states used in the Decision Room. */
export type DecisionState =
  | "go"
  | "hold"
  | "redesign"
  | "more-data-required"
  | "internal-only"
  | "ready-for-operator-review"
  | "not-started"
  | "in-progress"
  | "complete";

/* ------------------------------------------------------------------ */
/* Layer model                                                         */
/* ------------------------------------------------------------------ */

export interface EcosystemLayer {
  id: LayerId;
  index: number;
  title: string;
  shortTitle: string;
  maturity: string;
  role: string;
  summary: string;
  route: string;
}

/* ------------------------------------------------------------------ */
/* License layer                                                       */
/* ------------------------------------------------------------------ */

export interface LicenseRegister {
  licenseId: string;
  licenseType: string;
  licenseNumber: string;
  holder: string;
  region: string;
  projectArea: string;
  areaKm2: number;
  validFrom: string;
  validTo: string;
  relatedResearchPermit: string;
  environmentalApproval: string;
  primaryMineral: string;
  associatedMinerals: string;
  status: string;
  disclosureLevel: AccessLevel;
}

export interface LicenseRegisterRow {
  field: string;
  value: string;
  evidenceStatus: EvidenceStatus;
  disclosure: AccessLevel;
  note?: string;
}

export interface RegulatoryReviewArea {
  area: string;
  note: string;
}

export interface DisclosureTier {
  level: string;
  audience: string;
  content: string;
}

/* ------------------------------------------------------------------ */
/* Evidence layer                                                      */
/* ------------------------------------------------------------------ */

export interface AssayHighlight {
  sampleId: string;
  cuPercent: number;
  labReference: string;
  reportNumber: string;
  note: string;
}

export interface FieldVisitFact {
  label: string;
  value: string;
}

export interface EvidenceMatrixRow {
  item: string;
  status: EvidenceStatus;
  confidence: "Low" | "Medium-low" | "Medium" | "Medium-high" | "High";
  use: string;
}

export interface TrenchSampleRow {
  sampleId: string;
  cuPercent: number;
  oreType: string;
  reportNumber: string;
  confidence: string;
}

/* ------------------------------------------------------------------ */
/* Orientation study layer                                             */
/* ------------------------------------------------------------------ */

export interface CapexComponent {
  name: string;
  valueMad: number; // millions MAD HT
  share: number; // 0..1
}

export interface ScenarioCase {
  id: "base" | "upside" | "expansion";
  title: string;
  language: string;
  points: string[];
  caveat?: string;
}

export interface AssumptionRow {
  id: string;
  category: string;
  assumption: string;
  value: string;
  status: string;
  validationRequired: string;
  numberStatus: NumberStatus;
}

export interface ProcessStep {
  order: number;
  step: string;
}

export interface InfrastructureFact {
  label: string;
  value: string;
  numberStatus: NumberStatus;
}

/* ------------------------------------------------------------------ */
/* Intelligent validation layer                                        */
/* ------------------------------------------------------------------ */

export interface SystemModule {
  title: string;
  description: string;
  icon: string;
}

export interface ValueMechanism {
  title: string;
  description: string;
}

/* ------------------------------------------------------------------ */
/* 180-day roadmap layer                                               */
/* ------------------------------------------------------------------ */

export interface RoadmapPhase {
  id: string;
  phase: number;
  days: string;
  title: string;
  objective: string;
  activities: string[];
  outputs: string[];
  decisionGate: string;
  responsibleLayer: string;
  evidenceRequired: string;
}

/* ------------------------------------------------------------------ */
/* Commercial / operating entry layer                                  */
/* ------------------------------------------------------------------ */

export interface CommercialOffer {
  offerType: string;
  entryFeeUsd: number;
  feeNature: string;
  payableTo: string;
  accessIncludes: string[];
  accessExcludes: string[];
  entryPathway: string[];
}

export interface PathwayStep {
  title: string;
  description: string;
  conditions: string[];
}

/* ------------------------------------------------------------------ */
/* Data room                                                           */
/* ------------------------------------------------------------------ */

export interface DataRoomDocument {
  id: string;
  title: string;
  category: string;
  status: string;
  accessLevel: AccessLevel;
  description: string;
  sourceLayer: LayerId | "cross-layer";
  claimSensitivity: NumberStatus | EvidenceStatus;
}

export interface DataRoomFolderModel {
  id: string;
  index: number;
  name: string;
  description: string;
  documents: DataRoomDocument[];
}

export interface AccessMatrixRow {
  folder: string;
  public: string;
  qualified: string;
  nda: string;
  restricted: string;
  internal: string;
}

/* ------------------------------------------------------------------ */
/* Decision room                                                       */
/* ------------------------------------------------------------------ */

export interface DecisionGate {
  id: string;
  index: number;
  title: string;
  status: DecisionState;
  requiredEvidence: string;
  owner: string;
  nextAction: string;
}

export interface RiskItem {
  id: string;
  category: "Technical" | "Legal" | "Commercial" | "Environmental" | "Financial";
  risk: string;
  control: string;
  severity: "Low" | "Medium" | "High";
}

export interface NextDecision {
  title: string;
  detail: string;
  owner: string;
}

/* ------------------------------------------------------------------ */
/* Claims control                                                      */
/* ------------------------------------------------------------------ */

export interface ClaimRule {
  match: string; // human-readable trigger
  pattern: string; // regex source (case-insensitive)
  status: NumberStatus | EvidenceStatus;
  label: string;
  warning?: string;
}

export interface ClaimClassification {
  status: NumberStatus | EvidenceStatus;
  label: string;
  warning?: string;
  matched: boolean;
}

/* ------------------------------------------------------------------ */
/* Key metrics                                                         */
/* ------------------------------------------------------------------ */

export interface KeyMetric {
  label: string;
  value: string;
  unit?: string;
  numberStatus: NumberStatus;
  note?: string;
}
