import React, { useState } from 'react';
import './ShopReviews.css';

const reviewsData = [
  {
    id: 1,
    text: "Bhai bhot achi wallpaper service di hai, walls bilkul new jaise lag rahe hain. Design finishing ekdum perfect hai aur jo price bataya tha woh bhi affordable tha.",
    author: "Juniad Khan"
  },
  {
    id: 2,
    text: "I contacted them for wallpaper installation in my office, and the work was done perfectly. The walls look brand new now. The team was punctual, professional, and the pricing was very reasonable. Highly recommended.",
    author: "Faizan Khan"
  },
  {
    id: 3,
    text: "Excellent wallpaper service. Quality material was used and everything was explained properly before installation. Reasonable pricing and quick home service with full assurance.",
    author: "Afghan Khan"
  },
  {
    id: 4,
    text: "Highly recommended for wallpaper installation and replacement work. Very professional team and outstanding finishing. Truly experienced and reliable service.",
    author: "Manihar Sohail"
  }  
];

const reviewUrl = "";

function ShopReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    const isFirstReview = currentIndex === 0;
    const newIndex = isFirstReview ? reviewsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextReview = () => {
    const isLastReview = currentIndex === reviewsData.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentReview = reviewsData[currentIndex];

  return (
    <div className="reviews-container">
      <h2>What Our Customers Say</h2>
      
      <div className="review-display-area"> {/* New wrapper for review and arrows */}
        {/* Display only the current review card */}
        <div className="review-card">
          <p className="review-text">"{currentReview.text}"</p>
          <p className="review-author">- {currentReview.author}</p>
        </div>
        
        {/* Arrows are now below the card */}
        <div className="review-navigation">
          <button onClick={prevReview} className="nav-button prev-button">
            &lt; 
          </button>
          <button onClick={nextReview} className="nav-button next-button">
            &gt;
          </button>
        </div>
      </div>
      
      {/* The main button remains at the bottom */}
      <a 
        href={reviewUrl} 
        className="review-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Write a Review
      </a>
    </div>
  );
}

export default ShopReviews;