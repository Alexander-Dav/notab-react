import React from 'react';
import image from './../images/image.webp';

const NotabBackground = () => {
  return (
    <section className="notabbackground">
      <div className="container">
        <div className="notabbackground__inner">
          <div className="notabbackground__image">
            <img className="notabbackground__image-item" src={image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotabBackground;
