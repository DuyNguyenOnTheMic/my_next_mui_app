import DataRibbon from '@/components/DataRibbon'
import Box from '@mui/material/Box'

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Data Ribbon - showing numerical stats */}
      <DataRibbon />
      {/* TransactionsPerDay - graph - numerical cards */}
      {/* Transaction Doughnut Charts Bottom Row - a few doughnut charts to break down some data into fraction */}
    </Box>
  )
}
