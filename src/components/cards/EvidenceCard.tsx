import { EvidenceStatusBadge } from "./EvidenceStatusBadge";
import { Panel } from "@/components/shared/Panel";
import type { EvidenceStatus } from "@/types";

export function EvidenceCard({
  title,
  status,
  confidence,
  use,
}: {
  title: string;
  status: EvidenceStatus;
  confidence?: string;
  use?: string;
}) {
  return (
    <Panel hover>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-medium text-sand-50">{title}</h3>
        <EvidenceStatusBadge status={status} />
      </div>
      {(confidence || use) && (
        <dl className="mt-3 space-y-1.5 text-xs">
          {confidence && (
            <div className="flex justify-between gap-3">
              <dt className="text-sand-300/50">Confidence</dt>
              <dd className="text-sand-200/80">{confidence}</dd>
            </div>
          )}
          {use && (
            <div className="flex justify-between gap-3">
              <dt className="text-sand-300/50">Use</dt>
              <dd className="text-right text-sand-200/80">{use}</dd>
            </div>
          )}
        </dl>
      )}
    </Panel>
  );
}
