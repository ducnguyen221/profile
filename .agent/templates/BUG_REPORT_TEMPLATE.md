# BUG REPORT TEMPLATE

**Quy ước ID (khuyến nghị)**
- `FE-XXX`: Feature ID (ví dụ `FE-012`)
- `US-XXX`: User Story ID (ví dụ `US-104`)
- `TC-XXX`: Test Case ID (ví dụ `TC-220`)
- `SP-YYYY-NN`: Sprint ID (ví dụ `SP-2026-01`)
- `REL-YYYY.MM.DD-XX`: Release ID (ví dụ `REL-2026.01.26-01`)

---

## 1) Thông tin lỗi
- **Title:** 
- **Severity:** S0 (down) / S1 / S2 / S3
- **Priority:** P0 / P1 / P2
- **Status:** New / Triaged / In Progress / Fixed / Verified / Won't fix
- **Reporter:** 
- **Owner (assignee):** 
- **First seen:** 2026-01-25

## 2) Context & Trace
- **Related Feature/Story:** FE-... / US-...
- **Related Sprint/Release:** SP-... / REL-...
- **Related PR/Commit:** (link) / (hash)
- **Regression?** Yes/No
  - Last known good version/commit:

## 3) Environment
- App version:
- Environment: Local / Staging / Prod
- Browser/OS (nếu FE):
- API/DB version (nếu BE):
- Feature flags/config liên quan:

## 4) Steps to Reproduce
1) ...
2) ...
3) ...

## 5) Expected vs Actual
- **Expected:**
- **Actual:**

## 6) Frequency
- Always / Often / Sometimes / Rare
- Tỷ lệ ước lượng: ...

## 7) Impact Scope
- Flow bị ảnh hưởng:
- Ảnh hưởng user: (ước lượng số người / nhóm user)
- Business impact (nếu biết): ...

## 8) Evidence
- Screenshots/video:
- Logs/trace:
- Error messages:
- Monitoring links (nếu có):

## 9) Workaround
- Có workaround không? (Yes/No)
- Mô tả:

## 10) Triage Notes
- Root cause hypothesis:
- Fix approach (high-level):
- Tests cần thêm / regression suite impacted:

## 11) Update-back (khi fix xong)
- [ ] Update `docs/registry/test-registry.md` (TC mới/điều chỉnh)
- [ ] Update `docs/registry/risk-issue-log.md` (nếu là issue đáng kể)
- [ ] Update sprint pack `impl-notes.md` + `test-uat.md` (nếu thuộc sprint)
