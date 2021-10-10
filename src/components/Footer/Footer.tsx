import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <IconButton
        component="a"
        href="https://github.com/peyre89/test-the-movie-db"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        size="large"
        sx={{ color: '#000' }}
      >
        <GitHubIcon fontSize="inherit" />
      </IconButton>
    </footer>
  );
}

export default Footer;
