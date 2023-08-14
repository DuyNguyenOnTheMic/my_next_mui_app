'use client'

import { useSession } from 'next-auth/react'
import Dashboard from './dashboard/page'

export default function Home() {
  const { data: session } = useSession()

  return session && <Dashboard />
}
