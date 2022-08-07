import React from 'react';
import generatePhone from './../images/generate-phone.webp';
import arrow1 from './../images/Arrow 1.webp';

const Generate = () => {
  return (
    <section className="generate">
      <div className="container">
        <div className="generate__inner">
          <div className="generate__image">
            <div className="generate__image-item">
              <img className="generate__image-item-1" src={generatePhone} />
            </div>
            <div className="generate__title-arrow">
              <img className="generate__arrow" src={arrow1} />
              <div className="generate__title title">Scan QR-code</div>
            </div>
          </div>
          <div className="generate__info">
            <h2 className="generate__info-title title">Generate your QR-code</h2>
            <div className="generate__info-text">
              The guest QR code is scanned by the staff and automatically sent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generate;
