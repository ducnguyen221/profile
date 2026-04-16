---
description: Dev Frontend — implement UI theo UX spec + UI states + telemetry, update sprint/registry
---

# WF-04 — DEV FRONTEND (/dev_fe)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Implement UI đúng UX spec + **UI states** (loading/empty/error/success)
- Không “đổi luật” business rules; nếu phát hiện thiếu → phản hồi update docs
- Có evidence UI + mapping telemetry events (nếu đo KPI)

## Inputs tối thiểu
- UX spec: `docs/core/ux-spec.md`
- Ticket/Story (US + AC): `docs/templates/TICKET_TEMPLATE.md` hoặc `sprints/<SP>/stories-ac.md`
- Nếu có telemetry: `docs/registry/event-taxonomy.md`

## Steps
1) **DoR check**
   - AC + UI states + telemetry impact rõ chưa?
2) **PLAN**
   - Components/pages affected + approach + risks + tests
3) **Implement**
   - UI states đầy đủ; accessibility cơ bản; không hardcode secrets
4) **Telemetry**
   - Nếu cần event: update `docs/registry/event-taxonomy.md` (EVT-IDs + properties)
5) **Verify**
   - Screenshot/steps hoặc smoke test; evidence link
6) **Update sprint pack**
   - `sprints/<SP>/impl-notes.md` + `sprints/<SP>/test-uat.md` (nếu thuộc sprint)
7) **Handoff**
   - Cách chạy/verify + flags/rollout/rollback (nếu có)

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
