import Header from '../components/header';
import GitAPI from '../components/GitAPIaxios';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

import '../styles/projects.css';

const Projects = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav('/kontakt');
  };
  return (
    <div className="page-container">
      <Header />
      <p className="apiinfo">
        Här kan du se mina repos på github.
        <br /> Har du någon feedback eller kommentar får du gärna skicka ett
        meddelande via mitt formulär som du hittar{' '}
        <a className="formlink" onClick={handleClick}>
          här!
        </a>
      </p>
      <GitAPI username="pesilian" />
      <Footer />
    </div>
  );
};

export default Projects;
