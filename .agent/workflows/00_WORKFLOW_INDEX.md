---
description: Workflow index (slash commands) — version v2
---

# WORKFLOW INDEX (Slash Commands)

## Workflow list
- `wf-00-triage`           → `/triage`
- `wf-01-ba-prd`           → `/ba_prd`
- `wf-02-arch-rfc`         → `/arch_rfc`
- `wf-03-dev-back-end`     → `/dev_be`
- `wf-04-dev-front-end`    → `/dev_fe`
- `wf-05-tester`           → `/test`
- `wf-06-product-checker`  → `/preflight`
- `wf-07-release`          → `/release`
- `wf-08-sprint-pack`      → `/sprint_pack`
- `wf-09-registry-sync`    → `/registry_sync`
- `wf-10-change-control`   → `/change_control`

## Nguyên tắc vận hành
- **1 nhiệm vụ = 1 workflow chạy** (không trộn vai).
- Luôn trả **4 artifacts**: **PLAN / CHANGESET / VERIFICATION / HANDOFF**.
- Templates chuẩn nằm ở: `docs/templates/`
- Sprint pack template nằm ở: `sprints/_TEMPLATE_SPRINT/`

## Routing nhanh (đừng đoán)
- Yêu cầu mơ hồ/bug/định tuyến → `/triage`
- Viết PRD / chốt scope → `/ba_prd`
- Quyết định kiến trúc / API / data model → `/arch_rfc`
- Implement BE → `/dev_be`
- Implement FE → `/dev_fe`
- Test/UAT → `/test`
- Gate trước prod (GO/NO-GO) → `/preflight`
- Chốt release + registry + post-release checks → `/release`
- Tạo hồ sơ sprint (5 file) → `/sprint_pack`
- Đồng bộ registry/trace (RTM, story, api, data, test, release...) → `/registry_sync`
- Thay đổi scope/AC giữa sprint → `/change_control`
