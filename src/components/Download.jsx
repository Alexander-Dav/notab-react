import React from 'react';
import appStore from './../images/app-store-ram.webp';
import googlePlay from './../images/google-play-ram.webp';

const Download = () => {
  return (
    <div className="download">
      <div className="container">
        <div className=" download__inner">
          <div className="download__text">DOWNLOAD OUR APP</div>
          <div className="download__image">
            <a className="download__image-store" href="#">
              <img src={appStore} />
            </a>
            <a className="download__image-google" href="#">
              <img src={googlePlay} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
