'use client'

import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href={'/'} className="flex items-center">
      <Player
        className="h-16 w-16 bg-transparent"
        src="https://lottie.host/3b8e03bb-ddb5-4ca0-a69f-e5231351c4ad/vLFiMtpiKC.json"
        speed={1}
        loop
        autoplay
      />
      <h1 className="-ml-2 text-3xl font-bold text-slate-300">rion</h1>
    </Link>
  )
}
