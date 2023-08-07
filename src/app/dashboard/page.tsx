import { Box, Grid, Paper } from '@mui/material'
import scss from './Dashboard.module.scss'

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} marginY={2}>
        <Paper className={scss.dataCard}>xs=12</Paper>
      </Grid>
    </Box>
  )
}
