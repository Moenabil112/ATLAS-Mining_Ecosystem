import { Lock, ShieldCheck, FileSignature, Eye, EyeOff, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/shared/Badge";
import { accessLevelLabel, accessTone } from "@/lib/accessControl";
import type { AccessLevel } from "@/types";

const icons: Record<AccessLevel, typeof Lock> = {
  "public-teaser": Eye,
  "qualified-review": ShieldCheck,
  "nda-review": FileSignature,
  "restricted-technical": Lock,
  "restricted-legal": Scale,
  "internal-only": EyeOff,
};

export function AccessLevelBadge({ level }: { level: AccessLevel }) {
  const { t } = useTranslation();
  const Icon = icons[level];
  const tone =
    accessTone(level) === "open"
      ? "mineral"
      : accessTone(level) === "controlled"
        ? "copper"
        : "warning";
  return (
    <Badge tone={tone}>
      <Icon className="h-3 w-3" />
      {t(`status.access.${level}`, accessLevelLabel(level))}
    </Badge>
  );
}
