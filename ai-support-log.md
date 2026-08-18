# AI Support Log — Thiều Thị Ngọc Ánh (2A202601864)

## 1. AI đã giúp tôi ở đâu?

- Gợi ý và dựng cấu trúc HTML/CSS/JS cho bộ 3 micro-prototypes tương tác web (`day18/prototype/`).
- Rà soát tính nhất quán giữa 3 cơ chế tương tác Human-AI (User-led vs Co-create vs AI-led) để đảm bảo Distance Check thực sự khác biệt về cơ chế chứ không chỉ khác màu sắc hay layout.
- Hỗ trợ xây dựng các kịch bản quan sát và Facilitator Annotation nằm ngoài khung hiển thị tester.

---

## 2. AI sai, hời hợt hoặc làm các options giống nhau ở đâu?

- Ban đầu AI đề xuất cả 3 options đều dùng chung khung Chatbot ở góc phải màn hình và chỉ thay đổi wording câu trả lời.
- AI vô tình giả định Option C (AI-led tự động 100%) luôn là option tốt nhất và cố tình tạo các lựa chọn kiểm soát mờ nhạt.

---

## 3. Tôi đã tự sửa hoặc quyết định lại điều gì?

- Bắt buộc AI phân tách rõ 3 cơ chế giao diện riêng biệt: On-demand Query Panel (Option A), Context Draft Tags (Option B), và Full Synthesis Card (Option C).
- Thiết kế thêm nút **Reset path ("↺ Reset về Context gốc")** giúp tester khôi phục trạng thái ban đầu một cách dễ dàng.
- Tự viết lại câu hỏi Test Prompt theo hướng trung tính, loại bỏ hoàn toàn các câu hỏi dẫn dắt lộ solution hoặc làm thiên lệch lựa chọn của tester.
