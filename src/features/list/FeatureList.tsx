import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store';
import { Movie } from 'types';
import { add, remove, SliceState } from './listSlice';

import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

interface FeatureListProps {
  movie: Movie;
}

function FeatureList(props: FeatureListProps) {
  const { movie } = props;
  const { id } = movie;

  const list: SliceState = useSelector((state: RootState) => state.list.movies);
  const dispatch = useDispatch();

  const hasId = list.some((movie: Movie) => movie.id === id);

  const handleRemove = () => dispatch(remove(id));
  const handleAdd = () => dispatch(add(movie));

  return hasId ? (
    <Button
      color="error"
      variant="outlined"
      endIcon={<RemoveCircleOutlineIcon />}
      onClick={handleRemove}
    >
      Remove from My list
    </Button>
  ) : (
    <Button
      color="success"
      variant="outlined"
      endIcon={<AddCircleOutlineIcon />}
      onClick={handleAdd}
    >
      Add to My list
    </Button>
  );
}

export default FeatureList;
