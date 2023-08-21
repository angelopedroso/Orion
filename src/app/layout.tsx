import { Header } from '@/components/Header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionCtxProvider } from '@/contexts/sessionContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orion',
  description: 'An english learning tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <SessionCtxProvider>
          <Header />
          {children}
        </SessionCtxProvider>
      </body>
    </html>
  )
}
