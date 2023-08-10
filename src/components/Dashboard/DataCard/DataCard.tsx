import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import scss from './DataCard.module.scss'

export type DataCardProps = {
  title: string
  value: string
  description: string
}

export default function DataCard(props: DataCardProps) {
  const { title, value, description } = props

  return (
    <Paper className={scss.dataCard}>
      <Box className={scss.header}>
        <Typography variant='h6' color='lightslategrey'>
          {title}
        </Typography>
        <Tooltip title={<Typography fontSize={16}>{`"${description} which is ${value}"`}</Typography>}>
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography variant='h4'>{value}</Typography>
    </Paper>
  )
}
