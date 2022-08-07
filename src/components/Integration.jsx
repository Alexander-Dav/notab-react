import React from 'react';
import integration1 from './../images/integration1.webp';
import integration2 from './../images/integration2.webp';
import integration3 from './../images/integration3.webp';
import integration4 from './../images/integration4.webp';
import integration5 from './../images/integration5.webp';
import integration6 from './../images/integration6.webp';
import integration7 from './../images/integration7.webp';

const Integration = () => {
  return (
    <section className="integration">
      <div className="container">
        <div className="integration__inner">
          <div className="integration__info">
            <h2 className="integration__title title">BI Tool Integration</h2>
            <div className="integration__text">
              We use Business Intelligence Tool that allows you to be updated what is happening in
              your business just by one click. Track revenue and profit by one click.
            </div>
          </div>
          <div className="integration__image">
            <img className="integration__image-item integration__image-item-1" src={integration1} />
            <img className="integration__image-item integration__image-item-2" src={integration2} />
            <img className="integration__image-item integration__image-item-3" src={integration3} />
            <img className="integration__image-item integration__image-item-4" src={integration4} />
            <img className="integration__image-item integration__image-item-5" src={integration5} />
            <img className="integration__image-item integration__image-item-6" src={integration6} />
            <img className="integration__image-item integration__image-item-7" src={integration7} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
