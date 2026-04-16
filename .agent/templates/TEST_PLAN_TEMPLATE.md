# TEST PLAN TEMPLATE (PWA Tĩnh)

## 1. Đối tượng Test
- Trang: `index.html` (hay trang/component cụ thể).
- Chức năng: [Tên tính năng cần test]

## 2. Checklist Chức năng (Functional)
- [ ] Responsive Layout: Hoạt động đúng và không bị vỡ trên Mobile/Tablet/Desktop.
- [ ] Giao diện (UI/UX): Hover state (`.hover`), transition, toast message hiển thị mượt mà.
- [ ] Các ảnh/Tài nguyên: Load thành công từ local (`assets/images/`), KHÔNG có ảnh nào bị lỗi 404 (Load thất bại).

## 3. Checklist PWA & Offline Mode
- [ ] Bật `Offine Mode` (F12 -> Network -> Tích Offline): Reload trang không bị màn hình trắng/Dinosaur lỗi mạng. Tất cả ảnh offline và theme vẫn hiển thị đúng.
- [ ] Mở tab *Application -> Service Workers*: Xác nhận Service Worker đã đăng ký, version của `CACHE_NAME` khớp với code file `sw.js`.

## 4. Lighthouse Audit
Yêu cầu quét chạy F12 -> Lighthouse tab (ẩn danh):
- [ ] Performance: >= 90
- [ ] Accessibility: >= 90
- [ ] Best Practices: >= 90
- [ ] SEO: >= 90 (Có title, meta, text contrast chuẩn).
- [ ] PWA Checkmark: Nhận huy hiệu PWA Badge xanh.

## 5. Kết luận
- Pass / Fail.
- Ghi chú: (Nhập lỗi bổ sung nếu có).
