import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { LoginButton, LogoutButton } from '../Buttons'

export default async function Login() {
  const session = await getServerSession(authOptions)

  return session ? <LogoutButton /> : <LoginButton />
}
