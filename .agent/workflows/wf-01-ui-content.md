# WF-01 — UI CONTENT & DESIGN (/ui_content)

## Mục tiêu
Thiết kế cấu trúc DOM, chuẩn bị Copywriting, Tài nguyên (Images/Icons), và đảm bảo tiêu chuẩn UI/UX Modern theo định hướng Web tĩnh/PWA Portfolio.

## Tiêu chuẩn Thiết kế (UI/UX Guidelines)
Thông qua phân tích cấu trúc trực quan từ thiết kế gốc tại `home.html` và sơ đồ mẫu (ảnh cung cấp), quá trình dựng UI bắt buộc tuân thủ **6 nguyên tắc thiết kế cốt lõi** sau:

1) **Phong cách Glassmorphism & Depth**:
   - Sử dụng nền trong suốt kết hợp làm mờ (`backdrop-filter: blur(12px)`) cho các component dạng Card.
   - Viền Card mỏng, sáng với opacity cực thấp để tạo Background separation và độ sâu.

2) **Màu sắc & Light/Dark Mode**:
   - Quản trị màu bằng CSS Variables (ví dụ: `--primary-color`, `--bg-start`, `--accent-color`).
   - Phối màu Dark mode ưu tiên mảng tối (Deep Forest Green, Navy Start/End) kết hợp điểm nhấn sáng (Gold, Bronze). 
   - Bắt buộc hỗ trợ nút gạt Theme Toggle.

3) **Micro-Animations (Tương tác UI)**:
   - Hover elements luôn phải có `transition: all 0.3s ease`.
   - Các nút hoặc tooltip phải có hiệu ứng nổi (translateY), làm rõ (opacity) hoặc phát sáng mờ (box-shadow/glow) khi trỏ chuột.

4) **Bố cục (Layout Component)**:
   - Dùng Flexbox / CSS Grid (ví dụ `grid-cols-12` trên Desktop) để chia vùng.
   - Cấu trúc "Dashboard": Cột trái/Summary cố định (Avatar, contact), cột phải Scrollable Content (List, Kỹ năng).
   - Cuộn tuỳ chỉnh (Custom scrollbar cho các div lồng trong thu nhỏ và làm trong suốt).

5) **Typography (Nghệ thuật chữ)**:
   - Font vô chân hiện đại như `Inter` (hoặc `Manrope`). 
   - Truyền tải thông điệp bằng typography: Tên chính cực lớn, tagline mảnh, badge label nhỏ rõ ràng. Mật độ padding thoáng.

6) **Cấu trúc Component "Bộ Kỹ Năng / Showcase" (Dựa trên ảnh tham chiếu)**:
   - **Thẻ Glass-Panel Box**: Phần "Core Competencies" và danh sách khoá học luôn gói gọn trong background kính bo góc lớn.
   - **Header & Filters**: Phía trên cùng bên trái là Title kèm Icon (như `military_tech`), góc phải là các dải nút Filter hình chip (`All`, `Domain`, `Data Tools`, `Automation`, `GenAI`). Dùng trạng thái `.filter-btn-active` để đổi màu nút đang chọn.
   - **Grid List Layout**: Phần tử con phân ô chia `grid-cols-4` (Desktop) hoặc `grid-cols-2` (Mobile).
   - **Định dạng Thẻ Kỹ Năng**: Mỗi thẻ là 1 cụm `flex items-center gap-2 p-2 rounded-lg`. Bắt buộc dùng **Micro-Icon ảnh 2rem x 2rem**, ảnh bo tròn cắt 50% nằm bên trái nhãn text.
   - **Bộ lọc logic (Filtering)**: Gắn cứng thuộc tính `data-category="[nhóm]"` vào HTML từng thẻ để chuẩn bị liên kết logic Vanilla JS.

## Steps
1) Lên danh sách Content Layout cho trang dựa trên yêu cầu User Story và đối chiếu với 6 quy tắc (đặc biệt quy tắc 6).
2) Xử lý toàn bộ hình ảnh thành Offline Mode:
   - **Tuyệt đối không dùng URL ảnh bên ngoài (CDN)**, lưu cục bộ tại `assets/images/{name}` để PWA cache offline.
3) Soạn thảo HTML, ráp khung Grid chia cột, map CSS Variables và tạo thẻ Mock.
4) Chốt và chuyển qua Ticket Dev (wf-03) để thực thi logic Vanilla DOM manipulation tiếp.

## Artifact Đầu Ra
- Wireframe Outline.
- Danh mục Image Caching cập nhật.
