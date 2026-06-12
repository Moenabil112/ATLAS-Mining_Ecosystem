import { CalendarRange, Flag, Boxes, FileCheck2, Users } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Panel } from "@/components/shared/Panel";
import { Callout } from "@/components/shared/Callout";
import { Badge } from "@/components/shared/Badge";
import { PhaseTimelineChart } from "@/components/charts/PhaseTimelineChart";
import { roadmapPhases, roadmapGoal } from "@/data";

export function Roadmap180Dashboard() {
  return (
    <div className="space-y-10">
      <section>
        <SectionHeader
          icon={CalendarRange}
          title="180-Day Phase Timeline"
          description="Six phases convert documents and assumptions into a structured commercial decision."
        />
        <Panel>
          <PhaseTimelineChart />
        </Panel>
      </section>

      {/* Phase cards — vertical timeline */}
      <section className="relative">
        <div className="absolute bottom-0 left-[15px] top-2 hidden w-px bg-graphite-700 sm:block" />
        <div className="space-y-5">
          {roadmapPhases.map((phase) => (
            <div key={phase.id} className="relative sm:pl-12">
              <span className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-copper-600/50 bg-graphite-900 text-xs font-semibold text-copper-300 sm:flex">
                {phase.phase}
              </span>
              <Panel>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-sand-50">
                    Phase {phase.phase} · {phase.title}
                  </h3>
                  <Badge tone="copper">{phase.days} days</Badge>
                </div>
                <p className="mt-2 text-sm text-sand-200/75">{phase.objective}</p>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div>
                    <p className="eyebrow mb-2 flex items-center gap-1.5">
                      <Boxes className="h-3 w-3" /> Activities
                    </p>
                    <ul className="space-y-1.5">
                      {phase.activities.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-xs text-sand-200/70"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper-500" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-2 flex items-center gap-1.5">
                      <FileCheck2 className="h-3 w-3" /> Outputs
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.outputs.map((o) => (
                        <Badge key={o} tone="mineral">
                          {o}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 border-t border-graphite-700/70 pt-4 sm:grid-cols-3">
                  <div>
                    <p className="eyebrow mb-1 flex items-center gap-1.5">
                      <Flag className="h-3 w-3" /> Decision gate
                    </p>
                    <p className="text-xs text-sand-200/75">
                      {phase.decisionGate}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1 flex items-center gap-1.5">
                      <Users className="h-3 w-3" /> Responsible layer
                    </p>
                    <p className="text-xs text-sand-200/75">
                      {phase.responsibleLayer}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Evidence required</p>
                    <p className="text-xs text-sand-200/75">
                      {phase.evidenceRequired}
                    </p>
                  </div>
                </div>
              </Panel>
            </div>
          ))}
        </div>
      </section>

      <Callout variant="success" title="Day 180 goal">
        {roadmapGoal}
      </Callout>
    </div>
  );
}
