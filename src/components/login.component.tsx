'use client'

import Button from '@mui/material/Button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Fragment } from 'react'

const Login = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <Fragment>
        Signed in as {session.user?.email}
        <Button variant={'contained'} color={'error'} onClick={() => signOut()}>
          Sign out
        </Button>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <h2>Please log in</h2> <br />
      <Button variant={'contained'} color={'success'} onClick={() => signIn()}>
        Sign in
      </Button>
    </Fragment>
  )
}

export default Login
