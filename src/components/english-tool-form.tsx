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
import { AxiosError, isAxiosError } from 'axios'
import { useToast } from './ui/use-toast'

const promptSchema = z.object({
  prompt: z.string().min(2).max(40),
})

type PromptProps = z.infer<typeof promptSchema>

export type EnglishFormProps = {
  promptKey: string
  userId?: string | null
}

export function EnglishForm({ promptKey, userId }: EnglishFormProps) {
  const { setResponseWord, setIsLoading } = useContext(EnglishWordContext)
  const form = useForm<PromptProps>({
    resolver: zodResolver(promptSchema),
  })
  const { toast } = useToast()

  async function handleSubmitPrompt(data: PromptProps) {
    try {
      setIsLoading(form.formState.isSubmitting)

      const { data: res } = await api.post<OpenAIResponseProps>('/completion', {
        prompt: data.prompt,
        key: promptKey,
      })

      setResponseWord(res)

      await api.post('/history', {
        userId,
        data: res,
      })
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<{ error: string }>
        if (axiosError.response) {
          toast({
            variant: 'destructive',
            title: 'Opps 😳! Tem algo errado...',
            description: axiosError.response.data.error,
          })
        }
      } else {
        toast({
          variant: 'destructive',
          title: 'Opps 😳! Tem algo errado...',
          description: 'Ocorreu um erro desconhecido. Tente novamente!',
        })
      }
    } finally {
      setIsLoading(false)
      form.reset()
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitPrompt)}
        className="flex w-96 max-w-md rounded-md border-2 border-background-700/50 lg:z-10 [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-violet-500"
      >
        <Input
          placeholder="Digite uma palavra ou expressão"
          className="border-0 focus-visible:ring-0"
          autoComplete="off"
          {...form.register('prompt')}
        />
        <Button
          type={'submit'}
          variant={'ghost'}
          className="h-full rounded-none px-2 hover:bg-background-700/50 hover:text-slate-400"
          disabled={form.formState.isSubmitting}
        >
          <Search className="h-6 w-6" />
        </Button>
      </form>
    </Form>
  )
}
