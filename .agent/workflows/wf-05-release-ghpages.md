# WF-05 — RELEASE GH PAGES (/release_ghpages)

## Mục tiêu
Triển khai lên môi trường Live bằng Git và Github Pages. Đảm bảo người dùng cuối nhận được version mới nhất.

## Steps
1) Review code lần cuối bằng lệnh diff. Đảm bảo dung lượng `/assets` không quá nặng (images đã nén).
2) Xác nhận cấu hình branch: Github action "deploy-pages" sẽ tự động chạy khi push vào branch `main`.
3) Update Release Notes (version name + file list).
4) Thực thi:
   ```bash
   git add .
   git commit -m "chore: release version X"
   git push origin main
   ```
5) Mở trình duyệt Ẩn danh (Incognito) để test lại URL Live thực tế (tránh cache cũ của máy dev).

## Artifact Đầu Ra
- Đường link trang chủ đã live.
- Post-release note hoặc Hand-off chốt hạng mục.
