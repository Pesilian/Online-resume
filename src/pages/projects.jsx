import Header from '../components/header';
import GitAPI from '../components/fetchAPI';

const Projects = () => {
  return (
    <div className="page-container">
      <Header></Header>
      <GitAPI></GitAPI>
    </div>
  );
};

export default Projects;
