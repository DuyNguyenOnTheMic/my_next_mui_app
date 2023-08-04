'use client'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Fragment } from 'react'

const Login = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <Fragment>
        <p>Signed in as {session.user?.email}</p>
        <p>Welcome {session.user?.name}</p>
        <Avatar alt={session.user?.name as string} src={session.user?.image as string} />
        <Button variant={'contained'} color={'error'} onClick={() => signOut()}>
          Sign out
        </Button>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <p>Please log in</p>
      <Button variant={'contained'} color={'success'} onClick={() => signIn()}>
        Sign in
      </Button>
    </Fragment>
  )
}

export default Login
