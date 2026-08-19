# Nhật ký hỗ trợ từ AI (AI Support Log)

> **Case đăng ký:** Case B — AI Notes: Personal Learning Notes  
> **Nhóm thực hiện:** Nhóm 68  

---

## 1. AI đã giúp gì

- **Phác thảo giao diện prototype:** AI hỗ trợ nhóm viết mã nguồn HTML/CSS/JavaScript cho 3 bản micro-prototype độc lập, có thể chạy trực tiếp trên trình duyệt mà không cần cài đặt backend hay API thật.
- **Chuẩn hóa khung phỏng vấn:** Gợi ý và thiết lập cấu trúc kịch bản phỏng vấn 20 phút tập trung quan sát hành vi thực tế của học viên trong môi trường thử nghiệm.
- **Phân loại hướng giải pháp:** Hỗ trợ nhóm phân tích và xếp 3 phương án giải pháp theo phổ can thiệp của AI (User-led retrieval, User + AI co-create, và AI-initiated recovery).
- **Tổng hợp tài liệu:** Giúp nhóm chuẩn hóa các bảng đối chiếu thông tin và định dạng tài liệu báo cáo rõ ràng.

---

## 2. AI sai / hời hợt ở đâu

- **Tự động hóa thái quá (Over-automation):** AI luôn có xu hướng đề xuất các tính năng để AI tự động làm hết mọi việc từ A-Z mà bỏ qua nhu cầu chủ động kiểm soát ghi chú của người học.
- **Phỏng đoán cảm tính thiếu bằng chứng:** AI tự đưa ra các khẳng định vô căn cứ như _"100% người học thích AI tự tóm tắt ghi chú"_ hay _"AI giải thích sẽ giúp học viên thuộc bài ngay"_ khi chưa đi phỏng vấn hay quan sát học viên thật.
- **Né tránh rủi ro AI giải thích sai (Hallucination):** AI hoàn toàn bỏ qua nỗi sợ lớn nhất của học viên là rủi ro AI tự suy đoán lung tung hoặc tóm tắt sai lệch bối cảnh bài giảng gốc.
- **Thiếu chiều sâu về thiết kế tương tác (Human–AI Decisions):** AI không tự thiết kế được các điểm dừng kiểm soát (`Review`, `Edit`, `Dismiss`) để đảm bảo học viên giữ quyền quyết định cuối cùng.

---

## 3. Nhóm đã tự sửa gì

- **Thiết lập quyền kiểm soát cho học viên (`User Review & Consent`):** Nhóm bổ sung quy định bắt buộc học viên phải kiểm tra, chỉnh sửa và bấm duyệt (`Approve`) thì thông tin mới được lưu lại ở cả 3 phương án.
- **Ép AI minh bạch độ tin cậy và nguồn trích dẫn:** Buộc AI phải hiển thị trích dẫn chính xác vị trí bài giảng gốc (`Slide 14, phút 18:22`) và phân loại rõ ràng 3 trạng thái tin cậy (`Đã tìm thấy / AI suy đoán / Chưa rõ`).
- **Thay thế phỏng đoán của AI bằng bằng chứng thực tế:** Nhóm xóa bỏ toàn bộ các khẳng định cảm tính của AI, thay bằng dữ liệu ghi chép quan sát hành vi thực tế và lời nói trực tiếp từ 3 phiên phỏng vấn tester.
- **Bổ sung hướng kết nối con người khi AI bế tắc (Human Escalation):** Nhóm chủ động thiết kế thêm cơ chế đóng gói ghi chú và câu hỏi để gửi nhờ bạn cùng lớp hoặc trợ giảng giúp đỡ khi AI không đủ tin cậy.
