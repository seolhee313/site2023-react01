import React from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import MvSlider from '../mv/MvSlider';
import MvSearch from '../mv/MvSearch';
import MvTag from '../mv/MvTag';
import MvCont from '../mv/MvCont';

const MvPage = () => {
  return (
    <Contents>
      <ContTitle title="mv" />
      <MvSlider />
      <MvSearch />
      <MvTag />
      <MvCont />
    </Contents>
  );
};

export default MvPage;
