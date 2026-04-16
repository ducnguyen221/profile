# PRD TEMPLATE — Product Requirements Document

> Canonical rules: `docs/process/rules.md` • Glossary: `docs/core/glossary.md`

**Quy ước ID (khuyến nghị)**
- `FE-XXX`: Feature ID (ví dụ `FE-012`)
- `US-XXX`: User Story ID (ví dụ `US-104`)
- `TC-XXX`: Test Case ID (ví dụ `TC-220`)
- `SP-YYYY-NN`: Sprint ID (ví dụ `SP-2026-01`)
- `REL-YYYY.MM.DD-XX`: Release ID (ví dụ `REL-2026.01.26-01`)

---

## 1) Tổng quan
- **Product/Module:** 
- **Owner:** 
- **Version:** v0.1
- **Date:** 2026-01-25

## 2) Problem & Opportunity
- Vấn đề đang gặp:
- Cơ hội/giá trị:
- Vì sao làm *bây giờ*:

## 3) Goals / Non-goals
**Goals**
- ...

**Non-goals (out of scope)**
- ...

## 4) Personas & Use cases
- Persona A:
- Persona B:
- Use cases chính:

## 5) User Journey / Flow (mô tả ngắn)
- Flow 1:
- Flow 2:

## 6) Scope theo release
- **Release 1:** ...
- **Release 2:** ...

## 7) Feature list (map ra FE/US)
- FE-...: ...
- FE-...: ...

## 8) Requirements & Acceptance (level PRD)
- Requirement 1 (không quá chi tiết code):
- Requirement 2:

## 9) Business Rules (tham chiếu)
- BR-... (link `docs/core/business-rules.md`):
- BR-...:

## 10) UX/UI (tham chiếu)
- Screens: (link `docs/core/ux-spec.md`)
- UI states bắt buộc: loading/empty/error/success

## 11) Success Metrics (KPI)
- KPI-1:
- KPI-2:
- Baseline (nếu có):
- Target:

## 12) Instrumentation Plan (để đo KPI)
> Bắt buộc nếu PRD có KPI.  
- Event list + properties (tham chiếu/điền vào `docs/registry/event-taxonomy.md`):
  - EVT-...: when..., properties...

## 13) Data / API Impacts
- Data impact: None / Schema change / Migration / Backfill
- API impact: None / New endpoint / Change contract
- Registries cần update: `docs/registry/api-registry.md`, `docs/registry/data-dictionary.md`

## 14) Non-functional Requirements (NFR)
- Performance:
- Reliability:
- Security/Privacy:
- Observability:

## 15) Rollout & Operations
- Feature flags plan (link `docs/registry/config-featureflags.md`):
- Rollout strategy: staged/canary/region
- Operational readiness: dashboard/alerts (link `docs/architecture/observability.md`)
- Rollback plan (high-level):

## 16) Risks & Open Questions
- Risk 1:
- Open question 1:

## 17) Definition of Done (Product)
- Demo checklist:
- Evidence (metrics/events/tests):
- Update-back: RTM + registries + sprint pack
