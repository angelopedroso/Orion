import React, { ReactNode } from 'react'

export interface WordResponseProps {
  children: ReactNode
  header_title: string
  header_desc?: string
}

export function WordResponseHeader({
  children,
  header_title: headerTitle,
  header_desc: headerDesc = '',
}: WordResponseProps) {
  return (
    <div className="space-y-8 font-medium text-slate-300">
      <div className="space-y-4">
        <div className="w-full">
          <h2 className="font-header text-xl font-bold leading-normal text-slate-200 md:text-2xl">
            {headerTitle}
          </h2>
          <span className="text-xs leading-normal text-violet-400 sm:text-sm">
            {headerDesc}
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}
