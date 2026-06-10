import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/layout/PageHeader";
import { LicenseDashboard } from "@/components/dashboards/LicenseDashboard";

export function LicensePosition() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        eyebrow={t("pages.license.eyebrow")}
        title={t("pages.license.title")}
        description={t("pages.license.description")}
      />
      <LicenseDashboard />
    </div>
  );
}
