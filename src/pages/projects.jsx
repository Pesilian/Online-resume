import Header from '../components/header';
import GitAPI from '../components/GitAPIaxios';

const Projects = () => {
  return (
    <div className="page-container">
      <Header />
      <GitAPI username="pesilian" />
    </div>
  );
};

export default Projects;
