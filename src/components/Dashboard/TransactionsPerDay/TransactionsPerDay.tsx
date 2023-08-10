'use client'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/system'
import scss from './TransactionsPerDay.module.scss'

export type TransactionCardType = {
  title: string
  value: string
  changeValue: string
}

export default function TransactionsPerDay() {
  const theme = useTheme()

  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions}>
        <Box className={scss.chart}>
          <Typography>Transactions per day</Typography>
        </Box>
        <Box className={scss.cardWrapper}>
          <Card className={scss.card} variant='outlined'>
            <Box className={scss.cardTitle}>
              <Typography>Total Products</Typography>
            </Box>
            <Box className={scss.cardValue}>
              <Typography>1.275</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                428.7%
              </Typography>
            </Box>
          </Card>
          <Card className={scss.card} variant='outlined'>
            <Box className={scss.cardTitle}>
              <Typography>Buy-to-detail</Typography>
            </Box>
            <Box className={scss.cardValue}>
              <Typography>4.40%</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                899.4%
              </Typography>
            </Box>
          </Card>
          <Card className={scss.card} variant='outlined'>
            <Box className={scss.cardTitle}>
              <Typography>Refunds</Typography>
            </Box>
            <Box className={scss.cardValue}>
              <Typography>0</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                0
              </Typography>
            </Box>
          </Card>
        </Box>
      </Paper>
    </Grid>
  )
}
