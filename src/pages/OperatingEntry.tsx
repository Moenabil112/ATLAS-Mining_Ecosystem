import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/layout/PageHeader";
import { OperatingEntryDashboard } from "@/components/dashboards/OperatingEntryDashboard";

export function OperatingEntry() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        eyebrow={t("pages.entry.eyebrow")}
        title={t("pages.entry.title")}
        description={t("pages.entry.description")}
      />
      <OperatingEntryDashboard />
    </div>
  );
}
