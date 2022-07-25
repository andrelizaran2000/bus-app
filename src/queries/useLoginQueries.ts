// Modules
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';

// Api
import { 
  loginApi, validateTokenApi
} from '../api/login';

export default function useLoginQueries() {

  const navigation = useNavigate();

  function loginQuery () {
    return useMutation(loginApi, {
      onSuccess: ({ data }) => {
        localStorage.setItem('bus-token', data.token);
        navigation('/home');
      },
      onError: (error) => {
        console.log(error);
      }
    });
  }

  function logOut () {
    localStorage.removeItem('bus-token');
    navigation('/')
  }

  function validateToken (isPrivateRoute:boolean) {
    return useQuery(['validate-token'], validateTokenApi, {
      onSuccess: ({ data }) => {
        localStorage.setItem('bus-token', data.token);
        !isPrivateRoute && navigation('/home')
      },
      onError: (error) => {
        localStorage.removeItem('bus-token');
        navigation('/');
      }
    })
  }

  return {
    loginQuery,
    logOut,
    validateToken
  }
  
}
