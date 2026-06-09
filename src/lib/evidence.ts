/**
 * Evidence helpers — confidence scoring and maturity distribution used by the
 * evidence dashboard and charts.
 */
import { evidenceConfidenceMatrix } from "@/data";
import type { EvidenceMatrixRow, EvidenceStatus } from "@/types";

const confidenceScore: Record<EvidenceMatrixRow["confidence"], number> = {
  Low: 1,
  "Medium-low": 2,
  Medium: 3,
  "Medium-high": 4,
  High: 5,
};

export function scoreConfidence(row: EvidenceMatrixRow): number {
  return confidenceScore[row.confidence];
}

/** Distribution of evidence items by status — feeds the maturity chart. */
export function evidenceMaturityDistribution(): {
  status: EvidenceStatus;
  label: string;
  count: number;
}[] {
  const counts = new Map<EvidenceStatus, number>();
  for (const row of evidenceConfidenceMatrix) {
    counts.set(row.status, (counts.get(row.status) ?? 0) + 1);
  }
  const labels: Partial<Record<EvidenceStatus, string>> = {
    "document-supported": "Document-supported",
    "field-observed": "Field-observed",
    "assay-supported": "Assay-supported",
    "preliminary-assumption": "Preliminary",
    "requires-validation": "Requires validation",
  };
  return Array.from(counts.entries()).map(([status, count]) => ({
    status,
    label: labels[status] ?? status,
    count,
  }));
}
