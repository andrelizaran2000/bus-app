// Components
import LoadingScreen from './LoadingScreen';

// Hooks
import useLoginQueries from '../queries/useLoginQueries'

export default function PublicRoute ({ children }:any) {

  const { validateToken } = useLoginQueries();
  const { isLoading } = validateToken(false);

  return (
    <>
      {isLoading ? <LoadingScreen/> : children}
    </>
  )
}