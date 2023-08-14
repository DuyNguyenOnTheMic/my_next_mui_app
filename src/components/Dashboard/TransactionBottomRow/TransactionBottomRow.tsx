import DataChart from '@/components/DataChart'
import { doughnutChartData } from '@/components/mockData'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { ChartConfiguration } from 'chart.js'
import scss from './TransactionBottomRow.module.scss'

const chartOptions: ChartConfiguration['options'] = {
  plugins: {
    datalabels: {
      backgroundColor: 'rgba(0, 0, 0)',
      opacity: 0.8,
      borderRadius: 4,
      color: 'white',
      font: {
        weight: 'bold'
      },
      formatter: Math.round,
      padding: 6
    }
  }
}

export default function TransactionBottomRow() {
  return (
    <Grid container className={scss.bottomRow}>
      <Grid item>
        <Paper className={scss.dataCard}>
          <Typography fontWeight='bold' align='center'>
            Transactions per user type
          </Typography>
          <DataChart type={'doughnut'} options={chartOptions} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={scss.dataCard}>
          <Typography fontWeight='bold' align='center'>
            Transactions per user type
          </Typography>
          <DataChart type={'doughnut'} options={chartOptions} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={scss.dataCard}>
          <Typography fontWeight='bold' align='center'>
            Transactions per user type
          </Typography>
          <DataChart type={'doughnut'} options={chartOptions} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={scss.dataCard}>
          <Typography fontWeight='bold' align='center'>
            Transactions per user type
          </Typography>
          <DataChart type={'doughnut'} options={chartOptions} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  )
}
