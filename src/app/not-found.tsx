'use client'

import { ErrorIcon } from '@/assets/error-icon'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-9">
        <ErrorIcon />
        <div className="-mt-12 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-slate-300 sm:text-4xl">
            Oops! Parece que você está num lugar desconhecido.
          </h1>
          <p className="text-xs text-slate-200 sm:text-sm">
            Dê meia volta e volte para casa 😉
          </p>
        </div>
        <Link
          href="/"
          className="w-fit rounded-lg bg-violet-500 px-5 py-3 text-gray-200 transition-colors hover:bg-violet-400"
        >
          Ir para casa
        </Link>
      </div>
    </main>
  )
}
