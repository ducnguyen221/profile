---
description: Triage & routing — phân loại yêu cầu, đề xuất workflow tiếp theo
---

# WF-00 — TRIAGE (/triage)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Phân loại yêu cầu (Bug/Feature/Tech-debt/Question/Spike)
- Xác định **đầu vào tối thiểu** để không “code theo suy đoán”
- Định tuyến sang workflow đúng vai

## Inputs tối thiểu cần có
- Mô tả yêu cầu/issue
- Context: môi trường (local/staging/prod), module liên quan
- Nếu có: FE/US/SP/REL IDs

## Steps
1) **Classify**
   - Bug / Feature / Tech-debt / Question / Spike
2) **Trace & IDs**
   - Gắn/đề xuất FE/US/SP/REL (nếu chưa có → tạo placeholder đề xuất)
3) **Impact quick-check**
   - Data impact / Security impact / Telemetry events (none/unknown?)
4) **Routing decision**
   - Feature mơ hồ → `/ba_prd`
   - Thay đổi kiến trúc/API/data → `/arch_rfc`
   - Implement rõ AC → `/dev_be` hoặc `/dev_fe`
   - Cần test/UAT → `/test`
   - Ship prod → `/preflight` → `/release`
   - Đổi scope giữa sprint → `/change_control`
5) **Create next artifact**
   - Nếu là bug → soạn theo `docs/templates/BUG_REPORT_TEMPLATE.md`
   - Nếu là feature/story → soạn ticket theo `docs/templates/TICKET_TEMPLATE.md`

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

## Update-back (chỉ khi cần)
- Prod issue đáng kể → cập nhật `docs/registry/risk-issue-log.md` (owner + next step)
