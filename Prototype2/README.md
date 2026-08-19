# Prototype 2 — Option B: User + AI co-create context card

## Cách chạy

Mở `index.html` trực tiếp bằng trình duyệt. Prototype không cần cài dependency, server, model hoặc API.

## Flow

1. **Common context:** Xem cùng note cũ, assignment prompt và ba source fixture.
2. **Critical interaction:** Review, edit hoặc reject context card do AI tạo nháp; kiểm tra phần uncertainty.
3. **Result/user decision:** Chỉ lưu/dùng card sau approve; có thể edit hoặc revert về note cũ.

## Prototype annotation — không đọc cho tester

**OPTION B**  
**We expect the tester to:** Review, edit hoặc reject AI draft trước khi approve context card.  
**Watch for:** Tester có kiểm tra source và sửa phần AI đánh dấu chưa chắc chắn không.  
**Do not explain:** Trường nào nên sửa, đáp án đúng hoặc nút approve nên được dùng khi nào.

## Human–AI boundary

- AI tạo draft context card từ fixture và đánh dấu phần chưa chắc chắn.
- User chịu trách nhiệm review, edit/reject và approve.
- Draft không được lưu tự động; user có thể stop, revert hoặc reset.
- Prototype dùng canned output, không gọi model/API thật.

