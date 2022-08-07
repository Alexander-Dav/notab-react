import React from 'react';
import Cookie from './Cookie';
import notab from '../images/footer-logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <div className="footer__info-logo">
              <img src={notab} />
            </div>
            Contact us:
            <a className="footer__info-contact" href="mailto:support@notab.com">
              support@notab.com
            </a>
            <div className="footer__info-text"> © 2020 - NoTab®</div>
          </div>
          <div className="footer__content-linktext">
            <a className="footer__content-link">Terms to use</a>
            <a className="footer__content-link">Privacy policy</a>
          </div>
        </div>
      </div>
      <Cookie />
    </footer>
  );
};

export default Footer;
