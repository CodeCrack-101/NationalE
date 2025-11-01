import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quam
            ipsa sunt mollitia vitae dolor dolorum totam accusantium harum,
            aperiam non eligendi natus? Doloremque obcaecati debitis, esse
            consequatur enim odit.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
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
            abcd@gmail.com
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
            +91 ----------
          </p>
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
            Domviwali
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="icon">
        <button
          className="icon-btn"
          onClick={() =>
            window.open(
              "https://www.instagram.com/shrig_chair_service?igsh=MWFsbDM3OGFzZG5paQ==",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <lord-icon
            src="https://cdn.lordicon.com/roscsuft.json"
            trigger="hover"
            state="morph-alone"
            style={{ width: "30px", height: "50px" }}
          ></lord-icon>
        </button>

        <button className="icon-btn">
          <lord-icon
            src="https://cdn.lordicon.com/lplofcfe.json"
            trigger="hover"
            state="morph-alone"
            style={{ width: "30px", height: "50px" }}
          ></lord-icon>
        </button>

        <button className="icon-btn">
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
        &copy; {new Date().getFullYear()} National Enterprise. All Rights Reserved.
        <br />
        Devloped By Khan Obaid
        <br />
        +91 9321282475
      </div>
    </footer>
  );
};

export default Footer;
