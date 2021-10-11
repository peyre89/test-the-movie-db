import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { getMovieUpcoming } from 'api';
import { ApiResults, Movie } from 'types';

import Layout from 'components/Layout';
import Loading from 'components/Loading';
import MovieCard from 'components/MovieCard';

import './Home.scss';

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<ApiResults> = await getMovieUpcoming();

        setTimeout(() => {
          setMovies(response.data.results);
        }, 500);
      } catch (error) {
        console.error('getMovieUpcoming error');
      }
    };

    fetchData();
  }, []);

  if (movies.length === 0) {
    return (
      <Layout>
        <div className="page-home">
          <Loading />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page-home">
        <ul>
          {movies.map((movie: Movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Home;
