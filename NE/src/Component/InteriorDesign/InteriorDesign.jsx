import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Section.css";

const sliderData = [
  {
    img: "3d.png",
    name: "3D Wallpaper",
    desc: "Premium 3D textured designs that bring depth, realism, and luxury to your walls."
  },
  {
    img: "w1.png",
    name: "Customized Wallpaper",
    desc: "Tailor-made wallpaper crafted uniquely for your space, theme, and personal style."
  },
  {
    img: "f1.png",
    name: "Wallpaper Accessories",
    desc: "High-quality wallpaper tools and decorative accessories for premium finishing."
  }
];


const InteriorDesign = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate()

  // Auto-slide every 3 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderData.length);
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {sliderData.map((p, i) => (
          <div className="slide" key={i}>
            <div className="team-card">
              <div className="card-top">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="card-content">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <button onClick={()=>navigate('/product')} >View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="dots">
        {sliderData.map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`dot ${index === dotIndex ? "active" : ""}`}
            onClick={() => setIndex(dotIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InteriorDesign;
