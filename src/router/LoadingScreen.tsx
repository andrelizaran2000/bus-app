// Modules
import { CircularProgress, Stack } from '@mui/material';

export default function LoadingScreen() {
  return (
    <Stack 
      flexDirection='column' 
      sx={{ height:'100vh' }} 
      alignItems='center' 
      justifyContent='center'
    >
      <CircularProgress/>
    </Stack>
  )
}
