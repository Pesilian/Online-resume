import '../styles/infocards.css';

const InfoCards = props => {
  return (
    <div>
      <div className="card-container">
        <img src={props.img} className="card-img" />
        <div className="info">
          <p>{props.infotext}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
