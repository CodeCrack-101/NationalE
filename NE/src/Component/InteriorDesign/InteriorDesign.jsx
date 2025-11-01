import React from 'react';
import './Section.css'; // Your existing CSS
import { FaBullseye, FaEye, FaSlidersH } from 'react-icons/fa';

// Import slider components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Card data (your data)
const cardData = [
  {
    image: './i.png',
    icon: <FaBullseye />,
    title: 'Vinyl', // Added title back for example
    text: ' Extremely durable, moisture-resistant, and easy to clean.' // Added text back
  },
  {
    image: './i1.png',
    icon: <FaEye />,
    title: 'Foil',
    text: 'A paper with a metallic, foil-like finish that can create a reflective, modern effect. '
  },
  {
    image: './i2.png',
    icon: <FaSlidersH />,
    title: 'Textured Wallpaper',
    text: 'A broad category that includes various materials and designs'
  },
  
];

// Reusable Card Component (No changes needed here)
const Card = ({ image, icon, title, text }) => (
  <div className="card">
    <div className="card-image-container">
      <img src={image} alt={title} className="card-image" />
      <div className="card-icon">
        {icon}
      </div>
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
      <a href="#" className="card-button">View More</a>
    </div>
  </div>
);

// Main Section Component (Now with Slider)
const MissionSection = () => {
  const settings = {
    dots: true,       // Show navigation dots
    infinite: true,   // Loop the slider
    speed: 500,       // Transition speed
    slidesToShow: 3,  // Show 3 cards at a time on desktop
    slidesToScroll: 1, // Scroll 1 card at a time
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="cards-slider-container">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </Slider>
    </section>
  );
};

export default MissionSection;