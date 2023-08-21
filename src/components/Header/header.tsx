'use client'

import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

export function Header() {
  return (
    <section className="flex items-center justify-between  px-20 py-8">
      <div className="flex items-center">
        <Player
          className="h-16 w-16 bg-transparent"
          src="https://lottie.host/b5709aff-4b3f-4279-bff7-0dbbd392e36f/jzpsIL4yzE.json"
          speed={1}
          loop
          autoplay
        />
        <h1 className="text-3xl font-bold text-slate-300">rion</h1>
      </div>
    </section>
  )
}
