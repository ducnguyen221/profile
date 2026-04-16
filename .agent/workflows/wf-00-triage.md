# WF-00 — TRIAGE (/triage)

## Mục tiêu
- Phân loại yêu cầu (UI Update / Bug / PWA Caching Issue) cho web tĩnh Vanilla.
- Định tuyến sang workflow tiếp theo.

## Steps
1) **Classify**: UI Content, Javascript Logic, PWA Configuration, hoặc Bug.
2) **Routing decision**:
   - Yêu cầu sửa layout/nội dung -> `/wf-01-ui-content`
   - Đổi cấu trúc folder/Thêm Offline mode -> `/wf-02-arch-pwa`
   - Request dev UI/Logic -> `/wf-03-dev-pwa`
   - Lỗi UI/Cache -> `/wf-04-testing` (Tái hiện lỗi với Lighthouse/Offline)
3) **Create Artifact**:
   - Ticket theo chuẩn `TICKET_TEMPLATE.md` mới.

## Output bắt buộc 
- PLAN
- Lựa chọn hướng đi tiếp theo.
