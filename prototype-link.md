# Hướng dẫn trải nghiệm & Link thử nghiệm 3 mẫu Prototype

> **Case nghiên cứu:** Case B — AI Notes: Ghi chú học tập cá nhân  
> **Giả thuyết bài toán:** Dùng giả thuyết đã chốt trong [`group-feedback-synthesis.md`](group-feedback-synthesis.md).  
> **Phương án giải pháp:** Dùng 3 cơ chế đã chốt trong [`three-option-design-sheet.md`](three-option-design-sheet.md).  
> **Quy tắc tương tác Người – AI:** Dùng các quyết định đã chốt trong [`prototype-feedback-note.md`](prototype-feedback-note.md).

---

## 1. Kết quả hoàn thành

Ba bản prototype HTML/CSS/JavaScript độc lập đã được xây dựng hoàn tất trong từng thư mục tương ứng. Bạn có thể mở trực tiếp bằng trình duyệt mà không cần cài đặt thêm thư viện, server hay kết nối API thật.

| Phương án | Link Prototype | Tài liệu hướng dẫn | Thao tác tương tác chính |
| :--- | :--- | :--- | :--- |
| **Option A — Người học tự tìm kiếm** | [`Prototype1/index.html`](Prototype1/index.html) | [`Prototype1/README.md`](Prototype1/README.md) | Học viên tự gõ từ khóa, xem nguồn trích dẫn, chọn thông tin và tự viết câu trả lời. |
| **Option B — Người học & AI cùng tạo** | [`Prototype2/index.html`](Prototype2/index.html) | [`Prototype2/README.md`](Prototype2/README.md) | Học viên xem qua bản nháp thẻ giải thích, chỉnh sửa thông tin hoặc bấm duyệt/từ chối. |
| **Option C — AI đề xuất & Nhờ người hỗ trợ** | [`Prototype3/index.html`](Prototype3/index.html) | [`Prototype3/README.md`](Prototype3/README.md) | Học viên xem phân loại `Tìm thấy / AI suy đoán / Chưa rõ`, kiểm tra nội dung và xác nhận trước khi gửi nhờ bạn học giúp. |

---

### Hướng dẫn chạy thử nghiệm

1. Mở trực tiếp file `index.html` của Option A, B hoặc C trên trình duyệt web.
2. Để học viên phỏng vấn tự đọc thông tin và tự bấm thao tác, người dẫn phỏng vấn không giải thích hộ giao diện.
3. Sau khi kết thúc mỗi phương án, bấm nút **Reset về trạng thái ban đầu** trước khi chuyển sang thử nghiệm phương án tiếp theo.

---

## 2. Quy mô thử nghiệm được áp dụng

Mỗi phương án được thiết kế gọn nhẹ gồm 3 màn hình theo luồng chính:

```text
BỐI CẢNH DÙNG CHUNG
        ↓
THAO TÁC CỐT LÕI (NGƯỜI – AI)
        ↓
KẾT QUẢ / QUYẾT ĐỊNH CỦA HỌC VIÊN
```

Nhóm không dựng các màn hình phụ như trang đăng nhập, trang chủ quản lý, hay gọi API phức tạp để tập trung kiểm tra đúng hành vi người dùng.

### Những phần được chuẩn bị giống hệt nhau ở cả A / B / C:

- Cùng đối tượng người học và bối cảnh bài tập.
- Cùng một dòng ghi chú cũ: `“Active recall > reread; lịch 1–3–7; feedback?”`.
- Cùng một câu hỏi bài tập: Giải thích phương pháp Active Recall và lập kế hoạch ôn tập 7 ngày.
- Cùng 3 đoạn tài liệu trích dẫn mẫu: Slide 12, Slide 16 và Transcript phút 08:40.
- Cùng một mục tiêu: Viết câu trả lời ngắn gọn có trích dẫn nguồn mà không cần đọc lại cả bài giảng.
- Cùng phong cách giao diện, màu sắc, font chữ, kích thước thẻ và hệ thống nút bấm.
- Cùng nút Reset để quay về trạng thái ban đầu.

**Điểm khác biệt duy nhất là cách thức tương tác:**
- **Option A:** AI chỉ làm nhiệm vụ tìm trích dẫn; học viên tự viết đáp án.
- **Option B:** AI viết bản nháp giải thích; học viên xem, chỉnh sửa và bấm duyệt.
- **Option C:** AI tự gom thông tin và đề xuất tin nhắn nhờ bạn học giúp đỡ khi thiếu dữ liệu.

---

## 3. Luồng thao tác & Quyền kiểm soát của học viên

### Option A — Người học tự tìm kiếm

1. Giao diện bối cảnh chung → Học viên bấm bắt đầu tìm kiếm trích dẫn.
2. Học viên nhập từ khóa, mở xem nguồn bài giảng và chọn 1 hoặc nhiều đoạn trích dẫn.
3. Học viên tự gõ câu trả lời của mình hoặc quay lại chọn thêm trích dẫn khác.

**Quyền kiểm soát của học viên:** Đổi từ khóa, bỏ chọn đoạn trích dẫn, mở trực tiếp slide gốc, hoặc bấm reset làm lại từ đầu; không có dữ liệu nào tự động lưu khi chưa được cho phép.

---

### Option B — Người học & AI cùng tạo

1. Giao diện bối cảnh chung → Học viên bấm nút khôi phục bối cảnh.
2. AI hiển thị bản nháp thẻ giải thích kèm link bài giảng gốc và đánh dấu những đoạn chưa chắc chắn.
3. Học viên sửa nội dung, từ chối hoặc bấm duyệt (Approve); thẻ chỉ được tính là hoàn thành sau khi được duyệt.

**Quyền kiểm soát của học viên:** Sửa từng ô thông tin, từ chối bản nháp, dừng tạo nội dung hoặc quay lại ghi chú ban đầu.

---

### Option C — AI đề xuất khôi phục & Nhờ người hỗ trợ

1. Giao diện bối cảnh chung → AI chủ động nhắc ghi chú đang thiếu thông tin và mời học viên xem xét.
2. Bộ tài liệu khôi phục tách rõ 3 phần: `Đã tìm thấy / AI suy đoán / Chưa rõ`, đồng thời giải thích lý do vì sao nên nhờ bạn học/trợ giảng hỗ trợ.
3. Học viên chọn tự làm bài tiếp hoặc xem trước nội dung tin nhắn nhờ giúp đỡ, chọn người nhận và bấm đồng ý gửi.

**Quyền kiểm soát của học viên:** Bỏ qua thông báo, hủy gửi tin nhắn, chọn lại người nhận, hoặc tiếp tục tự làm bài mà không cần chờ người khác trả lời. (Mọi thao tác gửi tin nhắn trên prototype chỉ là giả lập).

---

## 4. Ghi chú dành cho người dẫn phỏng vấn (Facilitator)

Các ghi chú này đã được gắn trong mã nguồn HTML và file README của từng thư mục, không hiển thị trên màn hình của học viên.

### Khi cho học viên thử Option A:
- **Kỳ vọng quan sát:** Học viên chủ động gõ từ khóa, kiểm tra link trích dẫn và tự ghép thành câu trả lời.
- **Điểm cần chú ý:** Học viên có nhận ra trích dẫn bị thiếu/sai để đổi từ khóa hoặc mở slide gốc tự đọc không.
- **Tuyệt đối không:** Hướng dẫn học viên cách chọn trích dẫn, không giải thích ý nghĩa của link trích dẫn hay nhắc học viên mở slide gốc.

### Khi cho học viên thử Option B:
- **Kỳ vọng quan sát:** Học viên xem lại bản nháp, chỉnh sửa hoặc từ chối nội dung AI viết trước khi bấm duyệt.
- **Điểm cần chú ý:** Học viên có thực sự soi lại bài giảng gốc để sửa những phần AI đánh dấu chưa chắc chắn không.
- **Tuyệt đối không:** Gợi ý học viên nên sửa ô nào, không nói đáp án đúng là gì và không giục học viên bấm duyệt.

### Khi cho học viên thử Option C:
- **Kỳ vọng quan sát:** Học viên đọc kỹ bộ khôi phục bối cảnh và tự đưa ra quyết định tự làm hay bấm đồng ý gửi nhờ giúp đỡ.
- **Điểm cần chú ý:** Học viên có hiểu các nhãn phân loại thông tin không, có xem trước nội dung tin nhắn gửi đi không.
- **Tuyệt đối không:** Khuyên học viên nên chọn gửi cho ai hay bảo học viên có nên tin tưởng AI hay không.

---

## 5. Tiêu chuẩn đánh giá mức độ sẵn sàng thử nghiệm

| Tiêu chuẩn | Trạng thái | Minh chứng trong Prototype |
| :--- | :--- | :--- |
| Học viên tự mở và thao tác được cả A/B/C | **Đạt** | Mỗi thư mục có file `index.html` chạy độc lập, mở được ngay trên mọi trình duyệt. |
| Cùng bối cảnh và cùng một bài tập | **Đạt** | Giữ nguyên ghi chú mẫu, câu hỏi bài tập và các đoạn slide minh họa. |
| Không cần người dẫn phỏng vấn giải thích hộ | **Đạt** | Mỗi phương án đều hiển thị hướng dẫn ngắn gọn ngay trước khi thao tác. |
| Nội dung chân thực để học viên đưa ra quyết định | **Đạt** | Các đoạn bài giảng, trích dẫn và nhãn cảnh báo được chuẩn bị sát với thực tế. |
| Học viên luôn giữ quyền kiểm soát | **Đạt** | Có đầy đủ các nút đổi từ khóa, sửa nội dung, từ chối, hủy gửi và reset. |
| Nút Reset hoạt động tốt | **Đạt** | Nút reset luôn có ở chân trang để quay về bối cảnh ban đầu bất kỳ lúc nào. |
| Chạy mượt mà không cần AI thật | **Đạt** | Toàn bộ dữ liệu phản hồi của AI và thao tác gửi tin nhắn đều được giả lập hoàn hảo. |

---

## 6. Kết quả kiểm tra chất lượng trước khi test (QA)

- Mã nguồn JavaScript của cả 3 bản prototype đều đã được kiểm tra, không có lỗi cú pháp.
- Đã xác nhận mỗi prototype có đầy đủ 3 trạng thái màn hình, thanh tiến trình các bước, nút reset và không bị lỗi bấm nút.
- Đã xác nhận cả 3 phương án đều dùng chung bộ dữ liệu mẫu.
- Đã kiểm tra hiển thị giao diện thành công trên trình duyệt Chrome.
- Đã chạy quy trình kiểm tra tự động (`?qa=1`), xác nhận các thao tác chuyển màn hình và reset đều hoạt động chính xác 100%.

Kết quả kiểm tra:
```text
Prototype1/index.html  -> Hiển thị: Tốt | Thao tác & Reset: Thành công
Prototype2/index.html  -> Hiển thị: Tốt | Thao tác & Reset: Thành công
Prototype3/index.html  -> Hiển thị: Tốt | Thao tác & Reset: Thành công
```

---

## 7. Trạng thái sẵn sàng

Cả 3 bản micro-prototype đã hoàn tất và sẵn sàng cho các phiên phỏng vấn thử nghiệm so sánh A/B/C. Người dẫn phỏng vấn cần ghi chép lại chính xác hành vi thực tế, những chỗ học viên bị kẹt và quyết định cuối cùng của học viên.

