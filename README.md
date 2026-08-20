# VĨ TUYẾN 17

**Sản phẩm sáng tạo — môn VNR202 · Lịch sử Đảng Cộng sản Việt Nam**

Landing page phân tích **chính sách di cư của Mỹ và chính quyền Ngô Đình Diệm sau Hiệp định Genève**, thuộc *Giáo trình Lịch sử Đảng Cộng sản Việt Nam* (Ban Tuyên giáo Trung ương – Bộ Giáo dục và Đào tạo), **Chương 2, mục II.1, trang 180–205** — *Sự lãnh đạo của Đảng đối với cách mạng hai miền Nam – Bắc (1954–1965)*.

---

## 1. Luận điểm chủ đạo

> Cuộc di cư 1954–1955 về bản chất là một **chiến dịch chiến tranh tâm lý có tổ chức** của đế quốc Mỹ và tay sai Ngô Đình Diệm, núp dưới vỏ bọc pháp lý của Điều 14(d) Hiệp định Genève và vỏ bọc nhân đạo của "Chiến dịch Con đường tới Tự do", nhằm ba mục tiêu: **phá hoại miền Bắc – cấy ghép cơ sở xã hội cho chính quyền tay sai – dọn đường xé bỏ Tổng tuyển cử 1956.**

Ba tầng phân tích xuyên suốt: **HIỆN TƯỢNG → THỦ ĐOẠN → BẢN CHẤT**

---

## 2. Chạy dự án

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # xuất static ra web/out/
```

**Yêu cầu:** Node.js ≥ 18 (khuyến nghị 20+).

---

## 3. Deploy lên Vercel

Dự án dùng `output: 'export'` → xuất HTML tĩnh hoàn toàn, không cần server.

**Cách 1 — qua giao diện Vercel (dễ nhất)**

1. Push repo lên GitHub.
2. Vào [vercel.com/new](https://vercel.com/new) → **Import** repo này.
3. Ở phần cấu hình, đặt:
   - **Root Directory:** `web`
   - Framework Preset: `Next.js` (Vercel tự nhận)
4. Bấm **Deploy**.

**Cách 2 — qua CLI**

```bash
npm i -g vercel
cd web
vercel        # deploy preview
vercel --prod # deploy production
```

> ⚠️ **Quan trọng:** phải đặt **Root Directory = `web`**, vì `package.json` nằm trong thư mục `web/`, không nằm ở gốc repo.

Vì là static export, có thể deploy y hệt lên **Netlify**, **Cloudflare Pages** hoặc **GitHub Pages** (với GitHub Pages cần chỉnh `basePath` trong `next.config.mjs`).

---

## 4. Cấu trúc thư mục

```
.
├── web/                          ← DỰ ÁN NEXT.JS (deploy thư mục này)
│   ├── app/
│   │   ├── layout.js             metadata, nhúng font Google
│   │   ├── globals.css           token thiết kế + style landing page
│   │   ├── page.js               ★ LANDING PAGE (trang chính)
│   │   ├── deck.css              style riêng cho chế độ trình chiếu
│   │   └── trinh-chieu/page.js   route /trinh-chieu
│   ├── components/
│   │   ├── Nav.js                thanh điều hướng + scroll spy + tiến độ
│   │   ├── Reveal.js             hiệu ứng hiện dần khi cuộn
│   │   ├── PosterExhibit.js      ★ POSTER TƯƠNG TÁC
│   │   └── Deck.js               chế độ trình chiếu 28 slide
│   ├── data/
│   │   ├── sections.js           4 mục lớn + trục thời gian
│   │   ├── posters.js            ★ dữ liệu điểm bấm trên poster
│   │   └── slides.js             nội dung 28 slide trình chiếu
│   └── public/img/               21 ảnh tư liệu
│
├── kich ban/
│   └── KICH-BAN-THUYET-TRINH.md  ★ kịch bản nói đầy đủ + phụ lục
│
├── slide/index.html              bản HTML offline (chạy không cần cài gì)
├── image/                        ảnh gốc (tên tiếng Việt)
└── README.md
```

---

## 5. Hai chế độ sử dụng

### `/` — Landing page
Trang cuộn kể chuyện. Có hero, thanh điều hướng dính theo 4 mục, hiệu ứng hiện dần, trục thời gian, và **poster tương tác**.

### `/trinh-chieu` — Chế độ trình chiếu
Dùng khi đứng thuyết trình trên lớp. 28 slide toàn màn hình.

| Phím | Chức năng |
|---|---|
| `←` `→` `Space` | Chuyển slide (hoặc click trái/phải, vuốt trên tablet) |
| `O` | Mục lục 28 slide, nhóm theo thành viên |
| `S` | Ghi chú người nói |
| `T` | Hẹn giờ tập nói (vàng ở phút 17, đỏ khi quá 20 phút) |
| `F` | Toàn màn hình |
| `Home` / `End` | Slide đầu / cuối |

---

## 6. Hệ thống thiết kế

**Ý tưởng:** *Hồ sơ giải mật* — cả bài là hành động **bóc trần** một chiến dịch tuyên truyền, nên giao diện dựng theo hình ảnh bàn soi tài liệu trong phòng lưu trữ tối. Mỗi hình ảnh là một **tang chứng** có nhãn và nguồn.

**Motif cấu trúc:** thanh đỏ chạy ngang đỉnh trang chính là **vĩ tuyến 17** — lấy từ chính tấm poster địch (poster cũng bị chia đôi bởi dòng "VĨ-TUYẾN 17"), đồng thời là thanh tiến độ đọc.

| | Giá trị |
|---|---|
| Mực nền | `#0D0B0A` — đen ám nâu, gợi nhũ phim cũ |
| Giấy | `#DED8C8` — giấy tài liệu ố, ngả ô-liu |
| Đỏ | `#C8102E` — đỏ cờ |
| Vàng | `#E3B23C` — vàng sao, dùng rất tiết chế |
| Chữ tiêu đề | `Archivo Black` — gợi chữ poster tuyên truyền thập niên 1950 |
| Chữ nội dung | `Lora` — serif đọc dài, đủ dấu tiếng Việt |
| Chữ kỹ thuật | `IBM Plex Mono` — nhãn tang chứng, số liệu, trích nguồn |

Trang **cam kết một thế sáng tối duy nhất** (mặt trình chiếu), mọi màu đều được tô tường minh qua CSS variable.

---

## 7. Sửa nội dung

| Muốn sửa gì | Sửa file nào |
|---|---|
| Nội dung landing page | `web/app/page.js` |
| Tên/màu 4 mục, trục thời gian | `web/data/sections.js` |
| Điểm bấm trên poster | `web/data/posters.js` |
| Nội dung 28 slide trình chiếu | `web/data/slides.js` |
| Màu sắc, kiểu chữ | `web/app/globals.css` (khối `:root`) |

**Thêm một điểm bấm mới trên poster** — mở `web/data/posters.js`, thêm phần tử vào mảng `spots`:

```js
{
  x: '50%',              // toạ độ theo % tính từ góc trái trên của ảnh
  y: '40%',
  title: 'Tiêu đề điểm',
  quote: 'Trích nguyên văn chữ trên poster (không bắt buộc)',
  body:  'Phân tích. <strong>Cho phép HTML.</strong>',
  verdict: 'Câu chốt một dòng, hiện màu vàng.',
}
```

---

## 8. Nguyên tắc dẫn nguồn

Đây là môn Lịch sử Đảng — **mọi luận cứ đều phải truy được nguồn**. Nội dung chia làm 3 nhóm:

| Nhóm | Nguồn | Cách dẫn |
|---|---|---|
| **1** | Trích nguyên văn giáo trình | `— Giáo trình · Chương 2 · Mục II.1 (tr. 180–205)` |
| **2** | Sử liệu nước ngoài đã giải mật | Nêu rõ tên tài liệu: CIA FOIA, FRUS, Naval History and Heritage Command |
| **3** | Phân tích của nhóm | Ghi rõ `Nhận định của nhóm` |

Mọi ảnh trên trang đều có `figcaption` ghi **nội dung – thời gian – nguồn**.

> ⚠️ Ảnh `diem-nhu-chan-dung.jpg` là ảnh đồ họa đã qua chỉnh sửa (thêm dấu gạch chéo), **không phải tư liệu gốc** — chỉ dùng như hình ảnh minh họa kết cục, không dùng làm bằng chứng.

---

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
