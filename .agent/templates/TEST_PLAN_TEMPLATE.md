# TEST PLAN TEMPLATE

> Canonical: `docs/process/rules.md` • Registry: `docs/registry/test-registry.md`

**Quy ước ID (khuyến nghị)**
- `FE-XXX`: Feature ID (ví dụ `FE-012`)
- `US-XXX`: User Story ID (ví dụ `US-104`)
- `TC-XXX`: Test Case ID (ví dụ `TC-220`)
- `SP-YYYY-NN`: Sprint ID (ví dụ `SP-2026-01`)
- `REL-YYYY.MM.DD-XX`: Release ID (ví dụ `REL-2026.01.26-01`)

---

## 1) Overview
- **Title:** 
- **Owner:** 
- **Scope:** FE/BE/Integration/E2E
- **Sprint/Release:** SP-... / REL-...

## 2) Trace (bắt buộc)
- Related Features/Stories: FE-... / US-...
- Acceptance Criteria sources:
  - `sprints/<SP>/stories-ac.md` (nếu thuộc sprint)
  - `docs/core/user-stories.md` (nếu không)
- Test case mapping (TC_IDs):
  - TC-... ↔ US-...

## 3) Test Environment
- Env: Local / Staging / Prod-like
- Versions:
- Accounts/roles needed:
- Feature flags/config:

## 4) Test Data Setup
- Data prerequisites:
- Seed scripts:
- Cleanup plan:

## 5) Test Approach
- Manual vs Automated:
- Tools:
- Risks:

## 6) Test Cases
> Gợi ý bảng:
| TC_ID | Priority | Story/AC | Steps (tóm tắt) | Expected | Automated? | Evidence |
|---|---|---|---|---|---|---|
| TC-001 | P0 | US-.../AC-01 | ... | ... | No | ... |

## 7) Negative / Edge Cases
- ...

## 8) Regression Scope
- Areas to re-test:
- Past bugs related:

## 9) Entry / Exit Criteria
- Entry:
- Exit (pass conditions):

## 10) Evidence & Reporting
- Where to store evidence (link/screenshot/log):
- Update-back:
  - `sprints/<SP>/test-uat.md`
  - `docs/registry/test-registry.md`
