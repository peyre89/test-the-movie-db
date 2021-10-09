import { Link } from 'react-router-dom';

import { Movie } from 'types';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard(props: MovieCardProps) {
  const { movie } = props;
  const { id, title, poster_path } = movie;

  return (
    <div className="MovieCard">
      <Link to={`/movie/${id}`}>
        <img
          alt={title}
          src={`${window.config.images.base_url}${window.config.images.poster_sizes[2]}${poster_path}`}
        />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default MovieCard;
