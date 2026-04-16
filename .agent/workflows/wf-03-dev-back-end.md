---
description: Dev Backend — implement ticket đúng AC, update registry/sprint pack, verify
---

# WF-03 — DEV BACKEND (/dev_be)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Implement backend đúng AC + conventions
- Không phá contract (nếu đổi → cập nhật registry)
- Có verify tối thiểu và update-back đầy đủ

## Inputs tối thiểu
- Ticket/Story (US + AC): `docs/templates/TICKET_TEMPLATE.md` hoặc `sprints/<SP>/stories-ac.md`
- Nếu có: RFC/ADR liên quan
- Conventions: `docs/architecture/api-conventions.md`, `docs/architecture/data-conventions.md`

## Steps
1) **DoR check**
   - AC đủ? impact rõ? gates/rollback có chưa?
2) **PLAN**
   - Files sẽ sửa + approach + risk + tests
3) **Implement**
   - Theo conventions; không hardcode secrets; config qua env + `.env.example`
4) **Update contracts**
   - Nếu có API change → update `docs/registry/api-registry.md`
   - Nếu có data change/migration → update `docs/registry/data-dictionary.md` (+ notes migration/rollback)
5) **Tests / Verify**
   - Unit/integration tối thiểu + evidence
6) **Update sprint pack**
   - `sprints/<SP>/impl-notes.md` + `sprints/<SP>/test-uat.md` (nếu thuộc sprint)
7) **Handoff**
   - Cách chạy/verify + flags/rollout/rollback

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
