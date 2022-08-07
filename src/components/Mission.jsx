import React from 'react';
import missionPhone from './../images/mission-phone.webp';

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <div className="mission__inner">
          <div className="mission__image">
            <img src={missionPhone} />
          </div>
          <div className="mission__info">
            <h2 className="mission__title title">Our mission and vision</h2>
            <div className="mission__text">
              While technology is our sweet spot, we’ve developed our vision alongside our customers
              to ensure your everyday problems are solved through simplistic tools. And as your
              business grows, we’ll grow right alongside with you.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
