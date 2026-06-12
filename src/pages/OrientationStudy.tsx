import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/layout/PageHeader";
import { OrientationStudyDashboard } from "@/components/dashboards/OrientationStudyDashboard";

export function OrientationStudy() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        eyebrow={t("pages.study.eyebrow")}
        title={t("pages.study.title")}
        description={t("pages.study.description")}
      />
      <OrientationStudyDashboard />
    </div>
  );
}
