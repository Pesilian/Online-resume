import Header from '../components/header';
import GitAPI from '../components/GitAPIaxios';
import Footer from '../components/footer';

const Projects = () => {
  return (
    <div className="page-container">
      <Header />
      <GitAPI username="pesilian" />
      <Footer />
    </div>
  );
};

export default Projects;
