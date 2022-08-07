import React from 'react';
import scannerPhone1 from './../images/scanner-phone1.webp';
import scannerPhone2 from './../images/scanner-phone2.webp';

const Scanner = () => {
  return (
    <section className="scanner">
      <div className="container">
        <div className="scanner__vector">
          <div className="scanner__inner">
            <div className="scanner__image">
              <img className="scanner__image-item" src={scannerPhone1} />
              <img className="scanner__image-item" src={scannerPhone2} />
            </div>
            <div className="scanner__info">
              <h2 className="scanner__title title">ID Scanner</h2>
              <div className="scanner__text">
                Scan, verify, and collect data on each person that walks through your door to
                humanize your data. You also get a digital 86 list as well as a citywide ban list to
                keep your venue safe.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scanner;
