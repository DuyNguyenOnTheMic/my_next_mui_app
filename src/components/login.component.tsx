import { authOptions } from '@/lib/auth'
import Typography from '@mui/material/Typography'
import { getServerSession } from 'next-auth'
import { Fragment } from 'react'
import { LoginButton, LogoutButton } from './buttons.component'

export default async function Login() {
  const session = await getServerSession(authOptions)

  return session ? (
    <LogoutButton />
  ) : (
    <Fragment>
      <Typography variant='h2'>Please sign in</Typography> <br />
      <LoginButton />
    </Fragment>
  )
}
