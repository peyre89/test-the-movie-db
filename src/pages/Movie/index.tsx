import { useParams } from 'react-router';

interface MyParams {
  id: string;
}

function Movie() {
  let { id } = useParams<MyParams>();

  return <div className="Movie">Page Movie {id}</div>;
}

export default Movie;
