---
description: Change control — thay đổi scope/AC giữa sprint, update đồng bộ sprint pack + registry
---

# WF-10 — CHANGE CONTROL (/change_control)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Không để sprint “loạn scope”: mọi thay đổi phải có CR + approvals + update đồng bộ
- Cập nhật ngược: sprint pack + RTM/story registry + (nếu cần) PRD/UX/BR

## Files tham chiếu bắt buộc
- Template: `docs/templates/CHANGE_CONTROL_TEMPLATE.md`
- Rules: `docs/process/change-control.md`
- Sprint pack: `sprints/<SP>/*`
- Registries: `docs/registry/rtm-traceability.md`, `docs/registry/story-registry.md`

## Steps
1) **Create Change Request (CR)**
   - Điền lý do + thay đổi AC/scope + impact (data/security/telemetry) + gates
2) **Approval**
   - Xác định approver; ghi decision Approved/Rejected
3) **Update docs**
   - Sprint pack (`sprint-brief`, `stories-ac`) + RTM/story registry
   - Nếu ảnh hưởng product/UX/rules → update `docs/core/*`
4) **Communicate**
   - List tasks carry-over, re-plan tests/rollout
5) **Handoff**
   - Route về `/dev_be`/`/dev_fe`/`/test` nếu cần triển khai lại

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
