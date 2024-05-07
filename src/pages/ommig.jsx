import Meny from '../components/meny';
import InfoKort from '../components/info-kort';
import '../styles/ommig.css';

const OmMig = () => {
  return (
    <div className="page-container">
      <Meny></Meny>
      <div className="ommig-container">
        <InfoKort></InfoKort>
      </div>
    </div>
  );
};
export default OmMig;
