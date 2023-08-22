import Image from 'next/image'
import StudentImage from '@/assets/student.png'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between lg:flex-row">
      <div className="flex h-full flex-col gap-4">
        <h2 className="text-4xl font-bold text-slate-100 md:max-w-4xl md:text-7xl">
          Desvende o Inglês Autêntico
        </h2>
        <div className="max-w-6xl">
          <p className="text-md font-semibold text-slate-300">
            A ferramenta perfeita para auxiliar você em sua jornada de estudos
            utilizando o método{' '}
            <HoverCard>
              <HoverCardTrigger className="cursor-default text-violet-400 hover:underline">
                mineração de frase
              </HoverCardTrigger>
              <HoverCardContent
                className="flex w-80 items-start gap-4 border-surface-primary bg-surface-primary-dark "
                align="start"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg text-white">
                    O que é a mineração de frases?
                  </h3>
                  <p className="text-sm text-slate-300">
                    Coletar, estudar e aprender frases em inglês a partir de
                    palavras novas que você encontra em seus estudos.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg text-white">
                    Quais são as vantagens de minerar frases?
                  </h3>
                  <p className="text-sm text-slate-300">
                    Como você mesmo procura as frases a partir de palavras novas
                    para você, o aprendizado é muito mais profundo e específico.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
            . Imagine aprender inglês de forma mais profunda e específica,
            coletando, estudando e aprendendo frases autênticas a partir de
            palavras novas que você encontra. Com a nossa ajuda, você estará no
            comando do seu próprio aprendizado, explorando o idioma de maneira
            única e eficaz. Não perca a oportunidade de transformar sua
            experiência de aprendizado - junte-se a nós e comece a minerar o
            conhecimento hoje mesmo!
          </p>
        </div>
        <Link
          href="/login"
          className="flex items-center gap-2 font-semibold text-violet-400 transition-colors hover:text-violet-500 hover:underline"
        >
          Comece sua Jornada <MoveRight />
        </Link>
      </div>
      <div className="flex h-80 w-80 items-center justify-end md:h-full md:w-full md:pt-2">
        <Image
          src={StudentImage}
          alt="Student"
          width={700}
          height={700}
          className="animate-floating"
        />
      </div>
    </main>
  )
}
