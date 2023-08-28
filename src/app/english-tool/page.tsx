/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'

import { OpenAIResponseProps } from '@/app/api/completion/route'

import { getCurrentUser } from '@/lib/session'
import { getDecryptedToken } from '@/utils/getDecryptedToken'

import { BookPlus, MoveLeft, MoveRight } from 'lucide-react'

import { EnglishForm } from '@/components/english-tool-form'
import { EnglishResponse } from '@/components/english-tool-response'
import { HistoryList } from '@/components/history-list'
import { EmojiMessage } from '@/components/ux/emoji-message'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

async function getHistory(
  userId?: string | null,
): Promise<OpenAIResponseProps[]> {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/history?id=${userId}`,
  )

  const data = await res.json()

  return data
}

export default async function EnglishTool() {
  const session = await getCurrentUser()
  const token = await getDecryptedToken(session?.id)
  const history = await getHistory(session?.id)

  return (
    <main className="flex flex-1 justify-center px-2 pb-8">
      <section className="flex w-full flex-col rounded-lg shadow-md md:py-6 md:nm-convex-background-900-xl lg:w-3/5 lg:px-10">
        <Tabs
          defaultValue="form"
          className="flex h-full w-full flex-col lg:relative"
        >
          <TabsList className="md:px-5 md:pb-4 xl:absolute xl:top-0">
            <TabsTrigger value="form" className="gap-2">
              <MoveLeft />
              Aprenda
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2">
              Histórico
              <MoveRight />
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="form"
            className="flex flex-col space-y-8 data-[state=active]:flex-1 md:px-10"
          >
            <div className="flex w-full justify-center">
              <EnglishForm promptKey={token!} userId={session?.id} />
            </div>

            <EnglishResponse />
          </TabsContent>
          <TabsContent
            value="history"
            className="space-y-8 pt-0 data-[state=active]:flex-1 md:px-10"
          >
            <div className="flex h-full flex-col space-y-4">
              <h2 className="py-1.5 text-center font-header text-3xl font-semibold text-slate-400">
                Histórico
              </h2>
              {history.length === 0 && (
                <div className="flex flex-1 flex-col items-center justify-center text-slate-500">
                  <EmojiMessage
                    text1="Adicione uma palavra para começar."
                    text2="O seu histórico aparecerá aqui!"
                  >
                    <BookPlus
                      className="h-32 w-32 md:h-48 md:w-48"
                      strokeWidth={0.5}
                    />
                  </EmojiMessage>
                </div>
              )}
              <div className="-mr-4 h-[38.75rem] space-y-2 overflow-y-auto pr-4 scrollbar scrollbar-track-background-900 scrollbar-thumb-background-800 scrollbar-thumb-rounded-md scrollbar-w-2 hover:scrollbar-thumb-background-700/60">
                {history.map((item) => {
                  return <HistoryList data={item} key={item.id} />
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
