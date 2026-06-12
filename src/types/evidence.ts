/**
 * Types for the ATLAS Digital Evidence Base (the structured backend content
 * layer, lodged under src/evidence-base/). These mirror the JSON registers
 * exactly so the Evidence, Data Room and Decision Room layers can consume the
 * evidence base with full provenance and claims control.
 */
import type { AccessLevel, EvidenceStatus, NumberStatus } from "./index";

/* -------- Source documents -------- */
export interface SourceDocument {
  document_id: string;
  title: string;
  file_name: string;
  document_type: string;
  language: string;
  date: string;
  source_layer: string;
  access_level: AccessLevel;
  summary: string;
  key_numbers: string[];
  claim_sensitivity: string;
  use_in_system: string;
  file_status: string;
}

/* -------- Number register -------- */
export interface NumberRegisterEntry {
  number_id: string;
  value: string;
  unit: string;
  context: string;
  source_document: string;
  source_page: string;
  status: NumberStatus;
  can_use_in_investor_material: boolean;
  required_label: string;
  validation_required: boolean;
  notes: string;
}

/* -------- Claim register -------- */
export interface ClaimRegisterEntry {
  claim_id: string;
  claim_text: string;
  claim_category: string;
  source_document: string;
  evidence_status: EvidenceStatus;
  number_status: NumberStatus;
  allowed_public_wording: string;
  restricted_wording: string;
  validation_required: boolean;
  risk_if_overstated: string;
  recommended_badge: string;
}

/* -------- Assay register -------- */
export interface AssayRecord {
  sample_id: string;
  report: string;
  cu_percent: number;
  trench_id: string;
  analysis_date: string;
  lab: string;
  client_reference: string;
  receipt_date: string;
  issue_date: string;
  number_status: NumberStatus;
  evidence_status: EvidenceStatus;
  access_level: AccessLevel;
  required_label: string;
  validation_required: boolean;
  validation_notes?: string;
}

export interface AssayRegister {
  lab: string;
  reports: string[];
  receipt_date: string;
  issue_date: string;
  client_reference: string;
  total_samples_submitted: number;
  registered_results: number;
  records: AssayRecord[];
}

export interface AssayHighlight {
  sample_id: string;
  cu_percent: number;
  report: string;
  required_label: string;
  number_status: NumberStatus;
}

/* -------- Trench / sample registers -------- */
export interface TrenchRecord {
  trench_id: string;
  samples: string[];
  evidence: string;
  status: string;
  total_campaign_length_m: string;
  source_document: string;
  length_m: string;
  coordinates: string;
  ore_observation: string;
  photo_reference: string;
  evidence_status: EvidenceStatus;
  access_level: AccessLevel;
}

export interface SampleCollectionRegister {
  total_samples: number;
  registered_with_ids: number;
  pending_ids: number;
  source_document: string;
  note: string;
  samples: AssayRecord[];
}

/* -------- Field visit -------- */
export interface FieldVisitSummary {
  source_document: string;
  report_title: string;
  visit_period: string;
  areas_covered: string[];
  site_access: string;
  trenching: { total_length_m: string; trench_count: number };
  sampling: { samples_submitted: number; lab: string };
  recommendations: string[];
  evidence_status: EvidenceStatus;
  number_status: NumberStatus;
  access_level: AccessLevel;
  required_label: string;
}

export interface GeophysicsRecord {
  recommendation: string;
  source_document: string;
  evidence_status: EvidenceStatus;
  decision_gate: string;
  drilling_context: string;
  next_action: string;
}

export interface FieldConfidenceRow {
  item: string;
  status: EvidenceStatus;
  confidence: string;
  use: string;
}

/* -------- Decision gates / risk / calc review -------- */
export interface DecisionGateRecord {
  gate_id: string;
  phase: string;
  decision_question: string;
  required_evidence: string;
  current_status: "in-progress" | "open" | "pending";
  owner: string;
  risk_level: "high" | "medium" | "low";
  go_condition: string;
  hold_condition: string;
  redesign_condition: string;
  next_action: string;
}

export interface RiskFlag {
  risk_id: string;
  severity: "severe" | "high" | "medium" | "low";
  flag: string;
  control: string;
  linked: string[];
}

export interface CalculationReviewItem {
  item_id: string;
  title: string;
  description: string;
  framing: string;
  consequence: string;
  owner: string;
  decision_gate: string;
  status: NumberStatus;
}

export interface ValidationWorkstream {
  id: string;
  name: string;
  gates: string[];
  items: string[];
}

/* -------- Data room -------- */
export interface DataRoomFolderRecord {
  folder_id: string;
  title: string;
  access_level: AccessLevel;
  documents: string[];
  status: string;
  claim_sensitivity: string;
}

export interface AccessControlMatrix {
  levels: string[];
  matrix: { item: string; levels: Record<string, string> }[];
}

/* -------- Dashboard metrics -------- */
export interface EvidenceDashboardMetrics {
  license_area_km2: number;
  license_validity: string;
  highest_selected_assay: { value: number; unit: string; label: string };
  aips_base_tonnage: { value: number; unit: string; label: string };
  aips_base_grade: { value: number; unit: string; label: string };
  aips_capex: { value: number; unit: string; label: string };
  processing_scenario: { value: number; unit: string; label: string };
  entry_fee: { value: number; unit: string; label: string };
  evidence_maturity_count: Record<string, number>;
  validation_gaps_count: number;
  missing_data_count: number;
  gates: { total: number; in_progress: number; open: number; pending: number };
}
