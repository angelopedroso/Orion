import React, { ReactNode } from 'react'

export interface EmojiMessageProps {
  children: ReactNode
  text1?: string
  text2?: string
}

export function EmojiMessage({ children, text1, text2 }: EmojiMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {children}
      <h2 className="text-center text-lg md:text-xl">
        {text1}
        <br />
        {text2}
      </h2>
    </div>
  )
}
