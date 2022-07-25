// Modules
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

// Api
import { 
  loginApi
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

  return {
    loginQuery,
    logOut
  }
  
}
