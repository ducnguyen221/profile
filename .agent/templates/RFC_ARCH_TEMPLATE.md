# CẤU TRÚC KIẾN TRÚC KỸ THUẬT - ARCHITECTURE (Vanilla PWA)

## 1. Cấu trúc Thư Mục Mới (Nếu cập nhật)
Đảm bảo toàn bộ tài nguyên trỏ đúng:
- `/assets/css/` -> `theme.css`
- `/assets/js/` -> `theme.js`
- `/assets/images/` -> Tối ưu nén ảnh.

## 2. Ràng buộc Module DOM
- Các biến JS được dùng chung phải được gắn an toàn tránh đè biến Toàn cục (Global namespace) do không có Bundler.
- Sử dụng Event Delegation (`document.addEventListener`) thay vì gắn onClick bừa bãi.

## 3. Storage & Cache Strategy (PWA)
- Lựa chọn Caching: (Network-first hay Cache-first).
- Cập nhật Version: Sẽ nâng `CACHE_NAME` trong ServiceWorker thành bản `v[?]` để đồng bộ cập nhật tài nguyên.

## 4. Bảo mật / Khác
- Giao tiếp bên thứ 3 (Forms iframe / nhúng Google/Facebook): Sắp xếp thứ tự tải script `defer` để không block DOM rendering.
