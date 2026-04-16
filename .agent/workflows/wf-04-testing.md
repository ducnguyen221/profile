# WF-04 — TESTING (/testing)

## Mục tiêu
Kiểm thử chất lượng trang web tĩnh, đặc biệt nhắm tới khả năng Offline (Service Worker) và Tốc độ (Lighthouse).

## Steps
1) Chạy server cục bộ (VD: `npx serve .`).
2) Mở DevTools (F12) -> Application -> Service Workers. Kiểm tra Service Worker đang chạy và Cache Storage được lưu.
3) Tích chọn thẻ **Offline** trong tab Network. Reload trang và xác minh không bị lỗi vỡ layout hoặc mất file (Dinosaur).
4) Quét Lighthouse (ẩn danh): 
   - Performance > 90
   - Accessibility > 90
   - SEO > 90
   - PWA check mark xanh.

## Khắc phục lỗi phổ biến
- **Không thấy đổi UI**: Do trình duyệt giữ Cache bản cũ -> Báo Dev nâng `CACHE_NAME` version, click "Clear Site Data".
- **Lỗi đường dẫn 404**: Kiểm tra lại relative path `./assets/...` trên GitHub Pages khác root path như thế nào.

## Artifact Đầu Ra
- VERIFICATION Screenshot điểm Lighthouse.
