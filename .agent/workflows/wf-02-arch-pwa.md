# WF-02 — ARCHITECTURE PWA (/arch_pwa)

## Mục tiêu
Đảm bảo cấu trúc file trong thư mục tuân thủ luật tĩnh (Plain HTML/CSS/JS) và Service Worker fetch đúng file.

## Steps
1) **Folder Structure Policy**: Luôn duy trì file JS/CSS trong `/assets`. Thư mục gốc chỉ chứa `index.html`, `sw.js`, `manifest.json`.
2) **Service Worker Caching Rules**: 
   - Nếu đổi tên/đường dẫn resource, bắt buộc phải update mảng `ASSETS` trong `sw.js`.
   - Nếu thêm trang html phụ, phải thêm vào pre-cache.
3) **Module Design**: JS thuần nên ưu tiên design theo closure hoặc `type="module"` import nội bộ.

## Artifact Đầu Ra
- Kế hoạch cấu trúc thư mục (File Tree).
- Kế hoạch Upgrade Cache Service Worker.
