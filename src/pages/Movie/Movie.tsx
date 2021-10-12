import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';

import instance from 'api';
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
    let timer: ReturnType<typeof setTimeout>;
    const source = axios.CancelToken.source();

    instance
      .get(`/movie/${id}`, {
        cancelToken: source.token,
      })
      .then((response: AxiosResponse) => {
        timer = setTimeout(() => {
          setMovie(response.data);
        }, 300);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Axios cancel: ' + error.message);
        } else {
          console.log('Axios error: ' + error.message);
        }
      });

    return () => {
      clearTimeout(timer);
      source.cancel('Movie got unmounted');
    };
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
