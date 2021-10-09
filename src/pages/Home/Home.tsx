import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { getMovieUpcoming } from 'api';
import { ApiResults, Movie } from 'types';
import Layout from 'components/Layout';
import MovieCard from 'components/MovieCard';

import './Home.css';

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovieUpcoming()
      .then((response: AxiosResponse<ApiResults>) => {
        setMovies(response.data.results);
      })
      .catch(() => {
        console.error('getMovieUpcoming error');
      });
  }, []);

  if (movies.length === 0) {
    return null;
  }

  return (
    <Layout>
      <div className="Home">
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
