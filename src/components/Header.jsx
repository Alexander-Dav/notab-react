import React from 'react';
import logo from './../images/Cube.webp';
import noTab from './../images/NoTab.webp';
import loginLogo from './../images/login-logo.webp';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img className="header__logo" src={logo} alt="Logo" />
          <img className="header__noTab" src={noTab} alt="noTab" />
          <div className="header-login">
            <img className="header-login__login-image" src={loginLogo} />
            <a className="header-login__login-textLink" href="#">
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
