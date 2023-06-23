import React, { useEffect, useState } from 'react';

import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import MovieSlider from '../movie/MovieSlider';
import MovieTag from '../movie/MovieTag';
import MovieCont from '../movie/MovieCont';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  // 서치
  const search = async query => {
    await fetch(
      `${query}?api_key=8df1b7ac0cd122f9e0416e833e1f271c&language=ko-KR`,
    )
      .then(response => response.json())
      .then(result => setMovies(result.results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=8df1b7ac0cd122f9e0416e833e1f271c&language=ko-KR',
    )
      .then(response => response.json())
      .then(result => setMovies(result.results))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="movie" />
        <MovieSlider movies={movies} />
        <MovieTag onSearch={search} />
        <MovieCont movies={movies} />
      </Contents>
    </>
  );
};

export default MoviePage;
