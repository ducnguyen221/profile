# TICKET / USER STORY TEMPLATE

> Dùng cho: tạo ticket triển khai (story/task) có thể đưa thẳng vào sprint.  
> Canonical rules: `docs/process/rules.md` • DoR: `docs/process/definition-of-ready.md`

**Quy ước ID (khuyến nghị)**
- `FE-XXX`: Feature ID (ví dụ `FE-012`)
- `US-XXX`: User Story ID (ví dụ `US-104`)
- `TC-XXX`: Test Case ID (ví dụ `TC-220`)
- `SP-YYYY-NN`: Sprint ID (ví dụ `SP-2026-01`)
- `REL-YYYY.MM.DD-XX`: Release ID (ví dụ `REL-2026.01.26-01`)

---

## 1) Thông tin cơ bản
- **Title:** 
- **Type:** Story / Task / Spike / Bugfix
- **Priority:** P0 / P1 / P2
- **Owner:** 
- **Sprint:** `SP-YYYY-NN` (nếu có)
- **Feature ID:** `FE-XXX` (nếu có)
- **Story ID:** `US-XXX` (nếu có)
- **Related Release:** `REL-...` (nếu có)

## 2) Mô tả ngắn (1–2 câu)
- **Problem / Goal:**
- **User value:**

## 3) References (nguồn bắt buộc)
- PRD: `docs/core/prd.md` (section/link)
- UX spec: `docs/core/ux-spec.md` (screen/state)
- Business rules: `docs/core/business-rules.md` (BR-IDs)
- NFR: `docs/core/nfr.md` (nếu liên quan)
- RTM: `docs/registry/rtm-traceability.md` (row/link)
- API/Data registries (nếu liên quan): `docs/registry/api-registry.md`, `docs/registry/data-dictionary.md`

## 4) Acceptance Criteria (GWT)
> Viết dạng Given/When/Then, testable.
- **AC-01**
  - Given ...
  - When ...
  - Then ...

- **AC-02**
  - Given ...
  - When ...
  - Then ...

## 5) UI States (bắt buộc nếu có UI)
- [ ] Loading
- [ ] Empty
- [ ] Error
- [ ] Success
- Notes (nếu có): ...

## 6) Impact (MANDATORY)
- **Data impact:** None / Schema change / Migration / Backfill
- **Security impact:** None / Auth / Role-Permission / PII / Payment-like
- **Telemetry events:** (liệt kê EVT-IDs hoặc mô tả event; tham chiếu `docs/registry/event-taxonomy.md`)
  - EVT-...

## 7) Risk & Gates
- **Risk level:** Low / Medium / High
- **Gates required:** (tick)
  - [ ] Security review / threat checklist
  - [ ] Migration rehearsal + rollback plan
  - [ ] Feature flag required
  - [ ] E2E / Integration tests required
  - [ ] Observability (logs/metrics/alerts) required
- Notes: ...

## 8) Implementation Notes (không viết code ở đây)
- Approach:
- Dependencies:
- Out of scope:

## 9) Verification Plan
- Tests to run:
- Evidence expected (log/screenshot/link):
- UAT script (nếu cần): (link `sprints/<SP>/test-uat.md`)

## 10) Artifacts (agent-friendly)
- **PLAN:** ...
- **CHANGESET:** ...
- **VERIFICATION:** ...
- **HANDOFF:** ...

## 11) Done Checklist
- [ ] AC đạt + evidence đủ
- [ ] Risk gates đã qua (nếu có)
- [ ] Không leak secrets
- [ ] Docs/registry đã update-back

**Update-back (bắt buộc khi DONE)**
- Sprint pack (nếu thuộc sprint):
  - `sprints/<SP>/impl-notes.md`
  - `sprints/<SP>/test-uat.md`
  - `sprints/<SP>/release-notes.md`
- Registry (tuỳ impact):
  - `docs/registry/story-registry.md`
  - `docs/registry/rtm-traceability.md`
  - `docs/registry/api-registry.md`
  - `docs/registry/data-dictionary.md`
  - `docs/registry/test-registry.md`
  - `docs/registry/release-registry.md`
  - `docs/registry/config-featureflags.md`
  - `docs/registry/event-taxonomy.md`
  - `docs/registry/risk-issue-log.md`
