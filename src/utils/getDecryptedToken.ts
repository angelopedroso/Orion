import { db } from '@/lib/db'
import Crypter from 'string-crypto'

export async function getDecryptedToken(id: string | undefined | null) {
  const { decryptString } = new Crypter()

  if (id) {
    const token = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        openai_token: true,
      },
    })

    if (token?.openai_token) {
      const decryptedToken = decryptString(
        token.openai_token,
        process.env.ENCRYPTER_PASSWORD,
      )

      return decryptedToken
    }

    return token?.openai_token
  }

  return ''
}
