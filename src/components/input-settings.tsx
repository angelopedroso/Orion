import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Input } from './ui/input'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'

type FormProps = UseFormReturn<
  {
    id: string
    name: string
    image: string
    email: string
    openai_token: string
  },
  unknown,
  undefined
>

type FormRegisterProps = 'id' | 'name' | 'image' | 'email' | 'openai_token'

export interface InputSettingsProps {
  title: string
  formRegister: FormRegisterProps
  form: FormProps
  children?: React.ReactNode
}

export function InputSettings({
  title,
  form,
  formRegister,
  children,
}: InputSettingsProps) {
  const {
    formState: { errors },
  } = form
  const hasError = !!errors[formRegister]

  return (
    <FormField
      control={form.control}
      name={formRegister}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="whitespace w-auto text-base leading-6 text-slate-300">
            {title}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={title}
              data-haserror={hasError}
              className="border-surface-primary focus-visible:border-violet-500 focus-visible:ring-0 focus-visible:ring-offset-0 data-[haserror=true]:focus-visible:border-red-500"
              disabled={formRegister !== 'openai_token'}
              {...field}
            />
          </FormControl>

          {!errors[formRegister] && children && (
            <FormDescription>{children}</FormDescription>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
