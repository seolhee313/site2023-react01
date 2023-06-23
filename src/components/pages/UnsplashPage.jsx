import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import UnsplashSlider from '../unsplash/UnsplashSlider';
import UnsplashSearch from '../unsplash/UnsplashSearch';
import UnsplashTag from '../unsplash/UnsplashTag';
import UnsplashCont from '../unsplash/UnsplashCont';

const UnsplashPage = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  // Search
  const search = async query => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=Z_tjioEc226tuq445cyzydcEhf22Ej-cGt8GA5TaUyE&per_page=30&query=${query}`,
    )
      .then(response => response.json())
      .then(responseData => {
        const images = responseData.results;
        setImages(images);
        setFilteredImages(images);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // Load images
  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos?client_id=Z_tjioEc226tuq445cyzydcEhf22Ej-cGt8GA5TaUyE&per_page=30',
    )
      .then(response => response.json())
      .then(result => {
        const images = result;
        setImages(images);
        setFilteredImages(images);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="unsplash" />
        <UnsplashSlider images={images} />
        <UnsplashSearch onSearch={search} />
        <UnsplashTag onSearch={search} />
        <UnsplashCont images={filteredImages} />
      </Contents>
    </>
  );
};

export default UnsplashPage;
