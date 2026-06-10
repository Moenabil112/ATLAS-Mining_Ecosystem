import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/layout/PageHeader";
import { DecisionRoomDashboard } from "@/components/dashboards/DecisionRoomDashboard";

export function DecisionRoom() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        eyebrow={t("pages.decisionRoom.eyebrow")}
        title={t("pages.decisionRoom.title")}
        description={t("pages.decisionRoom.description")}
      />
      <DecisionRoomDashboard />
    </div>
  );
}
