import React from 'react';
import presentPhone from './../images/present-phone.webp';
import appStore from './../images/app-store.webp';
import googlePlay from './../images/google-play.webp';

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="container">
        <div className="presentation__content">
          <div className="presentation__heading">
            <h1 className="presentation__title">
              A platform
              <br />
              that works smarter
            </h1>
            <div className="presentation__text">
              NoTab allows bars & nightclubs to manage, understand, and grow their business from a
              single dashboard
            </div>
          </div>
          <div className="presentation__image-phone">
            <img src={presentPhone} />
          </div>
        </div>
        <div className="presentation__download">
          <div className="presentation__download-text">DOWNLOAD OUR APP</div>
          <div className=" presentation__download-image">
            <a className="presentation__download-image-store" href="#">
              <img src={appStore} />
            </a>
            <a className="presentation__download-image-google" href="#">
              <img src={googlePlay} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
