import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import DataCard from '../DataCard'

export default function DataRibbon() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md>
          <DataCard
            title={'Total Sales'}
            value={'462'}
            description={'The totals of all DataSoft products in the current financial year'}
          />
        </Grid>
        <Grid item xs={12} md>
          <DataCard
            title={'Total Value'}
            value={'$25,732.53'}
            description={'The total sales of the current financial year'}
          />
        </Grid>
        <Grid item xs={12} md>
          <DataCard
            title={'Avg. Order Value'}
            value={'$159.30'}
            description={'The average order value for all sales this current financial year'}
          />
        </Grid>
        <Grid item xs={12} md>
          <DataCard title={'Conversion rate'} value={'0.61%'} description={'How many pitches become sales'} />
        </Grid>
      </Grid>
    </Box>
  )
}
