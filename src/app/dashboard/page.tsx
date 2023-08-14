import DataRibbon from '@/components/Dashboard/DataRibbon'
import TransactionBottomRow from '@/components/Dashboard/TransactionBottomRow'
import TransactionsPerDay from '@/components/Dashboard/TransactionsPerDay'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container gap={4} mt={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  )
}
