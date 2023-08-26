import { EnglishForm } from '@/components/english-tool-form'
import { EnglishResponse } from '@/components/english-tool-response'
import { getCurrentUser } from '@/lib/session'
import { getDecryptedToken } from '@/utils/getDecryptedToken'
import React from 'react'

export default async function EnglishTool() {
  const session = await getCurrentUser()
  const token = await getDecryptedToken(session?.id)

  return (
    <main className="flex flex-1 justify-center px-2 pb-8">
      <section className="flex w-full flex-col space-y-8 rounded-lg text-white shadow-md md:px-10 md:py-6 md:nm-convex-background-900-xl lg:w-3/5">
        {/* Form */}
        <div className="flex w-full justify-center">
          <EnglishForm promptKey={token!} />
        </div>

        {/* Response */}
        <EnglishResponse />
      </section>
    </main>
  )
}
