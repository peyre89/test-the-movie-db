import { useEffect, useState } from 'react';

import { useAxios } from 'hooks/useAxios';

import Seo from 'components/Seo';
import Layout from 'components/Layout';
import Loading from 'components/Loading';
import MovieCard from 'components/MovieCard';

import { Movie } from 'types';

import './Home.scss';

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [{ data }] = useAxios('/movie/upcoming');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (data) {
      const response = data.results;

      response.sort((a: Movie, b: Movie) => {
        return a.title.localeCompare(b.title);
      });

      timer = setTimeout(() => {
        setMovies(response);
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [data]);

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
