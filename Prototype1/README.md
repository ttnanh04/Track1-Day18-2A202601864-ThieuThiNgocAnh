# Prototype 1 — Option A: User-led, citation-first retrieval

## Cách chạy

Mở `index.html` trực tiếp bằng trình duyệt. Prototype không cần cài dependency, server, model hoặc API.

## Flow

1. **Common context:** Xem note cũ, assignment prompt và ba source fixture.
2. **Critical interaction:** Tự nhập query, xem citation, mở source context và chọn evidence.
3. **Result/user decision:** Tự viết câu trả lời, quay lại sửa lựa chọn hoặc reset.

## Prototype annotation — không đọc cho tester

**OPTION A**  
**We expect the tester to:** Chủ động tìm evidence, kiểm tra citation và tự ghép câu trả lời.  
**Watch for:** Tester có nhận ra kết quả thiếu/sai và đổi query hoặc mở source không.  
**Do not explain:** Cách chọn evidence, ý nghĩa citation hoặc khi nào nên quay lại source gốc.

## Human–AI boundary

- User nêu task, chọn evidence và tự tổng hợp.
- AI chỉ truy xuất/xếp hạng/highlight nội dung có trong fixture.
- Khi evidence không đủ, user có thể đổi query hoặc mở source; AI không tự suy diễn.
- Không có output nào được lưu tự động.

