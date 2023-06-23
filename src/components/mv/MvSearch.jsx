import React, { useRef } from 'react';

const MvSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    const query = `${value} MV`;
    onSearch(query);
    console.log(query);
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') handleSearch();
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="Mv__search container">
      <h2 className="blind">검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeyPress}
        placeholder="이미지를 검색하세요"
      />
      <button type="submit" onClick={onClick}>
        검색하기
      </button>
    </div>
  );
};

export default MvSearch;
