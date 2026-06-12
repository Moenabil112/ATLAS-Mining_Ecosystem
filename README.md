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
- **i18next + react-i18next** — trilingual (EN / AR / FR) with RTL support
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
├── i18n/                    # config.ts + locales/{en,ar,fr}.json (trilingual, RTL)
├── evidence-base/           # ATLAS Digital Evidence Base (structured backend) + typed loader (index.ts)
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

## 5. Internationalization (i18n)

The platform ships a complete trilingual system: **English (en)**, **Arabic (ar)**
and **French (fr)**, with full right-to-left support for Arabic.

```txt
src/i18n/
├── config.ts            # i18next init: detection, persistence, dir/lang sync
└── locales/
    ├── en.json          # source-of-truth resource (247 keys)
    ├── ar.json          # Arabic — RTL
    └── fr.json          # French
```

- **Language switcher** (`components/shared/LanguageSwitcher.tsx`) appears in the
  sidebar (desktop) and the mobile header. Selection persists to
  `localStorage` (`atlas-lang`).
- **Detection order:** localStorage → browser language → `<html lang>`,
  falling back to English.
- **Direction:** `applyDocumentDirection()` sets `<html dir>` and `<html lang>`
  on every language change; Arabic switches the whole shell to RTL. Layout uses
  logical Tailwind utilities (`border-e`, `pe-*`, `text-start`, `end-0`) and
  `rtl:rotate-180` on directional arrows so the UI mirrors correctly.
- **Font:** Alexandria (loaded in `index.html`) covers Latin and Arabic scripts.
- **Coverage:** all navigation, page headers, section headers, gateway copy,
  status/access/decision badges, table headers, card labels, CTAs and chrome are
  translated. All three locale files share an identical key tree (verified equal:
  247 keys each).
- **Adding a language:** add a locale JSON, register it in `config.ts`
  (`resources` + `SUPPORTED_LANGUAGES`), and the switcher picks it up. Set
  `dir: "rtl"` for right-to-left scripts.
- **Boundary:** long-form *body* content sourced from the Markdown-derived JSON
  data model (e.g. assay interpretations, assumption text, risk-control wording)
  currently renders in its source language. The translation framework is fully
  wired so this content can be localized by adding keyed entries — see §8.

## 6. How to run

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # type-check (tsc --noEmit) + production build → dist/
npm run preview  # preview the production build
npm run lint     # type-check only
```

Node 18+ recommended (built and verified on Node 22).

---

## 7. Responsive layout

- **Desktop/tablet:** fixed left sidebar navigation.
- **Mobile:** top confidential header + bottom tab bar (Gateway · License ·
  Evidence · Study · System · 180 Days · Entry · Data · Decision).
- All tables scroll horizontally; grids collapse to single column.

---

## 8. Remaining gaps & assumptions

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

## 9. Evidence Base (backend content layer)

The **Evidence, Data Room and Decision Room** layers are driven by the *ATLAS
Digital Evidence Base* (Evidence Base v1.0 — Phase 1, 0–30 Day Data Control),
lodged under `src/evidence-base/` as the structured backend with full
provenance. `src/evidence-base/index.ts` is the typed loader; types live in
`src/types/evidence.ts`.

What the base provides and where it surfaces:

- **66 evidence objects** — 51 registered numbers + 15 controlled claims, each
  with a source document, status and a mandatory display label.
- **Evidence page** — field-visit summary, 8 selected-assay highlights, the
  full AFRILAB assay register (12 of 29 samples, selected results only), 7-trench
  register, evidence confidence matrix, geophysics/drilling record, registered
  field/lab claims, and linked source documents. The maturity chart reads the
  base's `evidence_maturity_count` (documented 17 · selected-sample 12 ·
  preliminary 21 · requires-correction 1).
- **Data Room** — 12 folders resolving `DOC-xxx` ids to the 12-document source
  register (each card shows access level, key numbers, claim sensitivity and
  *file status* — most originals are "referenced, pending lodgement"), the
  six-tier access-control matrix, and the claim-disclosure split
  (investor-visible 14 / NDA-required 14 / restricted-internal 4).
- **Decision Room** — 10 decision gates (phase, question, required evidence,
  status, owner, risk, go/hold/redesign conditions, next action), 10 risk flags
  with controls and linked claims, the AIPS-014 material-balance review item, and
  the validation workstreams + gaps.

Governance enforced from the base: selected assays are always labelled
*not average grade*; 2.3 Mt / 1.8% Cu stays a *preliminary orientation estimate*;
the 162–406M MAD gains are `requires-correction` and blocked from investor
material; the USD 150,000 fee keeps its fixed non-refundable wording, independent
of the digital system.

> The evidence base is a Phase-1 register: original PDFs are not yet lodged, the
> full 29-sample table and per-trench geometry are pending, and GIS layers are
> scheduled for Phase 2. The UI surfaces these as explicit `file_status` /
> "pending" states rather than hiding them.

## 10. Next recommended development steps

1. **Authentication & gated data room** — enforce the five access tiers server-side
   with NDA/qualified-review onboarding and an investor access log.
2. **Live GIS module** — license perimeter, sample/assay map, target-priority and
   blind-zone overlays (the Intelligent Copper Targeting System map modules).
3. **Assumption tracker workflow** — editable validation states feeding the
   decision gates, with source-document linkage.
4. **Localize body content** — extend the i18n layer (already complete for all UI
   chrome) to the Markdown-derived data model so assay interpretations, assumption
   text and risk-control wording render in AR/FR with translation review.
5. **PDF/board-pack export** — generate the 150–180 day Investor/Operator Decision
   Pack from the live data model.
6. **CMS-style Markdown sync** — regenerate `src/data/*.json` automatically from the
   Markdown source so content edits flow straight through.

---

*Confidential. Atlas-controlled opportunity. Technology & digitization layer:
Mohamed Nabil / Akanil — independent from the entry fee.*
