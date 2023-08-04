'use client'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Fragment } from 'react'

const Login = () => {
  const { data: session } = useSession()

  return session ? (
    <Fragment>
      <Button variant={'contained'} color={'error'} onClick={() => signOut()}>
        Sign out
      </Button>
    </Fragment>
  ) : (
    <Fragment>
      <Typography>Please sign in</Typography>
      <Button variant={'contained'} color={'success'} onClick={() => signIn()}>
        Sign in
      </Button>
    </Fragment>
  )
}

export default Login
