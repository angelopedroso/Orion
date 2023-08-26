'use client'

import React, { useContext } from 'react'
import { WordResponseHeader } from './word-response'
import { DropdownMenuSeparator } from './ui/dropdown-menu'
import { Loader2, MoveRight, SmilePlus } from 'lucide-react'
import { EnglishWordContext } from '@/contexts/englishResponseContext'

export function EnglishResponse() {
  const { responseData, isLoading } = useContext(EnglishWordContext)

  return (
    <>
      {responseData.word && (
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex items-baseline justify-between text-4xl font-bold text-slate-100">
            <h2>{responseData.word}</h2>
            <span className="text-2xl">{responseData.useType}</span>
          </div>

          <div className="space-y-8 font-medium text-slate-300">
            <WordResponseHeader
              header_title="Pronuncia"
              header_desc="Forma de pronunciar"
            >
              <div className="text-md w-full rounded-md border border-background-700/30 bg-background-700/20 px-6 py-3">
                <p>
                  <span className="font-bold">
                    {responseData.pronunciation}
                  </span>{' '}
                  - semelhante a{' '}
                  <span className="font-bold text-violet-300">{`"${responseData.pronunciationSimilarity}"`}</span>
                </p>
              </div>
            </WordResponseHeader>

            <WordResponseHeader
              header_title="Significado"
              header_desc="Possíveis significados"
            >
              <div className="text-md w-full space-y-2 rounded-md border border-background-700/30 bg-background-700/20 px-6 py-3">
                <p>{responseData.meaningPortuguese}</p>
                <DropdownMenuSeparator className="bg-background-700/40" />
                <div className="space-y-1">
                  {responseData.possibleMeaning?.map((meaning, index) => {
                    return (
                      <p className="text-md font-bold" key={index}>
                        {meaning.type}:{' '}
                        <span className="text-sm font-normal">
                          {meaning.explanation}
                        </span>
                      </p>
                    )
                  })}
                </div>
              </div>
            </WordResponseHeader>

            <WordResponseHeader
              header_title="Frases"
              header_desc="Exemplos de frases simples"
            >
              <div className="w-full rounded-md border border-background-700/30 bg-background-700/20 px-6 py-3 text-sm">
                <div className="grid gap-2 md:grid-cols-2 md:gap-x-4">
                  {responseData.exampleSentences?.map((phrase) => {
                    return (
                      <p className="flex items-center gap-2" key={phrase}>
                        <MoveRight className="h-4 w-4 text-violet-400" />
                        {phrase}
                      </p>
                    )
                  })}
                </div>
              </div>
            </WordResponseHeader>
          </div>
        </div>
      )}
      {!responseData.word && (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-slate-500">
          {!isLoading ? (
            <>
              <SmilePlus className="h-48 w-48" strokeWidth={0.5} />
              <h2 className="text-xl">
                Qual palavra você tem dúvida? Me diga que eu lhe ajudo!{' '}
              </h2>
            </>
          ) : (
            <Loader2 className="h-48 w-48 animate-spin" strokeWidth={0.5} />
          )}
        </div>
      )}
    </>
  )
}
