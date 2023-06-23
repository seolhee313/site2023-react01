import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper';

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
        effect={'fade'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'5'}
        initialSlide="3"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
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
