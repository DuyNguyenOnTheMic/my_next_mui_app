import Login from '@/components/Login/Login'
import Sidebar from '@/components/Sidebar/Sidebar'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { Fragment } from 'react'
import scss from './Home.module.scss'
import Dashboard from './dashboard/page'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className={scss.main}>
      {session && (
        <Fragment>
          <Sidebar />
          <Dashboard />
        </Fragment>
      )}
      <Login />
    </main>
  )
}
