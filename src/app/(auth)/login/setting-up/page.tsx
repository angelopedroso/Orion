import { DefaultUserIcon } from '@/assets/userIcon'
import { SettingsForm } from '@/components/settings-form'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'
import React from 'react'

interface SettingsParamsProps {
  searchParams: { signin: string }
}

export default async function SettingUp({ searchParams }: SettingsParamsProps) {
  const session = await getCurrentUser()

  if (session?.openai_token && searchParams.signin) {
    redirect('/english-tool')
  }

  return (
    <main className="flex flex-1 justify-center px-2">
      <section className="flex w-full flex-col space-y-10 rounded-lg shadow-md md:p-6 md:nm-convex-background-xl lg:w-3/5">
        <div className="flex justify-center p-6 pb-0">
          <Avatar className="h-20 w-20 border border-violet-500 nm-concave-violet-500">
            <AvatarImage src={session?.image ?? ''} />
            <AvatarFallback className="bg-gray-500">
              <DefaultUserIcon />
            </AvatarFallback>
          </Avatar>
        </div>
        <SettingsForm {...session} />
      </section>
    </main>
  )
}
