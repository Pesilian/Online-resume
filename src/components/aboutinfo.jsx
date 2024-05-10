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
            Jag heter Lina och är en nyutexaminerad frontendutvecklare med en
            passion för att skapa användarvänliga och estetiskt tilltalande
            webbplatser och appar. <br />
            Under min utbildning har jag fått en gedigen grund inom HTML, CSS
            och JavaScript och har även utforskat ramverk som React.
            <br />
            Jag brinner för att lära mig nya teknologier och tillämpa dem för
            att skapa moderna och responsiva användargränssnitt.
            <br />
            Med min entusiasm, kreativitet och vilja att växa som utvecklare är
            jag redo att ta mig an spännande utmaningar och bidra till
            innovativa projekt inom frontendutveckling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
