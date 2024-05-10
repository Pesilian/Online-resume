import '../styles/header.css';
import MenuButton from './menubutton';

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header">Lina Persson Signell</h1>
      <div className="button-container">
        <MenuButton buttontext="Om mig" path="/" />
        <MenuButton buttontext="Projekt" path="/projekt" />
        <MenuButton buttontext="Kontakt" path="/kontakt" />
      </div>
    </div>
  );
};
export default Header;
