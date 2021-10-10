import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SliceState } from 'features/list/listSlice';
import { RootState } from 'store';

import { Link, Typography } from '@mui/material';

import './Header.scss';

function Header() {
  const list: SliceState = useSelector((state: RootState) => state.list.movies);

  const labelMyList = list.length > 0 ? `My list (${list.length})` : 'My list';

  return (
    <header className="Header">
      <Typography variant="h4" component="h1">
        Test The Movie DB
      </Typography>

      <nav>
        <ul>
          <li>
            <Link component={RouterLink} underline="none" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link component={RouterLink} underline="none" to="/my-list">
              {labelMyList}
            </Link>
          </li>
          <li>
            <Link component={RouterLink} underline="none" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
