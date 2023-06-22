import React from 'react';

const MovieTag = ({ onTagClick }) => {
  const handleTagClick = tag => {
    onTagClick(tag);
  };

  return (
    <div className="movie__tag">
      <ul>
        <li>
          <button onClick={() => handleTagClick('전체')}>전체</button>
        </li>
        <li>
          <button onClick={() => handleTagClick('코미디')}>코미디</button>
        </li>
        <li>
          <button onClick={() => handleTagClick('액션')}>액션</button>
        </li>
        <li>
          <button onClick={() => handleTagClick('애니메이션')}>
            애니메이션
          </button>
        </li>
        <li>
          <button onClick={() => handleTagClick('판타지')}>판타지</button>
        </li>
        <li>
          <button onClick={() => handleTagClick('음악영화')}>음악</button>
        </li>
      </ul>
    </div>
  );
};

export default MovieTag;
