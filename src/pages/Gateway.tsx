import { Link } from "react-router-dom";
import { ArrowRight, Lock, ShieldCheck, Layers3 } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SixLayerOverview } from "@/components/dashboards/SixLayerOverview";
import { MetricCard } from "@/components/cards/MetricCard";
import { Panel } from "@/components/shared/Panel";
import { Badge } from "@/components/shared/Badge";
import { Callout } from "@/components/shared/Callout";
import { project, keyMetrics, scenarioCases } from "@/data";

const scenarioTone = { base: "copper", upside: "mineral", expansion: "sand" } as const;

export function Gateway() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="copper">
            <Lock className="h-3 w-3" /> Confidential
          </Badge>
          <Badge tone="mineral">Atlas-controlled opportunity</Badge>
          <Badge tone="sand">Not a public fundraising offer</Badge>
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-sand-50 sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-sand-200/80">
          {project.strategicTitle}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-sand-200/65">
          {project.positioning}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/operating-entry"
            className="inline-flex items-center gap-2 rounded-md bg-copper-600 px-4 py-2.5 text-sm font-medium text-graphite-950 transition-colors hover:bg-copper-500"
          >
            View Structured Operating Entry
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/data-room"
            className="inline-flex items-center gap-2 rounded-md border border-graphite-600 px-4 py-2.5 text-sm font-medium text-sand-100 transition-colors hover:border-copper-600/50"
          >
            Request qualified review access
          </Link>
        </div>
      </section>

      {/* Key message */}
      <Callout variant="success" title="Key message">
        {project.keyMessage}
      </Callout>

      {/* Key numbers */}
      <section>
        <SectionHeader
          title="Key Numbers Panel"
          description="Every figure carries a maturity label. Documented references and preliminary estimates are clearly separated."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {keyMetrics.map((m) => (
            <MetricCard key={m.label} metric={m} />
          ))}
        </div>
      </section>

      {/* Six-layer overview */}
      <section>
        <SectionHeader
          icon={Layers3}
          title="Six Strategic Layers"
          description="The ecosystem progresses from Asset → Evidence → Study → Intelligence → Validation → Operating Entry."
        />
        <SixLayerOverview />
      </section>

      {/* Three-scale view */}
      <section>
        <SectionHeader
          title="Base Case · Upside Case · Expansion Case"
          description="A strong but controlled view of scale: a starting case, an upside hypothesis, and a validated expansion pathway."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {scenarioCases.map((sc) => (
            <Panel key={sc.id}>
              <Badge tone={scenarioTone[sc.id]}>{sc.title}</Badge>
              <p className="mt-3 text-xs leading-relaxed text-sand-300/65">
                {sc.language}
              </p>
              {sc.caveat && (
                <p className="mt-3 text-[11px] italic text-amber-200/70">
                  {sc.caveat}
                </p>
              )}
            </Panel>
          ))}
        </div>
      </section>

      {/* Pathway summary */}
      <section>
        <SectionHeader
          icon={ShieldCheck}
          title="Investor / Operator Pathway"
          description="Atlas Mining preserves control of the license and offers controlled access to qualified parties."
        />
        <Panel>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {[
              "Qualified review",
              "Entry & Validation Access",
              "180-Day Feasibility Upgrade",
              "Pilot Operating Pathway",
              "Long-Term Operating Agreement",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-md border border-graphite-700 bg-graphite-800 px-3 py-2 text-xs font-medium text-sand-100">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-copper-500/60" />
                )}
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </div>
  );
}
