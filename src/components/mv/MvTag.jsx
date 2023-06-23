import React from 'react';

const mvTag = [
  { name: '블랙핑크' },
  { name: 'BTS' },
  { name: '아이유' },
  { name: '트와이스' },
  { name: '태연' },
  { name: '세븐틴' },
  { name: '에스파' },
  { name: '뉴진스' },
  { name: '아이브' },
  { name: '르세라핌' },
  { name: '아이들' },
  { name: 'NCT' },
  { name: '레드벨벳' },
  { name: '스테이씨' },
  { name: '소녀시대' },
  { name: '빅뱅' },
  { name: '슈퍼주니어' },
  { name: '엑소' },
];

const MvTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="Mv__tag container">
      <div>
        <ul>
          {mvTag.map((tag, index) => (
            <button onClick={btnClick} key={index}>
              {tag.name}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MvTag;
