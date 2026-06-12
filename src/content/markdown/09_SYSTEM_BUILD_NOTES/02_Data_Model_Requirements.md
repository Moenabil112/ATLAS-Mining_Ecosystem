# Data Model Requirements

## Core entities

- License
- Permit
- Environmental approval
- Sample
- Trench
- Assay report
- Assumption
- Evidence item
- Target zone
- Decision gate
- Risk item
- Investor access event
- Document

## Required relationships

- Sample → Assay report
- Sample → Trench
- Target zone → Evidence items
- Assumption → Source document
- Decision gate → Required evidence
- Commercial offer → Access level
