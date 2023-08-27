import { ErrorIcon } from '@/assets/error-icon'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center px-4 md:px-0">
      <div className="flex flex-col items-center justify-center gap-4">
        <ErrorIcon />
        <div className="-mt-10 flex flex-col items-center justify-center">
          <h1 className="text-center text-lg font-bold text-slate-300 md:text-2xl">
            Oops! Parece que você está num lugar desconhecido.
          </h1>
          <p className="text-sm font-semibold text-slate-200 md:text-lg">
            Dê meia volta e volte para casa!
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
