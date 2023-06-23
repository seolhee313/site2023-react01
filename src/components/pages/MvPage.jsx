import React, { useEffect, useState } from 'react';

import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import MvSlider from '../mv/MvSlider';
import MvSearch from '../mv/MvSearch';
import MvTag from '../mv/MvTag';
import MvCont from '../mv/MvCont';

const MvPage = () => {
  const [youtubes, setYoutubes] = useState([]);

  // Search
  const search = async query => {
    const encodedQuery = encodeURIComponent(query + ' MV');
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${encodedQuery}&type=video&videoCategoryId=10&key=AIzaSyCuRG9CovWM7isuZ0RmIH9xoIee0WBetiA`,
    )
      .then(response => response.json())
      .then(result => setYoutubes(result.items))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    const defaultQuery = 'kpop MV';
    const encodedQuery = encodeURIComponent(defaultQuery);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${encodedQuery}&type=video&videoCategoryId=10&key=AIzaSyCuRG9CovWM7isuZ0RmIH9xoIee0WBetiA`,
    )
      .then(response => response.json())
      .then(result => setYoutubes(result.items))
      .catch(error => console.log(error));
  }, []);

  return (
    <Contents>
      <ContTitle title="mv" />
      <MvSlider />
      <MvSearch onSearch={search} />
      <MvTag onSearch={search} />
      <MvCont youtubes={youtubes} />
    </Contents>
  );
};

export default MvPage;
