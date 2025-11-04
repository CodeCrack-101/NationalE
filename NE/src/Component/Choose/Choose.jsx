import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Choose.css'
const WhyChooseUs = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="why-choose-us-section">
        <div className="header-content">
          <div className="header-text">
            <h2 className="header-title">Why Choose Us?</h2>
            <p className="header-description">
              Transform your space with our extensive wallpaper collection, featuring everything from timeless classic patterns 
              to stunning 3D murals and fully customized designs. We pride ourselves on premium, long-lasting quality
              and professional installation, all at competitive prices.
            </p>
          </div>
          <div className="header-button-wrapper">
            <a href="#collection" onClick={()=>navigate('/contact')} className="action-button">Contact</a>
          </div>
        </div>

        <div className="features-grid">
          {/* Card 1: Extensive Collection */}
          <div className="feature-card dark-theme">
            <div className="feature-icon">
              {/* SVG for layers/collection icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l-5.5 9h11L12 2z"></path>
                <path d="M12 2l-5.5 9h11L12 2z" transform="translate(0, 6)"></path>
                <path d="M12 2l-5.5 9h11L12 2z" transform="translate(0, 12)"></path>
              </svg>
            </div>
            <h3 className="feature-title">Extensive Collection</h3>
            <p className="feature-description">
              From classic patterns to 3D murals and custom designs, we have an extensive collection to suit every style for homes, offices, and commercial spaces.
            </p>
            <a  onClick={()=>navigate('/product')} className="action-button">View More</a>
          </div>

          {/* Card 2: Premium Quality */}
          <div className="feature-card">
            <div className="feature-icon">
              {/* SVG for shield/quality icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="feature-title">Premium Quality</h3>
            <p className="feature-description">
              We use only premium materials, ensuring long-lasting wallpapers that maintain their
              vibrant colors and rich texture for years to come.
            </p>
            <a  onClick={()=>navigate('/product')} className="action-button">View More</a>
          </div>

          {/* Card 3: Professional Installation */}
          <div className="feature-card">
            <div className="feature-icon">
              {/* SVG for paint-roller/tool icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12l1 9c.1.7.7 1.2 1.4 1.2h15.2c.7 0 1.3-.5 1.4-1.2l1-9H2z"></path>
                <path d="M18 12V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6"></path>
                <path d="M12 12v-2"></path>
              </svg>
            </div>
            <h3 className="feature-title">Professional Installation</h3>
            <p className="feature-description">
              Our expert installation team ensures a perfect alignment and a smooth,
              flawless finish for your walls every time.
            </p>
            <a  onClick={()=>navigate('/product')} className="action-button">View More</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;


