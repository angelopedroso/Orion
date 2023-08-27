'use client'

import React, { useContext } from 'react'
import { Annoyed, Loader2, SmilePlus } from 'lucide-react'
import { EnglishWordContext } from '@/contexts/englishResponseContext'
import { ResponseBody } from './response-body'
import { EmojiMessage } from './ux/emoji-message'

export function EnglishResponse() {
  const { responseData, isLoading } = useContext(EnglishWordContext)
  const isNull = responseData.word === null

  return (
    <>
      {responseData.word && <ResponseBody data={responseData} />}
      {!responseData.word && (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-slate-500">
          <div
            data-loading={isLoading}
            className="flex flex-col items-center justify-center data-[loading=true]:hidden"
          >
            {isNull ? (
              <EmojiMessage text1="Não encontrei nada sobre essa palavra!">
                <Annoyed
                  className="h-32 w-32 md:h-48 md:w-48"
                  strokeWidth={0.5}
                />
              </EmojiMessage>
            ) : (
              <EmojiMessage
                text1="Qual palavra você quer descobrir hoje?"
                text2="Me diga que eu lhe ajudo!"
              >
                <SmilePlus
                  className="h-32 w-32 md:h-48 md:w-48"
                  strokeWidth={0.5}
                />
              </EmojiMessage>
            )}
          </div>

          <Loader2
            data-loading={isLoading}
            className="hidden h-32 w-32 animate-spin data-[loading=true]:block md:h-48 md:w-48"
            strokeWidth={0.5}
          />
        </div>
      )}
    </>
  )
}
