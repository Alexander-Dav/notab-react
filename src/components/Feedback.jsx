import React from 'react';

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback__inner">
          <div className="feedback__info">
            <h2 className="feedback__title title">Get In Touch</h2>
            <div className="feedback__text">
              Have questions about Noble or just want to say hello? <br />
              Drop us a line and a member of our team will getback to you shortly.
            </div>
            <form id="form" className="form">
              <div className="form-line">
                <input type="text" placeholder="Name" id="username" />
              </div>
              <div className="form-line">
                <input type="text" placeholder="Venue Name" id="venuename" />
              </div>
              <div className="form-line__venue">
                <input type="text" placeholder="Venue City" id="venuecity" />
              </div>
              <div className="form-line__state">
                <input type="text" placeholder="State City" id="statecity" />
              </div>
              <div className="form-line">
                <input type="text" placeholder="Email" id="email" />
              </div>
              <div className="form-line">
                <input type="text" placeholder="Subject" id="subject" />
              </div>
              <div className="form-line">
                <input type="text" placeholder="Message" id="message" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
