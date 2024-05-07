import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../styles/form.css';

const onSubmit = formValues => {
  console.log('form data', formValues);
};

let ContactForm = props => {
  const { handleSubmit } = props;

  return (
    <form className="inputform" onSubmit={handleSubmit(onSubmit)}>
      <div className="inputname">
        <label htmlFor="name">Namn:</label>
        <Field className="" name="name" component="input" type="text" />
      </div>
      <div className="inputmail">
        <label htmlFor="email">Mail:</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div className="inputmessage">
        <label htmlFor="message">Meddelande:</label>
        <Field name="message" component="textarea" />
      </div>
      <button className="submitbutton" type="submit">
        Skicka
      </button>
    </form>
  );
};

ContactForm = reduxForm({
  form: 'contact', // ett unikt namn för detta formulär
})(ContactForm);
export default ContactForm;
