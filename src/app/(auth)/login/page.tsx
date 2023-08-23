import React from 'react'

import { GithubIcon } from '@/assets/githubIcon'
import { GoogleIcon } from '@/assets/googleIcon'

import { Logo } from '@/components/logo'
import { SignInButton } from '@/components/ui/signin-button'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Login() {
  const session = await getServerSession(authOptions)

  if (session?.user.openai_token) {
    redirect('/english-tool')
  }

  return (
    <main className="grid h-screen place-items-center">
      <section className="flex flex-col gap-8 rounded-md px-12 py-16 nm-convex-background-xl">
        <div className="flex w-full justify-center">
          <Logo />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-semibold text-white">
            Nice to meet you!
          </h2>
          <div className="flex flex-col gap-2">
            <SignInButton provider="github">
              <GithubIcon size={32} color="black" />
            </SignInButton>
            <span className="text-center text-sm font-medium text-slate-400/70">
              or
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
