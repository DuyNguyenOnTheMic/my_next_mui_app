'use client'

import Header from '@/components/Header'
import Layout from '@/components/Layout'
import darkTheme from '@/theme/darkTheme'
import lightTheme from '@/theme/lightTheme'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })
const storedTheme = !localStorage.getItem('mode') ? 'light' : localStorage.getItem('mode')

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState(storedTheme)
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const chosenMode = mode === 'light' ? 'dark' : 'light'
        setMode(chosenMode)
        localStorage.setItem('mode', chosenMode)
      }
    }),
    [mode]
  )

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode]
  )

  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
        <SessionProvider>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          <Layout>{children}</Layout>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
