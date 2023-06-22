import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-coverflow';

const UnsplashImg = ({ image }) => {
  return (
    <Link to={`https://unsplash.com/photos/${image.id}`}>
      <img src={image.urls.regular} alt={image.alt_description} />
    </Link>
  );
};

const UnsplashSlider = ({ images }) => {
  return (
    <div className="unsplash__slider">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide>
            <UnsplashImg key={index} image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnsplashSlider;
