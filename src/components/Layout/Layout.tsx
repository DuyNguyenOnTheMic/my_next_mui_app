import { useSession } from 'next-auth/react'
import Sidebar from '../Sidebar/Sidebar'
import scss from './Layout.module.scss'

export default function Layout(props: any) {
  const { data: session } = useSession()

  return (
    <main className={scss.layout}>
      {session && <Sidebar />}
      {props.children}
    </main>
  )
}
