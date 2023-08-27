import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import { MoveRight } from 'lucide-react'
import React from 'react'
import { WordResponseHeader } from './word-response'
import { OpenAIResponseProps } from '@/app/api/completion/route'

export interface ResponseBodyProps {
  data: OpenAIResponseProps
}

export function ResponseBody({ data }: ResponseBodyProps) {
  const {
    exampleSentences,
    meaningPortuguese,
    possibleMeaning,
    pronunciation,
    pronunciationSimilarity,
    useType,
    word,
  } = data

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex flex-col items-baseline font-bold text-slate-100 md:flex-row md:justify-between">
        <h2 className="text-2xl md:text-4xl">{word}</h2>
        <span className="md:text-xl">{useType}</span>
      </div>

      <div className="space-y-8 font-medium text-slate-300">
        <WordResponseHeader
          header_title="Pronuncia"
          header_desc="Forma de pronunciar"
        >
          <div className=" w-full rounded-md border border-background-700/30 bg-background-700/20 px-6 py-3">
            <p>
              <span className="font-bold">{pronunciation}</span> - semelhante a{' '}
              <span className="font-bold text-violet-300">{`"${pronunciationSimilarity}"`}</span>
            </p>
          </div>
        </WordResponseHeader>

        <WordResponseHeader
          header_title="Significado"
          header_desc="Possíveis significados"
        >
          <div className=" w-full space-y-2 rounded-md border border-background-700/30 bg-background-700/20 px-6 py-3">
            <p>{meaningPortuguese}</p>
            <DropdownMenuSeparator className="bg-background-800" />
            <div className="space-y-1">
              {possibleMeaning?.map((meaning, index) => {
                return (
                  <p className=" font-bold" key={index}>
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
              {exampleSentences?.map((phrase) => {
                return (
                  <div className="flex items-center gap-2" key={phrase}>
                    <MoveRight className="text-violet-400" size={16} />
                    <p>{phrase}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </WordResponseHeader>
      </div>
    </div>
  )
}
