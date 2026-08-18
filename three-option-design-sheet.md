# Three Option Design Sheet — Day 18: Personal Learning Notes (Case B)

## 1. Context & Fixture Dùng Chung (Common Contract)

| Thành phần | Quyết định chung cho A/B/C |
| :--- | :--- |
| **Target user** | Sinh viên / Người tự học các môn chuyên ngành (Machine Learning / Data Science). |
| **Situation** | Ôn tập ghi chú cá nhân cũ sau 5 ngày để chuẩn bị làm bài tập chọn hệ số học Learning Rate (lr). |
| **Task** | Hiểu được bối cảnh đằng sau ghi chú ngắn `"Gradient Descent: lr quá lớn -> overshoot, lr quá nhỏ -> chậm"` và áp dụng chọn lr đúng cho bài tập. |
| **Desired outcome** | Khôi phục trọn vẹn bối cảnh và lý do của note trong dưới 1 phút mà không phải đọc lại toàn bộ video/slide 45 phút. |
| **Content/data fixture** | Ghi chú văn bản đính kèm tài liệu tham khảo: `Slide_14_Lecture_3_Optimization.pdf`. |

---

## 2. Mô Tả Ba Solution Options

| Thành phần | Option A (User-Led) | Option B (Co-Create) | Option C (AI-Led) |
| :--- | :--- | :--- | :--- |
| **Solution mechanism** | **Query & On-Demand Context Extraction**: User chọn từ khóa chưa hiểu, AI trích xuất exact đoạn văn bản & slide gốc liên quan. | **Interactive Context Annotation**: AI quét note và đề xuất danh sách nhãn ngữ cảnh nháp (Draft Tags), User duyệt/sửa/chọn tag đính vào note. | **Automated Context Reconstruction Card**: AI tự động tổng hợp một thẻ bối cảnh diện rộng (Synthesis Card) gồm giải thích, ví dụ và nguồn. |
| **User làm gì?** | Tự chọn từ khóa cần khôi phục bối cảnh, bấm "Trích xuất Context", đọc trích đoạn và bấm đính kèm. | Đọc các tag nháp AI đề xuất, bấm "Duyệt & Ghim", "Sửa" hoặc "Ẩn" tag. | Đọc Synthesis Card tạo sẵn; chọn "Chấp nhận", "Sửa" hoặc "Reject/Dismiss". |
| **AI làm gì?** | Chờ lệnh query; tìm kiếm chính xác đoạn bối cảnh từ slide gốc đính kèm và hiển thị snippet citation. | Phân tích note, đưa ra 2–3 nhãn ngữ cảnh ngắn gọn (Context Draft Tags) lấy từ slide bài học. | Tự động sinh thẻ giải thích bối cảnh tổng hợp kèm biểu đồ minh họa và link tài liệu gốc. |
| **Trigger** | User kích hoạt thủ công (On-Demand). | Hệ thống tự động đề xuất ngay khi mở note. | Hệ thống tự động khởi tạo và hiển thị sẵn trong note. |
| **Trade-off chính** | Độ chính xác cao, note gọn gàng; nhưng phụ thuộc vào việc user phải tự biết mình thiếu context ở đâu. | Tiết kiệm công nghĩ câu hỏi cho user; nhưng có thể gây xao nhãng nếu có quá nhiều tag gợi ý. | Nhanh chóng nếu AI đúng; nhưng tốn diện tích hiển thị và rủi ro AI giải thích dài dòng/sai bối cảnh. |

---

## 3. Distance Check

- **Option A khác Option B vì:** Option A đòi hỏi người dùng chủ động chỉ định chính xác từ khóa cần khôi phục bối cảnh, trong khi Option B do AI chủ động đề xuất sẵn các nhãn ngữ cảnh ngắn để người dùng duyệt và chọn.
- **Option B khác Option C vì:** Option B giữ ghi chú gọn gàng bằng cách chỉ đính kèm các nhãn ngữ cảnh tương tác (tags) mà người dùng đồng ý, trong khi Option C tự động tạo ra một thẻ giải thích ngữ cảnh tổng hợp diện rộng (full card).
- **Option A khác Option C vì:** Option A là cơ chế phản hồi theo yêu cầu (on-demand query) hoàn toàn do người dùng điều khiển, trong khi Option C là cơ chế chủ động tạo bản tóm tắt tự động (proactive synthesis) do AI dẫn dắt.

---

## 4. Human–AI Decision Table

| Human–AI Decision | Option A (User-Led) | Option B (Co-Create) | Option C (AI-Led) |
| :--- | :--- | :--- | :--- |
| **User làm gì? AI làm gì?** | User bôi đen từ khóa và bấm yêu cầu. AI trích xuất exact paragraph bối cảnh từ slide gốc đính kèm. | AI đề xuất 3 tag bối cảnh nháp. User đọc, bấm duyệt tag phù hợp hoặc tự sửa lại nhãn. | AI tự động viết 1 Synthesis Card tổng hợp bối cảnh. User đọc và bấm Chấp nhận / Sửa / Dismiss. |
| **AI Act / Ask / Don't Act? Vì sao?** | **Don't Act** cho đến khi User bấm nút query. Tránh làm phiền khi user chỉ muốn đọc note. | **Ask** trước khi đính kèm tag vào note chính. Đảm bảo user giữ quyền kiểm soát cấu trúc ghi chú. | **Act with Review** (AI tạo card dạng bản nháp chờ user duyệt). Đảm bảo tính sẵn có của context. |
| **User hiểu capability/limit bằng gì?** | Thông báo rõ: *"AI chỉ trích xuất bối cảnh từ tài liệu/slide đính kèm của môn học này."* | Nhãn hiển thị mờ dạng `[Draft Tag]` kèm biểu tượng ✨ gợi ý của AI. | Thẻ hiển thị huy hiệu `🤖 AI Synthesis Card (Tự động tổng hợp)` kèm chỉ số độ tin cậy %. |
| **Evidence/uncertainty thể hiện thế nào?** | Hiện rõ trích dẫn dòng, số slide (`Slide 14 · Lecture 3, Đoạn 2`) và tỷ lệ khớp keyword (98%). | Mỗi tag hiển thị tóm tắt ngắn 1 câu kèm biểu tượng trích xuất từ slide tương ứng. | Hiển thị link gốc `🔗 Slide 14 & Đoạn 12:45 Video` và chỉ số `Độ tin cậy AI: 95%`. |
| **User kiểm soát và recovery thế nào?** | Nút "✕ Đóng panel", nút "📎 Chèn bối cảnh", nút Undo nếu không muốn đính kèm nữa. | Nút "✏️ Sửa" để đổi tên tag, nút "✕ Ẩn" để bỏ tag nháp, nút xóa tag đã đính kèm. | Nút "✅ Chấp nhận", nút "✏️ Sửa nội dung Card", nút "❌ Bỏ qua / Dismiss" để xóa toàn bộ Card. |
| **Feedback & Data check** | Truy vấn theo phiên (session-based query), không ghi nhớ thông tin nhạy cảm cá nhân. | Lựa chọn tag của user được lưu tạm trong bộ nhớ ghi chú hiện tại để cải thiện gợi ý lần sau. | User có thể bấm Dismiss để AI không tự động tạo Card cho đoạn ghi chú đó nữa. |
