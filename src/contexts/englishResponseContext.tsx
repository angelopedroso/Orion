'use client'

import { OpenAIResponseProps } from '@/app/api/completion/route'
import { createContext, useState } from 'react'

type EnglishResponseProviderType = {
  children: React.ReactNode
}

interface EnglishResponseContextProps {
  responseData: OpenAIResponseProps
  setResponseWord: (data: OpenAIResponseProps) => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

export const EnglishWordContext = createContext<EnglishResponseContextProps>(
  {} as EnglishResponseContextProps,
)

export function EnglishResponseProvider({
  children,
}: EnglishResponseProviderType) {
  const [responseData, setResponseData] = useState<OpenAIResponseProps>(
    {} as OpenAIResponseProps,
  )
  const [isLoading, setIsLoading] = useState(false)

  function setResponseWord(data: OpenAIResponseProps) {
    setResponseData(data)
  }

  return (
    <EnglishWordContext.Provider
      value={{ responseData, setResponseWord, isLoading, setIsLoading }}
    >
      {children}
    </EnglishWordContext.Provider>
  )
}
