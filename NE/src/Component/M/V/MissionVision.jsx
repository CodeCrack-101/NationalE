import React from "react";
import './MissionVision.css';

// Import icons from react-icons
// Example icons: FaGlobe for mission, FaLightbulb for vision
import { FaGlobe, FaLightbulb } from 'react-icons/fa'; 

const MissionVision = () => {
  return (
    <div className="all">
      <div className="mission">
        {/* Replaced img with a div containing the icon */}
        <div className="mission-icon-wrapper">
          <FaGlobe className="mission-icon" />
        </div>
        <div className="m1">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iusto
            voluptas porro officiis at. Fuga, eligendi. Deleniti, quas tempore
            tenetur optio dolor totam ullam necessitatibus molestias magni ipsam
            inventore hic?
          </p>
        </div>
      </div>
      
      <div className="mission">
        <div className="m1">
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iusto
            voluptas porro officiis at. Fuga, eligendi. Deleniti, quas tempore
            tenetur optio dolor totam ullam necessitatibus molestias magni ipsam
            inventore hic?
          </p>
        </div>
        {/* Replaced img with a div containing the icon */}
        <div className="mission-icon-wrapper">
          <FaLightbulb className="mission-icon" />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;