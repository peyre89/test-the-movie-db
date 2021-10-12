import FeatureList from 'features/list/FeatureList';

import { Genre, Movie } from 'types';

import { humanizeRuntime } from 'utils';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import './MovieDetails.scss';

function MovieDetails({ movie }: { movie: Movie }) {
  const { genres, overview, poster_path, release_date, runtime, title } = movie;

  return (
    <div className="MovieDetails">
      <div className="poster-and-content">
        <img
          alt={title}
          src={`${window.config.images.base_url}${window.config.images.poster_sizes[2]}${poster_path}`}
        />
        <div className="content">
          <h1>{title}</h1>

          <p>
            {release_date} / {humanizeRuntime(runtime)}
          </p>

          <p>{overview}</p>

          <ul>
            {genres.map((genre: Genre) => (
              <li key={genre.id}>
                <Chip label={genre.name} variant="outlined" disabled />
              </li>
            ))}
          </ul>

          <Box sx={{ mt: 2 }}>
            <FeatureList movie={movie} />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
