import { Info } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { classifyClaim, statusTone } from "@/lib/claims";

/**
 * Routes a figure/text through the Claims Control Engine and renders the
 * resulting maturity label as a badge. This is the visual enforcement of the
 * claims-control rules.
 */
export function ClaimBadge({ claim }: { claim: string }) {
  const result = classifyClaim(claim);
  if (!result.matched) return null;
  return (
    <Badge tone={statusTone(result.status)} title={result.warning}>
      <Info className="h-3 w-3" />
      {result.label}
    </Badge>
  );
}
