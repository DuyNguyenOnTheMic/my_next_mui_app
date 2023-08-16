'use client'

import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'
import { Fragment } from 'react'

const Data = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 500,
    maxColumns: 15
  })

  return (
    <Fragment>
      <h1>Data</h1>
      <Typography mb={2}>
        The bestest of data available here at your finger tips in table form. This could be a whole section of data that
        is available for users to deep dive further into the numbers/stats.
      </Typography>
      <Box sx={{ height: '900px', width: '100%' }}>
        <DataGrid
          slots={{
            loadingOverlay: LinearProgress,
            toolbar: GridToolbar
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 }
            }
          }}
          loading={!data}
          {...data}
        />
      </Box>
    </Fragment>
  )
}

export default Data
