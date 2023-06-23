import React from 'react';

const unsplashTag = [
  { name: '바다' },
  { name: '산' },
  { name: '하늘' },
  { name: '꽃' },
  { name: '나무' },
];

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="unsplash__tag container">
      <div>
        <ul>
          {unsplashTag.map((tag, index) => (
            <button onClick={btnClick} key={index}>
              {tag.name}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default UnsplashTag;
