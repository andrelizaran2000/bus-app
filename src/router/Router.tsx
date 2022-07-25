// Modules
import { 
  QueryClient, 
  QueryClientProvider 
} from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Containers
import SnackbarContainer from '../components/containers/SnackbarContainer';

// Screens
import Login from '../screens/Login';

export default function Router() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}>
          </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarContainer>
    </QueryClientProvider>
  )
}
