import { useSelector } from 'react-redux';

import { SliceState } from 'features/list/listSlice';
import { RootState } from 'store';
import { Movie } from 'types';

import Seo from 'components/Seo';
import Layout from 'components/Layout';
import MovieCard from 'components/MovieCard';

import Box from '@mui/material/Box';

import './MyList.scss';

function MyList() {
  const list: SliceState = useSelector((state: RootState) => state.list.movies);

  const data = [...list];

  data.sort((a: Movie, b: Movie) => {
    return a.title.localeCompare(b.title);
  });

  return (
    <>
      <Seo title="My list" description="My list of movies" />

      <Layout>
        <div className="page-my-list">
          {data.length === 0 ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              You don't have any movie in your list :(
            </Box>
          ) : (
            <ul>
              {data.map((movie: Movie) => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Layout>
    </>
  );
}

export default MyList;
