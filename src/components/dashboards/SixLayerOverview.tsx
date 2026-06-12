import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ecosystemLayers } from "@/data";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";

const flow = ["Asset", "Evidence", "Study", "Intelligence", "Validation", "Operating Entry"];

export function SixLayerOverview() {
  return (
    <div>
      {/* Progress flow */}
      <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-sand-300/60">
        {flow.map((step, i) => (
          <span key={step} className="flex items-center gap-2">
            <span className="font-medium text-sand-200/80">{step}</span>
            {i < flow.length - 1 && (
              <ArrowRight className="h-3 w-3 text-copper-500/70" />
            )}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ecosystemLayers.map((layer, i) => (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Link to={layer.route} className="block h-full">
              <Panel hover className="h-full">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-copper-600/40 bg-copper-700/15 text-xs font-semibold text-copper-300">
                  {layer.index}
                </span>
                <Badge tone="mineral">{layer.role}</Badge>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-sand-50">
                {layer.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-sand-200/65">
                {layer.summary}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wide text-sand-300/45">
                  {layer.maturity}
                </span>
                  <ArrowRight className="h-3.5 w-3.5 text-copper-400" />
                </div>
              </Panel>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
