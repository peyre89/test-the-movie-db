import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';

import { getMovieById } from 'api';
import { Movie as MovieInterface } from 'types';

import Seo from 'components/Seo';
import Layout from 'components/Layout';
import Loading from 'components/Loading';
import MovieDetails from 'components/MovieDetails';

import './Movie.scss';

interface MyParams {
  id: string;
}

function Movie() {
  let { id } = useParams<MyParams>();

  const [movie, setMovie] = useState<MovieInterface>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await getMovieById(id);

        setTimeout(() => {
          setMovie(response.data);
        }, 300);
      } catch (error) {
        console.error('getMovieById error');
      }
    };

    fetchData();
  }, [id]);

  if (movie === undefined) {
    return (
      <Layout>
        <div className="page-movie">
          <Loading />
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Seo title={movie.title} description={movie.overview} />

      <Layout>
        <div className="page-movie">
          <MovieDetails movie={movie} />
        </div>
      </Layout>
    </>
  );
}

export default Movie;
