import Header from '../components/header';
import InfoCards from '../components/infocards';
import '../styles/about.css';
import profilbild from '../assets/profilbild.jpg';
import InfoGallery from '../components/infogallery';

const About = () => {
  return (
    <div className="page-container">
      <Header></Header>
      <div className="ommig-container">
        {/* <InfoCards infotext="Här är info om mig! " /> */}
        <InfoGallery />
      </div>
    </div>
  );
};
export default About;
