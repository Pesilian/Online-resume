import React from 'react';
import { Field, reduxForm } from 'redux-form';

const onSubmit = formValues => {
  console.log('form data', formValues);
};

let ContactForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Namn:</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Mail:</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="message">Meddelande:</label>
        <Field name="message" component="textarea" />
      </div>
      <button type="submit">Skicka</button>
    </form>
  );
};

ContactForm = reduxForm({
  form: 'contact', // ett unikt namn för detta formulär
})(ContactForm);
export default ContactForm;
