import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      openai_token?: string | null
    } & DefaultSession['user']
  }
}
