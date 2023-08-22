'use client'

import React, { ReactNode } from 'react'
import { Button } from './button'
import { signIn } from 'next-auth/react'

export interface SignInButtonProps {
  children?: ReactNode
  provider: 'google' | 'github'
}

export function SignInButton({ children, provider }: SignInButtonProps) {
  const isGithub = provider === 'github'

  return (
    <Button
      className="text-md gap-4 bg-slate-100/90 py-7 font-semibold text-slate-950 hover:bg-slate-100/80"
      onClick={() => signIn(provider)}
    >
      {children}
      Continue with {isGithub ? 'Github' : 'Google'}
    </Button>
  )
}
