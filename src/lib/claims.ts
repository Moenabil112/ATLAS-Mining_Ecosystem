/**
 * Claims Control Engine.
 *
 * Implements the number/claim language rules from
 * 00_MASTER_CONTEXT/03_Claims_Control_and_Number_Language.md and the engineering
 * prompt's claims-control specification. Every large figure that appears in the
 * UI can be routed through classifyClaim() so it is presented with the correct
 * maturity label and warning.
 */
import { claimRules, prohibitedClaims } from "@/data";
import type {
  ClaimClassification,
  EvidenceStatus,
  NumberStatus,
} from "@/types";

const compiled = claimRules.map((rule) => ({
  ...rule,
  regex: new RegExp(rule.pattern, "i"),
}));

/**
 * Classify a number or text fragment by its evidence/number maturity and return
 * a display label plus an optional warning. Falls back to an indicative status
 * when no specific rule matches.
 */
export function classifyClaim(numberOrText: string): ClaimClassification {
  const text = String(numberOrText);

  for (const rule of compiled) {
    if (rule.regex.test(text)) {
      return {
        status: rule.status,
        label: rule.label,
        warning: rule.warning,
        matched: true,
      };
    }
  }

  return {
    status: "indicative",
    label: "Indicative figure — context dependent",
    matched: false,
  };
}

/**
 * Returns true if the given text contains any prohibited claim vocabulary.
 * Used as a guard so prohibited claims are never rendered.
 */
export function containsProhibitedClaim(text: string): boolean {
  const lower = text.toLowerCase();
  return prohibitedClaims.some((claim) => lower.includes(claim.toLowerCase()));
}

/** Human-readable label for a number status. */
export function numberStatusLabel(status: NumberStatus): string {
  const labels: Record<NumberStatus, string> = {
    documented: "Documented",
    "preliminary-base-case": "Preliminary base case",
    "orientation-study-assumption": "Orientation-study assumption",
    "selected-sample-result": "Selected-sample result",
    "upside-case": "Upside case",
    indicative: "Indicative",
    "requires-validation": "Requires validation",
    "requires-correction": "Requires correction",
    "do-not-use-publicly": "Internal — do not use publicly",
  };
  return labels[status];
}

/** Human-readable label for an evidence status. */
export function evidenceStatusLabel(status: EvidenceStatus): string {
  const labels: Record<EvidenceStatus, string> = {
    "document-supported": "Document-supported",
    "field-observed": "Field-observed",
    "assay-supported": "Assay-supported",
    "preliminary-assumption": "Preliminary assumption",
    "engineering-orientation": "Engineering orientation",
    "commercial-draft": "Commercial draft",
    "requires-validation": "Requires validation",
    "requires-legal-review": "Requires legal review",
    "requires-engineering-review": "Requires engineering review",
    "requires-environmental-review": "Requires environmental review",
    "requires-financial-review": "Requires financial review",
    "investor-visible-with-caution": "Investor-visible with caution",
    "restricted-internal": "Restricted internal",
    "internal-only": "Internal only",
  };
  return labels[status];
}

/**
 * Tone for a status: "strong" (documented/observed), "caution" (preliminary),
 * "warning" (requires validation / do not use). Drives badge colours.
 */
export function statusTone(
  status: NumberStatus | EvidenceStatus,
): "strong" | "caution" | "warning" | "neutral" {
  switch (status) {
    case "documented":
    case "document-supported":
    case "field-observed":
    case "assay-supported":
      return "strong";
    case "preliminary-base-case":
    case "preliminary-assumption":
    case "orientation-study-assumption":
    case "selected-sample-result":
    case "engineering-orientation":
    case "commercial-draft":
    case "upside-case":
    case "indicative":
    case "investor-visible-with-caution":
      return "caution";
    case "requires-validation":
    case "requires-legal-review":
    case "requires-engineering-review":
    case "requires-environmental-review":
    case "requires-financial-review":
    case "requires-correction":
    case "do-not-use-publicly":
    case "restricted-internal":
    case "internal-only":
      return "warning";
    default:
      return "neutral";
  }
}
