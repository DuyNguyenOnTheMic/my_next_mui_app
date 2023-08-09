import { useSession } from 'next-auth/react'
import Sidebar from '../Sidebar'
import scss from './Layout.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  return (
    <main className={scss.layout} style={{ padding: session ? '0 24px 0 80px' : '0' }}>
      {session && <Sidebar />}
      {children}
    </main>
  )
}
