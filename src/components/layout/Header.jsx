import React from 'react';

import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header id="header" className={props.attr} role="heading" aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo">
          <Link to="/">
            SEOLHEE <em>site</em>
          </Link>
        </h1>
        <div className="header__nav" role="navigation">
          <ul>
            <li>
              <Link to="/intro">아티스트</Link>
            </li>
            <li>
              <Link to="/mv">MV</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브</Link>
            </li>
            <li>
              <Link to="/unsplash">이미지</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
