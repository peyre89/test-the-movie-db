import { useEffect, useState } from 'react';

import { useAxios } from 'hooks/useAxios';

import Seo from 'components/Seo';
import Layout from 'components/Layout';
import Loading from 'components/Loading';
import MovieCard from 'components/MovieCard';

import { Movie } from 'types';

import Box from '@mui/material/Box';

import './Home.scss';

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [{ data, error }] = useAxios('/movie/upcoming');

  useEffect(() => {
    if (data) {
      const response = data.results;

      response.sort((a: Movie, b: Movie) => {
        return a.title.localeCompare(b.title);
      });

      setMovies(response);
    }
  }, [data]);

  if (error) {
    return (
      <Layout>
        <div className="page-home">
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 16 }}>
            Error!
          </Box>
        </div>
      </Layout>
    );
  }

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
