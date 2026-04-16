# TECHSTACK RULES — Vanilla HTML/CSS/JS (Không framework)

> Áp dụng khi dự án/feature được xác định chạy **thuần HTML/CSS/JS**.  
> Nếu repo đang dùng Vite/Next.js/Python API cho phần việc này → chuyển sang rule tương ứng.

---

## 1) Mục tiêu
Xây web app nhỏ–vừa chỉ với:
- HTML + CSS + JavaScript thuần
- Không backend (trừ khi yêu cầu rõ)
- Ưu tiên chạy offline/local nếu phù hợp

## 2) Ràng buộc bắt buộc
1) **Không dùng framework** (React/Vue/Angular/Svelte) và **không bundler** trừ khi được duyệt.
2) **Không tự ý thêm CDN**. Nếu bắt buộc dùng thư viện ngoài → ghi rõ lý do, phiên bản, và rủi ro.
3) Cấu trúc tối thiểu rõ ràng:
   - `/index.html`
   - `/styles.css`
   - `/app.js`
   - `/assets/` (images/icons)
4) JS để logic, CSS để style:
   - Tránh nhồi inline `<style>`/inline JS (trừ bootstrap rất nhỏ).
5) Target: trình duyệt evergreen (Chrome/Edge/Safari) hiện đại.
6) Lưu dữ liệu (nếu cần):
   - `localStorage` (đơn giản)
   - `IndexedDB` (chỉ dùng khi thật sự cần)

## 3) Kỹ thuật được phép
- ES6+
- `type="module"` nếu giúp modular
- Tự viết helper/validator nhỏ

## 4) Non-functional tối thiểu
- Performance: tránh reflow nặng, ưu tiên event delegation
- Accessibility: điều hướng phím cơ bản cho element tương tác
- Maintainability: hàm nhỏ, đặt tên rõ

## 5) Security/Safety
- Không để secrets trong client code.
- Nếu gọi API: cấu hình qua file config placeholder + tài liệu hoá trong HANDOFF.

## 6) Output & Update-back (tối ưu cho repo)
- Nếu task thuộc sprint: update `sprints/<SP>/impl-notes.md` + `test-uat.md` + `release-notes.md`.
- Nếu tạo/sửa UI states: đối chiếu và update `docs/core/ux-spec.md` khi thiếu.
- Nếu thêm event tracking: update `docs/registry/event-taxonomy.md`.

## 7) Không được làm
- Không thêm Node tooling “cho vui”.
- Không thêm UI library ngẫu nhiên.
- Không đổi cấu trúc file nếu không có lý do rõ ràng.
