import Login from '@/components/Login'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useSession } from 'next-auth/react'

export default function SignIn() {
  const { data: session } = useSession()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h2'>{session ? 'Thanh you for logging in' : 'Please log in'}</Typography>
      <Login />
    </Box>
  )
}
