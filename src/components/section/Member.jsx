import React from 'react';

import { Link } from 'react-router-dom';

const Member = props => {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>한국 대표 가수</h3>
      <p>한국을 대표하는 자랑스러운 가수들을 소개해드립니다.</p>

      <div className="member__inner container">
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/bts01.svg" alt="멤버1" />
          </figure>
          <div className="member__body m1">
            <h4 className="title">BTS</h4>
            <Link to="/" className="btn">
              자세히 보기
            </Link>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/blackpink01.svg" alt="멤버2" />
          </figure>
          <div className="member__body m2">
            <h4 className="title">BLACK PINK</h4>
            <Link to="/" className="btn">
              자세히 보기
            </Link>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/psy01.svg" alt="멤버3" />
          </figure>
          <div className="member__body m3">
            <h4 className="title">PSY</h4>
            <Link to="/" className="btn">
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
