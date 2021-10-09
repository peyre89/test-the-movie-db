import FeatureList from 'features/list/FeatureList';

import { Genre, Movie } from 'types';

import './MovieDetails.scss';

interface MovieCardProps {
  movie: Movie;
}

function MovieDetails(props: MovieCardProps) {
  const { movie } = props;
  const { genres, overview, poster_path, release_date, runtime, title } = movie;

  const commaSeparatedGenres = genres.map((genre: Genre) => genre.name);

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
            {release_date} / {runtime} minutes /{' '}
            {commaSeparatedGenres.join(', ')}
          </p>

          <p>{overview}</p>

          <FeatureList id={movie.id} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
