import { SettingsFormInterfaceProps } from '@/components/settings-form'
import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(req: NextRequest) {
  const { id, openai_token: openaiToken }: SettingsFormInterfaceProps =
    await req.json()

  if (!id || !openaiToken) {
    return NextResponse.json(
      { error: 'Está faltando dados. Tente novamente!' },
      { status: 400 },
    )
  }

  const isUserExists = await db.user.findUnique({
    where: {
      id,
    },
  })

  if (!isUserExists) {
    return NextResponse.json(
      { error: 'Usuário não encontrado!' },
      { status: 400 },
    )
  }

  if (isUserExists.openai_token === openaiToken) {
    return NextResponse.json({ status: 201 })
  }

  const data = await db.user.update({
    where: {
      id,
    },
    data: {
      openai_token: openaiToken,
    },
  })

  return NextResponse.json(data, { status: 201 })
}
