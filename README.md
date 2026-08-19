# Track 1 — Day 18: Solution Exploration and Validation
## 1. Thông tin cá nhân và nhóm

- **Họ và tên:** Thiều Thị Ngọc Ánh
- **Mã học viên (MSHV):** `2A22601864`
- **Tên nhóm:** Nhóm 68
- **Case đăng ký:** Case B — AI Notes: Personal Learning Notes
- **Ba thành viên trong nhóm:**
  1. **Đỗ Tú Anh** — MSHV: `2A202601272` 
  2. **Thiều Thị Ngọc Ánh** — MSHV: `2A22601864` 
  3. **Trần Thanh Huyền** — MSHV: `2A202601578` 

---

## 2. Hypothesis Problem (Bản nhóm dùng trong Day 18)

> **Khi quay lại ôn bài hoặc làm bài tập sau một khoảng thời gian, học viên gặp khó khăn trong việc xem và hiểu lại kiến thức cũ vì các ghi chú nằm rải rác ở nhiều nơi, lộn xộn và bị thiếu bối cảnh giải thích, dẫn đến việc phải tốn thêm nhiều thời gian đọc lại bài giảng từ đầu hoặc nản lòng bỏ qua không ôn bài nữa khiến bị hổng kiến thức.**

---

## 3. Three Solution Options & Link Prototype

| Option | Mô tả ngắn cách giải | Hướng phân chia công việc (Spectrum) | Link Prototype |
| :--- | :--- | :--- | :--- |
| **Option A — User-Led Retrieval** | AI trợ giúp tìm kiếm và trích dẫn chính xác đoạn bài giảng/slide liên quan; người học tự đọc trích dẫn và tổng hợp câu trả lời. | _Người học tự làm chủ / AI tìm trích dẫn_ | [`Prototype1/index.html`](Prototype1/index.html) |
| **Option B — User + AI Co-Create** | AI tự động tạo bản nháp thẻ bối cảnh 3 dòng từ ghi chú và slide; người học xem qua, chỉnh sửa hoặc xác nhận trước khi lưu. | _Người học + AI cùng tạo / Người học duyệt_ | [`Prototype2/index.html`](Prototype2/index.html) |
| **Option C — AI Initiates, User Reviews** | AI tự phân tích độ đầy đủ của ghi chú, tạo bộ thông tin khôi phục và đề xuất nhờ bạn cùng lớp hoặc trợ giảng giải thích giúp khi thiếu bối cảnh. | _AI đề xuất / Nhờ người hỗ trợ_ | [`Prototype3/index.html`](Prototype3/index.html) |

🔗 **Chi tiết tài liệu đi kèm trong thư mục:**

- Bảng thiết kế 3 phương án: [`three-option-design-sheet.md`](three-option-design-sheet.md)
- Hướng dẫn chạy & Link Prototype: [`prototype-link.md`](prototype-link.md)
- Bảng ghi chép phỏng vấn thử nghiệm: [`prototype-feedback-note.md`](prototype-feedback-note.md)
- Tổng hợp phản hồi nhóm: [`group-feedback-synthesis.md`](group-feedback-synthesis.md)
- Nhật ký hỗ trợ AI: [`ai-support-log.md`](ai-support-log.md)

---

## 4. Đóng góp của tôi trong nhóm
- **Phụ trách thiết kế Option B (User + AI Co-Create):** Xây dựng cơ chế tạo bản nháp thẻ bối cảnh 3 dòng từ ghi chú và slide để người học xem lại, chỉnh sửa hoặc xác nhận trước khi lưu.
- **Thống nhất Human–AI Decisions:** Đề xuất quy tắc buộc AI hiển thị trích dẫn nguồn rõ ràng (`Slide 14, phút 18:22`) và bổ sung các nút kiểm soát (`Review`, `Edit`, `Dismiss`) giúp học viên luôn nắm quyền quyết định cuối cùng.
- **Facilitation & Observation (Phiên 2):** Trực tiếp đóng vai Facilitator thực hiện phiên phỏng vấn thử nghiệm prototype 20 phút với **Tester 2 (`2A202601818`)**, ghi nhận điểm tương tác và phản hồi của người dùng.

## 5. Prototype Feedback

### 👁️ Observation từ các phiên thử nghiệm:

- **Phiên 1 (Đỗ Tú Anh test `2A202601870`):** Tester ưu tiên chọn Option B vì muốn có sẵn bản nháp tóm tắt kèm link trích dẫn nguồn rõ ràng để đỡ tốn công tự viết lại.
- **Phiên 2 (Thiều Thị Ngọc Ánh test `2A202601818`):** Tester muốn kết hợp Option B và Option C để vừa được AI gợi ý bản nháp vừa giúp dọn dẹp các ghi chú lộn xộn.
- **Phiên 3 (Trần Thanh Huyền test `2A202601290`):** Tester chọn Option A vì thích tốc độ tìm kiếm nhanh nhưng yêu cầu bắt buộc phải luôn hiện link mở slide gốc bên cạnh để tự kiểm tra lại khi cần.

### 📊 Ba-Feedback Synthesis (Tổng hợp từ cả 3 phiên thử nghiệm của nhóm):

1. **Phản hồi 3 phiên:**
   - Phiên 1 (Đỗ Tú Anh test `2A202601870`): Chọn Option B vì cần bản nháp có sẵn trích dẫn nguồn rõ ràng.
   - Phiên 2 (Thiều Thị Ngọc Ánh test `2A202601818`): Chọn Option B kết hợp C để dẹp bỏ ghi chú lộn xộn.
   - Phiên 3 (Trần Thanh Huyền test `2A202601290`): Chọn Option A vì muốn tìm kiếm nhanh nhưng yêu cầu đính kèm link slide gốc.
2. **Next Change nhóm chốt:**
   > **Xây dựng giải pháp kết hợp (Hybrid Solution): Tự động tạo bản nháp bối cảnh kèm link bài giảng gốc (Option B), kết hợp ô tìm kiếm trích dẫn nhanh (Option A). Mọi nội dung do AI tạo ra đều phải qua bước người học kiểm tra và duyệt (Approve) trước khi lưu.**
3. **Still Unproven (Điều chưa chứng minh được):**
   > Chưa chứng minh được liệu giải pháp này có thực sự giúp học viên duy trì thói quen ôn bài đều đặn hàng tuần sau 1–3 tháng sử dụng thực tế hay không.

---

## 6. AI Support Log

- **AI đã giúp gì:** AI hỗ trợ phác thảo giao diện HTML/CSS/JS cho 3 micro-prototypes độc lập, gợi ý chuẩn hóa kịch bản phỏng vấn 20 phút và giúp phân loại 3 hướng giải pháp theo phổ can thiệp của AI.
- **AI sai / hời hợt ở đâu:** AI có xu hướng tự động hóa thái quá mà không hỏi ý kiến người dùng, tự đưa ra các khẳng định cảm tính thiếu bằng chứng như _"100% người học thích AI tự tóm tắt"_, và hoàn toàn bỏ qua nỗi lo AI giải thích sai (Hallucination) của học viên.
- **Bạn tự sửa gì (Nhóm tự điều chỉnh gì):** Nhóm đã bổ sung quy định bắt buộc học viên phải kiểm tra và bấm duyệt (`Approve`) mới lưu ghi chú ở cả 3 option; buộc AI hiển thị trích dẫn nguồn bài giảng gốc (`Slide 14, phút 18:22`) kèm nhãn phân loại độ tin cậy (`Found / Inferred / Unknown`); đồng thời thay thế toàn bộ giả định cảm tính của AI bằng bằng chứng quan sát người dùng thực tế qua 3 phiên phỏng vấn.





