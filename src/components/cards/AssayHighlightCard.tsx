import { useTranslation } from "react-i18next";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";
import type { AssayHighlight } from "@/types";

export function AssayHighlightCard({ assay }: { assay: AssayHighlight }) {
  const { t } = useTranslation();
  return (
    <Panel hover className="text-center">
      <p className="text-3xl font-semibold tracking-tight text-copper-300">
        {assay.cuPercent.toFixed(2)}
        <span className="ml-1 text-base font-normal text-sand-300/70">
          {t("common.cuUnit")}
        </span>
      </p>
      <p className="mt-1 text-xs font-medium text-sand-100">{assay.sampleId}</p>
      <p className="mt-0.5 text-[10px] text-sand-300/50">{assay.reportNumber}</p>
      <div className="mt-3 flex justify-center">
        <Badge tone="caution">{t("common.selectedSampleNote")}</Badge>
      </div>
    </Panel>
  );
}
