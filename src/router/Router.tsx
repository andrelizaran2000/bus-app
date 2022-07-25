// Modules
import { 
  QueryClient, 
  QueryClientProvider 
} from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Containers
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import SnackbarContainer from '../components/containers/SnackbarContainer';

// Screens
import Home from '../screens/Home';
import Login from '../screens/Login';

export default function Router() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PublicRoute><Login/></PublicRoute>}/>
            <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
          </Routes>
        </BrowserRouter>
      </SnackbarContainer>
    </QueryClientProvider>
  )
}
