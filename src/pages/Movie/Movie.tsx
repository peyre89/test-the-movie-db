import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router';

import { getMovieById } from 'api';
import { Movie as MovieInterface } from 'types';
import Layout from 'components/Layout';
import MovieDetails from 'components/MovieDetails';

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
        <MovieDetails movie={movie} />
      </div>
    </Layout>
  );
}

export default Movie;
