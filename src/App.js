import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import IntroPage from './components/pages/IntroPage';
import MvPage from './components/pages/MvPage';
import YoutubePage from './components/pages/YoutubePage';
import UnsplashPage from './components/pages/UnsplashPage';
import MoviePage from './components/pages/MoviePage';

const App = () => {
  return (
    <BrowserRouter>
      <Header attr={'header__wrap score5 bg-blue'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/mv" element={<MvPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/unsplash" element={<UnsplashPage />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
      <Footer attr={'footer__wrap score5 section'} />
    </BrowserRouter>
  );
};

export default App;
