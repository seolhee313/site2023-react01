import React from 'react';

const UnsplashTag = ({ onTagClick }) => {
  const handleTagClick = (tag) => {
    onTagClick(tag);
  };

  return (
    <div className="unsplash__tag">
      <ul>
        <li>
          <button onClick={() => handleTagClick('바다')}>바다</button>
        </li>
        <li>
          <button onClick={() => handleTagClick('산')}>산</button>
        </li>
        <li>
          <button onClick={() => handleTagClick('하늘')}>하늘</button>
        </li>
        <li>
          <button onClick={() => handleTagClick('꽃')}>꽃</button>
        </li>
        <li>
          <button onClick={() => handleTagClick('나무')}>나무</button>
        </li>
      </ul>
    </div>
  );
};
export default UnsplashTag;
