'use client'

import darkTheme from '@/theme/darkTheme'
import lightTheme from '@/theme/lightTheme'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function Providers({ children }: { children: any }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme
      }),
    [mode]
  )

  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
        <SessionProvider>
          <CssBaseline />
          {children}
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
