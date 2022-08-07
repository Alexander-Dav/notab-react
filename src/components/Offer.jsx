import React from 'react';

const Offer = () => {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__inner">
          <div className="offer__item offer__item-mail">
            <div className="offer__info">
              <div className="offer__text">Would like to become a member, please contact us</div>
              <a className="offer__link" href="mailto:support@notab.com">
                support@notab.com
              </a>
            </div>
          </div>
          <div className="offer__item offer__item-login">
            <div className="offer__info ">
              <div className="offer__text"> Already a partner? </div>
              <a className="offer__link" href="#">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
