import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SliceState } from 'features/list/listSlice';
import { RootState } from 'store';

import './Header.scss';

function Header() {
  const list: SliceState = useSelector((state: RootState) => state.list.movies);

  const labelMyList = list.length > 0 ? `My list (${list.length})` : 'My list';

  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-list">{labelMyList}</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
