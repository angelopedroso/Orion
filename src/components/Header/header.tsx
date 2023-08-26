import React from 'react'

import { useSession } from 'next-auth/react'
import { ProfileComponent } from './profile'
import { Logo } from '../logo'

export function Header() {
  const { status } = useSession()
  const isAuthenticated = status === 'authenticated'

  return (
    <header className="flex items-center justify-between pb-8">
      <Logo />
      {isAuthenticated && <ProfileComponent />}
    </header>
  )
}
