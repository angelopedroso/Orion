'use client'

import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DefaultUserIcon } from '../userIcon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'

export function Header() {
  return (
    <section className="flex items-center justify-between pb-8">
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
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="group h-10 w-10 p-0 hover:bg-transparent focus-visible:ring-offset-0"
            >
              <span className="sr-only">Open menu</span>
              <Avatar className="h-full w-full hover:bg-transparent">
                <AvatarImage
                  src="https://github.com/angelopedroso.png"
                  className="transition-all duration-300 hover:blur-sm"
                />
                <AvatarFallback className="bg-gray-500 transition-colors duration-300 hover:bg-violet-500">
                  <DefaultUserIcon />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            className="border-surface-primary bg-surface-primary-dark text-slate-200"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-surface-primary" />
            <DropdownMenuItem className="cursor-pointer focus:bg-surface-primary focus:text-current">
              Profile
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  )
}
