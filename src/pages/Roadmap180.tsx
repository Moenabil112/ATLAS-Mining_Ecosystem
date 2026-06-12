import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Roadmap180Dashboard } from "@/components/dashboards/Roadmap180Dashboard";

export function Roadmap180() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        eyebrow={t("pages.roadmap.eyebrow")}
        title={t("pages.roadmap.title")}
        description={t("pages.roadmap.description")}
      />
      <Roadmap180Dashboard />
    </div>
  );
}
