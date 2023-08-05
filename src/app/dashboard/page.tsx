import scss from '@/styles/Dashboard.module.scss'
import { Box, Grid, Paper } from '@mui/material'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default function Dashboard() {
  return (
    <Box>
      <Grid container gap={2} className={scss.topCardsContainer}>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
      </Grid>
      <Grid marginY={2}>
        <Paper className={scss.dataCard}>xs=12</Paper>
      </Grid>
    </Box>
  )
}
