'use client'

import React, { ReactNode, useState } from 'react'
import { Button } from './button'
import { signIn } from 'next-auth/react'

export interface SignInButtonProps {
  children?: ReactNode
  provider: 'google' | 'github'
}

export function SignInButton({ children, provider }: SignInButtonProps) {
  const [loading, setLoading] = useState(false)
  const isGithub = provider === 'github'

  async function handleSignIn() {
    setLoading(true)

    const res = await signIn(provider, { callbackUrl: '/login/setting-up' })

    setLoading(false)
  }

  return (
    <Button
      className="text-md gap-4 bg-slate-100/90 py-7 font-semibold text-slate-950 hover:bg-slate-100/80"
      onClick={handleSignIn}
      disabled={loading}
    >
      {children}
      Continue with {isGithub ? 'Github' : 'Google'}
    </Button>
  )
}
