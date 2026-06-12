import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/layout/PageHeader";
import { EvidenceDashboard } from "@/components/dashboards/EvidenceDashboard";

export function Evidence() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        eyebrow={t("pages.evidence.eyebrow")}
        title={t("pages.evidence.title")}
        description={t("pages.evidence.description")}
      />
      <EvidenceDashboard />
    </div>
  );
}
