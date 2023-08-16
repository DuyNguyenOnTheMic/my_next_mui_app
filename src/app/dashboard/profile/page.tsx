'use client'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useSession } from 'next-auth/react'
import { Fragment, useEffect, useState } from 'react'

export default function Profile() {
  const { data: session } = useSession()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    receiveEmails: false
  })

  useEffect(() => {
    const user = session?.user
    const fullName = user?.name ? user.name.split(' ') : []
    const firstName = fullName[0] || ''
    const lastName = fullName?.length > 1 ? fullName[fullName?.length - 1] : ''
    const email = user?.email || ''
    setFormData({
      ...formData,
      firstName: firstName,
      lastName: lastName,
      email: email
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target
    setFormData(preState => ({ ...preState, [name]: name === 'receiveEmails' ? checked : value }))
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <Fragment>
      <h1>Profile</h1>
      <Box>
        <Typography variant='h4' pb={4}>
          Hey {session ? session.user?.name : 'User'}, welcome to your profile 👋
        </Typography>
        <Paper sx={{ p: '1rem 2rem' }}>
          <Grid container justifyContent='center'>
            <Grid item xs={12} sm={8} md={6}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Avatar sx={{ height: 100, width: 100, mb: 3 }} src={session?.user?.image as string}></Avatar>
              </Box>
              <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label='First Name'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label='Last Name'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type='email'
                      label='Email'
                      name='email'
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type='password'
                      label='Password'
                      name='password'
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type='password'
                      label='Confirm Password'
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name='receiveEmails'
                          checked={formData.receiveEmails}
                          onChange={handleFormChange}
                          color='primary'
                        />
                      }
                      label='Receive sales analytics emails'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type='submit' variant='contained' color='primary'>
                      Save Changes
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Fragment>
  )
}
