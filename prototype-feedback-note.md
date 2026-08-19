# Ghi chép phản hồi phỏng vấn thử nghiệm Prototype

> **Case nghiên cứu:** Case B — AI Notes: Ghi chú học tập cá nhân  
> **Mục tiêu:** Ghi nhận thực tế hành vi, nhận xét và các quyết định tương tác Người – AI của học viên thử nghiệm qua các phiên phỏng vấn do các thành viên trong nhóm trực tiếp dẫn dắt (Facilitate).

---

## 1. Chi tiết phản hồi thử nghiệm theo từng phiên Facilitator

- **Option A — Người học tự tìm kiếm:** Tester bấm tìm kiếm trích dẫn nhanh chóng nhưng cảm thấy chưa thực sự giải quyết được khó khăn khi ghi chú quá ngắn.
- **Option B — Người học & AI cùng tạo:** Tester đọc kỹ từng ô bản nháp, soi lại link slide bài giảng gốc và chủ động chỉnh sửa lại 1 câu giải thích trước khi bấm duyệt (`Approve`).
- **Option C — AI đề xuất & Nhờ người hỗ trợ:** Tester thích sự kết hợp giữa Option B và Option C để AI vừa giúp gợi ý bản nháp vừa giúp dọn dẹp các ghi chú lộn xộn.
- **Nhận xét trực tiếp:** _"Có sẵn bản nháp tóm tắt thế này tiện hơn nhiều, nhưng bắt buộc phải cho mình sửa và kiểm tra link gốc chứ AI tự lưu luôn thì không yên tâm."_

---

## 2. Bốn nhóm quyết định tương tác Người – AI (Human–AI Decisions)

### 1. Kỳ vọng ban đầu đối với người dùng (Expectation)
- Trước khi thực hiện, người dẫn phỏng vấn giải thích rõ giới hạn: AI chỉ đóng vai trò hỗ trợ gợi ý từ bộ tài liệu bài học mẫu, học viên cần tự kiểm tra lại nguồn trích dẫn trước khi sử dụng.

### 2. Phân chia vai trò giữa Người và AI (Role & Agency)
- **AI thực hiện:** Tìm kiếm trích dẫn bài giảng, tạo bản nháp thẻ bối cảnh 3 dòng, đánh dấu các phần thông tin chưa chắc chắn.
- **Học viên thực hiện:** Đọc trích dẫn, chỉnh sửa bản nháp, bấm duyệt (`Approve`) hoặc từ chối (`Reject`).
- **Nguyên tắc can thiệp:** AI tuyệt đối không tự động lưu nội dung khi chưa có sự xác nhận của học viên.

### 3. Minh bạch nguồn tin & Mức độ tin cậy (Evidence & Uncertainty)
- Luôn hiển thị nguồn trích dẫn trực tiếp (`Slide 14, phút 18:22`) bên cạnh các câu giải thích của AI.
- Gắn nhãn phân loại minh bạch 3 trạng thái: `Đã tìm thấy (Found)`, `AI suy đoán (Inferred)` và `Chưa rõ (Unknown)`.

### 4. Quyền kiểm soát của người dùng (Control & Recovery)
- Cung cấp đầy đủ các nút chức năng: `Xem lại`, `Chỉnh sửa`, `Bỏ qua`, `Hủy gửi` và `Reset về trạng thái ban đầu`.
- Cho phép học viên tự quay lại làm bài theo cách truyền thống bất kỳ lúc nào nếu AI đưa ra thông tin không chính xác.

---

## 3. Tổng kết quyết định & Định hướng nhóm chốt

- **Điểm chung của cả 3 tester:** Đều coi trọng tính minh bạch của trích dẫn bài giảng gốc và yêu cầu con người bắt buộc phải có bước duyệt (`Approve`) trước khi lưu.
- **Định hướng nhóm chốt (Hybrid Solution):** Tự động tạo bản nháp giải thích kèm link bài giảng gốc (Option B), đồng thời tích hợp ô tìm kiếm trích dẫn nhanh (Option A). Mọi nội dung do AI gợi ý đều bắt buộc qua bước học viên xem và bấm duyệt mới được lưu lại.
