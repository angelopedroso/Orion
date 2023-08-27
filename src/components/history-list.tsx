'use client'

import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import React from 'react'
import { ResponseBody } from '@/components/response-body'
import { Button } from '@/components/ui/button'
import { OpenAIResponseProps } from '@/app/api/completion/route'

export interface HistoryListProps {
  data: OpenAIResponseProps
}

export function HistoryList({ data }: HistoryListProps) {
  return (
    <div className="-mr-4 h-[38.75rem] space-y-2 overflow-y-auto pr-4 scrollbar scrollbar-track-background-900 scrollbar-thumb-background-800 scrollbar-thumb-rounded-md scrollbar-w-2 hover:scrollbar-thumb-background-700/60">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={'ghost'}
            className="h-16 w-full justify-between rounded-md border border-background-700/30 bg-background-700/20 px-6 py-3 text-slate-400 hover:border-background-800 hover:bg-background-700/30"
          >
            <span className="text-base">{data.word}</span>
            <span className="hidden text-sm md:block">{`${data.useType}`}</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <ResponseBody data={data} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
