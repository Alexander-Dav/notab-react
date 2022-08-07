import React from 'react';
import orderPhone from './../images/order-phone.webp';

const Order = () => {
  return (
    <section className="order">
      <div className="container">
        <div className="order__inner">
          <div className="order__info">
            <h2 className="order__title title">Easier ordering. Happier guests.</h2>
            <div className="order__text">NoTab makes it simple for patrons to easily</div>
          </div>
          <div className="order__image">
            <img className="order__image-order" src={orderPhone} />
            <div className="order__box">
              <div className="order__box-item-1 order__box-item">
                No more lost or forgotten credit cards
              </div>
              <div className="order__box-item-2 order__box-item">
                No more lost or forgotten credit cards
              </div>
              <div className="order__box-item-3 order__box-item">Skip the line</div>
              <div className="order__box-item-4 order__box-item">No more split your tab</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
