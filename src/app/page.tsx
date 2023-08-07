import Login from '@/components/Login/Login'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { Fragment } from 'react'
import Dashboard from './dashboard/page'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <Fragment>
      {session && <Dashboard />}
      {!session && <Login />}
    </Fragment>
  )
}
