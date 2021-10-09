import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

import { getMovieUpcoming } from 'api';
import { ApiResults, Movie } from 'types';
import Layout from 'components/Layout';

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
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Home;
