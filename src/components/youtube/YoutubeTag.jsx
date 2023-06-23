import React from 'react';

const youtubeTag = [
  { name: 'K-POP' },
  { name: '팝송' },
  { name: '힙합' },
  { name: '알앤비' },
  { name: '플레이리스트' },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag container">
      <div>
        <ul>
          {youtubeTag.map((tag, index) => (
            <button onClick={btnClick} key={index}>
              {tag.name}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YoutubeTag;
