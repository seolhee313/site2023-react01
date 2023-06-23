import React from 'react';

// 엔티티를 원래의 문자로 변환하는 함수
const decodeHTMLEntities = text => {
  const entities = {
    '&amp;': '&',
    '&#38;': '&',
    '&#x26;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&#x3C;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&#x3E;': '>',
    '&quot;': '"',
    '&#34;': '"',
    '&#x22;': '"',
    '&#x27;': "'",
    '&#39;': "'",
  };

  return text.replace(
    /&(amp|lt|gt|quot|#34|#x22|#x27|#39|#38|#x26);/g,
    match => entities[match],
  );
};

const MvItem = ({ youtube }) => {
  const decodedTitle = decodeHTMLEntities(youtube.snippet.title);

  return (
    <li>
      <a
        href={`http://www.youtube.com/watch?v=${youtube.id.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={youtube.snippet.thumbnails.medium.url} alt="youtube" />
        <span>{decodedTitle}</span>
      </a>
    </li>
  );
};

const MvCont = ({ youtubes }) => {
  return (
    <div className="Mv__cont container">
      <ul>
        {youtubes.map((youtube, index) => (
          <MvItem key={index} youtube={youtube} />
        ))}
      </ul>
    </div>
  );
};

export default MvCont;
