'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { Fragment, useState } from 'react'

export default function Settings() {
  const [showRevenue, setShowRevenue] = useState(true)
  const [showProfit, setShowProfit] = useState(true)
  const [showOrders, setShowOrders] = useState(true)
  const [showCustomers, setShowCustomers] = useState(true)

  const handleShowRevenueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowRevenue(event.target.checked)
  }

  const handleShowProfitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowProfit(event.target.checked)
  }

  const handleShowOrdersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowOrders(event.target.checked)
  }

  const handleShowCustomersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowCustomers(event.target.checked)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // TODO: handle form submission
  }

  return (
    <Fragment>
      <h1>Settings</h1>
      <Box>
        <Typography variant='h4' gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component='fieldset'>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch checked={showRevenue} onChange={handleShowRevenueChange} />}
                    label='Revenue'
                  />
                  <FormControlLabel
                    control={<Switch checked={showProfit} onChange={handleShowProfitChange} />}
                    label='Profit'
                  />
                  <FormControlLabel
                    control={<Switch checked={showOrders} onChange={handleShowOrdersChange} />}
                    label='Orders'
                  />
                  <FormControlLabel
                    control={<Switch checked={showCustomers} onChange={handleShowCustomersChange} />}
                    label='Customers'
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary'>
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Fragment>
  )
}
