# Trench and Sample Register

## Purpose

Create a structured registry of all trenches and samples.

---

## Required fields

```yaml
trench_id:
trench_length_m:
location_description:
coordinates:
ore_observation:
vein_thickness:
sample_ids:
sample_type:
sample_width:
photo_reference:
assay_report:
cu_percent:
zn_percent:
confidence_level:
follow_up_action:
```

---

## Initial known sample context

- 29 total samples submitted to AFRILAB according to the field visit report.
- AFRILAB reports 1848/06/25 and 1849/06/25 contain copper assays.
- Several samples show very low copper.
- Selected samples show high copper values.

---

## Required next action

Convert all samples into a table and link each sample to:

- trench;
- location;
- image;
- ore type;
- assay report;
- confidence status.
