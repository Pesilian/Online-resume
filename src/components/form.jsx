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
      <div className="name">
        <label htmlFor="name">Namn:</label>
        <Field
          className="nameinput"
          name="name"
          component="input"
          type="text"
        />
      </div>
      <div className="mail">
        <label htmlFor="email">Mail:</label>
        <Field
          className="emailinput"
          name="email"
          component="input"
          type="email"
        />
      </div>
      <div className="message">
        <label htmlFor="message">Meddelande:</label>
        <Field className="messageinput" name="message" component="textarea" />
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
