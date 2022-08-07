import React from 'react';
import appStore from './../images/app-store.webp';
import googlePlay from './../images/google-play.webp';
import codePhone1 from './../images/code-phone1.webp';
import codePhone2 from './../images/code-phone2.webp';

const Code = () => {
  return (
    <section className="code">
      <div className="container">
        <div className="code__inner">
          <div className="code__info">
            <h2 className="code__title title">QR code</h2>
            <div className="code__text">
              No more conflict situations due to wrong order. The guest selects the positions, and
              after that an individual QR code of his order is generated
            </div>
            <div className="code__download">
              <a className="code__image-store" href="#">
                <img src={appStore} />
              </a>
              <a className="code__image-google" href="#">
                <img src={googlePlay} />
              </a>
            </div>
          </div>
          <div className="code__image">
            <img className="code__image-item code__image-item-1" src={codePhone1} />
            <img className="code__image-item code__image-item-2" src={codePhone2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Code;
