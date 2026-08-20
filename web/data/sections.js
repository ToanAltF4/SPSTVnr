// Bon muc lon cua trang, tuong ung bon thanh vien trinh bay.
// Dung cho thanh dieu huong (Nav.js) va scroll spy.

export const SECTIONS = [
  {
    id: 'boi-canh',
    nav: 'Bối cảnh',
    no: 'Phần I',
    title: 'Một đất nước bị cắt làm đôi',
    kicker: 'Thành viên A · Hiệp định Genève 21-7-1954',
    color: 'var(--m-a)',
  },
  {
    id: 'tang-chung',
    nav: 'Tang chứng',
    no: 'Phần II',
    title: 'Bóc trần bốn thủ đoạn',
    kicker: 'Thành viên B · Chiến tranh tâm lý 1954–1955',
    color: 'var(--m-b)',
  },
  {
    id: 'he-qua',
    nav: 'Hệ quả',
    no: 'Phần III',
    title: 'Một đường thẳng đến máy chém',
    kicker: 'Thành viên C · Từ lá phiếu bị đánh cắp đến 1963',
    color: 'var(--m-c)',
  },
  {
    id: 'lanh-dao',
    nav: 'Sự lãnh đạo của Đảng',
    no: 'Phần IV',
    title: 'Đảng đã lãnh đạo như thế nào',
    kicker: 'Thành viên D · Nghị quyết 15 · Đồng khởi · Đại hội III',
    color: 'var(--m-d)',
  },
];

export const TIMELINE = [
  { d: '07 · 07 · 1954', e: 'Mỹ đưa Ngô Đình Diệm về Sài Gòn làm Thủ tướng — <strong>trước cả khi Hiệp định Genève được ký</strong>.', hi: true },
  { d: '21 · 07 · 1954', e: 'Hiệp định Genève được ký kết. Vĩ tuyến 17 là <strong>giới tuyến quân sự tạm thời</strong>, dự kiến tổng tuyển cử thống nhất năm 1956.' },
  { d: '1954 – 1955', e: 'Chiến dịch di cư: hơn <strong>800.000 – 900.000 người</strong> rời miền Bắc vào Nam trong 300 ngày.', hi: true },
  { d: '17 · 07 · 1955', e: 'Chính quyền Ngô Đình Diệm tuyên bố <strong>không hiệp thương tổng tuyển cử</strong>.', hi: true },
  { d: '23 · 10 · 1955', e: '“Trưng cầu dân ý” phế truất Bảo Đại, đưa Ngô Đình Diệm lên làm Tổng thống Việt Nam Cộng hòa.' },
  { d: '1955 – 1956', e: 'Quốc sách <strong>“tố cộng, diệt cộng”</strong>; lập “khu trù mật”, “khu dinh điền”. Theo số liệu của chính địch: <strong>108.835 người</strong> bị bắt và giết chỉ trong 10 tháng.', hi: true },
  { d: '13 · 05 · 1957', e: 'Ngô Đình Diệm thăm Mỹ, tuyên bố: <strong>“Biên giới Hoa Kỳ kéo dài đến vĩ tuyến 17”</strong>.' },
  { d: '03 · 1959', e: 'Tuyên bố “đặt miền Nam trong tình trạng chiến tranh”.' },
  { d: '05 · 1959', e: '<strong>Luật 10/59</strong> — lê máy chém khắp miền Nam, khủng bố người yêu nước “bằng cả súng đạn và máy chém”.', hi: true },
  { d: '01 · 1959', e: '<strong>Nghị quyết 15</strong> của Trung ương Đảng: sử dụng bạo lực cách mạng với hai lực lượng chính trị và vũ trang.', hi: true },
  { d: '17 · 01 · 1960', e: '<strong>Đồng khởi</strong> bùng nổ tại Mỏ Cày, Bến Tre. Cuối 1960: 1.383/2.627 xã nhân dân lập chính quyền tự quản.', hi: true },
  { d: '20 · 12 · 1960', e: '<strong>Mặt trận Dân tộc giải phóng miền Nam Việt Nam</strong> ra đời tại Tân Lập, Tây Ninh.' },
  { d: '09 · 1960', e: '<strong>Đại hội đại biểu toàn quốc lần thứ III</strong> của Đảng hoàn chỉnh đường lối chiến lược chung.', hi: true },
  { d: '02 · 01 · 1963', e: 'Chiến thắng <strong>Ấp Bắc</strong> — phá sản chiến thuật “trực thăng vận”, “thiết xa vận”.' },
  { d: '11 · 06 · 1963', e: 'Hòa thượng <strong>Thích Quảng Đức tự thiêu</strong> phản đối chính sách đàn áp Phật giáo.', hi: true },
  { d: '01 · 11 · 1963', e: 'Ngô Đình Diệm và Ngô Đình Nhu <strong>bị chính Mỹ chỉ đạo lật đổ và giết chết</strong>. Tiếp đó là 10 cuộc đảo chính trong chưa đầy 20 tháng.', hi: true },
];
