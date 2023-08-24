import { NextRequest } from 'next/server'

export async function sessionChecker(req: NextRequest) {
  const resSession = await fetch(
    process.env.NEXTAUTH_URL + '/api/auth/session',
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: req.headers.get('cookie') || '',
      },
      method: 'GET',
    },
  )

  const session = await resSession.json()

  if (!Object.keys(session).length) {
    return false
  }

  return true
}
