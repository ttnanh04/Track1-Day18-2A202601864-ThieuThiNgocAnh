# Prototype 3 — Option C: AI-initiated recovery pack + human escalation

## Cách chạy

Mở `index.html` trực tiếp bằng trình duyệt. Prototype không cần cài dependency, server, model hoặc API. Handoff chỉ là mô phỏng và không gửi dữ liệu thật.

## Flow

1. **Common context:** Xem cùng note, assignment prompt, source fixture và đề xuất chủ động của AI.
2. **Critical interaction:** Review recovery pack theo ba mức `Found / Inferred / Unknown`; chọn tự tiếp tục hoặc preview handoff.
3. **Result/user decision:** Consent trước khi gửi mô phỏng, có thể undo/revoke; hoặc tiếp tục task mà không chia sẻ dữ liệu.

## Prototype annotation — không đọc cho tester

**OPTION C**  
**We expect the tester to:** Kiểm tra recovery pack và tự quyết định tiếp tục hay approve human handoff.  
**Watch for:** Tester có hiểu phần found/inferred/unknown, preview dữ liệu chia sẻ và dùng đường recovery không.  
**Do not explain:** Có nên gửi handoff, chọn ai hoặc phần uncertainty có quan trọng không.

## Human–AI boundary

- AI chủ động đề xuất recovery pack nhưng không tự chia sẻ hoặc điền phần unknown.
- User preview dữ liệu, chọn người nhận và consent trước handoff.
- User có thể dismiss, cancel, undo/revoke hoặc tiếp tục task không cần chờ.
- Prototype không dùng dữ liệu thật và không tạo external side effect.

