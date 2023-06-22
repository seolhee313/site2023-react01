import React from 'react';

const MovieItem = ({ movie }) => {
  const roundedVoteAverage = movie.vote_average.toFixed(1);

  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <em>
          <span className="title">{movie.title}</span>
          <span className="star">{roundedVoteAverage}</span>
        </em>
      </a>
    </li>
  );
};

export default MovieItem;
