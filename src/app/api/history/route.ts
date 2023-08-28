import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { OpenAIResponseProps } from '../completion/route'

type ReqBody = {
  userId: string
  data: OpenAIResponseProps
}

export async function POST(req: NextRequest) {
  const { userId, data }: ReqBody = await req.json()

  if (!userId) {
    return NextResponse.json(
      { error: 'ID do usuário não encontrado!' },
      { status: 400 },
    )
  }

  const isUserExists = await db.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!isUserExists) {
    return NextResponse.json(
      { error: 'Usuário não encontrado!' },
      { status: 400 },
    )
  }

  const resData = await db.history.create({
    data: {
      meaningPortuguese: data.meaningPortuguese,
      pronunciation: data.pronunciation,
      pronunciationSimilarity: data.pronunciationSimilarity,
      useType: data.useType,
      word: data.word,
      exampleSentences: data.exampleSentences,
      user: {
        connect: {
          id: userId,
        },
      },
      possibleMeaning: {
        createMany: {
          data: data.possibleMeaning.map((meaning) => ({
            type: meaning.type,
            explanation: meaning.explanation,
          })),
        },
      },
    },
  })

  return NextResponse.json(resData, { status: 201 })
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('id')

  if (!userId) {
    return NextResponse.json(
      { error: 'ID do usuário não encontrado!' },
      { status: 400 },
    )
  }

  const isUserExists = await db.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!isUserExists) {
    return NextResponse.json(
      { error: 'Usuário não encontrado!' },
      { status: 400 },
    )
  }

  const data = await db.history.findMany({
    where: {
      userId,
    },
    include: {
      possibleMeaning: true,
    },
  })

  return NextResponse.json(data, { status: 200 })
}
