# RELEASE NOTES TEMPLATE

**Quy ước ID (khuyến nghị)**
- `FE-XXX`: Feature ID (ví dụ `FE-012`)
- `US-XXX`: User Story ID (ví dụ `US-104`)
- `TC-XXX`: Test Case ID (ví dụ `TC-220`)
- `SP-YYYY-NN`: Sprint ID (ví dụ `SP-2026-01`)
- `REL-YYYY.MM.DD-XX`: Release ID (ví dụ `REL-2026.01.26-01`)

---

## 1) Release Info
- **Release ID:** REL-...
- **Version/Tag:** v...
- **Date:** 2026-01-25
- **Sprint:** SP-...
- **Owners:** PM: ..., Tech Lead: ..., QA: ...

## 2) Summary
- 1–3 dòng tóm tắt:

## 3) Shipped Changes
- Features:
  - FE-... / US-...: ...
- Fixes:
  - BUG-...: ...

## 4) Breaking Changes / Migration Notes
- Breaking changes:
- DB migrations/backfill:
- Compatibility notes:

## 5) Feature Flags / Config
- Flags changed (link `docs/registry/config-featureflags.md`):
- Default state (ON/OFF):
- Rollout steps:

## 6) How to Verify (5 phút)
- [ ] Smoke check 1:
- [ ] Smoke check 2:
- [ ] Critical flow check:

## 7) Post-release Checks (T+15m / T+24h)
- Metrics to watch (link `docs/architecture/observability.md`):
  - Metric 1 threshold:
  - Metric 2 threshold:
- Dashboards:
- Alerts:

## 8) Rollback Plan
- Trigger rollback when:
- Rollback steps (high-level):
- Data rollback considerations:

## 9) Known Issues / Risks
- Issue 1:
- Risk 1 (owner + next step):

## 10) Update-back
- [ ] `docs/registry/release-registry.md` updated
- [ ] `docs/registry/risk-issue-log.md` updated (nếu có)
- [ ] Sprint pack `sprints/<SP>/release-notes.md` finalized
