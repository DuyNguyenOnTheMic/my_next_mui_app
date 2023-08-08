import { Session } from 'next-auth'
import { LoginButton, LogoutButton } from '../Buttons'

export type LoginProps = {
  session: Session | null
}

export default function Login(props: LoginProps) {
  const { session } = props

  return session ? <LogoutButton /> : <LoginButton />
}
