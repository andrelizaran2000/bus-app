// Modules
import { Alert, Snackbar } from '@mui/material';

const open = true;
const handleClose = () => {};
const severity = 'success';
const message = 'Hello world'

export default function SnackbarContainer ({ children }:any) {
  return (
    <>
      {children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}
