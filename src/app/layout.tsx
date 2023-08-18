import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cờ Tướng Online: Học Cờ Tướng Miễn Phí và Chất Lượng',
  description: 'Chuyên cung cấp khóa học cờ tướng online, cải thiện chiến thuật, khả năng đánh cờ và hiểu rõ chi tiết về luật chơi từ những hướng dẫn của các chuyên gia hàng đầu.',
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
      <meta name="robots" content="nofollow"/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
