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
import { Fragment } from 'react'

export default function Profile() {
  const { data: session } = useSession()
  const handleFormChange = () => {}
  const handleSubmit = () => {}

  const formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    receiveEmails: false
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
                <Avatar sx={{ height: 100, width: 100, mb: 2 }} src={session?.user?.image as string}></Avatar>
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
                      name='confirmPasswordđ'
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
