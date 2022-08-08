import { useFormik } from 'formik';
import React from 'react';
import { bacicSchema } from '../schemas';

const onSubmit = () => {
  console.log('submit');
};

const Feedback = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        username: '',
        venuename: '',
        venuecity: '',
        statecity: '',
        email: '',
        subject: '',
        message: '',
      },
      validationSchema: bacicSchema,
      onSubmit,
    });
  console.log(values);
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

            <form onSubmit={handleSubmit} autoComplete="off">
              <input
                value={values.username}
                onChange={handleChange}
                id="username"
                type="text"
                placeholder="Name"
                className={errors.username ? 'form-line input-error ' : 'form-line'}
              />
              <input
                value={values.venuename}
                onChange={handleChange}
                id="venuename"
                type="text"
                placeholder="Venue Name"
                className={errors.venuename ? 'form-line input-error ' : 'form-line'}
              />
              <input
                value={values.venuecity}
                onChange={handleChange}
                id="venuecity"
                type="text"
                placeholder="Venue City"
                className={errors.email ? 'form-line__venue input-error ' : 'form-line__venue'}
              />
              <input
                value={values.statecity}
                onChange={handleChange}
                id="statecity"
                type="text"
                placeholder="State City"
                className={errors.email ? 'form-line__state input-error ' : 'form-line__state'}
              />
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Email"
                className={errors.email ? 'form-line input-error ' : 'form-line'}
              />
              <input
                value={values.subject}
                onChange={handleChange}
                id="subject"
                type="text"
                placeholder="Subject"
                className={errors.subject ? 'form-line input-error ' : 'form-line'}
              />
              <textarea
                value={values.message}
                onChange={handleChange}
                id="message"
                type="text"
                placeholder="Message"
                className={
                  errors.message ? 'form-line__message form-line__error' : 'form-line__message   '
                }
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
