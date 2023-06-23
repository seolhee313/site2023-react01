import React, { useState } from 'react';

const movieTagList = [
  { name: '인기 영화', url: 'https://api.themoviedb.org/3/movie/popular' },
  { name: '현재 상영', url: 'https://api.themoviedb.org/3/movie/now_playing' },
  { name: '최근 영화', url: 'https://api.themoviedb.org/3/movie/upcoming' },
  { name: '인기 TV SHOW', url: 'https://api.themoviedb.org/3/tv/popular' },
  { name: 'TV 순위', url: 'https://api.themoviedb.org/3/tv/top_rated' },
  { name: 'TV SHOW', url: 'https://api.themoviedb.org/3/tv/on_the_air' },
];

const MovieTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = useState('인기영화');

  function btnClick(e) {
    const clickedTag = movieTagList.find(
      tag => tag.name === e.target.innerText,
    );
    console.log(clickedTag.url);
    if (clickedTag) {
      setActiveTag(clickedTag.name);
      onSearch(clickedTag.url);
    }
  }

  return (
    <div className="movie__tag container">
      <div>
        <ul>
          {movieTagList.map((tag, index) => (
            <li
              onClick={btnClick}
              key={index}
              className={tag.name === activeTag ? 'active' : ''}
            >
              <a hef="/">{tag.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieTag;
