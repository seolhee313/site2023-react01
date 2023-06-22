import React from 'react';
import Contents from '../layout/Contents';

import Slider from '../section/Slider';
import Intro from '../section/Intro';
import Mv from '../section/Mv';
import Youtube from '../section/Youtube';
import Unsplash from '../section/Unsplash';
import Movie from '../section/Movie';

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap score5" />
        <Intro attr="intro__wrap score5 section bg-blue" />
        <Mv attr="mv__wrap section score5 center" />
        <Youtube attr="youtube__wrap score5 section bg-blue" />
        <Unsplash attr="unsplash__wrap score5 section" />
        <Movie attr="movie__wrap score5 section bg-blue" />
      </Contents>
    </>
  );
};

export default Home;
