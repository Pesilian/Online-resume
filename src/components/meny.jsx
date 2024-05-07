import '../styles/meny.css';
import { useNavigate } from 'react-router-dom';

const Meny = () => {
  const navigera = useNavigate();

  const handleButtonClick1 = () => {
    navigera('/');
  };
  const handleButtonClick2 = () => {
    navigera('/projekt');
  };
  const handleButtonClick3 = () => {
    navigera('/kontakt');
  };

  return (
    <div className="header-container">
      <h1 className="header">Lina Persson Signell</h1>
      <div className="button-container">
        <button onClick={handleButtonClick1} className="meny-button">
          Om Mig
        </button>
        <button onClick={handleButtonClick2} className="meny-button">
          Projekt
        </button>
        <button onClick={handleButtonClick3} className="meny-button">
          Kontakt
        </button>
      </div>
    </div>
  );
};
export default Meny;
