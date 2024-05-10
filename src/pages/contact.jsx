import ContactForm from '../components/form';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="container">
        <h2 className="heading">Kontakt</h2>
        <p className="contactinfo">
          Det går bra att skriva till mig via kontaktformuläret nedan så hör jag
          av mig så fort jag kan!
        </p>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
