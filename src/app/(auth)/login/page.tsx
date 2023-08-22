import React from 'react'

import { GithubIcon } from '@/assets/githubIcon'
import { GoogleIcon } from '@/assets/googleIcon'

import { Logo } from '@/components/logo'
import { SignInButton } from '@/components/ui/signin-button'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  return (
    <main className="grid h-screen place-items-center">
      <section className="nm-convex-background-xl flex flex-col gap-8 rounded-md px-12 py-16">
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
