import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dạy cờ tướng',
  description: 'Thỏa sức đam mê',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CssBaseline />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
