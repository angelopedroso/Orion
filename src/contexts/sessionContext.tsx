'use client'

import { Header } from '@/components/Header/header'
import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

export interface SessionContextProps {
  children: ReactNode
}

export function SessionCtxProvider({ children }: SessionContextProps) {
  const pathname = usePathname()
  const hasHeader = pathname === '/login'

  return (
    <SessionProvider>
      <div className={`${!hasHeader && 'px-10 py-8 md:px-20'}`}>
        {!hasHeader && <Header />}
        {children}
      </div>
    </SessionProvider>
  )
}
