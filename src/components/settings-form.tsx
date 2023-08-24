/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'

import React from 'react'

import { Form } from './ui/form'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { InputSettings } from './input-settings'
import Link from 'next/link'
import { Button } from './ui/button'
import { Loader2, MoveRight } from 'lucide-react'
import { api } from '@/lib/axios'
import { useRouter } from 'next/navigation'
import { useToast } from './ui/use-toast'
import { AxiosError, isAxiosError } from 'axios'

const settingsFormSchema = z.object({
  id: z.string().readonly(),
  name: z.string().min(3).max(50).readonly(),
  email: z.string().email().readonly(),
  image: z.string().readonly(),
  openai_token: z
    .string()
    .nonempty('Token é obrigatório!')
    .transform((val, ctx) => {
      const pattern = /^[a-zA-Z0-9-]+$/

      if (val && !pattern.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Token inválido!',
        })

        return z.NEVER
      }

      return val
    }),
})

type SettingsFormProps = z.infer<typeof settingsFormSchema>

export interface SettingsFormInterfaceProps {
  id?: string | null
  name?: string | null
  email?: string | null
  image?: string | null
  openai_token?: string | null
}

export function SettingsForm({
  id,
  name,
  email,
  openai_token: openaiToken,
  image,
}: SettingsFormInterfaceProps) {
  const form = useForm<SettingsFormProps>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      id: id ?? '',
      name: name!,
      email: email!,
      openai_token: openaiToken ?? '',
      image: image!,
    },
  })
  const router = useRouter()
  const { toast } = useToast()

  async function handleSubmitSettings(data: SettingsFormProps) {
    try {
      await api.put('/users', data)

      router.push('/english-tool')
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
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitSettings)}
        className="flex-1"
      >
        <div className="flex h-full flex-col justify-between gap-5">
          <div className="space-y-5">
            <InputSettings form={form} formRegister="name" title="Nome" />
            <InputSettings form={form} formRegister="email" title="E-mail" />
            <InputSettings
              form={form}
              formRegister="openai_token"
              title="Chave da OpenAI"
            >
              <Link
                href="https://platform.openai.com/account/api-keys"
                target="_blank"
                className="underline hover:text-violet-500 focus:text-violet-500"
              >
                Sua chave será criptografada
              </Link>
            </InputSettings>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              variant={'ghost'}
              className="w-fit gap-2"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <>
                  Começar aprendizagem
                  <MoveRight />
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
