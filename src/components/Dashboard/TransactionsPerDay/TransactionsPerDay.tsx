'use client'

import DataChart from '@/components/DataChart'
import { lineChartData } from '@/components/mockData'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { ChartConfiguration } from 'chart.js'
import { Context } from 'chartjs-plugin-datalabels'
import scss from './TransactionsPerDay.module.scss'

export type TransactionCardType = {
  title: string
  value: string
  changeValue: string
}

const chartOptions: ChartConfiguration['options'] = {
  plugins: {
    datalabels: {
      backgroundColor: function (context: Context) {
        return context.dataset.borderColor!.toString()
      },
      borderRadius: 4,
      color: 'white',
      font: {
        weight: 'bold'
      },
      formatter: Math.round,
      padding: 6
    }
  },

  // Core options
  aspectRatio: 5 / 3,
  layout: {
    padding: {
      top: 32,
      right: 16,
      bottom: 16,
      left: 8
    }
  },
  elements: {
    line: {
      fill: false,
      tension: 0.4
    }
  },
  scales: {
    y: {
      stacked: true
    }
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  }
}

export default function TransactionsPerDay() {
  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions}>
        <Box className={scss.chart}>
          <Typography>Transactions per day</Typography>
          <DataChart type='line' options={chartOptions} data={lineChartData} />
        </Box>
        <Box className={scss.cardWrapper}>
          <Card className={scss.card} variant='outlined'>
            <Box className={scss.cardTitle}>
              <Typography>Total Products</Typography>
            </Box>
            <Box className={scss.cardValue}>
              <Typography>1.275</Typography>
              <Typography color='success.main' fontSize={14}>
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
              <Typography color='success.main' fontSize={14}>
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
              <Typography color='success.main' fontSize={14}>
                0
              </Typography>
            </Box>
          </Card>
        </Box>
      </Paper>
    </Grid>
  )
}
