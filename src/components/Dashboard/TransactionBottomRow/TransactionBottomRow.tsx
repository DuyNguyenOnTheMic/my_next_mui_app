import DataChart from '@/components/DataChart'
import { doughnutChartData } from '@/components/mockData'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import scss from './TransactionBottomRow.module.scss'

export default function TransactionBottomRow() {
  return (
    <Grid container>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  )
}
