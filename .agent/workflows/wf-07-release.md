---
description: Release — chốt release notes, update release registry, post-release checks & rollback
---

# WF-07 — RELEASE (/release)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Chốt release notes “đọc được & verify được”
- Đồng bộ release registry để audit được “ship cái gì”
- Có post-release checks (T+15m/T+24h) + plan rollback

## Files tham chiếu bắt buộc
- Template: `docs/templates/RELEASE_NOTES_TEMPLATE.md`
- Sprint release notes: `sprints/<SP>/release-notes.md` (nếu thuộc sprint)
- Release registry: `docs/registry/release-registry.md`
- RTM/story registry: `docs/registry/rtm-traceability.md`, `docs/registry/story-registry.md`
- Flags: `docs/registry/config-featureflags.md`
- Observability: `docs/architecture/observability.md`
- Risk/issue: `docs/registry/risk-issue-log.md`

## Steps
1) **Assemble shipped set**
   - List US/bugs shipped + PR links + flags + migrations
2) **Write release notes**
   - Shipped changes, breaking/migration notes, how-to-verify (5 phút), post-release checks, rollback
3) **Update registries**
   - `release-registry.md` (release ID + verify links)
   - RTM/story registry (ship status + release link)
4) **Post-release monitoring plan**
   - Metrics/dashboards/alerts + threshold + owners
5) **Handoff**
   - Chuyển cho team vận hành: verify steps + rollback triggers

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
