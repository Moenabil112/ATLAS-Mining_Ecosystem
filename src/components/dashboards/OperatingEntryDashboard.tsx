import { Handshake, Route, Building2, Cpu, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Panel } from "@/components/shared/Panel";
import { Callout } from "@/components/shared/Callout";
import { Badge } from "@/components/shared/Badge";
import { CheckList } from "@/components/shared/CheckList";
import {
  commercialOffer,
  coreOffer,
  feeRepresents,
  feeIsNot,
  pilotPathway,
  longTermPathway,
  investorBenefits,
  atlasBenefits,
  technologyIndependence,
} from "@/data";

export function OperatingEntryDashboard() {
  return (
    <div className="space-y-10">
      {/* Offer headline */}
      <Callout variant="info">{coreOffer}</Callout>

      {/* Entry fee hero */}
      <section>
        <Panel className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-copper-line" />
          <div className="grid gap-6 lg:grid-cols-[auto,1fr] lg:items-center">
            <div className="text-center lg:border-r lg:border-graphite-700/70 lg:pr-8 lg:text-left">
              <p className="eyebrow">{commercialOffer.offerType}</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-copper-300">
                USD 150,000
              </p>
              <p className="mt-1 text-sm text-sand-200/75">
                {commercialOffer.feeNature}
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
                <Badge tone="copper">Payable to {commercialOffer.payableTo}</Badge>
                <Badge tone="warning">Non-refundable</Badge>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-2 text-mineral-300">What the fee provides</p>
                <CheckList items={feeRepresents} variant="include" />
              </div>
              <div>
                <p className="eyebrow mb-2 text-copper-300">What the fee is not</p>
                <CheckList items={feeIsNot} variant="exclude" />
              </div>
            </div>
          </div>
        </Panel>
      </section>

      {/* Access includes / excludes */}
      <section>
        <SectionHeader
          icon={Handshake}
          title="Entry & Validation Access"
          description="What the incoming qualified operator / investor receives — and what is explicitly excluded."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel>
            <h3 className="mb-3 text-sm font-medium text-mineral-300">
              Access includes
            </h3>
            <CheckList items={commercialOffer.accessIncludes} variant="include" />
          </Panel>
          <Panel>
            <h3 className="mb-3 text-sm font-medium text-copper-300">
              Access does not include
            </h3>
            <CheckList items={commercialOffer.accessExcludes} variant="exclude" />
          </Panel>
        </div>
      </section>

      {/* Entry pathway */}
      <section>
        <SectionHeader icon={Route} title="Entry Pathway" />
        <div className="flex flex-wrap items-center gap-2">
          {commercialOffer.entryPathway.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-md border border-graphite-700 bg-graphite-800 px-3 py-2 text-xs font-medium text-sand-100">
                <span className="mr-2 font-mono text-copper-400">{i + 1}</span>
                {step}
              </span>
              {i < commercialOffer.entryPathway.length - 1 && (
                <span className="text-copper-500/60">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pilot + long-term pathways */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <SectionHeader title={pilotPathway.title} description={pilotPathway.description} />
          <Panel>
            <p className="eyebrow mb-2">Pilot conditions</p>
            <CheckList items={pilotPathway.conditions} variant="include" />
            <div className="mt-4 border-t border-graphite-700/70 pt-4">
              <p className="eyebrow mb-2">Pilot scope</p>
              <div className="flex flex-wrap gap-1.5">
                {pilotPathway.scope.map((s) => (
                  <Badge key={s} tone="mineral">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </Panel>
        </section>

        <section>
          <SectionHeader
            title={longTermPathway.title}
            description={longTermPathway.description}
          />
          <Panel>
            <p className="eyebrow mb-2">Agreement elements</p>
            <div className="flex flex-wrap gap-1.5">
              {longTermPathway.conditions.map((c) => (
                <Badge key={c} tone="sand">
                  {c}
                </Badge>
              ))}
            </div>
            <Callout variant="info">{longTermPathway.principle}</Callout>
          </Panel>
        </section>
      </div>

      {/* Technology independence */}
      <Callout variant="warning" title="Technology independence">
        <span className="flex items-start gap-2">
          <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
          {technologyIndependence}
        </span>
      </Callout>

      {/* Benefits */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <SectionHeader icon={Building2} title="Investor / Operator Benefits" />
          <Panel>
            <CheckList items={investorBenefits} variant="include" />
          </Panel>
        </section>
        <section>
          <SectionHeader icon={ShieldCheck} title="Atlas Benefits" />
          <Panel>
            <CheckList items={atlasBenefits} variant="include" />
          </Panel>
        </section>
      </div>
    </div>
  );
}
