import { Badge } from "@/components/shared/Badge";
import { evidenceStatusLabel, statusTone } from "@/lib/claims";
import type { EvidenceStatus } from "@/types";

export function EvidenceStatusBadge({ status }: { status: EvidenceStatus }) {
  return <Badge tone={statusTone(status)}>{evidenceStatusLabel(status)}</Badge>;
}
