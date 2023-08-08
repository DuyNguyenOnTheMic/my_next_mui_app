import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Dashboard from './dashboard/page'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return session && <Dashboard />
}
