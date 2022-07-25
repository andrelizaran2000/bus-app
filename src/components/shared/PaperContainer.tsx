// Modules
import { Paper, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export default function PaperContainer ({ children, title }:any) {
  return (
    <Paper>
      <Stack rowGap={2} sx={{ padding:3 }}>
        <Typography variant='h6' color={grey[700]}>{title}</Typography>
        {children}
      </Stack>
    </Paper>
  )
}
