import Login from '@/components/Login'
import { authOptions } from '@/lib/auth'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import { getServerSession } from 'next-auth'

export default async function SignIn() {
  const session = await getServerSession(authOptions)

  return (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center' }} spacing={2}>
      <Alert severity='info'>{session ? 'Thank you for logging in' : 'Please log in'}</Alert>
      <Login session={session} />
    </Stack>
  )
}
