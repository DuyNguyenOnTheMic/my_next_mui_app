import Login from '@/components/Login'
import { authOptions } from '@/lib/auth'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getServerSession } from 'next-auth'

export default async function SignIn() {
  const session = await getServerSession(authOptions)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h2'>{session ? 'Thank you for logging in' : 'Please log in'}</Typography>
      <Login session={session} />
    </Box>
  )
}
