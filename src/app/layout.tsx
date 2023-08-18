import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Học Cờ Tướng Online: Lớp Học Cờ Tướng Miễn Phí và Chất Lượng',
  description: 'Tìm hiểu và học cờ tướng trực tuyến miễn phí tại trang web chuyên cung cấp các khóa học cờ tướng dành cho người mới bắt đầu và người chơi nâng cao. Cải thiện chiến thuật, khả năng đánh cờ và hiểu rõ chi tiết về luật chơi cờ tướng cùng những hướng dẫn từ các chuyên gia hàng đầu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <CssBaseline />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
