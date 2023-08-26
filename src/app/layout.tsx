import './globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { DM_Sans, Inter } from 'next/font/google'
import { SessionCtxProvider } from '@/contexts/sessionContext'
import { Toaster } from '@/components/ui/toaster'
import { EnglishResponseProvider } from '@/contexts/englishResponseContext'

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--header',
})

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
      <body
        className={`${inter.className} bg-background-900 scrollbar scrollbar-track-background-900 scrollbar-thumb-background-700/40 scrollbar-thumb-rounded-md scrollbar-w-2 hover:scrollbar-thumb-background-700/60`}
      >
        <SessionCtxProvider>
          <EnglishResponseProvider>{children}</EnglishResponseProvider>
        </SessionCtxProvider>
        <Toaster />
      </body>
    </html>
  )
}
