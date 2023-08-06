'use client'

import { Button } from '@mui/material'
import { signIn, signOut } from 'next-auth/react'

export const LoginButton = () => {
  return (
    <Button variant={'contained'} color={'success'} onClick={() => signIn()}>
      Sign in
    </Button>
  )
}

export const LogoutButton = () => {
  return (
    <Button variant={'contained'} color={'error'} onClick={() => signOut()}>
      Sign out
    </Button>
  )
}
