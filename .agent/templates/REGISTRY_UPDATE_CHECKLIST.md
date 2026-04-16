# Registry Update Checklist (Agent/Dev)

> Mục tiêu: mỗi PR/ship đều traceable & audit được.  
> Canonical: `docs/process/registry-sync-rules.md`

---

## 1) Quick routing — thay đổi gì thì update file nào?

### A) Thay đổi scope/AC
- [ ] `docs/registry/rtm-traceability.md`
- [ ] `docs/registry/story-registry.md`
- [ ] Sprint `sprints/<SP>/stories-ac.md` (nếu thuộc sprint)
- [ ] `docs/core/prd.md` / `docs/core/business-rules.md` / `docs/core/ux-spec.md` (nếu ảnh hưởng)

### B) Thêm/sửa API
- [ ] `docs/registry/api-registry.md`
- [ ] `docs/registry/rtm-traceability.md` (link endpoint)
- [ ] `sprints/<SP>/impl-notes.md` (notes + PR link)

### C) Thêm/sửa dữ liệu/schema/migration
- [ ] `docs/registry/data-dictionary.md`
- [ ] `docs/registry/risk-issue-log.md` (nếu risk cao)
- [ ] `sprints/<SP>/impl-notes.md` (migration/backfill/rollback)

### D) Thêm/sửa test
- [ ] `docs/registry/test-registry.md` (TC ↔ US mapping)
- [ ] `sprints/<SP>/test-uat.md` (evidence)

### E) Ship release
- [ ] `docs/registry/release-registry.md`
- [ ] `sprints/<SP>/release-notes.md` (verify + post-release checks + rollback)

### F) Feature flags/config
- [ ] `docs/registry/config-featureflags.md`
- [ ] `sprints/<SP>/release-notes.md` (rollout steps)

### G) Analytics / KPI tracking
- [ ] `docs/registry/event-taxonomy.md`
- [ ] PRD instrumentation plan section updated (link `docs/core/prd.md`)

---

## 2) Minimal fields to include (để audit được)
- IDs: FE/US/TC/Release
- Link PR/commit
- Impact: data/security/telemetry
- Verify evidence
- Owner + date

---

## 3) Done check
- [ ] RTM có mapping US → AC → TC → Release
- [ ] Story registry có sprint/status + PR link
- [ ] Release registry có verify link
