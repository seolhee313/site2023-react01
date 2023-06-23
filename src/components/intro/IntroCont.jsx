import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const introMenu = {
  menu1: '팝 (Pop)',
  menu2: '발라드 (ballad)',
  menu3: '힙합 (Hip-hop)',
  menu4: '알앤비 (R&B)',
};

const introDesc = {
  menu1:
    '팝은 대중적인 음악 장르로, 널리 알려진 가수와 인기 있는 멜로디, 재치 있는 가사를 특징으로 합니다. 팝 음악은 다양한 스타일과 장르의 요소를 결합하여 다채로운 음악을 만들어냅니다. 주로 라디오와 상업 음악 산업에서 많이 접할 수 있으며, 청취자들에게 일상에서 즐길 수 있는 캐치한 곡들을 제공합니다.',
  menu2:
    '발라드는 서정적이고 감성적인 가사를 가진 음악 장르입니다. 발라드는 일련의 이야기를 다루며, 주로 사랑, 이별, 그리움, 희망 등의 주제를 다루는 경우가 많습니다. 발라드는 주로 피아노, 현악기, 어쿠스틱 기타와 같은 악기를 사용하여 연주되며, 가수의 목소리와 가사에 집중하는 형태로 선보입니다.',
  menu3:
    '힙합은 리듬과 랩을 중심으로 한 음악 장르로, 가사에 주목할 만한 중요성을 두고 있습니다. 힙합 음악은 강한 리듬과 특색 있는 비트, 개성 있는 랩 스타일로 이루어져 있으며, 자아 표현과 사회적인 문제에 대한 이야기를 전달하는 데 중점을 둡니다. 힙합은 다양한 서브 장르를 가지고 있으며, 다양한 아티스트들이 이를 통해 자신의 음악적 아이덴티티를 구축하고 있습니다.',
  menu4:
    '알앤비는 리듬과 블루스의 영향을 받은 음악 장르로, 감성적이고 몽환적인 멜로디와 소울풀한 보컬이 특징입니다. 알앤비 음악은 사랑, 감정, 관계 등을 주로 다루며, 부드러운 리듬과 섬세한 보컬 스타일을 가지고 있습니다. 다양한 아티스트들이 알앤비 장르에서 성공을 거두었으며, 현대 팝 음악에도 큰 영향을 미치고 있습니다.',
};

const introText = [
  {
    introImg: './assets/images/intro/intro01.png',
    iconImg: './assets/images/intro/intro01_01.png',
    title: '에드시런',
    desc: 'Ed Sheeran',
    link: 'https://www.youtube.com/watch?v=nSDgHBxUbVQ',
  },
  {
    introImg: './assets/images/intro/intro02.png',
    iconImg: './assets/images/intro/intro02_01.png',
    title: '해리 스타일스',
    desc: 'Harry Styles',
    link: 'https://www.youtube.com/watch?v=H5v3kku4y6Q',
  },
  {
    introImg: './assets/images/intro/intro03.png',
    iconImg: './assets/images/intro/intro03_01.png',
    title: '찰리 푸스',
    desc: 'Charlie Puth',
    link: 'https://www.youtube.com/watch?v=Nq3x1AkwgpY',
  },
  {
    introImg: './assets/images/intro/intro04.png',
    iconImg: './assets/images/intro/intro04_01.png',
    title: '저스틴 비버',
    desc: 'Justin Bieber',
    link: 'https://www.youtube.com/watch?v=tQ0yjYUFKAE',
  },
  {
    introImg: './assets/images/intro/intro05.png',
    iconImg: './assets/images/intro/intro05_01.png',
    title: '아델',
    desc: 'Adele',
    link: 'https://www.youtube.com/watch?v=U3ASj1L6_sY',
  },
  {
    introImg: './assets/images/intro/intro06.png',
    iconImg: './assets/images/intro/intro06_01.png',
    title: '테일러 스위프트',
    desc: 'Taylor Swift',
    link: 'https://www.youtube.com/watch?v=e-ORhEE9VVg',
  },
  {
    introImg: './assets/images/intro/intro07.png',
    iconImg: './assets/images/intro/intro07_01.png',
    title: '리한나',
    desc: 'Rihanna',
    link: 'https://www.youtube.com/watch?v=lWA2pjMjpBs',
  },
  {
    introImg: './assets/images/intro/intro08.png',
    iconImg: './assets/images/intro/intro08_01.png',
    title: '아리아나 그란데',
    desc: 'Ariana Grande',
    link: 'https://www.youtube.com/watch?v=gl1aHhXnN1k',
  },
];

const introText2 = [
  {
    introImg: './assets/images/intro/intro11.png',
    iconImg: './assets/images/intro/intro11_01.png',
    title: '선우정아',
    desc: 'Sunwoo Junga',
    link: 'https://www.youtube.com/watch?v=cl9_Nl2bbgA',
  },
  {
    introImg: './assets/images/intro/intro12.png',
    iconImg: './assets/images/intro/intro12_01.png',
    title: '정승환',
    desc: 'Jung Seung Hwan',
    link: 'https://www.youtube.com/watch?v=h7OSsqMj8Nk',
  },
  {
    introImg: './assets/images/intro/intro13.png',
    iconImg: './assets/images/intro/intro13_01.png',
    title: '최유리',
    desc: 'Choi Yu Ree',
    link: 'https://www.youtube.com/watch?v=Z2tv0GyQdL8',
  },
  {
    introImg: './assets/images/intro/intro14.png',
    iconImg: './assets/images/intro/intro14_01.png',
    title: '폴킴',
    desc: 'Paul Kim',
    link: 'https://www.youtube.com/watch?v=YBzJ0jmHv-4',
  },
  {
    introImg: './assets/images/intro/intro15.png',
    iconImg: './assets/images/intro/intro15_01.png',
    title: '권진아',
    desc: 'Kwon Jinah',
    link: 'https://www.youtube.com/watch?v=sOgsp64fw0M',
  },
  {
    introImg: './assets/images/intro/intro16.png',
    iconImg: './assets/images/intro/intro16_01.png',
    title: '박원',
    desc: 'PARK WON',
    link: 'https://www.youtube.com/watch?v=1hZa60t8wSE',
  },
  {
    introImg: './assets/images/intro/intro17.png',
    iconImg: './assets/images/intro/intro17_01.png',
    title: '태연',
    desc: 'Taeyeon',
    link: 'https://www.youtube.com/watch?v=qDW-sVVtTGk',
  },
  {
    introImg: './assets/images/intro/intro18.png',
    iconImg: './assets/images/intro/intro18_01.png',
    title: '성시경',
    desc: 'Sung Si Kyung',
    link: 'https://www.youtube.com/watch?v=nD1p_H3qo_A',
  },
];

const introText3 = [
  {
    introImg: './assets/images/intro/intro21.png',
    iconImg: './assets/images/intro/intro21_01.png',
    title: '애쉬 아일랜드',
    desc: 'ASH ISLAND',
    link: 'https://www.youtube.com/watch?v=qk9bccYpgEA&list=RDqk9bccYpgEA&start_radio=1',
  },
  {
    introImg: './assets/images/intro/intro22.png',
    iconImg: './assets/images/intro/intro22_01.png',
    title: '비오',
    desc: 'BE-O',
    link: 'https://www.youtube.com/watch?v=tsaOFqIP9dM',
  },
  {
    introImg: './assets/images/intro/intro23.png',
    iconImg: './assets/images/intro/intro23_01.png',
    title: '그리즐리',
    desc: 'Grizzly',
    link: 'https://www.youtube.com/watch?v=QtqZvXvinKo',
  },
  {
    introImg: './assets/images/intro/intro24.png',
    iconImg: './assets/images/intro/intro24_01.png',
    title: '서동현',
    desc: 'BIG Naughty',
    link: 'https://www.youtube.com/watch?v=SDsCCr21zXg',
  },
  {
    introImg: './assets/images/intro/intro25.png',
    iconImg: './assets/images/intro/intro25_01.png',
    title: '이영지',
    desc: 'Lee Young Ji',
    link: 'https://www.youtube.com/watch?v=g3rD2V4meGs',
  },
  {
    introImg: './assets/images/intro/intro26.png',
    iconImg: './assets/images/intro/intro26_01.png',
    title: '윤미래',
    desc: 'Yoonmirae',
    link: 'https://www.youtube.com/watch?v=1DK-MPh7vKk',
  },
  {
    introImg: './assets/images/intro/intro27.png',
    iconImg: './assets/images/intro/intro27_01.png',
    title: '치타',
    desc: 'CHEETAH',
    link: 'https://www.youtube.com/watch?v=d__iIt-00Gk',
  },
  {
    introImg: './assets/images/intro/intro28.png',
    iconImg: './assets/images/intro/intro28_01.png',
    title: '김승민',
    desc: 'Kim Seungmin',
    link: 'https://www.youtube.com/watch?v=XKpDYzVzqgE',
  },
];

const introText4 = [
  {
    introImg: './assets/images/intro/intro31.png',
    iconImg: './assets/images/intro/intro31_01.png',
    title: '크러쉬',
    desc: 'Crush',
    link: 'https://www.youtube.com/watch?v=vAa8R_ze6ZI',
  },
  {
    introImg: './assets/images/intro/intro32.png',
    iconImg: './assets/images/intro/intro32_01.png',
    title: '죠지',
    desc: 'George',
    link: 'https://www.youtube.com/watch?v=rtlq3yiFw6Y',
  },
  {
    introImg: './assets/images/intro/intro33.png',
    iconImg: './assets/images/intro/intro33_01.png',
    title: 'pH-1 ',
    desc: 'pH-1 ',
    link: 'https://www.youtube.com/watch?v=FFkLoUwQ9a4',
  },
  {
    introImg: './assets/images/intro/intro34.png',
    iconImg: './assets/images/intro/intro34_01.png',
    title: '비비',
    desc: 'BIBI',
    link: 'https://www.youtube.com/watch?v=gjyEcSim4js',
  },
  {
    introImg: './assets/images/intro/intro35.png',
    iconImg: './assets/images/intro/intro35_01.png',
    title: '수우',
    desc: 'soowoo',
    link: 'https://www.youtube.com/watch?v=qlshuJ-_g6U',
  },
  {
    introImg: './assets/images/intro/intro36.png',
    iconImg: './assets/images/intro/intro36_01.png',
    title: '콜드',
    desc: 'Colde',
    link: 'https://www.youtube.com/watch?v=mjVq7Ha_WtQ',
  },
  {
    introImg: './assets/images/intro/intro37.png',
    iconImg: './assets/images/intro/intro37_01.png',
    title: '네이비쿼카',
    desc: 'NavyQuokka',
    link: 'https://www.youtube.com/watch?v=OhrXHSASzV8',
  },
  {
    introImg: './assets/images/intro/intro38.png',
    iconImg: './assets/images/intro/intro38_01.png',
    title: '서리',
    desc: 'Seori',
    link: 'https://www.youtube.com/watch?v=e2Tdtw9RRyw',
  },
];

function IntroDesc({ introImg, iconImg, title, desc, link }) {
  return (
    <div className="Intro">
      <Link to={link} target="_blank">
        <figure className="Intro__header">
          <img src={introImg} alt={title} />
        </figure>
        <div className="Intro__body">
          <span>
            <img src={iconImg} alt={title} />
          </span>
          <div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function IntroSection() {
  const [activeButton, setActiveButton] = useState(introMenu.menu1);
  const [introData, setIntroData] = useState(introText);
  const [introDescription, setIntroDescription] = useState(introDesc.menu1);

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);

    if (buttonName === introMenu.menu2) {
      setIntroData(introText2);
      setIntroDescription(introDesc.menu2);
    } else if (buttonName === introMenu.menu3) {
      setIntroData(introText3);
      setIntroDescription(introDesc.menu3);
    } else if (buttonName === introMenu.menu4) {
      setIntroData(introText4);
      setIntroDescription(introDesc.menu4);
    } else {
      setIntroData(introText);
      setIntroDescription(introDesc.menu1);
    }
  };

  return (
    <section id="IntroSection" className="Intro__wrap gmarket5 center">
      <h3>{activeButton}</h3>
      <p>{introDesc[activeButton]}</p>
      <div className="Intro__inner container">
        <div className="Intro__btn">
          <button
            className={activeButton === introMenu.menu1 ? 'active' : ''}
            onClick={() => handleButtonClick(introMenu.menu1)}
          >
            {introMenu.menu1}
          </button>
          <button
            className={activeButton === introMenu.menu2 ? 'active' : ''}
            onClick={() => handleButtonClick(introMenu.menu2)}
          >
            {introMenu.menu2}
          </button>
          <button
            className={activeButton === introMenu.menu3 ? 'active' : ''}
            onClick={() => handleButtonClick(introMenu.menu3)}
          >
            {introMenu.menu3}
          </button>
          <button
            className={activeButton === introMenu.menu4 ? 'active' : ''}
            onClick={() => handleButtonClick(introMenu.menu4)}
          >
            {introMenu.menu4}
          </button>
        </div>
        <div className="Intro__content">
          {/* <h3>{introMenu[activeButton]}</h3> */}
          {/* <p>{introDesc[activeButton]}</p> */}
          <ul>
            {introData.map(item => (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="Intro__cont2">
          {introData.map((text, index) => (
            <IntroDesc
              key={index}
              introImg={text.introImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
              link={text.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
