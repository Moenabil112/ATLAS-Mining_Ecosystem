/**
 * Typed access layer for the ATLAS Digital Evidence Base.
 *
 * The JSON registers in this directory are the structured backend content layer
 * (Evidence Base v1.0 — Phase 1, 0–30 Day Data Control). This module imports the
 * registers the Evidence, Data Room and Decision Room layers consume and
 * re-exports them as fully typed objects with provenance preserved.
 */
import type {
  AccessControlMatrix,
  AssayHighlight,
  AssayRegister,
  CalculationReviewItem,
  ClaimRegisterEntry,
  DataRoomFolderRecord,
  DecisionGateRecord,
  EvidenceDashboardMetrics,
  FieldConfidenceRow,
  FieldVisitSummary,
  GeophysicsRecord,
  NumberRegisterEntry,
  RiskFlag,
  SampleCollectionRegister,
  SourceDocument,
  TrenchRecord,
  ValidationWorkstream,
} from "@/types/evidence";

/* Master index */
import numberRegisterRaw from "./00_MASTER_INDEX/number_register.json";
import claimRegisterRaw from "./00_MASTER_INDEX/claim_register.json";
import sourceDocsRaw from "./00_MASTER_INDEX/source_document_register.json";
import accessControlRaw from "./00_MASTER_INDEX/access_control_matrix.json";

/* Field & lab evidence */
import fieldVisitRaw from "./02_FIELD_EVIDENCE/field_visit_summary.json";
import trenchRegisterRaw from "./02_FIELD_EVIDENCE/trench_register.json";
import sampleCollectionRaw from "./02_FIELD_EVIDENCE/sample_collection_register.json";
import fieldConfidenceRaw from "./02_FIELD_EVIDENCE/field_evidence_confidence_matrix.json";
import geophysicsRaw from "./02_FIELD_EVIDENCE/geophysics_recommendation_record.json";
import assayRegisterRaw from "./03_LAB_EVIDENCE/afrilab_assay_register.json";
import assayHighlightsRaw from "./03_LAB_EVIDENCE/assay_highlights.json";

/* Orientation study */
import calcReviewRaw from "./04_ORIENTATION_STUDY_EVIDENCE/calculation_review_items.json";

/* Roadmap / decision */
import workstreamsRaw from "./06_180_DAY_ROADMAP_EVIDENCE/validation_workstreams.json";

/* Data room */
import dataRoomFoldersRaw from "./08_INVESTOR_DATA_ROOM/data_room_document_index.json";
import investorVisibleRaw from "./08_INVESTOR_DATA_ROOM/investor_visible_claims.json";
import ndaRequiredRaw from "./08_INVESTOR_DATA_ROOM/nda_required_claims.json";
import restrictedInternalRaw from "./08_INVESTOR_DATA_ROOM/restricted_internal_claims.json";

/* System-ready */
import dashboardMetricsRaw from "./09_SYSTEM_READY_DATA/dashboard_metrics.json";
import decisionGatesRaw from "./09_SYSTEM_READY_DATA/decision_gates.json";
import riskFlagsRaw from "./09_SYSTEM_READY_DATA/risk_flags.json";

/* ---------------- Master registers ---------------- */
export const numberRegister = numberRegisterRaw as NumberRegisterEntry[];
export const claimRegister = claimRegisterRaw as ClaimRegisterEntry[];
export const sourceDocuments = sourceDocsRaw as SourceDocument[];
export const accessControlMatrix = accessControlRaw as AccessControlMatrix;

/* ---------------- Field & lab ---------------- */
export const fieldVisit = fieldVisitRaw as FieldVisitSummary;
export const trenchRegister = trenchRegisterRaw as TrenchRecord[];
export const sampleCollection = sampleCollectionRaw as SampleCollectionRegister;
export const fieldConfidenceMatrix = fieldConfidenceRaw as FieldConfidenceRow[];
export const geophysicsRecord = geophysicsRaw as GeophysicsRecord;
export const assayRegister = assayRegisterRaw as AssayRegister;
export const assayHighlights = assayHighlightsRaw as AssayHighlight[];

/* ---------------- Orientation study ---------------- */
export const calculationReviewItems = calcReviewRaw as CalculationReviewItem[];

/* ---------------- Roadmap / decision ---------------- */
export const validationWorkstreams = (
  workstreamsRaw as { workstreams: ValidationWorkstream[]; validation_gaps: string[] }
).workstreams;
export const validationGaps = (
  workstreamsRaw as { workstreams: ValidationWorkstream[]; validation_gaps: string[] }
).validation_gaps;
export const decisionGateRecords = decisionGatesRaw as DecisionGateRecord[];
export const riskFlags = riskFlagsRaw as RiskFlag[];

/* ---------------- Data room ---------------- */
export interface InvestorVisibleClaim {
  claim_id: string;
  wording: string;
  badge: string;
}
export interface NdaRequiredClaim {
  claim_id: string;
  restricted_wording: string;
}
export interface RestrictedInternalClaim {
  claim_id: string;
  item: string;
  status: string;
}
export const dataRoomFolderRecords = dataRoomFoldersRaw as DataRoomFolderRecord[];
export const investorVisibleClaims = investorVisibleRaw as InvestorVisibleClaim[];
export const ndaRequiredClaims = ndaRequiredRaw as NdaRequiredClaim[];
export const restrictedInternalClaims =
  restrictedInternalRaw as RestrictedInternalClaim[];

/* ---------------- Metrics ---------------- */
export const dashboardMetrics = dashboardMetricsRaw as EvidenceDashboardMetrics;

/* ---------------- Lookups ---------------- */
const docById = new Map(sourceDocuments.map((d) => [d.document_id, d]));
/** Resolve a DOC-xxx id to its source document record. */
export function sourceDocument(id: string): SourceDocument | undefined {
  // Registers reference both "DOC-001" and bare ids consistently as DOC-xxx.
  return docById.get(id);
}

const numberById = new Map(numberRegister.map((n) => [n.number_id, n]));
export function numberEntry(id: string): NumberRegisterEntry | undefined {
  return numberById.get(id);
}

const claimById = new Map(claimRegister.map((c) => [c.claim_id, c]));
export function claimEntry(id: string): ClaimRegisterEntry | undefined {
  return claimById.get(id);
}

/** Claims registered against a given ecosystem layer category. */
export function claimsForCategory(category: string): ClaimRegisterEntry[] {
  return claimRegister.filter((c) => c.claim_category === category);
}
