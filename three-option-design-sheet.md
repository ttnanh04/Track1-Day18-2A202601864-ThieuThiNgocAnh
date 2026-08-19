# Bảng thiết kế 3 phương án giải pháp

> **Case nghiên cứu:** Case B — AI Notes: Ghi chú học tập cá nhân  
> **Điểm xuất phát:** Sử dụng giả thuyết bài toán đã chốt trong [`group-feedback-synthesis.md`](group-feedback-synthesis.md).  
> Ba phương án dưới đây đại diện cho 3 cơ chế giải quyết hoàn toàn khác nhau, chứ không phải chỉ là thay đổi giao diện.

---

## 1. Kho ý tưởng giải pháp dự phòng

Các hướng giải pháp nhóm đã lưu lại từ buổi thảo luận trước:

1. Tìm kiếm thông minh theo ý nghĩa bài học (Semantic search).
2. Thẻ bối cảnh AI tự tổng hợp (AI context card).
3. Bản đồ bài học tự sắp xếp (Auto-organized learning map).
4. Trợ lý AI trả lời dựa trên ghi chú cá nhân (Ask-my-notes tutor).
5. Tự động ghi chép có cấu trúc ngay trong lúc học (In-lesson capture).
6. Không gian ôn tập và áp dụng kiến thức (Recall & reuse workspace).

Các hướng trên đã phủ được 3 cơ chế cơ bản: tìm kiếm trích dẫn, cùng AI tạo nội dung, và AI tự động khôi phục bối cảnh. Tuy nhiên, nhóm nhận thấy chưa có hướng nào kết nối với con người khi AI gặp bế tắc. Vì vậy, nhóm bổ sung thêm một hướng giải pháp có điều kiện:

7. **Nhờ người hỗ trợ (Human Context Handoff):** Khi ghi chú quá ngắn hoặc AI không đủ tin cậy để giải thích, hệ thống sẽ gom ghi chú, câu hỏi cùng các đoạn slide liên quan lại để gửi cho bạn học hoặc trợ giảng. Câu trả lời nhận được sau đó sẽ được lưu đính kèm vào lại ghi chú.

Hướng số 7 được tích hợp vào Phương án C để kiểm tra xem học viên ứng xử thế nào khi AI không giải quyết được vấn đề và cần đến sự trợ giúp của con người.

---

## 2. Các yếu tố giữ nguyên cho cả 3 phương án (Đảm bảo so sánh công bằng)

| Yếu tố | Quy định chung cho cả 3 phương án (A / B / C) |
| :--- | :--- |
| **Người dùng mục tiêu** | Học viên cá nhân vừa hoàn thành một bài học gần đây, có lưu ghi chú riêng và cần dùng lại kiến thức để làm bài tập hoặc ôn thi. |
| **Bối cảnh sử dụng** | Sau vài ngày, học viên mở lại ghi chú cũ chỉ gồm vài từ khóa, công thức ngắn nên không thể nhớ hết bối cảnh bài học. |
| **Nhiệm vụ (Task)** | Kết hợp ghi chú cũ và tài liệu bài giảng để hiểu lại khái niệm, trả lời cùng một câu hỏi bài tập và đưa ra hướng áp dụng. |
| **Kết quả mong muốn** | Học viên hiểu và dùng được kiến thức ngay mà không cần đọc lại toàn bộ bài giảng; đồng thời biết rõ câu trả lời dựa trên nguồn trích dẫn nào. |
| **Bộ dữ liệu mẫu dùng chung** | Cùng một đoạn ghi chú ngắn; cùng 3 đoạn bài giảng/slide minh họa; cùng thông tin nguồn gốc; cùng một đề bài tập. Không phương án nào được dùng thêm dữ liệu ngoài. |

---

## 3. Chi tiết 3 phương án giải pháp

### Option A — Người học tự tìm kiếm & kiểm chứng trích dẫn (User-Led Retrieval)

**Giả thuyết giải pháp:** Nếu người học tự nhập từ khóa và chọn tài liệu cần tìm, AI chỉ đóng vai trò tìm và trả về đúng các đoạn trích dẫn kèm vị trí slide, thì người học có thể tự hiểu lại bối cảnh mà không sợ bị AI giải thích đoán mò.

| Yếu tố | Chi tiết ở Option A |
| :--- | :--- |
| **Cách thức hoạt động** | Tìm kiếm theo ý nghĩa từ ghi chú và slide bài học, tập trung trả về trích dẫn gốc; AI tuyệt đối không tự bịa thêm lời giải thích. |
| **Người học làm gì?** | Nhập câu hỏi/từ khóa, chọn nguồn bài giảng muốn tìm, tự đọc các đoạn trích dẫn trả về và tự tổng hợp thành câu trả lời. |
| **AI làm gì?** | Tìm kiếm, sắp xếp độ liên quan, tô sáng đoạn quan trọng, hiển thị vị trí slide và thông báo nếu không tìm thấy thông tin phù hợp. |
| **Thời điểm kích hoạt** | Người học chủ động mở ô tìm kiếm khi bắt đầu làm bài tập hoặc khi thấy không nhớ bối cảnh ghi chú. |
| **Điểm đánh đổi chính** | Giúp người học hoàn toàn làm chủ và tin tưởng nguồn tin, nhưng người học vẫn phải tốn công tự suy nghĩ và ghép nối câu trả lời. |

**Mức độ can thiệp:** NGUỜI HỌC TỰ LÀM CHỦ / AI HỖ TRỢ TRÍCH DẪN.

---

### Option B — Người học & AI cùng tạo Thẻ bối cảnh (User + AI Co-Create)

**Giả thuyết giải pháp:** Nếu người học chọn một ghi chú cũ và cùng AI hoàn thiện một "thẻ bối cảnh" (gồm ý nghĩa, slide nguồn, ví dụ và cách dùng), thì ghi chú đó sẽ trở thành tài liệu học tập hoàn chỉnh có thể dùng lại lâu dài.

| Yếu tố | Chi tiết ở Option B |
| :--- | :--- |
| **Cách thức hoạt động** | AI tạo sẵn bản nháp thẻ giải thích từ ghi chú và slide bài giảng; người học xem qua, chỉnh sửa hoặc bấm duyệt trước khi lưu. |
| **Người học làm gì?** | Chọn ghi chú, kiểm tra các phần AI tự điền, sửa lại diễn giải/ví dụ cho đúng ý mình và bấm duyệt (Approve) để sử dụng. |
| **AI làm gì?** | Gợi ý bối cảnh bài học, gắn link slide nguồn, viết bản nháp giải thích/ví dụ và đánh dấu những chỗ chưa chắc chắn để người học kiểm tra. |
| **Thời điểm kích hoạt** | Người học mở ghi chú cũ và bấm nút "Khôi phục bối cảnh cùng AI". |
| **Điểm đánh đổi chính** | Tiết kiệm công sức tự viết lại từ đầu, nhưng người học vẫn cần dành thời gian kiểm duyệt; bù lại sẽ tạo được ghi chú chất lượng cho sau này. |

**Mức độ can thiệp:** NGUỜI HỌC + AI CÙNG TẠO / NGUỜI HỌC KIỂM DUYỆT.

---

### Option C — AI đề xuất khôi phục & Nhờ người hỗ trợ khi thiếu bối cảnh (AI Initiates + Human Escalation)

**Giả thuyết giải pháp:** Nếu AI tự phát hiện ghi chú bị thiếu thông tin, tự tạo bộ tài liệu khôi phục và đề xuất chuyển câu hỏi cho bạn học/trợ giảng khi không đủ độ tin cậy, thì người học vẫn giải quyết được bài tập mà không bị AI đánh lừa.

| Yếu tố | Chi tiết ở Option C |
| :--- | :--- |
| **Cách thức hoạt động** | AI tự động gom ghi chú và bài giảng liên quan, tự phân tích độ tin cậy. Nếu thiếu thông tin, AI soạn sẵn câu hỏi để người học duyệt gửi cho người hỗ trợ. |
| **Người học làm gì?** | Xem bộ tài liệu AI tổng hợp, kiểm tra nội dung câu hỏi AI soạn sẵn, bấm đồng ý gửi cho bạn học/trợ giảng và đọc phản hồi khi nhận được. |
| **AI làm gì?** | Phát hiện ghi chú thiếu bối cảnh, tạo bản tóm tắt, chỉ ra điểm chưa rõ (`Unknown`), soạn tin nhắn nhờ hỗ trợ và gắn phản hồi của bạn học vào lại ghi chú. |
| **Thời điểm kích hoạt** | Hệ thống tự kích hoạt khi người học mở bài tập hoặc mở ghi chú cũ mà AI phát hiện thấy thiếu thông tin bài giảng liên quan. |
| **Điểm đánh đổi chính** | Giúp người học không phải tự tìm kiếm hay suy nghĩ nhiều, nhưng có thể gây phiền vì thông báo, phải chờ đợi người khác trả lời và cần chú ý bảo mật ghi chú cá nhân. |

**Mức độ can thiệp:** AI CHỦ ĐỘNG ĐỀ XUẤT / NGUỜI HỌC KIỂM DUYỆT & NHỜ NGƯỜI HỖ TRỢ.

---

## 4. Phân tích điểm khác biệt giữa 3 phương án

- **Option A khác Option B ở chỗ:** Option A chỉ tìm và trả về trích dẫn gốc để người học tự viết câu trả lời; trong khi Option B AI chủ động viết bản nháp thẻ bối cảnh để người học cùng chỉnh sửa và duyệt.
- **Option B khác Option C ở chỗ:** Option B chỉ chạy khi người học chủ động yêu cầu và tập trung làm việc giữa Người - AI; còn Option C hệ thống tự phát hiện và có thêm hướng kết nối với người hỗ trợ khi AI không chắc chắn.
- **Option A khác Option C ở chỗ:** Option A hoàn toàn do người học chủ động, AI không tự suy đoán hay kết nối với ai; còn Option C do AI tự đề xuất, có thể tự soạn tin nhắn nhờ bạn học/trợ giảng giúp đỡ.

---

## 5. Những điều nhóm sẽ quan sát trong phiên phỏng vấn thử nghiệm

1. Tester có hoàn thành được cùng một bài tập với bộ dữ liệu mẫu hay không.
2. Tester phải tốn bao nhiêu thao tác ở mỗi phương án và bị kẹt hay dừng lại ở đâu.
3. Tester có thực sự hiểu bài và kiểm tra lại nguồn trích dẫn hay không.
4. Khi ghi chú bị thiếu bối cảnh, tester thích tự tìm (Option A), cùng AI chỉnh sửa (Option B), hay muốn nhờ người khác hỗ trợ (Option C).
5. Những điểm được và mất (trade-off) thể hiện qua hành vi thực tế của tester, thay vì chỉ nghe lời nói cảm tính "em thích cái này hơn".


