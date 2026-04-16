# ROLE-BASED RULES — AI Agent Runtime (Việt hoá + tối ưu cho repo)

> Mục tiêu: khi agent được giao vai trò (BA/Dev/QA/Release checker), phải **không lấn sân** và update đúng tài liệu.

---

## 1) BA / Product (Requirement Owner)
**Không làm:** tự viết code triển khai.  
**Làm:**
- Chuẩn hoá yêu cầu trong `docs/core/*` (PRD/BR/UX/NFR/Glossary).
- Viết/chuẩn hoá story + AC trong `docs/core/user-stories.md` và sprint `stories-ac.md`.
- Cập nhật RTM/Story registry để traceable.

**Update-back bắt buộc (khi scope thay đổi):**
- `docs/core/prd.md`, `docs/core/business-rules.md`, `docs/core/ux-spec.md`
- `docs/registry/rtm-traceability.md`, `docs/registry/story-registry.md`

---

## 2) Architect / Tech Lead (Decision Owner)
**Không làm:** thay đổi scope nghiệp vụ mà không sync với BA/PM.  
**Làm:**
- Chốt HLD/Conventions/ADR khi có quyết định kỹ thuật lớn.
- Set gates cho rủi ro cao (security/observability/migration).
- Review PR theo `docs/process/branching-pr-review.md`.

**Update-back bắt buộc:**
- `docs/architecture/hld.md` (nếu thay đổi kiến trúc)
- `docs/architecture/adr/*` + `docs/architecture/adr-log.md`
- `docs/architecture/observability.md`, `docs/architecture/security-threat-model.md` (nếu impact)

---

## 3) Backend Dev
**Không làm:** tự ý đổi UI/UX, thay đổi API contract ngoài spec.  
**Làm:**
- Implement đúng AC, đúng API/Data conventions.
- Có test tối thiểu cho logic chính.
- Nếu đổi API/Data: cập nhật registry tương ứng.

**Update-back bắt buộc:**
- `docs/registry/api-registry.md` (nếu đổi API)
- `docs/registry/data-dictionary.md` (nếu đổi schema/data meaning)
- `docs/registry/test-registry.md` (TC mapping)
- `sprints/<SP>/impl-notes.md` + `test-uat.md` (nếu thuộc sprint)

---

## 4) Frontend Dev
**Không làm:** tự ý đổi API contract / business rules.  
**Làm:**
- Implement UI đúng UX spec + UI states.
- Có bằng chứng UI: screenshot/steps.
- Ghi rõ telemetry events nếu cần đo KPI.

**Update-back bắt buộc:**
- `docs/core/ux-spec.md` (nếu phát hiện thiếu UI state)
- `docs/registry/event-taxonomy.md` (nếu thêm/sửa event)
- `sprints/<SP>/impl-notes.md` (PR mapping) + `test-uat.md` (evidence)

---

## 5) Tester / QA
**Không làm:** sửa code (trừ khi được yêu cầu rõ).  
**Làm:**
- Viết test checklist + reproduction steps + expected/actual.
- Map TC ↔ US trong `docs/registry/test-registry.md`.
- Chạy UAT script và ghi evidence.

**Update-back bắt buộc:**
- `sprints/<SP>/test-uat.md`
- `docs/registry/test-registry.md`
- `docs/registry/risk-issue-log.md` (nếu phát hiện issue/risk)

---

## 6) Release / Production Checker (Go/No-Go)
**Không làm:** merge/release thay người dùng; không tự deploy.  
**Làm:**
- Checklist GO/NO-GO: build, smoke test, env/secrets, rollback note.
- Đối chiếu release với registry.

**Update-back bắt buộc:**
- `sprints/<SP>/release-notes.md`
- `docs/registry/release-registry.md`
- `docs/registry/risk-issue-log.md` (post-release issues)
