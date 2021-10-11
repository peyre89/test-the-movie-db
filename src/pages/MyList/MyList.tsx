import { useSelector } from 'react-redux';

import { SliceState } from 'features/list/listSlice';
import { RootState } from 'store';
import { Movie } from 'types';

import Layout from 'components/Layout';
import MovieCard from 'components/MovieCard';

import './MyList.scss';

function MyList() {
  const list: SliceState = useSelector((state: RootState) => state.list.movies);

  return (
    <Layout>
      <div className="page-my-list">
        <ul>
          {list.map((movie: Movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default MyList;
