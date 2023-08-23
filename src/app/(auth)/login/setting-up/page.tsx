import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import React from 'react'

export interface SettingUpProps {}

export default async function SettingUp(props: SettingUpProps) {
  const session = await getServerSession(authOptions)
  console.log('🚀 ~ file: page.tsx:8 ~ SettingUp ~ session:', session)

  return <h1 className="text-white">ALO</h1>
}
