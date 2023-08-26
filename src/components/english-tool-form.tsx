'use client'

import React, { useContext } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from './ui/form'
import { api } from '@/lib/axios'
import { OpenAIResponseProps } from '@/app/api/completion/route'
import { EnglishWordContext } from '@/contexts/englishResponseContext'

const promptSchema = z.object({
  prompt: z.string().min(2).max(40),
})

type PromptProps = z.infer<typeof promptSchema>

export type EnglishFormProps = {
  promptKey: string
}

export function EnglishForm({ promptKey }: EnglishFormProps) {
  const { setResponseWord, setIsLoading } = useContext(EnglishWordContext)
  const form = useForm<PromptProps>({
    resolver: zodResolver(promptSchema),
  })

  async function handleSubmitPrompt(data: PromptProps) {
    setIsLoading(form.formState.isSubmitting)

    const { data: res } = await api.post<OpenAIResponseProps>('/completion', {
      prompt: data.prompt,
      key: promptKey,
    })

    setResponseWord(res)
    setIsLoading(form.formState.isSubmitted)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitPrompt)}
        className="group flex w-96 max-w-md rounded-md border-2 border-background-700/50 [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-violet-500"
      >
        <Input
          placeholder="Digite a palavra"
          className="border-0 focus-visible:ring-0"
          {...form.register('prompt')}
        />
        <Button
          type={'submit'}
          variant={'ghost'}
          className="h-full px-2"
          disabled={form.formState.isSubmitting}
        >
          <Search className="h-6 w-6" />
        </Button>
      </form>
    </Form>
  )
}
