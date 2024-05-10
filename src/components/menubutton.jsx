import { useNavigate } from 'react-router-dom';

const MenuButton = props => {
  const navigera = useNavigate();

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
