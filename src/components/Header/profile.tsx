import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { DefaultUserIcon } from '@/assets/userIcon'

import { LogIn, LogOut, User } from 'lucide-react'

export function ProfileComponent() {
  const route = useRouter()
  const { data: session } = useSession()

  return (
    <div className="flex items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-10 w-10 p-0 hover:bg-transparent focus-visible:ring-offset-0"
          >
            <span className="sr-only">Open menu</span>
            <Avatar className="h-full w-full hover:bg-transparent">
              <AvatarImage
                src={session?.user.image ?? ''}
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
          className="border-background-700/60 bg-background-700/40 text-slate-200"
          align="end"
        >
          <DropdownMenuItem
            className="cursor-pointer gap-2 focus:bg-surface-primary focus:text-current"
            onClick={() => route.push('/login/setting-up')}
          >
            <User className="h-4 w-4" stroke="#8b5cf6" fill="#8b5cf6" />
            Perfil
          </DropdownMenuItem>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant={'ghost'}
                className="h-fit w-full justify-start gap-2 rounded-sm px-2 text-sm font-normal text-white hover:bg-surface-primary hover:text-current"
              >
                <LogOut className="h-4 w-4" stroke="#8b5cf6" fill="#8b5cf6" />
                Sair
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="py-14">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Tem certeza que quer sair? 😥
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex-row gap-4 md:gap-8">
                <AlertDialogCancel className="flex h-full w-36 flex-col gap-2 border-0 bg-violet-500 px-8 py-6 text-white hover:bg-violet-400 hover:text-white ">
                  <LogIn className="h-10 w-10 md:h-14 md:w-14" />
                  Outra hora
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className={`${buttonVariants({
                    variant: 'secondary',
                  })}flex h-full w-36 flex-col gap-2 px-8 py-6 `}
                >
                  <LogOut className="h-10 w-10 md:h-14 md:w-14" />
                  Sair
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
