import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DefaultUserIcon } from '../../assets/userIcon'

export function ProfileComponent() {
  return (
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
          align="end"
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-surface-primary" />
          <DropdownMenuItem className="cursor-pointer focus:bg-surface-primary focus:text-current">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer focus:bg-surface-primary focus:text-current">
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
