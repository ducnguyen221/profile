---
description: Tester/QA — lập test plan, chạy test/UAT, log bugs, cập nhật test registry
---

# WF-05 — TESTER (/test)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Biến AC thành test cases có mapping (US↔AC↔TC)
- Chạy test + ghi evidence, log bug đúng format
- Update sprint test-uat + test registry để audit được

## Files tham chiếu bắt buộc
- Template: `docs/templates/TEST_PLAN_TEMPLATE.md`, `docs/templates/BUG_REPORT_TEMPLATE.md`
- Test registry: `docs/registry/test-registry.md`
- Sprint UAT: `sprints/<SP>/test-uat.md` (nếu thuộc sprint)
- AC source: `sprints/<SP>/stories-ac.md` hoặc `docs/core/user-stories.md`

## Steps
1) **Draft test plan** theo template (P0/P1 + negative + regression)
2) **Map TC ↔ US**
   - Cập nhật `docs/registry/test-registry.md` (TC_IDs)
3) **Execute**
   - Run tests; lưu evidence (log/screenshot/link)
4) **Report defects**
   - Bug theo template; gắn FE/US/SP/REL + regression info
5) **Update sprint pack**
   - `sprints/<SP>/test-uat.md` (kết quả + evidence)
6) **Sign-off recommendation**
   - Ready / Not ready + blockers

## Output bắt buộc (4 artifacts)
- **PLAN**: file sẽ đọc/sửa, assumption, rủi ro, bước làm
- **CHANGESET**: danh sách thay đổi + link PR/commit + file paths
- **VERIFICATION**: test/smoke/UAT/evidence
- **HANDOFF**: cách chạy/verify/rollout/rollback + next steps

## STOP conditions (phải dừng/đề xuất bổ sung)
- Thiếu **Acceptance Criteria (GWT)** hoặc thiếu **UI states** (nếu có UI)
- Không rõ **Data/Security/Telemetry impact**
- Không có contract API/Data trong registry nhưng task phụ thuộc
- High-risk (auth/payment/migration/permission/PII) nhưng chưa có gate/rollback

## Update-back (bắt buộc khi DONE)
- Sprint pack (nếu thuộc sprint): `sprints/<SP>/impl-notes.md`, `sprints/<SP>/test-uat.md`, `sprints/<SP>/release-notes.md`
- Registry (tuỳ impact): `docs/registry/*` (RTM, story, api, data, test, release, flags, events, risk)
