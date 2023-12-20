import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinci Design',
  description: 'Portfolio design to display all the designs of vinci',
}

import { Nav, Header, TopLeftImg } from '@/components'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav />
      <Header />
      <TopLeftImg />
      {children}
      </body>
    </html>
  )
}
