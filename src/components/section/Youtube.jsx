import React from 'react';
import { Link } from 'react-router-dom';

const youtube = props => {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>당신의 음악 취향을 충족시킬 유튜버</h3>
          <p>
            음악의 다양한 매력을 느끼게 해주는
            <br />
            음악을 사랑하는 이들을 위한 열정이 가득한 유튜버들을 만나보세요.
          </p>
          <Link to="/youtube" className="button-red">
            자세히 보기
          </Link>
        </div>
        <div className="youtube__item">
          <div>
            <Link to="https://www.youtube.com/watch?v=ZS6HeUBNWVw">
              <img src="./assets/images/youtube/youtube01.svg" alt="제이플라" />
            </Link>
            <span>J Fla - To Me</span>
          </div>
          <div>
            <Link to="https://www.youtube.com/watch?v=CgkDpBHmlxk">
              <img src="./assets/images/youtube/youtube02.svg" alt="예빛" />
            </Link>
            <span>Yesterday - The Beatles</span>
          </div>
          <div>
            <Link to="https://www.youtube.com/watch?v=JNk8AfSvdM4">
              <img src="./assets/images/youtube/youtube03.svg" alt="예빈나다" />
            </Link>
            <span>봄의 고백 - Yeahshine</span>
          </div>
          <div>
            <Link to="https://www.youtube.com/watch?v=hCsxrEYR7yI">
              <img src="./assets/images/youtube/youtube04.svg" alt="정성하" />
            </Link>
            <span>Bohemian Rhapsody - Sungha Jung</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default youtube;
