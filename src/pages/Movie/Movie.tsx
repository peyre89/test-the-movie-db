import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router';

import { getMovieById } from 'api';
import { Movie as MovieInterface } from 'types';
import Layout from 'components/Layout';

interface MyParams {
  id: string;
}

function Movie() {
  let { id } = useParams<MyParams>();

  const [movie, setMovie] = useState<MovieInterface | null>(null);

  useEffect(() => {
    getMovieById(id)
      .then((response: AxiosResponse) => {
        setMovie(response.data);
      })
      .catch(() => {
        console.error('getMovieById error');
      });
  }, [id]);

  if (movie === null) {
    return null;
  }

  return (
    <Layout>
      <div className="Movie">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </Layout>
  );
}

export default Movie;
