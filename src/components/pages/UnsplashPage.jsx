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
  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=Z_tjioEc226tuq445cyzydcEhf22Ej-cGt8GA5TaUyE&per_page=30&query=${query}`,
    )
      .then((response) => response.json())
      .then((responseData) => {
        const images = [responseData];
        setImages(images);
        setFilteredImages(images);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Load images
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://api.unsplash.com/photos?client_id=Z_tjioEc226tuq445cyzydcEhf22Ej-cGt8GA5TaUyE&per_page=30',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        const formattedImages = result.map((image) => ({
          ...image,
          genre_ids: [getGenreIdByTag(image.genre)],
        }));
        setImages(formattedImages);
        setFilteredImages(formattedImages);
      })
      .catch((error) => console.log('error', error));
  }, []);

  // Tag
  const getGenreIdByTag = (tag) => {
    const genreMap = {
      바다: 'sea',
      산: 'mountain',
      하늘: 'sky',
      꽃: 'flower',
      나무: 'tree',
    };
    return genreMap[tag];
  };

  const handleTagClick = (tag) => {
    if (tag === '전체') {
      setFilteredImages(images);
    } else {
      const genreId = getGenreIdByTag(tag);
      const filtered = images.filter((image) => {
        if (image.genre_ids && Array.isArray(image.genre_ids)) {
          return image.genre_ids.includes(genreId);
        }
        return false;
      });
      setFilteredImages(filtered);
    }
  };

  return (
    <>
      <Contents>
        <ContTitle title="unsplash" />
        <UnsplashSlider images={images} />
        <UnsplashSearch onSearch={search} />
        <UnsplashTag onTagClick={handleTagClick} />
        <UnsplashCont images={filteredImages} />
      </Contents>
    </>
  );
};

export default UnsplashPage;