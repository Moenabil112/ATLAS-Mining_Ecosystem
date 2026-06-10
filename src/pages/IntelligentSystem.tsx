import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/layout/PageHeader";
import { IntelligentSystemDashboard } from "@/components/dashboards/IntelligentSystemDashboard";

export function IntelligentSystem() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        eyebrow={t("pages.system.eyebrow")}
        title={t("pages.system.title")}
        description={t("pages.system.description")}
      />
      <IntelligentSystemDashboard />
    </div>
  );
}
