import './globals.css';

export const metadata = {
  title: 'Vĩ Tuyến 17',
  description:
    'Phân tích chính sách di cư của Mỹ và chính quyền Ngô Đình Diệm sau Hiệp định Genève — VNR202, Lịch sử Đảng Cộng sản Việt Nam, Chương 2 mục II.1 (1954–1965).',
  keywords: ['Lịch sử Đảng', 'VNR202', 'vĩ tuyến 17', 'Hiệp định Genève', 'di cư 1954', 'Đồng khởi'],
  openGraph: {
    title: 'Vĩ Tuyến 17',
    description:
      'Poster đã nói dối — bóc trần chiến dịch di cư 1954–1955 và sự lãnh đạo của Đảng đối với cách mạng hai miền Nam – Bắc.',
    type: 'website',
    locale: 'vi_VN',
  },
};

export const viewport = {
  themeColor: '#0d0b0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
