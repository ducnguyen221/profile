---
description: Sprint pack — tạo folder sprint (5 file) + điền scope/risk/gates + link registry
---

# WF-08 — SPRINT PACK (/sprint_pack)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Tạo “hồ sơ sprint” đủ 5 file để theo dõi & audit:
  - `sprint-brief.md`, `stories-ac.md`, `impl-notes.md`, `test-uat.md`, `release-notes.md`
- Map story/AC/impact/gates để dev/test/release chạy đúng lane

## Files tham chiếu bắt buộc
- Template sprint: `sprints/_TEMPLATE_SPRINT/*`
- DoR: `docs/templates/DOR_CHECKLIST_TEMPLATE.md`
- Ticket/story template: `docs/templates/TICKET_TEMPLATE.md`
- Registries: `docs/registry/feature-catalog.md`, `docs/registry/story-registry.md`, `docs/registry/rtm-traceability.md`

## Steps
1) **Create sprint folder**
   - `sprints/<SP-YYYY-NN>/` copy từ `sprints/_TEMPLATE_SPRINT/`
2) **Fill sprint-brief**
   - Goal/scope/dependencies/risks + gates required
3) **Fill stories-ac**
   - US list + AC (GWT) + UI states + impact (data/security/telemetry)
4) **Registry skeleton**
   - Update `story-registry` (US ↔ sprint/status)
   - Update RTM (US ↔ AC ↔ TC placeholders)
5) **Handoff**
   - Chỉ rõ sprint “entry gate”: story nào chưa DoR thì không vào

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

## Update-back (bắt buộc)
- `sprints/<SP>/*` (5 file)
- `docs/registry/story-registry.md`, `docs/registry/rtm-traceability.md`
