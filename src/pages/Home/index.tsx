import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { getMovieUpcoming } from 'api';
import { ApiResults, Movie } from 'types';

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
    <div className="Home">
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
