import Header from '../components/header';
import InfoCards from '../components/infocards';
import '../styles/about.css';

const About = () => {
  return (
    <div className="page-container">
      <Header></Header>
      <div className="ommig-container">
        <InfoCards></InfoCards>
      </div>
    </div>
  );
};
export default About;
