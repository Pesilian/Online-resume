import ContactForm from '../components/form';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="container">
        <h2 className="heading">Contact</h2>
        <p className="contactinfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque
          nihil sed, dolorem sequi vel expedita a necessitatibus, aperiam amet
          consequuntur quidem rerum! Suscipit iure odit explicabo tempora, atque
          quasi.{' '}
        </p>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
