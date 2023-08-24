import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionCtxProvider } from '@/contexts/sessionContext'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orion',
  description: 'Uma ferramenta para auxiliar na aprendizagem do inglês.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <SessionCtxProvider>{children}</SessionCtxProvider>
        <Toaster />
      </body>
    </html>
  )
}
