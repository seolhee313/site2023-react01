import React from 'react';

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Slider = props => {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            // pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    SeolHee
                    <br />
                    <em>Music</em>
                  </h3>
                  <p>
                    음악은 우리의 감정을 자유롭게 표현하고, 일상 속에서 우리를
                    위로하며,
                    <br />
                    새로운 세계로 데려다 주는 힘이 있습니다.
                    <br />
                    이제 우리는 즐기는 음악을 위해 새로운 온라인 음악 사이트를
                    소개합니다.
                  </p>
                  <Link to="/" className="more1 button-blue">
                    더 알아보기
                  </Link>
                </div>
                <div className="img" aria-label="hidden">
                  <img src="./assets/images/icon/icon01.png" alt="이미지1" />
                  <img src="./assets/images/icon/icon12.svg" alt="이미지2" />
                  <img src="./assets/images/icon/icon11.svg" alt="이미지3" />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s2 container">
                <div className="text">
                  <h3>
                    SeolHee
                    <br />
                    <em className="youtube">Youtube</em>
                  </h3>
                  <p>
                    음악을 더욱 즐기는 방법으로 유튜브 페이지를 경험해 보세요.
                    <br />
                    여러분의 마음을 울릴 멋진 음악과 함께,
                    <br />
                    흥미로운 발견과 새로운 음악 여행을 시작해 보세요.
                  </p>
                  <Link to="/youtube" className="more2 button-red">
                    바로가기
                  </Link>
                </div>
                <div className="img" aria-label="hidden">
                  <img src="./assets/images/icon/icon09.png" alt="이미지1" />
                  <img src="./assets/images/icon/icon08.png" alt="이미지2" />
                  <img src="./assets/images/icon/icon10.png" alt="이미지3" />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s3 container">
                <div className="text">
                  <h3>
                    SeolHee
                    <br />
                    <em className="movie">Movie</em>
                  </h3>
                  <p>
                    여러분의 영화 관람을 더욱 특별하게 만들어 줄 페이지를
                    소개합니다.
                    <br />
                    이곳은 다양한 장르와 감동적인 이야기가 담긴 영화들을
                    제공합니다.
                    <br />
                    최신 영화부터 오래된 클래식 영화까지 다양한 선택지를 찾아볼
                    수 있습니다.
                  </p>
                  <Link to="/movie" className="more3 button-green">
                    바로가기
                  </Link>
                </div>
                <div className="img" aria-label="hidden">
                  <img src="./assets/images/icon/icon02.png" alt="이미지1" />
                  <img src="./assets/images/icon/icon04.png" alt="이미지2" />
                  <img
                    className="camera"
                    src="./assets/images/icon/icon03.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
