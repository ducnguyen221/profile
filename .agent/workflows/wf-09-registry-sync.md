---
description: Registry sync — đồng bộ trace/audit sau PR/merge/release
---

# WF-09 — REGISTRY SYNC (/registry_sync)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Đảm bảo “documentation = system”: PR/release xong là registry đồng bộ.
- Audit được: **US→AC→TC→Release**, API/Data contract rõ, flags/events rõ.

## Files tham chiếu bắt buộc
- Checklist: `docs/templates/REGISTRY_UPDATE_CHECKLIST.md`
- RTM: `docs/registry/rtm-traceability.md`
- Story registry: `docs/registry/story-registry.md`
- API registry: `docs/registry/api-registry.md`
- Data dictionary: `docs/registry/data-dictionary.md`
- Test registry: `docs/registry/test-registry.md`
- Release registry: `docs/registry/release-registry.md`
- Flags/events/risk: `docs/registry/config-featureflags.md`, `docs/registry/event-taxonomy.md`, `docs/registry/risk-issue-log.md`

## Steps
1) **Collect changeset**
   - US/PR/commit + files touched + shipped release (nếu có)
2) **Run checklist routing**
   - Scope/AC? API? Data? Tests? Release? Flags? Events?
3) **Update registries**
   - Điền đầy đủ IDs + links + impact + owners + dates
4) **RTM integrity check**
   - Không để “lỗ”: US có AC? có TC? gắn Release?
5) **Report**
   - Những mục không thể cập nhật (thiếu info) → nêu rõ + action required

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
