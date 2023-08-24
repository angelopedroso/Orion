import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button, buttonVariants } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DefaultUserIcon } from '../../assets/userIcon'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'
import { LogIn, LogOut } from 'lucide-react'

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
          className="border-surface-primary bg-surface-primary-dark text-slate-200"
          align="end"
        >
          <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-surface-primary" />
          <DropdownMenuItem
            className="cursor-pointer focus:bg-surface-primary focus:text-current"
            onClick={() => route.push('/login/setting-up')}
          >
            Perfil
          </DropdownMenuItem>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant={'ghost'}
                className="h-fit w-full justify-start rounded-sm px-2 text-sm font-normal text-white hover:bg-surface-primary hover:text-current"
              >
                Sair
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="py-14">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Tem certeza que quer sair? 😥
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-8">
                <AlertDialogCancel className="flex h-full w-36 flex-col gap-2 border-0 bg-violet-500 px-8 py-6 text-white hover:bg-violet-400 hover:text-white">
                  <LogIn className="h-14 w-14" />
                  Outra hora
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className={`${buttonVariants({
                    variant: 'secondary',
                  })}flex h-full w-36 flex-col gap-2 px-8 py-6`}
                >
                  <LogOut className="h-14 w-14" />
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
