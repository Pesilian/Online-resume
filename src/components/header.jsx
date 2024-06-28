import '../styles/header.css';
import MenuButton from './menubutton';

//Knapparna till min meny är gjord som en egen komponent under menubutton

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header">Page Header</h1>
      <div className="button-container">
        <MenuButton buttontext="About" path="/" />
        <MenuButton buttontext="Projects" path="/projects" />
        <MenuButton buttontext="Contacts" path="/contacts" />
      </div>
    </div>
  );
};
export default Header;
