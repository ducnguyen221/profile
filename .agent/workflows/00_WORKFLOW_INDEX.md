# WORKFLOW INDEX — PWA STATIC WEB (GH PAGES)
> Các quy trình được tối ưu hoá cho Vanilla HTML/CSS/JS chạy web tĩnh trên Github Pages.

## Danh sách Workflows
1. **[wf-00-triage](/wf-00-triage)**: Phân loại yêu cầu, tạo Ticket.
2. **[wf-01-ui-content](/wf-01-ui-content)**: Lên cấu trúc nội dung, hình ảnh, HTML markup.
3. **[wf-02-arch-pwa](/wf-02-arch-pwa)**: Quyết định cấu trúc thư mục, CSS, và cơ chế Service Worker Caching.
4. **[wf-03-dev-pwa](/wf-03-dev-pwa)**: Code DOM Manipulation Vanilla, thay đổi UI, Cập nhật Cache.
5. **[wf-04-testing](/wf-04-testing)**: Audit Lighthouse, Performance, và Test chế độ Offline.
6. **[wf-05-release-ghpages](/wf-05-release-ghpages)**: Merge nhánh `main`, theo dõi build GH actions, xả Cache PWA.
7. **[wf-06-sprint-pack](/wf-06-sprint-pack)**: Setup thư mục sprint nếu áp dụng (Tuỳ chọn).

## Cách dùng với Agent
- Dùng từ khoá `@[tên-workflow]` hoặc lệnh `/tên-workflow` để gọi trực tiếp flow.
- Agent tự động tham chiếu tới `.agent/rules/techstack_rules_html_css_js.md`.
