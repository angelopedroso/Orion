import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import { db } from './db'

import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      const userData = await db.user.findUnique({
        where: {
          email: user.email,
        },
      })

      if (userData) {
        session.user = {
          id: userData?.id,
          name: userData?.name,
          email: userData?.email,
          image: userData?.image,
          openai_token: userData?.openai_token,
        }

        return Promise.resolve(session)
      }

      return Promise.resolve({ ...session, openai_token: null })
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}
