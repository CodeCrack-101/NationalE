import React, { useState } from 'react';
import './Section.css'; // We will create this CSS file next

// Sample data for the cards
const cardData = [
  {
    img: './image1.png',
    title: 'Geometric Elegance',
    des: 'Bold abstract lines and modern shapes for a stunning feature wall.',
  },
  {
    img: './image2.png',
    title: 'Serene Botanicals',
    des: 'Bring the calming beauty of nature indoors with subtle leaf patterns.',
  },
  {
    img: './image3.png',
    title: 'Cozy Textures',
    des: 'Soft, fabric-like designs that add warmth and depth to any room.',
  },
  {
    img: './image4.png',
    title: 'Minimalist Mood',
    des: 'Simple, clean patterns perfect for creating a bright and airy space.',
  },
];

const InteriorDesign = () => {
  // 'useState' holds the index of the currently active card
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    // If it's the first slide, go to the last one. Otherwise, go back one.
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? cardData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    // If it's the last slide, go to the first one. Otherwise, go forward one.
    const isLastSlide = currentIndex === cardData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      {/* This is the track that moves. We use CSS transform to slide it. */}
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* We map over the data to create a card for each item */}
        {cardData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} className="card-image" />
            <div className="card-content">
              <h1>{item.title}</h1>
              <p>{item.des}</p>
              <button>View More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button className="slider-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default InteriorDesign;