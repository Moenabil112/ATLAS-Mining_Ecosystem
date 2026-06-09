# ATLAS Isseksi Copper — Digital Ecosystem

A confidential, investor-ready digital ecosystem that converts the **ATLAS Isseksi
Copper Project** from a static document package into a structured, AI-assisted
mining decision platform.

> **Positioning (do not alter):** A *licensed copper asset* controlled by **Atlas
> Mining**, supported by field evidence, laboratory assays, and a *preliminary mine
> construction & processing orientation study*, structured for intelligent
> validation and a *structured operating entry* pathway.
>
> This is **not** a public fundraising offer, **not** a license sale, and
> preliminary estimates are **not** certified reserves.

The Markdown knowledge package in `src/content/markdown/` is the **single source of
truth** for all structure, content, claims and data.

---

## 1. Strategic layers

The platform represents six connected layers and two control rooms:

1. **Atlas License Position** — anchor asset
2. **Field & Laboratory Evidence** — evidence base
3. **Orientation Study Asset** — industrial base case
4. **Intelligent Validation System** — digital decision layer
5. **180-Day Feasibility Upgrade** — validation pathway
6. **Structured Operating Entry** — deal pathway

Plus a **Data Room** (controlled disclosure) and a **Decision Room**
(board/investor control room).

Flow: **Asset → Evidence → Study → Intelligence → Validation → Operating Entry.**

---

## 2. Tech stack

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS** — deep graphite / copper / mineral-green / warm-sand theme
- **Framer Motion** — restrained motion
- **Lucide React** — icons
- **Recharts** — CAPEX, evidence maturity, phase timeline, access-level charts
- **React Router** — routing
- Markdown ingestion via `import.meta.glob`; local typed JSON data model

---

## 3. Project structure

```txt
src/
├── App.tsx                  # Router + shell
├── main.tsx
├── index.css                # Tailwind + theme tokens
├── components/
│   ├── layout/              # AppShell, SidebarNav, MobileNav, PageHeader, SectionHeader, nav
│   ├── cards/               # MetricCard, EvidenceCard, LicenseCard, RiskCard, AssumptionCard,
│   │                        #   AssayHighlightCard, AccessLevelBadge, EvidenceStatusBadge, NumberStatusBadge
│   ├── dashboards/          # SixLayerOverview + one dashboard per layer / decision room
│   ├── charts/              # CapexDistribution, EvidenceMaturity, PhaseTimeline, AccessLevels
│   ├── data-room/           # DataRoomFolder, DocumentCard, AccessMatrix, DisclosureRulesPanel
│   ├── decision-room/       # DecisionGateCard
│   └── shared/              # Panel, Badge, ClaimBadge, Callout, CheckList, Icon
├── content/markdown/        # Source-of-truth Markdown knowledge package
├── data/                    # license.json, evidence.json, orientationStudy.json,
│                            #   validationSystem.json, roadmap180.json, commercialOffer.json,
│                            #   claimControls.json, dataRoom.json, decisionRoom.json, ecosystem.json
│                            #   + index.ts (typed accessor)
├── lib/                     # markdown.ts, claims.ts, evidence.ts, accessControl.ts, cn.ts
├── pages/                   # Gateway, LicensePosition, Evidence, OrientationStudy,
│                            #   IntelligentSystem, Roadmap180, OperatingEntry, DataRoom, DecisionRoom
└── types/                   # Core data model (EvidenceStatus, AccessLevel, NumberStatus, LayerId, …)
```

---

## 4. Claims-Control Engine

`src/lib/claims.ts` implements `classifyClaim()` per the knowledge package's
number-language rules. Figures are routed through it and rendered with maturity
badges (`<ClaimBadge>`, `<NumberStatusBadge>`, `<EvidenceStatusBadge>`):

| Reference | Label |
|---|---|
| 2.3 Mt / 1.8% Cu | Preliminary orientation estimate — requires validation |
| 9.65% Cu (and other selected assays) | Selected sample assay — not average project grade |
| 124.4M MAD | Preliminary CAPEX orientation — subject to engineering update |
| 800 t/day | Preliminary processing scenario — not final plant decision |
| USD 150,000 | Non-refundable Entry & Validation Access fee |
| Annual gains | Preliminary model output — not bankable cash flow |

`containsProhibitedClaim()` guards against prohibited vocabulary (confirmed
reserve, guaranteed production, bankable feasibility, etc.).

---

## 5. How to run

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # type-check (tsc --noEmit) + production build → dist/
npm run preview  # preview the production build
npm run lint     # type-check only
```

Node 18+ recommended (built and verified on Node 22).

---

## 6. Responsive layout

- **Desktop/tablet:** fixed left sidebar navigation.
- **Mobile:** top confidential header + bottom tab bar (Gateway · License ·
  Evidence · Study · System · 180 Days · Entry · Data · Decision).
- All tables scroll horizontally; grids collapse to single column.

---

## 7. Remaining gaps & assumptions

- **Maps/GIS** are intentionally rendered as restricted placeholders — sensitive
  coordinates are never exposed (per disclosure rules).
- **Access control is presentational.** Access-level badges and the access matrix
  communicate disclosure tiers; there is no authentication/gating backend yet.
- **Trench/sample register** shows a representative preview derived from the
  AFRILAB reports; the full 29-sample register is held under NDA and would be
  loaded from source documents.
- **Annual-gains figures** (162M–406M MAD) are stored as `do-not-use-publicly`
  and deliberately not surfaced as headline numbers.
- The **material-balance inconsistency** (225,000 t × 1.8% Cu) is presented as a
  feasibility-upgrade validation item (AIPS-014), not as a document defect.

---

## 8. Next recommended development steps

1. **Authentication & gated data room** — enforce the five access tiers server-side
   with NDA/qualified-review onboarding and an investor access log.
2. **Live GIS module** — license perimeter, sample/assay map, target-priority and
   blind-zone overlays (the Intelligent Copper Targeting System map modules).
3. **Assumption tracker workflow** — editable validation states feeding the
   decision gates, with source-document linkage.
4. **Multilingual (AR/FR/EN)** — Alexandria font and RTL scaffolding are already in
   place; add an i18n layer and translated content.
5. **PDF/board-pack export** — generate the 150–180 day Investor/Operator Decision
   Pack from the live data model.
6. **CMS-style Markdown sync** — regenerate `src/data/*.json` automatically from the
   Markdown source so content edits flow straight through.

---

*Confidential. Atlas-controlled opportunity. Technology & digitization layer:
Mohamed Nabil / Akanil — independent from the entry fee.*
