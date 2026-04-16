---
description: BA/PM viết PRD + chốt scope + tạo danh sách FE/US + trace
---

# WF-01 — BA PRD (/ba_prd)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Chuyển yêu cầu thành PRD **đo được + vận hành được**
- Tạo FE/US list đủ rõ để vào sprint (không suy diễn)
- Chuẩn bị trace: PRD → FE/US → AC → Test → Release (RTM)

## Inputs tối thiểu
- Vision (nếu có): `docs/core/vision.md`
- Yêu cầu/goal + đối tượng người dùng
- Ràng buộc (thời gian/cost/tech/legal) nếu có

## Files tham chiếu bắt buộc
- Template: `docs/templates/PRD_TEMPLATE.md`
- Glossary: `docs/core/glossary.md`
- NFR: `docs/core/nfr.md`
- Registry: `docs/registry/rtm-traceability.md`, `docs/registry/feature-catalog.md`, `docs/registry/story-registry.md`
- Event tracking (nếu có KPI): `docs/registry/event-taxonomy.md`

## Steps
1) **Draft PRD** theo template (đặc biệt: KPI + Instrumentation + Rollout/Ops readiness).
2) **Define Features (FE-IDs)** và **User Stories (US-IDs)** mức đủ rõ.
3) **AC strategy**
   - Với mỗi US: outline AC (GWT) + UI states + edge cases
4) **Trace skeleton**
   - Tạo/điền các dòng tương ứng trong RTM/story registry (mức tối thiểu)
5) **Handoff**
   - Nếu có sprint cụ thể → chạy `/sprint_pack`
   - Nếu cần quyết định kiến trúc/API/data → chạy `/arch_rfc`
   - Nếu đủ rõ để code → tạo ticket theo `docs/templates/TICKET_TEMPLATE.md`

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
