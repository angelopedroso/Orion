'use client'

import React, { ReactNode, useState } from 'react'
import { Button } from './button'
import { signIn } from 'next-auth/react'
import { Loader2 } from 'lucide-react'
import { useToast } from './use-toast'

export interface SignInButtonProps {
  children?: ReactNode
  provider: 'google' | 'github'
}

export function SignInButton({ children, provider }: SignInButtonProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const isGithub = provider === 'github'

  async function handleSignIn() {
    try {
      setLoading(true)

      await signIn(provider, { callbackUrl: '/login/setting-up?signin=true' })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Opps 😳! Tem algo errado...',
        description: 'Tempo limite excedido. Tente novamente!',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      className=" gap-4 bg-slate-100/90 py-7 font-semibold text-slate-950 hover:bg-slate-100/80"
      onClick={handleSignIn}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Entrando...
        </>
      ) : (
        <>
          {children} Continue com {isGithub ? 'Github' : 'Google'}
        </>
      )}
    </Button>
  )
}
