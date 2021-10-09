import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store';
import { add, remove, SliceState } from './listSlice';

interface FeatureListProps {
  id: number;
}

function FeatureList({ id }: FeatureListProps) {
  const list: SliceState = useSelector((state: RootState) => state.list.movies);
  const dispatch = useDispatch();

  const handleClick = () => {
    list.includes(id) ? dispatch(remove(id)) : dispatch(add(id));
  };

  return (
    <button onClick={handleClick}>
      {list.includes(id) ? 'Remove from my list' : 'Add to my list'}
    </button>
  );
}

export default FeatureList;
