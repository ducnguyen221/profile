# GLOBAL RULES — AI Agent Runtime (Việt hoá + tối ưu cho repo)

> **Canonical governance:** `docs/process/rules.md`  
> **Doc map:** `docs/REPO-CATALOG.md`  
> Nếu có mâu thuẫn giữa `.agent/rules/*` và `docs/process/rules.md` → **ưu tiên `docs/process/rules.md`**.

---

## 1) Safety & Control
- **Terminal commands:** luôn liệt kê lệnh + giải thích ngắn + rủi ro, chỉ chạy khi được cho phép.
- Không chạy lệnh phá hoại/rủi ro cao (`rm -rf`, format disk, sửa ngoài thư mục dự án).
- Không lộ secrets/tokens/keys: không in `.env`, không paste secret vào output. Chỉ tạo `.env.example`.

---

## 2) Working Style (bắt buộc)
Quy trình: **Read → Plan → Implement → Verify → Update-back → Report**

### Read (đọc đúng nguồn)
- Luôn đọc `docs/REPO-CATALOG.md` và `docs/process/rules.md` trước khi làm task không-trivial.
- Nếu task thuộc sprint: đọc 5 file sprint trong `sprints/<SP>/`.
- Nếu task ảnh hưởng API/Data/Security/Telemetry: mở đúng registry trong `docs/registry/*`.

### Plan (kế hoạch ngắn)
- Checklist thực thi + assumptions + risks + files sẽ cập nhật.

### Implement (làm đúng scope)
- Không mở rộng scope “ngầm”. Nếu scope/AC thay đổi → theo `docs/process/change-control.md`.

### Verify (bằng chứng)
- Có bằng chứng chạy đúng: test/build/log ngắn/screenshot (tuỳ loại task).
- Nếu chưa thể verify: ghi rõ vì sao và plan verify thay thế.

### Update-back (tối quan trọng)
- Mọi thay đổi liên quan feature/story phải cập nhật:
  - Sprint pack (nếu thuộc sprint)
  - Registry (RTM/Story/API/Data/Test/Release/Flags/Events tuỳ impact)
  - Core/Architecture docs (nếu thay đổi yêu cầu/kiến trúc)

### Report (báo cáo)
Mỗi task trả về ít nhất:
- Files đã đọc
- Files đã cập nhật
- Mapping IDs (FE/US/TC/Release…)
- Risks + next steps

---

## 3) Definition of Done (runtime)
- Code build/run được (hoặc giải thích vì sao chưa).
- Có verify tối thiểu (test/smoke/steps).
- Docs đã update-back theo đúng lane (sprint/registry/core/architecture).
- Không đưa secret vào repo.

---

## 4) STOP Conditions (phải dừng và hỏi/đề xuất bổ sung)
- Thiếu **Acceptance Criteria** hoặc UI states cho story
- Không rõ impact **Data/Security/Telemetry**
- Thiếu contract API/Data mà task lại phụ thuộc
- High-risk change (auth/payment/migration/permission/PII) nhưng chưa có gate tương ứng
- Sprint task mà chưa có mapping RTM/Story registry

---

## 5) Routing nhanh
- Sprint task → theo `docs/process/rules.md` + `sprints/<SP>/*`
- OpenSpec proposal/apply/archive → theo `agents/workflows/openspec/*`
- Start/stop/run → theo `agents/workflows/runbooks/*`
- Techstack-specific → theo các file `techstack_rules_*.md`
