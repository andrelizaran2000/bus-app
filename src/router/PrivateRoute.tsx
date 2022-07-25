// Components
import LoadingScreen from './LoadingScreen';

// Hooks
import useLoginQueries from '../queries/useLoginQueries'

export default function PrivateRoute ({ children }:any) {

  const { validateToken } = useLoginQueries();
  const { isLoading } = validateToken(true);

  return (
    <>
      {isLoading ? <LoadingScreen/> : children}
    </>
  )
}
