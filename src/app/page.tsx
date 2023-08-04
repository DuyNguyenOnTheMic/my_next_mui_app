import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import { Metadata } from 'next'
import styles from '../styles/page.module.css'
import Dashboard from './dashboard/page'

export const metadata: Metadata = {
  title: 'Home page'
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Sidebar />
      <Dashboard />
    </main>
  )
}
