# TICKET TEMPLATE Cho Web Tĩnh (PWA)

## 1. Mục tiêu (Objective)
- [Mô tả ngắn đoạn UI hoặc feature cần làm]

## 2. PWA Cache Impact
- [ ] Tính năng này **CÓ** thay đổi dung lượng/nội dung CSS/JS.
- [ ] **Bắt buộc** update `CACHE_NAME` version và mảng ASSETS trong file `sw.js`.

## 3. UI/DOM Requirements
- Element ID/Classes: 
- LocalStorage key (nếu có):

## 4. Acceptance Criteria
- [ ] Chạy tốt trên Mobile/Desktop viewport.
- [ ] Load được khi ngắt kết nối Wifi (Service Worker fetched).
- [ ] Đạt chuẩn Lighthouse tối thiểu Tốt (Green).
