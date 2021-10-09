import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store';
import { Movie } from 'types';
import { add, remove, SliceState } from './listSlice';

interface FeatureListProps {
  movie: Movie;
}

function FeatureList(props: FeatureListProps) {
  const { movie } = props;
  const { id } = movie;

  const list: SliceState = useSelector((state: RootState) => state.list.movies);
  const dispatch = useDispatch();

  const hasId = list.some((movie: Movie) => movie.id === id);

  const handleClick = () => {
    hasId ? dispatch(remove(id)) : dispatch(add(movie));
  };

  return (
    <button onClick={handleClick}>
      {hasId ? 'Remove from my list' : 'Add to my list'}
    </button>
  );
}

export default FeatureList;
