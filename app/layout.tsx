
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Spiral Park',
  description: 'Живое пространство на Мадейре',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
