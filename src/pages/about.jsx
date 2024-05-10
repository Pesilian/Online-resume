import Header from '../components/header';
import Info from '../components/aboutinfo';
import '../styles/about.css';
import Footer from '../components/footer';

const About = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="container">
        <h2 className="heading">Om mig</h2>
        <Info />
      </div>

      <Footer />
    </div>
  );
};
export default About;
