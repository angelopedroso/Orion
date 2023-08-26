/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { EnglishForm } from '@/components/english-tool-form'
import { EnglishResponse } from '@/components/english-tool-response'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getCurrentUser } from '@/lib/session'
import { getDecryptedToken } from '@/utils/getDecryptedToken'
import { MoveLeft, MoveRight } from 'lucide-react'
import React from 'react'

export default async function EnglishTool() {
  const session = await getCurrentUser()
  const token = await getDecryptedToken(session?.id)

  return (
    <main className="flex flex-1 justify-center px-2 pb-8">
      <section className="flex w-full flex-col rounded-lg shadow-md md:py-6 md:nm-convex-background-900-xl lg:w-3/5 lg:px-10">
        <Tabs
          defaultValue="form"
          className="flex h-full w-full flex-col lg:relative"
        >
          <TabsList className="md:px-5 md:pb-4 lg:absolute lg:top-0">
            <TabsTrigger value="form" className="gap-2">
              <MoveLeft />
              Aprenda
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2">
              Histórico <MoveRight />
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="form"
            className="flex flex-col space-y-8 data-[state=active]:flex-1 md:px-10"
          >
            <div className="flex w-full justify-center">
              <EnglishForm promptKey={token!} />
            </div>

            <EnglishResponse />
          </TabsContent>
          <TabsContent
            value="history"
            className="space-y-8 pt-0 data-[state=active]:flex-1 md:px-10"
          >
            <h2 className="py-1.5 text-center font-header text-3xl font-semibold text-slate-200">
              Histórico
            </h2>

            <div className="-mr-4 h-[38.75rem] space-y-2 overflow-y-auto pr-4 scrollbar scrollbar-track-background-900 scrollbar-thumb-background-700/40 scrollbar-thumb-rounded-md scrollbar-w-2 hover:scrollbar-thumb-background-700/60">
              <Button
                variant={'ghost'}
                className="text-md h-16 w-full rounded-md border border-background-700/30 bg-background-700/20 px-6 py-3 hover:border-background-700/40 hover:bg-background-700/30"
              ></Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
