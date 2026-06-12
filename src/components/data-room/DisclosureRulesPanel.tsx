import { ShieldAlert } from "lucide-react";
import { useTranslation } from "react-i18next";
import { disclosureRules } from "@/data";
import { Panel } from "@/components/shared/Panel";

export function DisclosureRulesPanel() {
  const { t } = useTranslation();
  return (
    <Panel>
      <div className="mb-3 flex items-center gap-2">
        <ShieldAlert className="h-4 w-4 text-copper-400" />
        <h3 className="text-sm font-semibold text-sand-50">
          {t("decision.disclosureRules")}
        </h3>
      </div>
      <ul className="space-y-2">
        {disclosureRules.map((rule) => (
          <li
            key={rule}
            className="flex items-start gap-2 text-xs leading-relaxed text-sand-200/70"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper-500" />
            {rule}
          </li>
        ))}
      </ul>
    </Panel>
  );
}
