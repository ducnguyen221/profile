# WF-03 — DEV PWA (/dev_pwa)

## Mục tiêu
Triển khai tính năng bằng Vanilla DOM Manipulation.

## Bắt buộc (Rules)
- **Không dùng framework.** Dùng `document.querySelector`, `addEventListener`.
- LocalStorage cho State.
- Bắt buộc cập nhật `CACHE_NAME` version trong `sw.js` SAU KHI thay đổi file CSS/JS/HTML làm thay đổi content.

## Steps
1) Đọc yêu cầu UI từ Ticket.
2) Code HTML, CSS, JS tuần tự.
3) Nâng version `CACHE_NAME = '...-vX'` trong Service Worker để khi user Refresh thì tự bắt Cache mới.
4) Quay video màn hình/Screenshot chứng minh responsive.

## Đầu ra
- CHANGESET (Diff HTML/CSS/JS).
- VERIFICATION Screenshot/evidence.
