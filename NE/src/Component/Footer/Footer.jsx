import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // Removed 'useNavigate' since it wasn't used

const Footer = () => {
  // No need for navigate variable

  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Left Section */}
        <div className="footer-section">
          <h1>
            National<span>Enterprise</span>
          </h1>
          <hr />
          <p>
  National Wallpaper Enterprise offers a wide range of premium wallpapers,
  including 3D, custom-printed, and textured designs, with expert installation
  and a commitment to customer satisfaction. At National Wallpaper
  Enterprise, every project is handled with precision, and services like
  wallpaper removal and wall preparation are also available.
</p>
        </div>

        {/* Links Section */}
        <div className="footer-section-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/service">Services</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section-contact">
          <h3>Contact Info</h3>
          <p>
            <lord-icon
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="hover"
              delay="1500"
              state="in-assembly"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            ></lord-icon>
            nationalenterprise051@gmail.com
          </p>
          <p>
            <lord-icon
              src="https://cdn.lordicon.com/dnphlhar.json"
              trigger="hover"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            ></lord-icon>
+91 98679 51140          </p>
          <p>
            <lord-icon
              src="https://cdn.lordicon.com/onmwuuox.json"
              trigger="hover"
              delay="1500"
              state="in-jump-dynamic"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            ></lord-icon>
Shop No -4-B
sahkar sadan co-op hsg society
sant namdeo path 
Dombivli (East) 421 201
Thane Mumbai Maharashtra
         </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="icon">
        {/* Instagram */}
        <button
          className="icon-btn"
          onClick={() => window.open('https://www.instagram.com/national_enterprise20/?utm_source=qr&igsh=MXg5ZXljeHZwbm44bQ%3D%3D#', '_blank', 'noopener,noreferrer')}
        >
          <lord-icon
            src="https://cdn.lordicon.com/roscsuft.json"
            trigger="hover"
            state="morph-alone"
            style={{ width: "30px", height: "50px" }}
          ></lord-icon>
        </button>

        {/* FIXED: Added onClick for Facebook (Example link) */}
        <button 
          className="icon-btn"
          onClick={() => window.open('https://www.facebook.com/profile.php?id=61583477099308', '_blank', 'noopener,noreferrer')}
        >
          <lord-icon
            src="https://cdn.lordicon.com/lplofcfe.json"
            trigger="hover"
            state="morph-alone"
            style={{ width: "30px", height: "50px" }}
          ></lord-icon>
        </button>

        {/* FIXED: Added onClick for Twitter (Example link) */}
        <button 
          className="icon-btn"
          onClick={() => window.open('https://twitter.com/your-handle', '_blank', 'noopener,noreferrer')}
        >
          <lord-icon
            src="https://cdn.lordicon.com/vnvsnvov.json"
            trigger="hover"
            state="morph-alone"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </button>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} National Wallpaper Enterprise. All Rights Reserved.
        <br/>
        {/* FIXED TYPO: "Devloped" to "Developed" */}
        Developed By Khan Obaid
        <br/>
        +91 9321282475
      </div>
    </footer>
  );
};

export default Footer;