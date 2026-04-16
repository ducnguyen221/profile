# CHANGE CONTROL REQUEST TEMPLATE

> Dùng khi thay đổi scope/AC trong sprint hoặc sau khi đã approved proposal.  
> Quy tắc: `docs/process/change-control.md`

**Quy ước ID (khuyến nghị)**
- `FE-XXX`: Feature ID (ví dụ `FE-012`)
- `US-XXX`: User Story ID (ví dụ `US-104`)
- `TC-XXX`: Test Case ID (ví dụ `TC-220`)
- `SP-YYYY-NN`: Sprint ID (ví dụ `SP-2026-01`)
- `REL-YYYY.MM.DD-XX`: Release ID (ví dụ `REL-2026.01.26-01`)

---

## 1) Change Request
- CR_ID: CR-YYYYMMDD-XX
- Date: 2026-01-25
- Initiator:
- Affected Sprint/Release: SP-... / REL-...
- Related Feature/Story: FE-... / US-...

## 2) Reason
- Vì sao cần đổi?

## 3) What changes
- Thay đổi yêu cầu/AC:
- Thay đổi UI/flow:
- Thay đổi business rules:
- Thay đổi API/Data:

## 4) Impact Analysis
- Scope impact:
- Timeline impact:
- Risk impact: Low/Med/High
- Data impact: None / Schema change / Migration / Backfill
- Security impact: None / Auth / Role-Permission / PII
- Telemetry impact (events):
- Additional gates required:

## 5) Docs to Update (bắt buộc tick)
- [ ] `sprints/<SP>/sprint-brief.md`
- [ ] `sprints/<SP>/stories-ac.md`
- [ ] `docs/registry/rtm-traceability.md`
- [ ] `docs/registry/story-registry.md`
- [ ] `docs/registry/api-registry.md` (nếu có)
- [ ] `docs/registry/data-dictionary.md` (nếu có)
- [ ] `docs/registry/test-registry.md` (nếu có)
- [ ] `docs/core/prd.md` / `docs/core/business-rules.md` / `docs/core/ux-spec.md` (nếu ảnh hưởng)

## 6) Approval
- Approver(s):
- Decision: Approved / Rejected
- Notes:

## 7) Implementation Plan
- Steps:
- Verification:
- Rollback:
