# Definition of Ready (DoR) — Checklist Template

> Gate trước khi story vào sprint.  
> Rules: `docs/process/definition-of-ready.md`

**Quy ước ID (khuyến nghị)**
- `FE-XXX`: Feature ID (ví dụ `FE-012`)
- `US-XXX`: User Story ID (ví dụ `US-104`)
- `TC-XXX`: Test Case ID (ví dụ `TC-220`)
- `SP-YYYY-NN`: Sprint ID (ví dụ `SP-2026-01`)
- `REL-YYYY.MM.DD-XX`: Release ID (ví dụ `REL-2026.01.26-01`)

---

## Story Info
- US_ID:
- FE_ID:
- Proposed Sprint:
- Owner:

## Requirement clarity
- [ ] Có mô tả mục tiêu rõ ràng (1–2 câu)
- [ ] Có user value và context
- [ ] Có references đúng: PRD/UX/BR/NFR

## Acceptance Criteria (GWT)
- [ ] AC đầy đủ, testable
- [ ] Edge cases được nêu
- [ ] UI states (loading/empty/error/success) nếu có UI

## Impact (MANDATORY)
- [ ] Data impact đã rõ (none/schema/migration/backfill)
- [ ] Security impact đã rõ (none/auth/permission/PII)
- [ ] Telemetry events đã rõ (nếu có KPI)

## Dependencies & Constraints
- [ ] Dependencies được nêu (API, data, external)
- [ ] Constraints (perf, cost, legal) được nêu

## Test readiness
- [ ] Có test ideas (P0/P1) hoặc draft test cases
- [ ] Có UAT steps cơ bản

## Risk & Gates
- [ ] Risk level rõ (Low/Med/High)
- [ ] Gates required xác định theo `docs/process/risk-based-gates.md`

## Ready Decision
- Decision: Ready / Not Ready
- Missing items:
- Next actions:
