'use client'

import Header from '@/components/Header'
import Layout from '@/components/Layout'
import darkTheme from '@/theme/darkTheme'
import lightTheme from '@/theme/lightTheme'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<string | null>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const chosenMode = mode === 'light' ? 'dark' : 'light'
        setMode(chosenMode)
        localStorage.setItem('mode', chosenMode)
        document.documentElement.style.setProperty('color-scheme', chosenMode)
      }
    }),
    [mode]
  )

  React.useEffect(() => {
    const storedMode = localStorage.getItem('mode') || 'light'
    setMode(storedMode)
    document.documentElement.style.setProperty('color-scheme', storedMode)
  }, [])

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme
      }),
    []
  )

  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme
      }),
    []
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
