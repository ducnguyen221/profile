# THIẾT KẾ KIẾN TRÚC & UI (UI_CONTENT / PRD_TEMPLATE)

## 1. Tóm tắt Nội Dung (Overview)
- Tên Section / Component: [Nhập tên]
- Vị trí: [Vị trí xuất hiện trên trang index.html]
- Vai trò: [Mục đích của khu vực này, VD: Show bộ kỹ năng]

## 2. Data & Content Mapping
- Dữ liệu Text List: (Tên tiêu đề, mô tả, nút button).
- Dữ liệu Ảnh/Icons: Cần chuẩn bị nguồn tài nguyên tĩnh tại `assets/images/*`.

## 3. Wireframe & DOM Structure (Vanilla)
*Plan cơ bản của HTML Tree (sơ đồ DOM)*
```html
<section id="example">
  <div class="glass-panel">
      <!-- Layout container... -->
  </div>
</section>
```

## 4. CSS Variables / Styling Requirements 
- Padding / Margin gaps: (VD: gap-4, p-5)
- Animation/Transitions: Yêu cầu hover, slide-up, v.v.
- Breakpoint logic: Mobile (1 column) -> Desktop (4 columns).

## 5. Script & Tương tác (Nếu có)
- Kịch bản Javascript: (VD: Bấm Filter -> Thêm class `.highlight-active` vào items tương ứng attribute `data-category`).
