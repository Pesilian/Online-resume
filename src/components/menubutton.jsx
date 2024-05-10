import { useNavigate } from 'react-router-dom';

const MenuButton = props => {
  const navigera = useNavigate();

  //ANvänder props för att kunna göra min komponent flexibel om jag vill lägga till fler pages osv

  const handleClick = () => {
    navigera(props.path);
  };

  return (
    <button onClick={handleClick} className="meny-button">
      {props.buttontext}
    </button>
  );
};

export default MenuButton;
