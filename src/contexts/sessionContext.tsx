'use client'

import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

export interface SessionContextProps {
  children: ReactNode
}

export function SessionCtxProvider({ children }: SessionContextProps) {
  return <SessionProvider>{children}</SessionProvider>
}
