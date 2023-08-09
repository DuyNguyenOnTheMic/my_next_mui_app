'use client'

import BarChartIcon from '@mui/icons-material/BarChart'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import Person2Icon from '@mui/icons-material/Person2'
import SettingsIcon from '@mui/icons-material/Settings'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import { CSSObject, Theme, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import * as React from 'react'
import scss from './Sidebar.module.scss'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const menuRouteList = ['analytics', 'profile', 'settings', '']
const menuListTranslations = ['Analytics', 'Profile', 'Settings', 'Sign Out']
const menuListIcons = [
  <BarChartIcon key='analytics' />,
  <Person2Icon key='profile' />,
  <SettingsIcon key='settings' />,
  <ExitToAppIcon key='sign out' />
]

export default function Sidebar() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const mobileCheck = useMediaQuery('(min-width: 600px)')

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  const handleListItemButtonClick = (text: string) => {
    text === 'Sign Out' && signOut()
    setOpen(false)
  }

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      open={open}
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          top: mobileCheck ? 64 : 57,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme)
          }),
          ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme)
          })
        }
      }}
    >
      <div className={scss.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={!open && text} placement='right'>
              <ListItemButton
                onClick={() => handleListItemButtonClick(text)}
                aria-label={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
                LinkComponent={Link}
                href={`/dashboard/${menuRouteList[index]}`}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: theme.palette.text.primary, opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
