import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import PosterExhibit from '@/components/PosterExhibit';
import { SECTIONS, TIMELINE } from '@/data/sections';

/** Tieu de chung cho moi muc lon */
function Head({ i }) {
  const s = SECTIONS[i];
  return (
    <Reveal className="sec-head">
      <div className="sec-no" style={{ '--c': s.color }}>{s.no}</div>
      <h2>{s.title}</h2>
      <div className="kicker">{s.kicker}</div>
    </Reveal>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <span id="top" />

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <header className="hero">
        <div className="hero-bg">
          <img src="/img/cau-hien-luong.jpg" alt="" aria-hidden="true" />
        </div>

        <div className="shell">
          <div className="hero-tag">
            <span>VNR202 · Lịch sử Đảng Cộng sản Việt Nam</span>
            <b>Chương 2 · Mục II.1</b>
            <span>1954 — 1965</span>
          </div>

          <h1>
            Vĩ tuyến<span className="l2">17</span>
            <span className="l3">Poster đã nói dối</span>
          </h1>

          <div className="hero-sub">
            <p className="q">
              Phân tích <strong>chính sách di cư của Mỹ và chính quyền Ngô Đình Diệm</strong> sau
              Hiệp định Genève — và sự lãnh đạo của Đảng đối với cách mạng hai miền Nam – Bắc.
            </p>
            <div className="hero-meta">
              <div><b>Hơn 800.000</b> người rời miền Bắc trong 300 ngày</div>
              <div><b>310.000</b> người do Hải quân Hoa Kỳ vận chuyển</div>
              <div><b>Một</b> cuộc tổng tuyển cử không bao giờ diễn ra</div>
            </div>
          </div>
        </div>

        <div className="scrollcue"><i /> Cuộn để bắt đầu</div>
      </header>

      {/* ═══ PHẦN I — BỐI CẢNH ═════════════════════════════ */}
      <section className="sec" id="boi-canh">
        <div className="shell">
          <Head i={0} />

          <div className="g2 wide-l">
            <Reveal>
              <p className="lede">
                Ngày 21-7-1954, Hiệp định Genève được ký kết. Nhưng đây <strong>không phải dấu chấm
                hết của chiến tranh</strong> — đây là điểm khởi đầu của một cuộc đối đầu mới.
              </p>
              <div className="doc">
                <q>
                  Đất nước bị chia làm hai miền, có chế độ chính trị, xã hội khác nhau: miền Bắc được
                  hoàn toàn giải phóng phát triển theo con đường xã hội chủ nghĩa, <strong>miền Nam do
                  chính quyền đối phương quản lý, trở thành thuộc địa kiểu mới của đế quốc Mỹ</strong>.
                </q>
                <cite>Giáo trình · Chương 2 · Mục II.1 (tr. 180–205)</cite>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card accent">
                <div className="k">Khái niệm then chốt</div>
                <h3>“Thuộc địa kiểu mới”</h3>
                <p style={{ marginBottom: 14 }}>
                  Thực dân <strong>cũ</strong> cai trị bằng bộ máy trực tiếp của chính quốc.
                </p>
                <p>
                  Thực dân <strong>kiểu mới</strong> thì <em>giấu mặt sau một chính quyền bản xứ</em>:
                  dùng người Việt trị người Việt, dùng viện trợ thay quân chiếm đóng, và —
                  điều quan trọng nhất với câu chuyện này — dùng <strong>tuyên truyền thay súng
                  đạn</strong> trong giai đoạn đầu.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="g3" delay={80} style={{ marginTop: 'clamp(40px,5vw,72px)' }}>
            <div className="card">
              <div className="k">Miền Bắc</div>
              <h3>Cách mạng xã hội chủ nghĩa</h3>
              <p>Xây dựng tiềm lực, bảo vệ căn cứ địa của cả nước, hậu thuẫn miền Nam.
                <strong style={{ color: 'var(--gold)' }}> Vai trò quyết định nhất.</strong></p>
            </div>
            <div className="card">
              <div className="k">Miền Nam</div>
              <h3>Cách mạng dân tộc dân chủ nhân dân</h3>
              <p>Giải phóng miền Nam khỏi ách thống trị của đế quốc Mỹ và tay sai.
                <strong style={{ color: 'var(--gold)' }}> Vai trò quyết định trực tiếp.</strong></p>
            </div>
            <div className="card gold">
              <div className="k gold">Mục tiêu chung</div>
              <h3>Thống nhất Tổ quốc</h3>
              <p>Giương cao đồng thời hai ngọn cờ: <strong>độc lập dân tộc và chủ nghĩa xã hội</strong>.</p>
            </div>
          </Reveal>
        </div>

        {/* Anh tran vien */}
        <Reveal className="fullbleed" style={{ marginTop: 'clamp(60px,8vh,110px)' }}>
          <img src="/img/hai-quan-my.jpg" alt="Tàu Hải quân Hoa Kỳ chở người di cư trong Operation Passage to Freedom" />
          <div className="cap">
            <b style={{ color: 'var(--paper)' }}>Operation Passage to Freedom, 1954–1955.</b> Hải quân
            Hoa Kỳ vận chuyển khoảng 310.000 người. Một chiến dịch huy động hải quân của siêu cường
            — không thể gọi là “tự phát”.
          </div>
        </Reveal>

        <div className="narrow" style={{ paddingTop: 'clamp(60px,8vh,110px)' }}>
          <Reveal className="pull" style={{ padding: 0 }}>
            <p>
              Đây là quyền tự do lựa chọn — <span className="r">hay một chiến dịch được tổ chức từ trước?</span>
            </p>
            <div className="src">Câu hỏi của cả bài</div>
          </Reveal>
        </div>
      </section>

      {/* ═══ PHẦN II — TANG CHỨNG ══════════════════════════ */}
      <section className="sec band" id="tang-chung">
        <div className="shell">
          <Head i={1} />

          <div className="g2 wide-l" style={{ marginBottom: 'clamp(50px,6vw,90px)' }}>
            <Reveal>
              <div className="doc">
                <q>
                  Pháp và tay sai đã dùng mọi âm mưu, thủ đoạn để chống phá… như <strong>kích động,
                  thúc ép đồng bào theo đạo Thiên chúa di cư vào Nam</strong>, phá hoại, di chuyển
                  máy móc nguyên vật liệu trái phép…
                </q>
                <cite>Giáo trình · Chương 2 · Mục II.1</cite>
              </div>
              <p>
                Hai động từ giáo trình dùng là <strong>“kích động”</strong> và <strong>“thúc ép”</strong>.
                Ở đoạn ngay sau, giáo trình gọi thẳng tên hành vi này là <em>“địch cưỡng ép di cư”</em>.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <figure className="frame" data-tag="TL-01">
                <img src="/img/giao-dan-len-tau.jpg" alt="Giáo dân miền Bắc mang theo ảnh Đức Mẹ và thánh giá xuống tàu di cư" />
                <figcaption>
                  <b>Giáo dân miền Bắc xuống tàu di cư, 1954–1955.</b> Phía sau là mạn một chiến hạm,
                  nòng pháo chĩa lên trời. Đức tin của người dân bị đặt lên boong tàu chiến của một đế quốc.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Bon thu doan */}
          <Reveal className="g4" style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <div className="card">
              <div className="k">Thủ đoạn 01</div>
              <h3>Đánh vào đức tin</h3>
              <p>Nhóm Đại tá <strong>Edward Lansdale</strong> tung khẩu hiệu <em>“Đức Mẹ đã vào Nam”</em>,
                <em> “Chúa đã bỏ miền Bắc”</em>. Không tranh luận chính trị — vì chính trị có thể phản bác.
                Nó đánh vào nơi lý trí khó can thiệp nhất.</p>
            </div>
            <div className="card">
              <div className="k">Thủ đoạn 02</div>
              <h3>Gieo rắc sợ hãi</h3>
              <p>Tin đồn có hệ thống: Việt Minh sẽ tàn sát người Công giáo; Mỹ sẽ ném bom nguyên tử
                xuống Hà Nội. <strong>Tạo ra một tương lai giả định đầy khủng khiếp</strong> để người dân
                chạy trốn khỏi điều chưa hề diễn ra.</p>
            </div>
            <div className="card">
              <div className="k">Thủ đoạn 03</div>
              <h3>Tuyên truyền thị giác</h3>
              <p>Poster, truyền đơn, áp phích in hàng loạt — phát tận làng xã.
                <strong> Xem phần bóc tách bên dưới.</strong></p>
            </div>
            <div className="card">
              <div className="k">Thủ đoạn 04</div>
              <h3>Bộ máy quy mô nhà nước</h3>
              <p>Tàu vận tải Hải quân Mỹ, máy bay, trại tiếp cư, ủy ban liên bộ về người tị nạn,
                ngân sách viện trợ Hoa Kỳ. <strong>Không thể là hoạt động tự phát.</strong></p>
            </div>
          </Reveal>

          <Reveal className="doc gold" style={{ marginBottom: 'clamp(50px,6vw,86px)' }}>
            <q>
              Không cần đến sử liệu Việt Nam. Chính hồ sơ giải mật của CIA đã thừa nhận:
              đó là <strong>một chiến dịch tuyên truyền có tổ chức</strong>.
            </q>
            <cite>CIA · “CIA and the House of Ngo: Covert Action in South Vietnam 1954–63” · tài liệu giải mật</cite>
          </Reveal>

          {/* TANG CHUNG TUONG TAC */}
          <Reveal>
            <div className="eyebrow gold">Bóc tách tang chứng · tương tác</div>
            <PosterExhibit />
          </Reveal>
        </div>
      </section>

      {/* ═══ PHẦN III — HỆ QUẢ ═════════════════════════════ */}
      <section className="sec" id="he-qua">
        <div className="shell">
          <Head i={2} />

          <div className="g3" style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <Reveal className="card">
              <div className="k">Mục đích 01</div>
              <h3>Phá hoại miền Bắc</h3>
              <p>Rút đi trí thức, thợ kỹ thuật, viên chức. Đồng thời <strong>“phá hoại, di chuyển máy
                móc nguyên vật liệu trái phép”</strong>. Để lại một miền Bắc suy yếu, rối loạn.</p>
            </Reveal>
            <Reveal className="card" delay={90}>
              <div className="k">Mục đích 02</div>
              <h3>Cấy ghép cơ sở xã hội</h3>
              <p>Chính quyền Diệm <strong>không có cơ sở quần chúng</strong>. Gần một triệu người di cư
                — phụ thuộc hoàn toàn vào chính quyền về đất, nhà, lương thực — lấp vào khoảng trống đó.</p>
            </Reveal>
            <Reveal className="card accent" delay={180}>
              <div className="k">Mục đích 03 — quan trọng nhất</div>
              <h3>Dọn đường xé bỏ Tổng tuyển cử 1956</h3>
              <p>Và đây chính là <strong>nút thắt của toàn bộ vấn đề</strong>.</p>
            </Reveal>
          </div>

          <div className="g2 wide-r" style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <Reveal>
              <div className="eyebrow">Nút thắt</div>
              <h2 style={{ fontSize: 'clamp(26px,3.4vw,50px)', maxWidth: '18ch' }}>
                Cuộc di cư được dựng lên để <span style={{ color: 'var(--gold)' }}>thay thế cho lá phiếu</span>
              </h2>
              <p>
                Hiệp định Genève dự kiến <strong>tổng tuyển cử tự do trong cả nước tháng 7-1956</strong>.
                Mỹ và Diệm biết rõ: nếu tổng tuyển cử diễn ra, họ sẽ thất bại. Vậy phải tạo ra một lập
                luận để từ chối — và chiến dịch di cư chính là lập luận đó.
              </p>
              <div className="doc">
                <q>
                  Mỹ và chính quyền Ngô Đình Diệm đã <strong>xé bỏ Hiệp định Geneve, cự tuyệt tổng
                  tuyển cử thống nhất đất nước</strong>.
                </q>
                <cite>Giáo trình · Chương 2 · Mục II.1</cite>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <figure className="frame" data-tag="TANG CHỨNG 03">
                <img src="/img/trung-cau-dan-y.jpg" alt="Bảng kết quả trưng cầu dân ý ngày 23-10-1955" />
                <figcaption>
                  <b>“Trưng cầu dân ý” 23-10-1955.</b> Truất phế Bảo Đại và suy tôn Ngô Đình Diệm:{' '}
                  <b style={{ color: 'var(--red)' }}>5.721.735</b> phiếu thuận / <b>63.017</b> phiếu
                  chống — tỷ lệ ~98,9%. Con số tự nó tố cáo tính chất của cuộc bỏ phiếu. Giáo trình gọi
                  đây là <b style={{ color: 'var(--gold)' }}>“cái gọi là trưng cầu dân ý”</b>.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* TIMELINE */}
          <Reveal style={{ marginBottom: 'clamp(50px,6vw,86px)' }}>
            <div className="eyebrow">Trục thời gian · 1954 — 1963</div>
            <h3 style={{ fontSize: 'clamp(20px,2.2vw,32px)', marginBottom: 34 }}>
              Đặt lên một đường thẳng, logic của âm mưu hiện ra rất rõ
            </h3>
            <div className="tl">
              {TIMELINE.map((t, i) => (
                <div className="tlrow" key={i} data-hi={!!t.hi}>
                  <div className="d">{t.d}</div>
                  <div className="e" dangerouslySetInnerHTML={{ __html: t.e }} />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Toi ac */}
          <div className="g2" style={{ marginBottom: 'clamp(50px,6vw,86px)' }}>
            <Reveal className="stat">
              <div className="n">108.835</div>
              <p style={{ maxWidth: '34ch', fontSize: 16, color: '#cfc9bb' }}>
                <strong>người bị bắt và giết chỉ trong 10 tháng</strong> (7-1955 → 5-1956) —{' '}
                <em>theo số liệu thống kê của chính địch.</em> Con số thực tế còn lớn hơn.
              </p>
              <div className="doc" style={{ marginTop: 26 }}>
                <q>Địch khủng bố những người yêu nước và cách mạng <strong>bằng cả súng đạn và máy chém</strong>.</q>
                <cite>Giáo trình · về Luật 10/59</cite>
              </div>
            </Reveal>

            <Reveal delay={120} style={{ display: 'grid', gap: 18 }}>
              <figure className="frame" data-tag="TL-04">
                <img src="/img/may-chem.jpg" alt="Máy chém của chế độ Ngô Đình Diệm" />
                <figcaption><b>Máy chém</b> chế độ Ngô Đình Diệm sử dụng theo Luật 10/59 (hiện vật bảo tàng).</figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal className="pull">
            <p>
              Cũng chính bộ máy đó, vài năm trước, đã in ra tấm poster hứa hẹn{' '}
              <span className="g">“một đời sống tươi đẹp”.</span>
            </p>
            <div className="src">Khoảng cách giữa tấm poster và sự thật</div>
          </Reveal>

          {/* 1963 */}
          <div className="g2 wide-r" style={{ marginTop: 'clamp(50px,6vw,86px)' }}>
            <Reveal>
              <div className="eyebrow">11 · 6 · 1963 — Sài Gòn</div>
              <h3 style={{ fontSize: 'clamp(21px,2.4vw,36px)', maxWidth: '20ch' }}>
                Lên nắm quyền nhờ tôn giáo. Sụp đổ vì đàn áp tôn giáo.
              </h3>
              <p>
                Chế độ Diệm dùng đức tin Công giáo làm đòn bẩy cho chiến dịch di cư. Chín năm sau,
                cũng chính chế độ ấy cấm treo cờ Phật giáo, đàn áp biểu tình ở Huế, tấn công chùa chiền.
              </p>
              <ul className="pts">
                <li><strong>Phơi bày bản chất chế độ.</strong> Một chính quyền tự xưng “bảo vệ Tự-Do
                  Dân-Chủ” lại đàn áp tôn giáo lớn nhất của dân tộc mình.</li>
                <li><strong>Chứng minh không có tính chính danh.</strong> Khi một vị hòa thượng phải
                  dùng thân mình làm ngọn đuốc, mọi lời tuyên truyền đều sụp đổ.</li>
                <li><strong>Sức mạnh đấu tranh chính trị đô thị</strong> — đúng phương châm của Đảng:{' '}
                  <em>vùng đô thị lấy đấu tranh chính trị là chủ yếu.</em></li>
              </ul>
            </Reveal>

            <Reveal delay={120} style={{ display: 'grid', gap: 18 }}>
              <figure className="frame" data-tag="TL-06">
                <img src="/img/thich-quang-duc.jpg" alt="Hòa thượng Thích Quảng Đức tự thiêu tại Sài Gòn ngày 11-6-1963" />
                <figcaption><b>Hòa thượng Thích Quảng Đức tự thiêu, Sài Gòn 11-6-1963.</b> Ảnh: Malcolm Browne / AP.</figcaption>
              </figure>
              <div className="g2" style={{ gap: 18 }}>
                <figure className="frame" data-tag="TL-07">
                  <img src="/img/phat-giao-hue.jpg" alt="Biểu tình Phật giáo tại Huế năm 1963" />
                  <figcaption>Phong trào đấu tranh của đồng bào Phật giáo, 1963.</figcaption>
                </figure>
                <figure className="frame" data-tag="TL-08">
                  <img src="/img/trai-tim-bo-tat.jpg" alt="Trái tim bất diệt của Bồ tát Thích Quảng Đức" />
                  <figcaption>Trái tim bất diệt của Bồ tát Thích Quảng Đức.</figcaption>
                </figure>
              </div>
            </Reveal>
          </div>

          {/* Cai ket cua con bai */}
          <div className="g2 wide-l" style={{ marginTop: 'clamp(56px,7vw,100px)' }}>
            <Reveal>
              <div className="eyebrow">1 · 11 · 1963</div>
              <h3 style={{ fontSize: 'clamp(21px,2.4vw,36px)' }}>Vì sao Mỹ loại bỏ chính tay sai của mình?</h3>
              <ul className="pts">
                <li><strong>Thất bại quân sự.</strong> “Quốc sách ấp chiến lược” phá sản: ta phá hoàn
                  toàn 2.895/6.161 ấp, làm chủ 12.000/17.000 thôn. Một công cụ hết hiệu quả thì phải thay.</li>
                <li><strong>Thất bại chính trị.</strong> Khủng hoảng Phật giáo 1963 phá hủy hình ảnh
                  “thế giới tự do”. Diệm trở thành gánh nặng cho Washington.</li>
                <li><strong>Không còn dễ sai khiến.</strong> Diệm – Nhu ngày càng đòi tự chủ. Với Mỹ,{' '}
                  <em>một tay sai đòi tự chủ thì không còn là tay sai.</em></li>
              </ul>
              <div className="doc gold" style={{ marginTop: 26 }}>
                <q><strong>Diệm bị loại không phải vì có tội với nhân dân Việt Nam — mà vì đã hết giá
                  trị sử dụng đối với ông chủ Mỹ.</strong></q>
                <cite>Nhận định của nhóm, từ các dữ kiện trên</cite>
              </div>
            </Reveal>

            <Reveal delay={120} style={{ display: 'grid', gap: 18 }}>
              <figure className="frame" data-tag="TL-09">
                <img src="/img/diem-eisenhower.jpg" alt="Tổng thống Eisenhower đón Ngô Đình Diệm tại Washington năm 1957" />
                <figcaption>
                  <b>Eisenhower và Ngoại trưởng Dulles đón Ngô Đình Diệm tại Washington, 5-1957</b> —
                  chuyến đi Diệm tuyên bố “Biên giới Hoa Kỳ kéo dài đến vĩ tuyến 17”.
                </figcaption>
              </figure>
              <figure className="frame" data-tag="TL-10">
                <img src="/img/diem-nhu-m113.jpg" alt="Thi thể Ngô Đình Diệm và Ngô Đình Nhu trong xe thiết giáp M113" />
                <figcaption>
                  <b>Thi thể Diệm và Nhu trong xe thiết giáp M113, 1-11-1963.</b> Kẻ đã đưa Diệm lên,
                  cũng chính là kẻ hạ Diệm xuống.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* 10 dao chinh */}
          <Reveal style={{ marginTop: 'clamp(56px,7vw,100px)' }}>
            <div className="eyebrow">Sau Ngô Đình Diệm là ai?</div>
            <div className="g2 wide-l">
              <div>
                <div className="doc">
                  <q>Từ tháng 11-1963 đến tháng 6-1965 đã diễn ra <strong>10 cuộc đảo chính quân
                    sự</strong> nhằm lật đổ lẫn nhau trong nội bộ chính quyền Sài Gòn.</q>
                  <cite>Giáo trình · Chương 2 · Mục II.1</cite>
                </div>
                <div className="tbl-wrap">
                  <table>
                    <tbody>
                      <tr><td>01·11·1963</td><td>Dương Văn Minh — sau đảo chính giết Diệm – Nhu</td></tr>
                      <tr><td>30·01·1964</td><td>Nguyễn Khánh — cuộc “chỉnh lý”</td></tr>
                      <tr><td>1964–1965</td><td>Đảo chính và phản đảo chính liên tiếp</td></tr>
                      <tr><td>06·1965</td><td>Nguyễn Văn Thiệu – Nguyễn Cao Kỳ</td></tr>
                      <tr><td>1967–1975</td><td>Nguyễn Văn Thiệu làm Tổng thống</td></tr>
                      <tr><td style={{ color: 'var(--gold)' }}>30·04·1975</td><td><strong>Đầu hàng vô điều kiện — chính quyền Sài Gòn sụp đổ</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{ display: 'grid', gap: 18, alignContent: 'center' }}>
                <div className="card">
                  <div className="k">Nhận xét 01</div>
                  <p>Không một chính quyền nào do <strong>nhân dân bầu ra</strong>. Tất cả lên bằng
                    súng của quân đội và cái gật đầu của Mỹ.</p>
                </div>
                <div className="card gold">
                  <div className="k gold">Nhận xét 02 — đối chiếu</div>
                  <p>Cùng thời gian đó miền Bắc có <strong>Đại hội III</strong>, có Quốc hội, có Hiến
                    pháp, có kế hoạch 5 năm. Một bên <strong>xây dựng</strong> — một bên{' '}
                    <strong>đảo chính lẫn nhau</strong>.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ PHẦN IV — SỰ LÃNH ĐẠO CỦA ĐẢNG ════════════════ */}
      <section className="sec band" id="lanh-dao">
        <div className="shell">
          <Head i={3} />

          <Reveal className="doc" style={{ marginBottom: 'clamp(40px,5vw,72px)' }}>
            <q>
              Đảng và Nhà nước đã ban hành kịp thời nhiều chính sách…: <strong>chính sách đối với tôn
              giáo</strong>; chính sách đối với công chức, trí thức trước đây làm việc cho địch; chính
              sách đối với ngụy quân. Ngoài ra còn <strong>huy động hàng vạn cán bộ, bộ đội… tuyên
              truyền, vận động quần chúng đấu tranh chống địch cưỡng ép di cư</strong>.
            </q>
            <cite>Giáo trình · Chương 2 · Mục II.1</cite>
          </Reveal>

          <Reveal className="g3" style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <div className="card">
              <div className="k">Phương pháp</div>
              <p>Địch dùng tin đồn, hù dọa, ép buộc. Đảng dùng <strong>tuyên truyền, vận động, giải
                thích</strong>. Khác biệt căn bản về bản chất giữa hai bên.</p>
            </div>
            <div className="card">
              <div className="k">Đánh trúng gốc rễ</div>
              <p>Địch khai thác nỗi sợ tôn giáo → Đảng ban hành <strong>chính sách tôn giáo</strong>.
                Địch khai thác nỗi sợ bị trả thù → Đảng ban hành <strong>chính sách khoan hồng</strong>.</p>
            </div>
            <div className="card gold">
              <div className="k gold">Kết quả</div>
              <p><strong>10-10-1954</strong> người lính Pháp cuối cùng rút khỏi Hà Nội.{' '}
                <strong>16-5-1955</strong> toàn bộ quân viễn chinh Pháp rút khỏi miền Bắc.</p>
            </div>
          </Reveal>

          {/* CCRD */}
          <Reveal style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <div className="eyebrow">Miền Bắc — hậu phương lớn</div>
            <div className="g2" style={{ alignItems: 'start' }}>
              <div>
                <div className="g2" style={{ gap: 30, marginBottom: 30 }}>
                  <div className="stat">
                    <div className="n" style={{ fontSize: 'clamp(30px,3.6vw,58px)' }}>9<span className="u"> triệu</span></div>
                    <p>người trong hơn 2 triệu hộ nông dân được chia ruộng</p>
                  </div>
                  <div className="stat">
                    <div className="n" style={{ fontSize: 'clamp(30px,3.6vw,58px)' }}>810.000<span className="u"> ha</span></div>
                    <p>ruộng đất được chia. Chế độ chiếm hữu ruộng đất phong kiến bị xóa bỏ hoàn toàn</p>
                  </div>
                </div>
                <p>
                  Đến 1957, nông nghiệp miền Bắc đạt mức năng suất và sản lượng của{' '}
                  <strong>năm 1939 — năm cao nhất thời Pháp thuộc</strong>. Nạn đói bị đẩy lùi.
                </p>
              </div>

              <div className="card accent">
                <div className="k">Nhưng giáo trình không né tránh sai lầm</div>
                <ul className="pts" style={{ gap: 15 }}>
                  <li><strong>Chủ quan, giáo điều</strong>, không xuất phát từ tình hình thực tiễn.</li>
                  <li><strong>Cường điệu hóa đấu tranh giai cấp</strong>, dẫn đến <strong>mở rộng quá
                    mức đối tượng đấu tranh</strong>.</li>
                  <li><strong>Phương pháp không phù hợp</strong> với đối tượng là địa chủ ở nông thôn
                    Việt Nam.</li>
                  <li>Trong chỉnh đốn tổ chức, <strong>xử lý oan nhiều cán bộ, đảng viên tốt</strong>.</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Sua sai */}
          <Reveal style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <div className="eyebrow gold">Hội nghị Trung ương 10 · khóa II · 9 · 1956</div>
            <h3 style={{ fontSize: 'clamp(21px,2.4vw,36px)', marginBottom: 28 }}>
              Bốn hành động cụ thể — không phải lời nói suông
            </h3>
            <div className="g4" style={{ marginBottom: 40 }}>
              <div className="card"><div className="k">01</div><p>Nghiêm khắc kiểm điểm</p></div>
              <div className="card"><div className="k">02</div><p><strong>Công khai tự phê bình trước nhân dân</strong> — không giấu trong nội bộ</p></div>
              <div className="card"><div className="k">03</div><p><strong>Kỷ luật cả Ủy viên Bộ Chính trị và Ủy viên Trung ương</strong></p></div>
              <div className="card"><div className="k">04</div><p>Sửa sai có kế hoạch: <strong>minh oan, phục hồi danh dự và quyền lợi</strong></p></div>
            </div>

            <div className="tbl-wrap">
              <table className="cmp">
                <thead>
                  <tr>
                    <th />
                    <th>Chính quyền Ngô Đình Diệm</th>
                    <th>Đảng Cộng sản Việt Nam</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Khi làm sai</td><td>In poster tô hồng, che giấu, leo thang</td><td>Công khai nhận lỗi trước nhân dân</td></tr>
                  <tr><td>Với người thi hành sai</td><td>Không ai chịu trách nhiệm</td><td>Kỷ luật tới Ủy viên Bộ Chính trị</td></tr>
                  <tr><td>Với nạn nhân</td><td>Tiếp tục “tố cộng, diệt cộng”, máy chém</td><td>Minh oan, sửa sai, phục hồi</td></tr>
                  <tr><td>Kết quả</td><td>Bị chính Mỹ lật đổ và giết (1-11-1963)</td><td>Giữ được lòng tin của nhân dân</td></tr>
                </tbody>
              </table>
            </div>

            <p className="lede" style={{ color: 'var(--gold)', marginTop: 34 }}>
              <strong style={{ color: 'var(--gold)' }}>Chỉ có ai thực sự vì dân mới dám nhận lỗi trước dân.</strong>
            </p>
          </Reveal>

          {/* Dong khoi */}
          <div className="g2 wide-l" style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <Reveal>
              <div className="eyebrow">1 · 1959 → 17 · 1 · 1960</div>
              <h3 style={{ fontSize: 'clamp(21px,2.4vw,36px)' }}>Từ giữ gìn lực lượng sang thế tiến công</h3>
              <div className="doc">
                <q>Chính sách khủng bố và chiến tranh đó đã làm cho mâu thuẫn… thêm gay gắt,{' '}
                  <strong>làm cho tình thế cách mạng chín muồi</strong>, dẫn đến bùng nổ các cuộc khởi
                  nghĩa của quần chúng.</q>
                <cite>Giáo trình · Chương 2 · Mục II.1</cite>
              </div>
              <p>
                <strong>Nghị quyết 15 (1-1959):</strong> sử dụng <strong>bạo lực cách mạng</strong> với
                hai lực lượng chính trị và vũ trang, kết hợp đấu tranh chính trị với đấu tranh quân sự.
              </p>
              <p className="lede" style={{ color: 'var(--gold)', marginTop: 24 }}>
                <strong style={{ color: 'var(--gold)' }}>
                  Nhân dân miền Nam đã trả lời chiến dịch tuyên truyền của địch — không phải bằng tranh
                  luận, mà bằng đồng khởi.
                </strong>
              </p>
            </Reveal>

            <Reveal delay={120} style={{ display: 'grid', gap: 18 }}>
              <figure className="frame" data-tag="TL-13">
                <img src="/img/dong-khoi-ben-tre.jpg" alt="Phong trào Đồng khởi tại Bến Tre năm 1960" />
                <figcaption><b>Phong trào Đồng khởi, Bến Tre 17-1-1960</b>, do đồng chí Nguyễn Thị Định lãnh đạo tại Mỏ Cày.</figcaption>
              </figure>
              <figure className="frame" data-tag="TL-14">
                <img src="/img/mat-tran-dtgp.jpg" alt="Mặt trận Dân tộc giải phóng miền Nam Việt Nam" />
                <figcaption><b>Mặt trận Dân tộc giải phóng miền Nam Việt Nam</b>, thành lập 20-12-1960. Chủ tịch: Luật sư Nguyễn Hữu Thọ.</figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Pham Ngoc Thao */}
          <div className="g2 wide-r" style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <Reveal>
              <div className="eyebrow">Mặt trận thầm lặng · trong lòng địch</div>
              <h3 style={{ fontSize: 'clamp(21px,2.4vw,36px)' }}>
                Đại tá Phạm Ngọc Thảo
                <span className="mono dim" style={{ display: 'block', fontSize: 12, letterSpacing: '.2em', marginTop: 10 }}>
                  1922 — 1965
                </span>
              </h3>
              <p>
                Người Công giáo, mang <strong>quốc tịch Pháp</strong>, xuất thân đại điền chủ — đúng ba
                tiêu chuẩn mà chế độ Diệm tin tưởng nhất. Ông được <strong>anh em Ngô Đình Diệm – Ngô
                Đình Nhu hết sức tin dùng</strong>, thăng tới <strong>Đại tá quân đội Sài Gòn</strong> và{' '}
                <strong>Tỉnh trưởng Kiến Hòa — tức Bến Tre</strong>.
              </p>
              <p className="lede" style={{ color: 'var(--gold)' }}>
                <strong style={{ color: 'var(--gold)' }}>
                  Nhưng ông là chiến sĩ tình báo của cách mạng, hoạt động đơn tuyến — không một ai khác
                  biết thân phận thật của ông.
                </strong>
              </p>
              <p>
                Từ vị trí ấy ông không chỉ lấy tin, mà trực tiếp làm rối loạn bộ máy địch: tham gia đảo
                chính lật Diệm <strong>1-11-1963</strong>, rồi <strong>chủ mưu cuộc đảo chính 19-2-1965
                — suýt nữa thành công</strong>.
              </p>
              <div className="doc gold">
                <q>
                  Ông hy sinh <strong>17-7-1965</strong> khi mới 43 tuổi. Vì hoạt động đơn tuyến, suốt
                  nhiều năm <strong>không ai chứng minh được ông là người của cách mạng</strong>. Mãi{' '}
                  <strong>30-8-1995</strong> ông mới được truy tặng danh hiệu{' '}
                  <strong>Anh hùng Lực lượng vũ trang nhân dân</strong>.
                  <strong> Vậy nên “10 cuộc đảo chính” không hoàn toàn là chuyện nội bộ của địch.</strong>
                  <strong> Trong đó có bàn tay của cách mạng.</strong>
                </q>
                <cite>Ba mươi năm nằm dưới tên gọi của kẻ thù</cite>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <figure className="frame" data-tag="TL-15">
                <img src="/img/pham-ngoc-thao.jpg" alt="Đại tá Phạm Ngọc Thảo" />
                <figcaption><b>Đại tá Phạm Ngọc Thảo (1922–1965).</b> Ảnh: LIFE.</figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal className="doc" style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <q>
              …<strong>vai trò đóng góp của lực lượng hoạt động bí mật trong lòng địch</strong>,
              “lực lượng thứ ba” và các chiến sĩ đấu tranh kiên cường trong các nhà tù Mỹ – ngụy…
            </q>
            <cite>Giáo trình · Chương 2 · Mục II.3 — Nguyên nhân thắng lợi</cite>
          </Reveal>

          {/* Dai hoi III + CTDB */}
          <div className="g2" style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <Reveal>
              <div className="eyebrow gold">Đại hội III · Hà Nội · 9 · 1960</div>
              <div className="doc gold">
                <q>Thành công cơ bản, to lớn nhất của Đại hội lần thứ III là đã <strong>hoàn chỉnh
                  đường lối chiến lược chung của cách mạng Việt Nam</strong>… Đó chính là{' '}
                  <strong>đường lối giương cao ngọn cờ độc lập dân tộc và chủ nghĩa xã hội</strong>.</q>
                <cite>Giáo trình · Chương 2 · Mục II.1</cite>
              </div>
              <figure className="frame" data-tag="TL-12" style={{ marginTop: 22 }}>
                <img src="/img/dai-hoi-iii.jpg" alt="Đại hội đại biểu toàn quốc lần thứ III của Đảng, tháng 9-1960" />
                <figcaption><b>Đại hội đại biểu toàn quốc lần thứ III của Đảng, Hà Nội 9-1960.</b></figcaption>
              </figure>
            </Reveal>

            <Reveal delay={120}>
              <div className="eyebrow">1961 – 1965</div>
              <h3 style={{ fontSize: 'clamp(19px,2.1vw,30px)' }}>Phá sản “Chiến tranh đặc biệt”</h3>
              <div className="g3" style={{ gap: 12, marginBottom: 24 }}>
                <div className="card" style={{ padding: 16 }}><div className="k">2 chân</div><p style={{ fontSize: 13.5 }}>Quân sự · Chính trị</p></div>
                <div className="card" style={{ padding: 16 }}><div className="k">3 mũi</div><p style={{ fontSize: 13.5 }}>Quân sự · Chính trị · Binh vận</p></div>
                <div className="card" style={{ padding: 16 }}><div className="k">3 vùng</div><p style={{ fontSize: 13.5 }}>Đô thị · Đồng bằng · Rừng núi</p></div>
              </div>
              <div className="tbl-wrap">
                <table>
                  <tbody>
                    <tr><td style={{ color: 'var(--gold)' }}>02·01·1963</td><td><strong>Chiến thắng Ấp Bắc</strong> — phá sản “trực thăng vận”, “thiết xa vận”</td></tr>
                    <tr><td>1961–1963</td><td>Phá hoàn toàn <strong>2.895/6.161</strong> ấp chiến lược · làm chủ <strong>12.000/17.000</strong> thôn · giải phóng <strong>5/14</strong> triệu dân</td></tr>
                    <tr><td>1964–1965</td><td>Bình Giã · Ba Gia · Đồng Xoài</td></tr>
                  </tbody>
                </table>
              </div>
              <figure className="frame" data-tag="TL-17" style={{ marginTop: 22 }}>
                <img src="/img/ap-bac.jpg" alt="Chiến thắng Ấp Bắc ngày 2-1-1963" />
                <figcaption><b>Chiến thắng Ấp Bắc (Mỹ Tho), 2-1-1963.</b></figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ KẾT LUẬN ══════════════════════════════════════ */}
      <section className="sec band-2">
        <div className="shell">
          <Reveal className="sec-head">
            <div className="sec-no" style={{ '--c': 'var(--gold)' }}>Kết luận</div>
            <h2>Ba tầng ý nghĩa</h2>
          </Reveal>

          <div className="g3" style={{ marginBottom: 'clamp(56px,7vw,100px)' }}>
            <Reveal className="card">
              <div className="k">Tầng 01 — Bản chất sự kiện</div>
              <p>Cuộc di cư 1954–1955 <strong>không phải một lựa chọn tự phát</strong>. Đó là chiến
                dịch chiến tranh tâm lý có tổ chức: CIA chỉ đạo, hải quân Mỹ chuyên chở, chính quyền
                tay sai tiếp nhận — nhằm phá hoại miền Bắc, cấy ghép cơ sở xã hội, và{' '}
                <strong>dọn đường xé bỏ Tổng tuyển cử 1956</strong>.</p>
            </Reveal>
            <Reveal className="card" delay={90}>
              <div className="k">Tầng 02 — Vị trí lịch sử</div>
              <p><strong>Thủ đoạn mở màn của chủ nghĩa thực dân kiểu mới.</strong> Từ tấm poster hứa
                hẹn “tự do” 1954, đến máy chém Luật 10/59 năm 1959, đến ngọn lửa Thích Quảng Đức 1963,
                và cái chết của chính Ngô Đình Diệm — <strong>tất cả nằm trên một đường thẳng
                logic</strong>.</p>
            </Reveal>
            <Reveal className="card accent" delay={180}>
              <div className="k">Tầng 03 — Sự lãnh đạo của Đảng</div>
              <p>Đảng nhận rõ kẻ thù <strong>ngay từ 7-1954</strong>; đối sách bằng vận động quần chúng
                và đại đoàn kết dân tộc; giữ miền Bắc làm hậu phương lớn; và bằng{' '}
                <strong>Nghị quyết 15 → Đồng khởi → Đại hội III</strong> đã làm phá sản hoàn toàn
                “Chiến tranh đặc biệt”.</p>
            </Reveal>
          </div>

          <Reveal className="narrow" style={{ padding: 0 }}>
            <p className="lede" style={{ maxWidth: '62ch' }}>
              Chúng em phê phán chính sách di cư của Mỹ và Ngô Đình Diệm — nhưng{' '}
              <strong>không phê phán đồng bào đã di cư</strong>. Trong dòng người ấy có những người
              thực sự lo âu trước một tương lai họ không rõ.
            </p>
          </Reveal>

          <Reveal className="pull">
            <p>Nhưng nỗi lo âu ấy <span className="r">không tự sinh ra.</span></p>
            <div className="src">Nó đã bị gieo rắc, khuếch đại và khai thác một cách có tính toán</div>
          </Reveal>

          <Reveal className="narrow" style={{ padding: 0 }}>
            <div className="doc gold">
              <q>
                Một dân tộc chỉ giữ được vận mệnh của mình khi có <strong>một đường lối độc lập, tự
                chủ</strong> và <strong>một Đảng đủ bản lĩnh để lãnh đạo</strong>.
                <br /><br />
                Bài học ấy hôm nay vẫn nguyên giá trị: <strong>thông tin có thể trở thành vũ khí — và
                bảo vệ nền tảng tư tưởng của Đảng cũng chính là bảo vệ chủ quyền của Tổ quốc.</strong>
              </q>
              <cite>Kết luận của nhóm</cite>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════ */}
      <footer className="foot">
        <div className="shell">
          <div className="foot-grid">
            <div>
              <h4>Về bài trình bày</h4>
              <p>
                Sản phẩm học tập môn <strong>VNR202 — Lịch sử Đảng Cộng sản Việt Nam</strong>.
                Nội dung bám sát Giáo trình Lịch sử Đảng Cộng sản Việt Nam (Ban Tuyên giáo Trung ương
                – Bộ Giáo dục và Đào tạo), <strong>Chương 2, mục II.1, trang 180–205</strong>.
              </p>
            </div>
            <div>
              <h4>Nguồn tư liệu</h4>
              <ul>
                <li>Giáo trình Lịch sử Đảng CSVN</li>
                <li>U.S. National Archives</li>
                <li>CIA FOIA Reading Room</li>
                <li>Naval History and Heritage Command</li>
                <li>Bảo tàng Chứng tích Chiến tranh</li>
                <li>TTXVN · LIFE · AP</li>
              </ul>
            </div>
            <div>
              <h4>Xem thêm</h4>
              <ul>
                <li><a href="/trinh-chieu/">→ Chế độ trình chiếu (28 slide)</a></li>
                <li><a href="#tang-chung">→ Bóc tách tang chứng</a></li>
                <li><a href="#top">→ Về đầu trang</a></li>
              </ul>
            </div>
          </div>
          <div className="base">
            <span>Vĩ tuyến 17 · 1954 — 1965</span>
            <span>Nhóm 6 · Lớp 3W_VNR202_06</span>
          </div>
        </div>
      </footer>
    </>
  );
}
