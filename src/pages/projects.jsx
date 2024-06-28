import Header from '../components/header';
import GitHubProjects from '../components/Githubprojects';
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
      <div className="container">
        <h2 className="heading">Github</h2>
        <p className="apiinfo">
          Här kan du se mina repos på github.
          <br /> Har du någon feedback eller kommentar får du gärna skicka ett
          meddelande via mitt formulär som du hittar{' '}
          <a className="formlink" onClick={handleClick}>
            här!
          </a>
        </p>
        <GitHubProjects username="pesilian" />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
