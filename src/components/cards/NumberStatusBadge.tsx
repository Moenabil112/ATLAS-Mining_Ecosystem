import { Badge } from "@/components/shared/Badge";
import { numberStatusLabel, statusTone } from "@/lib/claims";
import type { NumberStatus } from "@/types";

export function NumberStatusBadge({ status }: { status: NumberStatus }) {
  return <Badge tone={statusTone(status)}>{numberStatusLabel(status)}</Badge>;
}
