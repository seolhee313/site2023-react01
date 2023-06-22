import React, { useEffect, useState } from 'react';

import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import MovieSlider from '../movie/MovieSlider';
import MovieSearch from '../movie/MovieSearch';
import MovieTag from '../movie/MovieTag';
import MovieCont from '../movie/MovieCont';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // 서치
  const search = async query => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8df1b7ac0cd122f9e0416e833e1f271c&watch_region=KR&language=ko&query=${query}`,
    )
      .then(response => response.json())
      .then(result => {
        setMovies(result.results);
        setFilteredMovies(result.results);
      })
      .catch(error => console.log('error', error));
  };

  // 태그
  const handleTagClick = tag => {
    if (tag === '전체') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie =>
        movie.genre_ids.includes(getGenreIdByTag(tag)),
      );
      setFilteredMovies(filtered);
    }
  };

  const getGenreIdByTag = tag => {
    const genreMap = {
      코미디: 35,
      액션: 28,
      애니메이션: 16,
      판타지: 14,
      음악영화: 10402,
    };
    return genreMap[tag];
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=8df1b7ac0cd122f9e0416e833e1f271c&with_watch_providers=337&watch_region=KR&language=ko&page=',
    )
      .then(response => response.json())
      .then(result => {
        setMovies(result.results);
        setFilteredMovies(result.results);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="movie" />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieTag onTagClick={handleTagClick} />
        <MovieCont movies={filteredMovies} />
      </Contents>
    </>
  );
};

export default MoviePage;
