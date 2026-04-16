---
description: Product/Prod checker — GO/NO-GO preflight trước prod
---

# WF-06 — PRODUCT CHECKER (/preflight)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Gate trước khi ship: build/tests/migration/flags/observability/security
- Trả kết luận **GO/NO-GO** có lý do + rollback readiness

## Files tham chiếu bắt buộc
- Template: `docs/templates/PROD_PREFLIGHT_TEMPLATE.md`
- Risk gates: `docs/process/risk-based-gates.md`
- Observability: `docs/architecture/observability.md`
- Security: `docs/architecture/security-threat-model.md`
- Flags: `docs/registry/config-featureflags.md`
- Release notes draft: `docs/templates/RELEASE_NOTES_TEMPLATE.md` hoặc `sprints/<SP>/release-notes.md`

## Steps
1) **Collect release context**
   - Sprint/Release IDs + list US shipped + flags
2) **Run preflight checklist**
   - Build/tests pass, no secrets, migration rehearsal, dashboards/alerts ready
3) **Smoke plan**
   - Định nghĩa smoke checks 5 phút + owner
4) **GO/NO-GO**
   - Quyết định + rủi ro còn lại + điều kiện để GO
5) **Handoff**
   - Nếu GO → chuyển `/release`
   - Nếu NO-GO → tạo change request/bug list + next steps

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

## Update-back (khi cần)
- Cập nhật `docs/registry/risk-issue-log.md` nếu có blocker/risks nghiêm trọng
