import React from 'react'

import { GithubIcon } from '@/assets/github-icon'
import { GoogleIcon } from '@/assets/google-icon'

import { Logo } from '@/components/logo'
import { SignInButton } from '@/components/ui/signin-button'

import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'

export default async function Login() {
  const session = await getServerSession(authOptions)

  if (session?.user.openai_token) {
    redirect('/english-tool')
  }

  return (
    <main className="grid h-screen flex-1 place-items-center">
      <section className="flex flex-col gap-8 rounded-md px-12 py-16 nm-convex-background-900-xl">
        <div className="flex w-full justify-center">
          <Logo />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-semibold text-white">
            Prazer em te ver!
          </h2>
          <div className="flex flex-col gap-2">
            <SignInButton provider="github">
              <GithubIcon size={32} color="black" />
            </SignInButton>
            <span className="text-center text-sm font-medium text-slate-400/70">
              ou
            </span>
            <SignInButton provider="google">
              <GoogleIcon size={32} />
            </SignInButton>
          </div>
        </div>
      </section>
    </main>
  )
}
