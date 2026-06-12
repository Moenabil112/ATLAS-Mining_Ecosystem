# Build-Ready Summary

**ATLAS Isseksi Copper Digital Evidence Base** · Evidence Base v1.0 — Phase 1 (0–30 Day Data Control) · Generated 2026-06-10

Hand-off note for the developer building the digital ecosystem on this evidence base.

---

## What this base contains

- **66** structured evidence objects (51 numbers + 15 claims)
- **17** tracked assumptions (incl. AIPS-014 material-balance review item)
- **12** registered source documents · **10** decision gates · **10** risk flags
- **12** assay records · **7** trench records · 12 data-room folders · full access-control matrix

## Import order for a React/TypeScript app

1. `09_SYSTEM_READY_DATA/ecosystem_layers.json` → layer model
2. `09_SYSTEM_READY_DATA/dashboard_metrics.json` → gateway metrics
3. `09_SYSTEM_READY_DATA/claim_controls.json` → claims-control engine (classifyClaim)
4. `00_MASTER_INDEX/number_register.json` + `claim_register.json` → badges everywhere a number renders
5. `06_180_DAY_ROADMAP_EVIDENCE/*` → timeline + decision room
6. `08_INVESTOR_DATA_ROOM/*` → data room with access gating

## Missing data (Phase-1 register)

- Original PDFs not yet lodged: Exploitation License 353294, Research Permit 3535903, Environmental Approval CRI/24/102, Field Visit Report (May 2025), AFRILAB 1848/06/25 & 1849/06/25, A.I.P.S orientation study. Current registers are built from the MD knowledge package and the engineering brief; page-level source references await original uploads.
- Full 29-sample AFRILAB table: only 8 named samples + 4 low-grade values are registered; remaining sample IDs, weights, and any Zn/multi-element values are pending.
- Per-trench detail: lengths, coordinates, ore observations, vein thickness, and photo references for the 7 trenches.
- License coordinates, boundary definition, and official holder name (counsel-confirmed).
- A.I.P.S study page references for each extracted number.
- Drilling contractor quotations (DD/RC) referenced in the field report.
- Zaouit Askar area context documents (referenced at ~59 km; no technical detail registered).
- GIS layers (license perimeter, trench locations) — scheduled Phase 2.

## Validation gaps

- Average grade vs selected assays — representative channel sampling + drilling (GATE-03/05).
- Resource estimate 2.3 Mt @ 1.8% Cu — drilling and resource modeling (GATE-05).
- Ore-type split oxide/sulfide/mixed — mineralogy + metallurgical test work (GATE-06/07).
- Recovery ~89.78–90% — flotation test work (GATE-07).
- Material balance AIPS-014 (225,000 t/y × 1.8% Cu vs 22,050 t/y @ 28.40% Cu) — technical & arithmetic audit (GATE-09).
- Annual gains 162–406M MAD — financial model correction & update (GATE-09).
- Water: 1,200 m³/day, 1.32 m³/t ROM, 40% recycling — hydrogeology, permits, tailings tests (GATE-08).
- Power: ONEE 22 kV, 630–800 kVA — electrical connection study (GATE-08).
- Tailings: 3 ha concept ~2 km from plant — tailings engineering & permitting (GATE-08).
- License legal finality — counsel review (GATE-01).

## Recommended next step

Lodge the original PDFs (license, permits, AFRILAB, field report, A.I.P.S study) to close Gate-02, convert page references from placeholders to real citations, complete the 29-sample table and per-trench geometry, then wire this base into the platform UI as its content layer.

---

## Governance notes

- Atlas Mining is the license holder and opportunity owner; the digital layer (Akanil / Mohamed Nabil) is an independent decision-support structure.
- The USD 150,000 Entry & Validation Access fee is non-refundable, payable to Atlas Mining, and is **not** a license purchase, technology fee, equity investment, refundable deposit, or production right.
- No preliminary number may be presented as certified resource, proven reserve, bankable feasibility, or final CAPEX.
- Selected assay results are never average project grade.
