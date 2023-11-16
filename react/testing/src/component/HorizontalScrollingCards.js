import React from 'react';
import './HorizontalScrollingCards.css'; // You can create a CSS file for styling

const cardsData = [
  { id: 1, title: 'Card 1', content: 'Lorem ipsum content for Card 1' },
  { id: 2, title: 'Card 2', content: 'Lorem ipsum content for Card 2' },
  { id: 3, title: 'Card 3', content: 'Lorem ipsum content for Card 3' },
  { id: 4, title: 'Card 1', content: 'Lorem ipsum content for Card 1' },
  { id: 5, title: 'Card 2', content: 'Lorem ipsum content for Card 2' },
  { id: 6, title: 'Card 3', content: 'Lorem ipsum content for Card 3' },
  // Add more cards as needed
];

const HorizontalScrollingCards = () => {
  return (
    <div className="horizontal-scrolling-cards">
      <div className="cards-container">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollingCards;
