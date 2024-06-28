import '../styles/aboutinfo.css';
import profilbild from '../assets/bild1.jpg';

//Här är informationen om mig som hamnar på förstasidan. En kort presentation och bild.
const Info = () => {
  return (
    <div>
      <div>
        <img src={profilbild} className="img" />
        <div>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe
            delectus eius nemo cum voluptatibus sequi, dolor non aliquid facere,
            facilis rerum est quod odio ratione dolores nam incidunt
            consequatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
