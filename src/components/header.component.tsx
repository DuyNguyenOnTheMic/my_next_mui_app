import { authOptions } from '@/lib/auth'
import Avatar from '@mui/material/Avatar'
import { getServerSession } from 'next-auth'
import { Fragment } from 'react'

export default async function Header() {
  const session = await getServerSession(authOptions)

  return (
    session && (
      <Fragment>
        <h1>Header</h1>
        <Avatar alt={session.user?.name as string} src={session?.user?.image as string} />
      </Fragment>
    )
  )
}
