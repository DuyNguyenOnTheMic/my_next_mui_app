import Header from '@/components/header.component'
import Login from '@/components/login.component'
import Sidebar from '@/components/sidebar.component'
import { authOptions } from '@/lib/auth'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Fragment } from 'react'
import styles from '../styles/page.module.css'
import Dashboard from './dashboard/page'

export const metadata: Metadata = {
  title: 'Home page'
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className={styles.main}>
      <Header />
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
