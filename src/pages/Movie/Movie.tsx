import { useParams } from 'react-router-dom';

import { useAxios } from 'hooks/useAxios';

import Seo from 'components/Seo';
import Layout from 'components/Layout';
import Loading from 'components/Loading';
import MovieDetails from 'components/MovieDetails';
import Error from 'components/Error';

import { Movie as MovieInterface } from 'types';

import './Movie.scss';

interface MyParams {
  id: string;
}

function Movie() {
  let { id } = useParams<MyParams>();

  const [{ data, error }] = useAxios(`/movie/${id}`);

  if (error) {
    return <Error error={error} />;
  }

  if (data === undefined) {
    return (
      <Layout>
        <div className="page-movie">
          <Loading />
        </div>
      </Layout>
    );
  }

  const { title, overview }: MovieInterface = data;

  return (
    <>
      <Seo title={title} description={overview} />

      <Layout>
        <div className="page-movie">
          <MovieDetails movie={data} />
        </div>
      </Layout>
    </>
  );
}

export default Movie;
