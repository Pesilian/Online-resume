import ContactForm from '../components/form';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <Header />
      <p className="contactinfo">
        Jag nås lättast på mail: linasignell@live.se <br /> Men det går även bra
        att ringa mig på telefonnummer: +46707333097
        <br />
        Det går även bra att skriva till mig via kontaktformuläret nedan så hör
        jag av mig så fort jag kan!
      </p>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
