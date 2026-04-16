# .agent/rules — Cách dùng (Runtime)

Bộ file trong `.agent/rules/` là **luật runtime cho AI Agent** (để agent auto-load).  
**Luật “canonical” của dự án nằm ở:** `docs/process/rules.md` (single source of truth).

---

## Entry points (bắt buộc đọc trước khi làm việc)
1) `docs/REPO-CATALOG.md` — bản đồ tài liệu
2) `docs/process/rules.md` — governance rules (sprint/registry/traceability/update-back)
3) Nếu task thuộc sprint: đọc `sprints/<SP-YYYY-NN>/*` (5 file sprint)
4) Nếu task là OpenSpec/runbook: đọc `agents/README.md` và workflow tương ứng

---

## Cách dùng nhanh (3 bước)
1) **Xác định loại task**
   - Task thuộc **Sprint** (US/AC/Release) → tuân sprint protocol + update sprint pack/registry
   - Task kiểu **OpenSpec** (proposal/apply/archive) → dùng workflow trong `agents/workflows/openspec/`
   - Task **Vận hành** (start/stop/run) → dùng runbook trong `agents/workflows/runbooks/`
   - Task **Tech-specific** (HTML/Next.js/Python API) → áp techstack rules tương ứng (file `techstack_*`)

2) **Lập PLAN ngắn**
   - Nêu file sẽ đọc, file sẽ sửa, rủi ro, assumption (nếu có)

3) **Thực thi + Verify + Document**
   - Sau mỗi thay đổi: update-back vào đúng nơi (sprint pack + registry + core/architecture nếu ảnh hưởng)

---

## Quy ước Artifacts (để align với repo)
Agent vẫn dùng 4 artifacts: **PLAN / CHANGESET / VERIFICATION / HANDOFF**, nhưng **được map vào sprint pack 5 file** như sau:

- **PLAN** → `sprints/<SP>/sprint-brief.md` + phần đầu `sprints/<SP>/stories-ac.md`
- **CHANGESET** → `sprints/<SP>/impl-notes.md` (PR/commit mapping + file list)
- **VERIFICATION** → `sprints/<SP>/test-uat.md` (test output/evidence/UAT script)
- **HANDOFF** → `sprints/<SP>/release-notes.md` (verify steps + post-release checks + rollback)

> Nếu task **không thuộc sprint**, ghi artifacts vào output trả lời + (nếu repo có) thư mục `artifacts/`.

---

## Output tối thiểu sau mỗi task
- Workflows/rules đã áp dụng (paths)
- Files đã đọc (paths)
- Files đã cập nhật (paths)
- Mapping IDs: FE/US/TC/API/Data/Release (nếu có)
- Rủi ro / next steps
