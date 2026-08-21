## 9. 🎮 BÀN GIAO: Ý TƯỞNG MINI-GAME

> **Phần này dành cho bạn tiếp nhận để phát triển.** Game là hạng mục **sản phẩm sáng tạo**, chơi sau phần thuyết trình, thời lượng **tối đa 15 phút**.

### 9.1. Mục tiêu

1. **Ôn tập** đúng trọng tâm đã trình bày — không hỏi lan man.
2. **Tương tác cả lớp**, có cạnh tranh nhẹ và **bảng xếp hạng**.
3. **Bám chủ đề thiết kế** — game phải trông như phần tiếp nối của trang, không phải một quiz template rời rạc.

### 9.2. Đề xuất chính — “PHÒNG GIẢI MẬT”

Người chơi vào vai **cán bộ phân tích tư liệu**, lần lượt qua 4 phòng hồ sơ ứng với 4 phần của bài. Đây là hướng ăn khớp chủ đề nhất và tận dụng lại toàn bộ tài sản hình ảnh sẵn có.

**Vòng 1 — BÓC TRẦN TANG CHỨNG** *(dạng chọn điểm trên ảnh)*
Hiện một poster/ảnh tư liệu. Câu hỏi: *"Đâu là chi tiết cho thấy đây là tuyên truyền chính trị chứ không phải nhân đạo?"*
Người chơi bấm vào vùng đúng trên ảnh. Tái sử dụng cơ chế hotspot của `PosterExhibit.js`.

**Vòng 2 — THẬT HAY NGỤY TẠO** *(đúng/sai, tính giờ)*
Hiện một câu trích. Người chơi phán đoán: câu này là **của giáo trình** hay là **luận điệu tuyên truyền của địch**?
Ví dụ: *"Một công cuộc thiêng liêng kết giải đồng tâm Nam – Bắc"* → luận điệu địch.

**Vòng 3 — DỰNG LẠI TRỤC THỜI GIAN** *(kéo thả)*
Xáo trộn 8 mốc trong `data/sections.js → TIMELINE`, người chơi sắp lại đúng thứ tự.
Điểm thưởng nếu chỉ ra được **quan hệ nhân quả**: di cư → xé bỏ tổng tuyển cử → Luật 10/59 → Đồng khởi.

**Vòng 4 — CÂU HỎI VÀNG** *(tự luận ngắn / trắc nghiệm khó)*
Ví dụ: *"Vì sao Mỹ giết chính tay sai của mình?"*, *"Vì sao Phạm Ngọc Thảo phải chờ 30 năm mới được truy tặng?"*
Điểm nhân đôi.

### 9.3. Cơ chế điểm & bảng xếp hạng

- Điểm cơ bản mỗi câu: **100**
- Thưởng tốc độ: `+ floor(50 × thời_gian_còn_lại / thời_gian_cho_phép)`
- Chuỗi đúng liên tiếp (streak): ×1.2 → ×1.5 → ×2
- Vòng 4 nhân đôi toàn bộ

**Bảng xếp hạng — 3 mức triển khai, chọn theo thời gian có:**

| Mức | Cách làm | Ưu / nhược |
|---|---|---|
| **A. `localStorage`** | Lưu ngay trên máy | Làm trong 1 buổi, không cần backend. **Nhược: mỗi máy một bảng riêng** |
| **B. Vercel KV / Upstash Redis** | Route Handler `app/api/score/route.js` | Bảng chung toàn lớp. Cần bỏ `output: 'export'` |
| **C. Supabase / Firebase** | Bảng `scores`, realtime | Xếp hạng cập nhật trực tiếp khi đang chơi. Ấn tượng nhất |

> **Khuyến nghị:** làm **mức A trước** để chắc chắn có sản phẩm chạy được, rồi nâng lên B nếu còn thời gian.
> ⚠️ Nếu chọn B hoặc C, **phải bỏ dòng `output: 'export'`** trong `next.config.mjs` vì static export không chạy được API route.

### 9.4. Chế độ chơi trên lớp

- **Cá nhân:** mỗi bạn quét QR mở trên điện thoại, nhập tên, cùng chơi.
- **Chia đội:** 4 đội tương ứng 4 phần bài, chiếu chung trên máy chiếu, mỗi đội cử người bấm.
- **Màn hình chủ trì:** trang `/game/host` chiếu câu hỏi + bảng xếp hạng trực tiếp.

### 9.5. Gợi ý kỹ thuật

```
web/
├── app/game/
│   ├── page.js           màn hình chờ, nhập tên, chọn chế độ
│   ├── play/page.js      màn hình chơi
│   └── host/page.js      màn hình chiếu cho cả lớp
├── components/game/
│   ├── RoundHotspot.js   vòng 1 — tái dùng logic PosterExhibit
│   ├── RoundTrueFalse.js vòng 2
│   ├── RoundTimeline.js  vòng 3 — dùng @dnd-kit/core
│   ├── RoundGolden.js    vòng 4
│   ├── Leaderboard.js    bảng xếp hạng
│   └── Timer.js          đồng hồ đếm ngược mỗi câu
└── data/questions.js     ★ ngân hàng câu hỏi
```

**Định dạng câu hỏi đề xuất** (`data/questions.js`):

```js
export const QUESTIONS = [
  {
    round: 2,
    type: 'truefalse',
    prompt: 'Câu này của giáo trình hay của địch?',
    text: 'Một công-cuộc thiêng-liêng kết giải đồng-tâm Nam-Bắc.',
    answer: 'dich',
    explain: 'Chú thích ảnh 15 trên poster “Di-cư vào Nam là chọn Tự-Do”. Ngụy biện: chiến dịch rút ruột miền Bắc lại được gọi là “kết giải đồng tâm”.',
    source: 'Poster tuyên truyền 1954–1955',
    time: 15,
  },
];
```

**Nguyên tắc bắt buộc khi soạn câu hỏi:**
Mỗi câu **phải có trường `explain` và `source`**. Sau khi trả lời, người chơi luôn được thấy đáp án đúng kèm nguồn — vì đây là game **ôn tập**, không phải game đố vui. Đây cũng là tiêu chí chấm điểm của môn học.

### 9.6. Giữ nhất quán thiết kế

Dùng lại nguyên các token và class có sẵn: `.card`, `.doc`, `.eyebrow`, `.frame`, `.stat`, biến `--red` / `--gold` / `--ink`.
Bảng xếp hạng nên trình bày như **danh sách hồ sơ**, dùng `IBM Plex Mono` và `font-variant-numeric: tabular-nums` để số thẳng cột.

---

## 10. Nguồn tư liệu

- **Giáo trình Lịch sử Đảng Cộng sản Việt Nam** — Ban Tuyên giáo Trung ương & Bộ Giáo dục và Đào tạo
- U.S. National Archives — truyền đơn ký hiệu `306-PPB-225`
- CIA FOIA Reading Room — *"CIA and the House of Ngo: Covert Action in South Vietnam 1954–63"*
- Naval History and Heritage Command — *Operation Passage to Freedom*
- Foreign Relations of the United States (FRUS), 1952–1954
- Bảo tàng Chứng tích Chiến tranh · Bảo tàng Lịch sử Quân sự Việt Nam
- TTXVN · LIFE · AP (Malcolm Browne)

---

*Sản phẩm học tập. Toàn bộ nhận định lịch sử bám sát Giáo trình Lịch sử Đảng Cộng sản Việt Nam.*
