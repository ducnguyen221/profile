# PROD PREFLIGHT TEMPLATE (GO/NO-GO)

> Checklist trước khi ship lên prod.  
> Nếu task high-risk → đối chiếu `docs/process/risk-based-gates.md`.

**Quy ước ID (khuyến nghị)**
- `FE-XXX`: Feature ID (ví dụ `FE-012`)
- `US-XXX`: User Story ID (ví dụ `US-104`)
- `TC-XXX`: Test Case ID (ví dụ `TC-220`)
- `SP-YYYY-NN`: Sprint ID (ví dụ `SP-2026-01`)
- `REL-YYYY.MM.DD-XX`: Release ID (ví dụ `REL-2026.01.26-01`)

---

## 1) Release Candidate
- Release ID / Tag:
- Sprint:
- Change summary:
- Deployment window:
- Rollback owner:

## 2) Build & Quality
- [ ] Lint pass
- [ ] Unit tests pass
- [ ] Integration/E2E tests pass (nếu required)
- [ ] Build pass (prod mode)

## 3) Migration / Data Safety (nếu có)
- Data impact: None / Schema change / Migration / Backfill
- [ ] Migration rehearsal done (staging/prod-like)
- [ ] Backup/restore plan ready
- [ ] Rollback plan validated
- Notes:

## 4) Feature Flags / Config
- [ ] Flags documented in `docs/registry/config-featureflags.md`
- [ ] Default state confirmed (ON/OFF)
- [ ] Rollout plan (staged/canary) written
- Notes:

## 5) Observability Readiness
- [ ] Logs available & structured
- [ ] Metrics dashboard exists
- [ ] Alerts thresholds set
- Reference: `docs/architecture/observability.md`

## 6) Security Gate
- Security impact: None / Auth / Role-Permission / PII / Payment-like
- [ ] Threat checklist reviewed (ref `docs/architecture/security-threat-model.md`)
- [ ] No secrets in repo/logs
- [ ] Rate limit / validation OK (nếu API)

## 7) Smoke Test Plan (prod)
- [ ] Smoke test 1:
- [ ] Smoke test 2:
- [ ] Critical flow:

## 8) Communication
- [ ] Release notes drafted
- [ ] Stakeholders notified
- [ ] Support/oncall aware

## 9) GO/NO-GO Decision
- Decision: GO / NO-GO
- Reason:
- Sign-off:
  - PM:
  - Tech Lead:
  - QA:
