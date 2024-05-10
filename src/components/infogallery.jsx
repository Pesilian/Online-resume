import React from 'react';
import InfoCards from './infocards';
import { useState } from 'react';

const InfoGallery = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Array av objekt med information för varje kort
  const cardData = [
    { id: 1, img: 'image1.jpg', infotext: 'Text för kort 1' },
    { id: 2, img: 'image2.jpg', infotext: 'Text för kort 2' },
    { id: 3, img: 'image3.jpg', infotext: 'Text för kort 3' },
    // Lägg till fler objekt för fler kort
  ];

  const nextCard = () => {
    setCurrentCardIndex(prevIndex =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentCardIndex(prevIndex =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="info-gallery">
      <button onClick={prevCard}>Föregående</button>
      <InfoCards
        key={cardData[currentCardIndex].id}
        img={cardData[currentCardIndex].img}
        infotext={cardData[currentCardIndex].infotext}
      />
      <button onClick={nextCard}>Nästa</button>
    </div>
  );
};

export default InfoGallery;
