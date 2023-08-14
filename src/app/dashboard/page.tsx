import DataRibbon from '@/components/Dashboard/DataRibbon'
import TransactionBottomRow from '@/components/Dashboard/TransactionBottomRow'
import TransactionsPerDay from '@/components/Dashboard/TransactionsPerDay'
import Box from '@mui/material/Box'

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Data Ribbon - showing numerical stats */}
      <DataRibbon />
      {/* TransactionsPerDay - graph - numerical cards */}
      <TransactionsPerDay />
      {/* Transaction Doughnut Charts Bottom Row - a few doughnut charts to break down some data into fraction */}
      <TransactionBottomRow />
    </Box>
  )
}
