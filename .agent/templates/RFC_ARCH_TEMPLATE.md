# RFC / ARCH DESIGN TEMPLATE

> Dùng cho: quyết định kiến trúc/thiết kế kỹ thuật có tác động rộng.  
> Nếu quyết định “cứng” → tạo ADR theo `docs/architecture/adr/ADR_TEMPLATE.md`.

**Quy ước ID (khuyến nghị)**
- `FE-XXX`: Feature ID (ví dụ `FE-012`)
- `US-XXX`: User Story ID (ví dụ `US-104`)
- `TC-XXX`: Test Case ID (ví dụ `TC-220`)
- `SP-YYYY-NN`: Sprint ID (ví dụ `SP-2026-01`)
- `REL-YYYY.MM.DD-XX`: Release ID (ví dụ `REL-2026.01.26-01`)

---

## 1) Context
- Problem statement:
- Constraints:
- Existing architecture references (link `docs/architecture/hld.md`):

## 2) Goals / Non-goals
- Goals:
- Non-goals:

## 3) Proposed Design (HLD)
- Components:
- Sequence / flow (mô tả):
- Data flow:
- Failure modes:

## 4) Alternatives Considered
- Option A:
- Option B:
- Why not:

## 5) Decision
- Chọn phương án:
- Lý do:
- Consequences (tác động tốt/xấu):

## 6) API Changes (nếu có)
- Endpoints affected:
- Contract change:
- Update `docs/registry/api-registry.md`:

## 7) Data Model / Migration (nếu có)
- Tables/entities affected:
- Migration plan:
- Backfill strategy:
- Rollback plan:
- Update `docs/registry/data-dictionary.md`:

## 8) NFR Impact
- Performance:
- Reliability:
- Cost:
- Maintainability:

## 9) Security & Privacy
- Threats:
- Mitigations:
- Reference `docs/architecture/security-threat-model.md`:

## 10) Observability
- Logs:
- Metrics:
- Traces:
- Alerts/dashboards:
- Reference `docs/architecture/observability.md`:

## 11) Feature Flags / Rollout
- Flags needed:
- Rollout steps:
- Update `docs/registry/config-featureflags.md`:

## 12) Testing Strategy
- Unit:
- Integration:
- E2E:
- Load:
- Security testing:

## 13) ADR
- [ ] Tạo ADR? (Yes/No)
- ADR link (nếu có): `docs/architecture/adr/ADR-xxx.md`

## 14) Open Questions
- ...
