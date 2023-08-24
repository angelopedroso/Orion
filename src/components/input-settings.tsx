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
              {...field}
              className={`font-menu h-11 border border-surface-primary bg-transparent text-sm text-slate-500 ${
                errors[formRegister]
                  ? 'focus-visible:border-red-500'
                  : 'focus-visible:border-indigo-600'
              } focus-visible:ring-0 focus-visible:ring-offset-0`}
              disabled={formRegister !== 'openai_token'}
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
