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
      <div
        className={`${
          !hasHeader && 'px-4 md:px-10 lg:px-20'
        } flex h-screen flex-col py-8`}
      >
        {!hasHeader && <Header />}
        {children}
      </div>
    </SessionProvider>
  )
}
