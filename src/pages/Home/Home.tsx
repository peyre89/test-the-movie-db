import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { getMovieUpcoming } from 'api';
import { ApiResults, Movie } from 'types';

import Seo from 'components/Seo';
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

        const data = response.data.results;

        data.sort((a: Movie, b: Movie) => {
          return a.title.localeCompare(b.title);
        });

        setTimeout(() => {
          setMovies(data);
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
    <>
      <Seo
        title="Test The Movie DB"
        description="A simple app to play with the API of The Movie DB website!"
      />

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
    </>
  );
}

export default Home;
