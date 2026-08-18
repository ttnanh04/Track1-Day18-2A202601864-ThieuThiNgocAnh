# Group Feedback Synthesis — Day 18: Personal Learning Notes (Case B)

## 1. Bảng Tổng Hợp Feedback Từ 3 Phiên Test

| Nội dung | Feedback 1 (`2A202601818` - Ánh facilitate) | Feedback 2 (`2A202601290` - Huyền facilitate) | Feedback 3 (`2A202601870` - Anh facilitate) | Pattern hoặc khác biệt chính |
| :--- | :--- | :--- | :--- | :--- |
| **First action** | Click từ khóa `overshoot` (Option A). | Bấm nút Trích xuất Context (Option A). | Bôi đen cụm từ `lr quá lớn` (Option A). | Tester có xu hướng muốn tác động ngay vào chữ/nút trên màn hình ở lần chạm đầu tiên. |
| **Breakdown chính** | Ngập ngừng giữa chọn từ khóa hay bấm nút query ở Option A. | Cảm thấy bị ngợp thông tin ở Option C khi AI card hiện ra quá to. | Thấy Option A tốn quá nhiều bước thao tác thủ công. | Option C gây xao nhãng không gian note; Option A tốn quá nhiều effort thao tác. |
| **Cách lấy lại control** | Dùng nút "✏️ Sửa" tag ở Option B. | Dùng nút "❌ Dismiss" ở Option C để khôi phục màn hình. | Bấm nút "↺ Reset" để quay lại ban đầu. | Tester đánh giá rất cao sự có mặt của nút Sửa (Edit) và Dismiss. |
| **Option được chọn** | **Option B** | **Option B** | **Option B** | **100% Tester lựa chọn Option B (Co-Create)**. |
| **Trade-off** | Chấp nhận đọc thêm 2–3 tag gợi ý để không phải tự gõ query. | Chấp nhận thao tác 1 click duyệt tag để giữ note gọn gàng. | Chấp nhận AI gợi ý tag nhưng muốn có thêm nút query nhanh on-demand. | Cùng nhất trí: Co-create mang lại cảm giác an toàn và kiểm soát tốt nhất. |

---

## 2. Phân Phối 4 Lớp Đánh Giá (Four-Layer Synthesis)

### OBSERVED (Tester đã thực sự làm hoặc nói gì?)
- 100% Tester lựa chọn Option B (Co-create Context Tags).
- Option C bị 2/3 Tester chọn bấm "Dismiss" ngay sau khi mở màn hình vì khối văn bản quá to.
- Tester 1 và Tester 3 thử nghiệm dùng nút "✏️ Sửa" để đổi tiêu đề nhãn trước khi ghim vào note.

### INTERPRETED (Nhóm nghĩ điều đó có nghĩa là gì?)
- Người học coi ghi chú cá nhân là không gian riêng tư thuộc sở hữu cá nhân, không muốn AI tự tiện đè quá nhiều chữ (Option C).
- Việc bắt người dùng tự gõ câu hỏi tìm bối cảnh (Option A) tốn quá nhiều công sức tư duy.
- Option B (Co-Create) tạo ra sự hài hòa hoàn hảo: AI nghĩ hộ nhãn, nhưng User nắm quyền duyệt và gắn nhãn.

### DECIDED — NEXT CHANGE (Quyết định thay đổi cho iteration tiếp theo)
- Lựa chọn **Option B (Co-create Context Tags)** làm cơ chế tương tác chính cho sản phẩm.
- Tích hợp thêm nút **"Query nhanh từ khóa" (từ Option A)** dưới dạng tính năng phụ trợ khi User muốn tra thêm từ ngoài danh sách gợi ý.

### STILL UNPROVEN (Điều gì vẫn chưa thể kết luận từ 3 feedback?)
- Chưa biết khi danh sách ghi chú kéo dài hàng trăm trang thì số lượng Draft Tags gợi ý của Option B có gây rối mắt hay không.
- Chưa rõ người học có sẵn lòng duy trì thói quen duyệt tag lâu dài sau khi cảm giác mới lạ ban đầu qua đi hay không.

---

## 3. Quyết Định Nhóm (One Group Next Change)

> **Một Next Change nhóm chốt:**  
> Lựa chọn phát triển tiếp **Option B (Co-create Context Tags)** làm cơ chế tương tác chủ đạo, đồng thời tích hợp thêm tính năng **"Query On-Demand" của Option A** dưới dạng một lối tắt (shortcut) khi người dùng muốn tra cứu trực tiếp một từ khóa không nằm trong danh sách tag gợi ý.

- **Evidence nào dẫn tới quyết định này:**  
  1. Cả 3/3 tester đều chọn Option B vì sự cân bằng hoàn hảo giữa nỗ lực người dùng và sự hỗ trợ của AI.  
  2. Option C bị 2/3 tester chê là quá dài và gây rác giao diện note (`Dismiss` ngay lập tức).  
  3. Option A bị đánh giá là tốn công nghĩ câu hỏi, nhưng tính năng chọn từ khóa cụ thể của A là điểm bổ trợ tuyệt vời cho B.

- **Still Unproven sau ba feedback:**  
  1. Chưa chứng minh được liệu khi danh sách ghi chú kéo dài hàng trăm trang thì số lượng Draft Tags gợi ý của Option B có gây rối mắt hay không.  
  2. Chưa rõ người học có sẵn lòng duy trì thói quen duyệt tag lâu dài sau khi cảm giác mới lạ ban đầu qua đi hay không.
