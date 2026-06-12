import { useTranslation } from "react-i18next";
import { Badge } from "@/components/shared/Badge";
import { numberStatusLabel, statusTone } from "@/lib/claims";
import type { NumberStatus } from "@/types";

export function NumberStatusBadge({ status }: { status: NumberStatus }) {
  const { t } = useTranslation();
  return (
    <Badge tone={statusTone(status)}>
      {t(`status.number.${status}`, numberStatusLabel(status))}
    </Badge>
  );
}
