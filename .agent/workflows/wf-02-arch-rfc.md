---
description: Architect/Tech Lead viết RFC/HLD-level + quyết định + (tuỳ mức) ADR
---

# WF-02 — ARCH RFC (/arch_rfc)

> **Entry points (bắt buộc):**
> 1) `docs/REPO-CATALOG.md` (bản đồ tài liệu)  
> 2) `docs/process/rules.md` (canonical governance)  
> 3) Nếu thuộc sprint: `sprints/<SP>/*` (5 file sprint)  
> 4) Nếu có thay đổi scope: dùng `docs/templates/CHANGE_CONTROL_TEMPLATE.md`

## Mục tiêu
- Chốt thiết kế kỹ thuật ở mức HLD/RFC để dev không “mỗi sprint một kiểu”
- Nêu rõ: API/Data changes, NFR impact, Security/Observability, Rollout/Flags
- Nếu quyết định quan trọng → tạo ADR (audit & nhớ quyết định)

## Files tham chiếu bắt buộc
- HLD: `docs/architecture/hld.md`
- Conventions: `docs/architecture/api-conventions.md`, `docs/architecture/data-conventions.md`
- Observability: `docs/architecture/observability.md`
- Security: `docs/architecture/security-threat-model.md`
- Template: `docs/templates/RFC_ARCH_TEMPLATE.md`
- ADR template: `docs/architecture/adr/ADR_TEMPLATE.md`
- Registries: `docs/registry/api-registry.md`, `docs/registry/data-dictionary.md`, `docs/registry/config-featureflags.md`

## Steps
1) **Read context**
   - PRD/US liên quan + constraints + current architecture
2) **Write RFC**
   - Proposed design + alternatives + decision + consequences
3) **Impact mapping**
   - API/Data/Flags/Telemetry (nếu có)
4) **Gates**
   - Nếu migration/auth/permission/PII → nêu gates + rollback plan
5) **ADR (when required)**
   - Tạo ADR khi: đổi DB/contract lớn, chọn pattern/framework, thay auth/permission model
6) **Handoff**
   - Tạo tickets BE/FE theo design + update registry skeleton

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
