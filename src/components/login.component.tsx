'use client'

import Button from '@mui/material/Button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Fragment } from 'react'

const Login = () => {
  const { data: session } = useSession()

  return session ? (
    <Fragment>
      <p>Signed in as {session.user?.email}</p>
      <p>Welcome {session.user?.name}</p>
      <Button variant={'contained'} color={'error'} onClick={() => signOut()}>
        Sign out
      </Button>
    </Fragment>
  ) : (
    <Fragment>
      <p>Please log in</p>
      <Button variant={'contained'} color={'success'} onClick={() => signIn()}>
        Sign in
      </Button>
    </Fragment>
  )
}

export default Login
