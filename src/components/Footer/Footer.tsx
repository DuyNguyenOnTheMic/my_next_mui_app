import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/system'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import scss from './Footer.module.scss'

export default function Footer() {
  const { data: session } = useSession()
  const theme = useTheme()

  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `

  return (
    <footer className={scss.footer}>
      <Paper sx={{ width: '100%' }} color={'#262626'}>
        <ul role='menu'>
          <li>
            <FooterLink href={'/'}>Home</FooterLink>
          </li>
          <li>
            <FooterLink href={'/dashboard/analytics'}>Analytics</FooterLink>
          </li>
          <li>
            <FooterLink href={'/dashboard/profile'}>Profile</FooterLink>
          </li>
          <li>
            <FooterLink href={'/dashboard/settings'}>Settings</FooterLink>
          </li>
          <li>
            <FooterLink href={'/#termsandconditions'}>Terms & Conditions</FooterLink>
          </li>
          <li>
            <FooterLink href={'/#accessibilitystatement'}>Accessibility statement</FooterLink>
          </li>
          <li>
            <Button
              variant={'text'}
              color={session ? 'error' : 'success'}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? 'Sign Out' : 'Sign In'}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  )
}
