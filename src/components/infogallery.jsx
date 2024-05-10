//Här fanns en tanke att göra ett galleri med olika sektioner i Om Mig delen.

// import React from 'react';
// import InfoCards from './infocards';
// import { useState } from 'react';
// import linasbild from '../assets/linasbild.png';
// import '../styles/infocards.css';
// import arrowleft from '../assets/arrow-circle-left.png';
// import arrowright from '../assets/arrow-circle-right.png';

// const InfoGallery = () => {
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);

//   // Array av objekt med information för varje kort
//   const cardData = [
//     {
//       id: 1,
//       img: linasbild,
//       infotext:
//         ' Jag heter Lina och är en nyutexaminerad frontendutvecklare med en passion för att skapa användarvänliga och estetiskt tilltalande webbplatser och appar. Under min utbildning har jag fått en gedigen grund inom HTML, CSS och JavaScript och har även utforskat ramverk som React. Jag brinner för att lära mig nya teknologier och tillämpa dem för att skapa moderna och responsiva användargränssnitt. Med min entusiasm, kreativitet och vilja att växa som utvecklare är jag redo att ta mig an spännande utmaningar och bidra till innovativa projekt inom frontendutveckling.',
//     },
//     { id: 2, img: 'image2.jpg', infotext: 'Text för kort 2' },
//     { id: 3, img: 'image3.jpg', infotext: 'Text för kort 3' },
//     // Lägg till fler objekt för fler kort
//   ];

//   const nextCard = () => {
//     setCurrentCardIndex(prevIndex =>
//       prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevCard = () => {
//     setCurrentCardIndex(prevIndex =>
//       prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="info-gallery">
//       <InfoCards
//         key={cardData[currentCardIndex].id}
//         img={cardData[currentCardIndex].img}
//         infotext={cardData[currentCardIndex].infotext}
//       />
//       <div className="buttoncontainer">
//         <button className="nextbutton" onClick={prevCard}>
//           <img src={arrowleft} />
//         </button>
//         <button className="previousbutton" onClick={nextCard}>
//           <img src={arrowright} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InfoGallery;
