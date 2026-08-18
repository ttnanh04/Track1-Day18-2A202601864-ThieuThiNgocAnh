# Track 1 — Day 18 — Personal Learning Notes (Case B)

### Thành viên nhóm
1. **Thiều Thị Ngọc Ánh** — `2A202601864` 
2. **Trần Thanh Huyền** — `2A202601578`
3. **Đỗ Tú Anh** — `2A202601272`

---

## 2. Hypothesis Problem (Bản Nhóm Dùng Trong Day 18)

> Khi **quay lại các ghi chú cá nhân (Notion, ảnh chụp slide) sau một khoảng thời gian để ôn tập hoặc làm assignment**, **người học cá nhân (sinh viên)** gặp khó khăn trong việc **hiểu và nối lại bối cảnh (context) của thông tin đã ghi để áp dụng kiến thức ngay** vì **ghi chú chỉ lưu dạng từ khóa/công thức rải rác mà không đính kèm bối cảnh gốc hoặc mối liên hệ giữa các ý**, dẫn đến **mất gấp đôi thời gian đọc lại slide/video cũ hoặc nản lòng bỏ qua không ôn tập nữa**.

---

## 3. Three Solution Options & Prototype Links

### 📋 Thiết Kế Ba Phương Án (Design Sheet)
Xem chi tiết Design Sheet & Human-AI Decision Table tại: [three-option-design-sheet.md](three-option-design-sheet.md)

| Phương án | Cơ chế tương tác Human–AI | Mô tả ngắn |
| :--- | :--- | :--- |
| **Option A** | **User-Led (On-Demand Query)** | User chọn/bôi đen từ khóa chưa hiểu, AI trích xuất exact paragraph & slide gốc liên quan để user đọc và đính kèm. |
| **Option B** | **Co-Create (Draft Tags)** | AI chủ động phân tích và đề xuất 2–3 nhãn bối cảnh nháp (Context Draft Tags). User bấm *Duyệt & Ghim*, *Sửa* hoặc *Ẩn* tag. |
| **Option C** | **AI-Led (Synthesis Card)** | AI tự động sinh 1 thẻ tổng hợp bối cảnh diện rộng (Synthesis Card) đính dưới note. User bấm *Chấp nhận*, *Sửa* hoặc *Dismiss*. |

### 🔗 Link Micro-prototypes
- **Link truy cập Prototype A/B/C trực tiếp:** [prototype/index.html](prototype/index.html) (xem hướng dẫn tại [prototype-link.md](prototype-link.md))

---

## 4. Đóng Góp Của Tôi Trong Nhóm (Thiều Thị Ngọc Ánh — 2A202601864)

Trong bài làm Day 18, tôi đã thực hiện các phần đóng góp cụ thể sau:
1. **Thiết kế & Xây dựng Option A & Common Context Fixture:** Xây dựng tình huống học tập chung (môn Machine Learning, ghi chú Gradient Descent & Learning Rate đính kèm Slide 14) và cơ chế On-Demand Query cho Option A.
2. **Xây dựng Prototype Web:** Cùng nhóm code giao diện HTML/CSS/JS cho bộ 3 micro-prototypes có nút Reset path và Facilitator Annotation Panel.
3. **Facilitate Phiên Test Cá Nhân:** Trực tiếp dẫn dắt phiên test thực tế với **Tester 1 (Mã SV: `2A202601818`)**, quan sát hành vi, ghi nhận hesitation, cách lấy lại quyền kiểm soát và lựa chọn option.
4. **Tham gia Tổng hợp Feedback Nhóm:** Phân tích ma trận 4 lớp (OBSERVED, INTERPRETED, DECIDED - NEXT CHANGE, STILL UNPROVEN) và chốt quyết định 1 Group Next Change.

---

## 5. Prototype Feedback & Group Synthesis

### 📑 Phiên Facilitate Cá Nhân (Feedback Note 1)
Xem bản đầy đủ tại: [prototype-feedback-note.md](prototype-feedback-note.md)
- **Tester:** `2A202601818` (Sinh viên CNTT)
- **Observation chính:** Tester lúng túng 5 giây ở Option A vì không rõ nên bôi đen hay bấm nút trước. Tester đọc rất kỹ đoạn trích dẫn nguồn Slide 14. Ở Option C, tester cảm thấy ngợp vì thẻ chữ AI quá to.
- **Lựa chọn:** Tester chọn **Option B (Co-create)** vì vừa được AI nghĩ hộ nhãn vừa được tự tay bấm duyệt tag để giữ sạch note.

### 📊 Group Feedback Synthesis & Next Change
Xem bản đầy đủ tại: [group-feedback-synthesis.md](group-feedback-synthesis.md)

- **100% 3/3 Tester lựa chọn Option B (Co-create Context Tags).**

> **Một Next Change nhóm chốt:**  
> Lựa chọn phát triển tiếp **Option B (Co-create Context Tags)** làm cơ chế tương tác chủ đạo, đồng thời tích hợp thêm tính năng **"Query On-Demand" của Option A** dưới dạng một lối tắt (shortcut) khi người dùng muốn tra cứu trực tiếp một từ khóa không nằm trong danh sách tag gợi ý.

- **Still Unproven:** Chưa biết khi danh sách ghi chú kéo dài hàng trăm trang thì số lượng Draft Tags gợi ý của Option B có gây rối mắt hay không và liệu người dùng có duy trì thói quen duyệt tag lâu dài hay không.

---

## 6. AI Support Log (Cá Nhân Thiều Thị Ngọc Ánh)

Xem bản đầy đủ tại: [ai-support-log.md](ai-support-log.md)

- **AI đã giúp gì:** Gợi ý cấu trúc HTML/CSS/JS cho bộ 3 micro-prototypes; hỗ trợ rà soát Distance Check giữa 3 cơ chế tương tác Human-AI.
- **AI sai, hời hợt ở đâu:** AI định gộp cả 3 options vào 1 khung Chatbot ở góc phải (chỉ khác câu chữ) và vô tình giả định Option C tự động 100% luôn tốt nhất.
- **Tôi đã tự sửa gì:** Bắt buộc AI tách thành 3 cơ chế giao diện riêng biệt; tự thêm nút Reset path; sửa lại câu hỏi Test Prompt sang dạng trung tính không dẫn dắt.
