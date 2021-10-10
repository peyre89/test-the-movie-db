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
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await getMovieById(id);
        setMovie(response.data);
      } catch (error) {
        console.error('getMovieById error');
      }
    };

    fetchData();
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
