// app/api/chat/route.ts

import { NextResponse } from 'next/server'
import OpenAI from 'openai'

interface PossibleMeaning {
  type: string
  explanation: string
}

export interface OpenAIResponseProps {
  id?: string
  word: string
  meaningPortuguese: string
  useType: string
  pronunciation: string
  pronunciationSimilarity: string
  possibleMeaning: PossibleMeaning[]
  exampleSentences: string[]
}

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge'

export async function POST(req: Request) {
  const { prompt, key } = await req.json()

  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Invalid Request!' }, { status: 400 })
  }

  const openai = new OpenAI({
    apiKey: key,
  })

  const message = `
   O seu trabalho é ao receber uma palavra:

   Dizer o significado dela em português, falar se pode ser usada como verbo, substantivo... Dizer palavras equivalentes em português (se houver mais de uma dizer no máximo 5 palavras equivalentes), e como se pronuncia a palavra em inglês: por exemplo: /wāk/;
   Também deve fornecer a semelhança da pronuncia em português: uaiki;
   Deve dizer todos os significados possíveis, por exemplo, spring pode ser primavera e mola, além de poder ser o verbo pular;
   A explicação do significado não precisa ser muito extensa;
   Quando a palavra for em algum tempo verbal diferente do presente, toda a resposta deve ser retornada com a palavra recebida no presente. Por exemplo: "Gave up" para "Give up". A pronuncia em inglês também deve ser referente a palavra no presente;
   O retorno deve ser em formato JSON. Sendo as keys em ingles, exemplo: {"Word": "Hug"...};
   Os meaning deve ser em formato de array de objetos contendo um campo "type" que é responsavel por dizer o tipo de palavra (Verbo, Substantivo...), além da explicação;
   Provide 10 english example's phrase with it word, the phrases must be simple, short and without translation to portuguese, just english;
   JSON must be returned to the following forme:
   {
     "word": "",
     "meaningPortuguese": "",
     "useType": "",
     "pronunciation": "",
     "pronunciationSimilarity": "",
     "possibleMeaning": [
       {
         "type": "",
         "explanation": ""
       }
     ],
     "exampleSentences": [""]
   }

   SE A PALAVRA NÃO EXISTIR ME RETORNE O SEGUINTE JSON:

   {
    "word": null,
   }

   A partir da explicação acima, escreva o JSON a partir da palavra abaixo:
   Forneça EXATAMENTE 10 FRASES;
   Word, useType e Type devem ser SEMPRE a PRIMEIRA LETRA em maiuscula;

   Palavra: ${prompt}
  `

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
  })

  if (response.choices[0].message.content) {
    const formattedResponse: OpenAIResponseProps = JSON.parse(
      response.choices[0].message.content,
    )

    return NextResponse.json(formattedResponse, { status: 200 })
  }

  return NextResponse.json(
    { error: 'Unknown Error Occurred!' },
    { status: 400 },
  )
}
