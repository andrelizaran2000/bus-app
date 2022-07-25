// Modules
import { blueGrey, grey } from '@mui/material/colors';
import { Button, Grid, Stack, TextField } from '@mui/material';

// Components
import PaperContainer from '../components/shared/PaperContainer';

// Types
import { LoginApiPayload } from '../api/login';

// Hooks
import useLoginQueries from '../queries/useLoginQueries';

export default function Login() {

  const { loginQuery } = useLoginQueries();
  const { isLoading, mutate } = loginQuery();

  return (
    <Grid container sx={{ height:'100vh', width:'100%' }}>
      <Grid item sx={{ backgroundColor:blueGrey[400], height:'100vh' }} xs={0} md={6} lg={8}/>
      <Grid item sx={{ backgroundColor:grey[200], height:'100vh', display:'flex', justifyContent:'center', flexDirection:'column', padding:paddingContainer, alignItems:'center' }} xs={12} md={6} lg={4}>
        <Stack sx={{ width:{ xs:'100%', sm:'80%', md:'100%' }, flexDirection:'column' }}>
            <form style={{ display:'flex', flexDirection:'column' }} onSubmit={(e) => { e.preventDefault(); mutate(payload); }}>
              <PaperContainer title='Iniciar sesión'>
                <TextField variant='outlined' label='Nombre de usuario' type='text' disabled={isLoading}/>
                <TextField variant='outlined' label='Contraseña' type='password' disabled={isLoading}/>
                <Button variant='contained' type='submit' disabled={isLoading}>Entrar</Button>
              </PaperContainer>
            </form>
        </Stack>
      </Grid>
    </Grid>
  )
}

const paddingContainer = { xs:2, md:4 }
const payload:LoginApiPayload = { userName:'andrelizaran', password:'12345678' };