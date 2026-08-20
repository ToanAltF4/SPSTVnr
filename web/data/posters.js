// ─────────────────────────────────────────────────────────────
//  TANG CHUNG TUONG TAC — du lieu cho <PosterExhibit />
//
//  Toa do x / y la % tinh tu goc trai tren cua anh.
//  Muon them mot diem bam moi: them mot phan tu vao mang `spots`.
// ─────────────────────────────────────────────────────────────

export const POSTERS = [
  {
    id: 'p1',
    tab: 'Tang chứng 01 — “Hãy vào Nam”',
    tag: 'TANG CHỨNG 01',
    src: '/img/poster-vao-nam.jpg',
    alt: 'Truyền đơn “Hãy vào Nam để tránh Cộng-Sản”, 1954–1955',
    caption:
      '<b>“Hãy vào Nam để tránh Cộng-Sản”</b> · truyền đơn 1954–1955.<br>Nguồn: U.S. National Archives, ký hiệu <b>306-PPB-225</b>.',
    spots: [
      {
        x: '50%',
        y: '17%',
        title: 'Nửa trên: miền Bắc được vẽ như một cõi chết',
        body:
          'Vẽ bằng <strong>màu xám tro</strong>. Mảnh đất <strong>treo lơ lửng, đứt gãy, không có nền</strong> — gợi cảm giác sụp đổ. Trên đó là những <strong>bóng người đen kịt, không mặt</strong>, đang tháo chạy tán loạn.',
        verdict: 'Tước bỏ khuôn mặt con người để biến đồng bào thành cái bóng đáng sợ.',
      },
      {
        x: '50%',
        y: '52%',
        title: 'Đường kẻ “VĨ-TUYẾN 17”',
        quote: 'VĨ-TUYẾN 17',
        body:
          'Hiệp định Genève quy định đây chỉ là <strong>giới tuyến quân sự tạm thời</strong>. Nhưng tấm poster vẽ nó thành một <strong>ranh giới vĩnh viễn giữa sống và chết</strong> — một biên giới quốc gia trên thực tế.',
        verdict: 'Hợp thức hóa việc chia cắt lâu dài, đi ngược tinh thần Hiệp định.',
      },
      {
        x: '50%',
        y: '80%',
        title: 'Nửa dưới: miền Nam như một lời hứa',
        body:
          '<strong>Màu xanh lá tươi</strong>, đồng ruộng mở rộng. Một <strong>người nông dân đứng thẳng, dang tay</strong>. <strong>Con trâu đang cày</strong> — biểu tượng của mùa màng và no ấm.',
        verdict: 'Đối lập nhị nguyên tuyệt đối: không chừa một sắc thái trung gian nào để người xem suy nghĩ.',
      },
      {
        x: '22%',
        y: '92%',
        title: '“Đồng-bào Nam-Việt đang tay chờ đón đồng-bào Bắc-Việt”',
        quote: 'ĐỒNG-BÀO NAM-VIỆT ĐANG TAY CHỜ ĐÓN ĐỒNG-BÀO BẮC-VIỆT',
        body:
          'Poster gọi hai miền là <strong>“đồng bào”</strong> — tức là địch <strong>thừa nhận đây là một dân tộc</strong>. Nhưng chính tấm poster ấy lại đang được dùng để <strong>chia cắt dân tộc đó</strong>. Hình ảnh “dang tay chờ đón” biến một chiến dịch do CIA tổ chức, do hải quân Mỹ chuyên chở, thành ra một cuộc đoàn tụ ruột thịt.',
        verdict: 'Ngụy tạo tính tự nguyện — che giấu bàn tay tổ chức phía sau.',
      },
    ],
  },

  {
    id: 'p2',
    tab: 'Tang chứng 02 — “Chọn Tự-Do”',
    tag: 'TANG CHỨNG 02',
    src: '/img/poster-chon-tu-do.jpg',
    alt: 'Áp phích “Di-cư vào Nam là chọn Tự-Do” gồm 15 khung ảnh',
    caption:
      '<b>“Di-cư vào Nam là chọn Tự-Do / Để kiến-thiết một đời sống tươi-đẹp”</b> · 15 khung ảnh · ấn phẩm tuyên truyền của chính quyền Quốc gia Việt Nam, 1954–1955.',
    spots: [
      {
        x: '50%',
        y: '6%',
        title: 'Tinh vi hơn: nó dùng ảnh chụp thật',
        body:
          'Khác tấm thứ nhất vốn là tranh vẽ, tấm này dùng <strong>ảnh tư liệu thật</strong> để tạo cảm giác khách quan. Nhưng 15 khung ảnh được sắp xếp thành một <strong>kịch bản hoàn chỉnh</strong>: tầng trên là “hành trình ra đi”, tầng dưới là “phần thưởng”.',
        verdict: 'Sự thật của từng bức ảnh không bảo đảm sự thật của cách chúng được ghép lại.',
      },
      {
        x: '50%',
        y: '38%',
        title: 'Ảnh 5 — Đánh tráo khái niệm',
        quote:
          '“Sức mạnh dân tộc, một sức mạnh mà không một quỷ-kế nào phá nổi, lúc nào cũng sẵn sàng tin theo và ủng-hộ chính-quyền Quốc-Gia.”',
        body:
          'Một cuộc di cư <strong>do ngoại bang tổ chức</strong> lại được gọi là <strong>“sức mạnh dân tộc”</strong>. Và mục đích thật lộ ra ngay ở vế sau: <strong>“ủng hộ chính quyền Quốc gia”</strong>.',
        verdict: 'Đây là mục tiêu chính trị, không phải hoạt động nhân đạo.',
      },
      {
        x: '20%',
        y: '55%',
        title: 'Ảnh 7 — Bằng chứng mạnh nhất trên tấm poster',
        quote:
          '“Để bảo vệ Độc-Lập và Tự-Do Dân-Chủ, các chiến-sĩ Quốc-Gia ra đi để làm lại cuộc chiến đấu, vì dân tộc, cho dân tộc.”',
        body:
          'Chú thích này <strong>thừa nhận công khai</strong>: trong dòng người di cư <strong>có lực lượng vũ trang của đối phương</strong>. Vậy đây không thuần túy là dân thường “chọn tự do” — mà là một cuộc <strong>chuyển quân và cài cắm lực lượng</strong>, chuẩn bị “làm lại cuộc chiến đấu”.',
        verdict: 'Địch tự khai ra bản chất quân sự của chiến dịch.',
      },
      {
        x: '50%',
        y: '73%',
        title: '“Bốn vạn căn nhà” — bán một giấc mơ',
        quote: '“Bốn vạn căn nhà đang được Chính-Phủ dựng lên cấp-tốc để lấy chỗ ở cho đồng-bào Bắc-Việt…”',
        body:
          'Tầng dưới của poster là dãy nhà gỗ lợp tôn mới tinh, “với đủ tiện nghi và mọi đường sanh-sống”. Nếu tấm poster thứ nhất bán <strong>nỗi sợ</strong>, thì tấm này bán <strong>giấc mơ</strong>.',
        verdict: 'Vài năm sau, cũng bộ máy ấy ban hành Luật 10/59 và lê máy chém khắp miền Nam.',
      },
      {
        x: '80%',
        y: '95%',
        title: 'Ảnh 15 — Ngụy biện tận cùng',
        quote: '“Một công-cuộc thiêng-liêng kết giải đồng-tâm Nam-Bắc.”',
        body:
          'Một chiến dịch <strong>rút ruột miền Bắc</strong> lại được gọi là “kết giải đồng tâm Nam – Bắc”. Trong khi chính những kẻ dựng nên tấm poster này, chỉ hơn một năm sau, đã <strong>cự tuyệt hiệp thương tổng tuyển cử</strong> — tức là cự tuyệt chính sự thống nhất mà họ đang rao giảng ở đây.',
        verdict: 'Cả hai tấm poster đều tuyệt đối im lặng về Tổng tuyển cử 1956.',
      },
    ],
  },
];
