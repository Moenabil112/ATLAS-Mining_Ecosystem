/**
 * Access control helpers for the data room and disclosure layers.
 * Mirrors 04_Digital_Governance_Model.md and 08_DATA_ROOM_INDEX access tiers.
 */
import type { AccessLevel } from "@/types";

export const accessOrder: AccessLevel[] = [
  "public-teaser",
  "qualified-review",
  "nda-review",
  "restricted-technical",
  "restricted-legal",
  "internal-only",
];

export function accessLevelLabel(level: AccessLevel): string {
  const labels: Record<AccessLevel, string> = {
    "public-teaser": "Public teaser",
    "qualified-review": "Qualified review",
    "nda-review": "NDA review",
    "restricted-technical": "Restricted technical",
    "restricted-legal": "Restricted legal",
    "internal-only": "Internal only",
  };
  return labels[level];
}

/** Returns the sensitivity rank (0 = most open, 4 = most restricted). */
export function accessRank(level: AccessLevel): number {
  return accessOrder.indexOf(level);
}

/**
 * Tone for an access level — open tiers read calmer, restricted tiers read as
 * controlled/confidential.
 */
export function accessTone(
  level: AccessLevel,
): "open" | "controlled" | "restricted" {
  const rank = accessRank(level);
  if (rank <= 1) return "open";
  if (rank === 2) return "controlled";
  return "restricted";
}
