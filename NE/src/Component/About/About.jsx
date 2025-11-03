import React from "react";
import "./AboutUs.css";

// Import icons from react-icons
// Using FaRegCheckCircle, FaChartLine, and FaUsers for the features
// Using FaPlay for the video button
import { FaRegCheckCircle, FaChartLine, FaUsers, FaPlay } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MissionVision from "../M/V/MissionVision";

// Using placeholder images. Replace these with your actual image URLs.
const teamImageUrl = "./i.png";
const videoImageUrl = "/na.mp4";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <div className="about-container">
          {/* Top Row: Header and Description */}
          <div className="about-top-row">
            <div className="about-header">
              <h5 className="about-subtitle">ABOUT US</h5>
              <h2>Introduction To National Enterprise</h2>
            </div>
            <div className="about-description">
              <p>
                At National Wallpaper Enterprises, we believe every wall has the
                power to transform a space and reflect your personality. With
                years of experience in wallpapers and interior décor, we bring
                stylish designs and premium-quality materials to homes and
                offices across Mumbai.
              </p>
              <p>
                From 3D wallpapers and textured designs to vinyl, floral, and
                customized wall coverings, we offer a diverse range that suits
                every taste and setting. Our wallpapers are crafted to add
                beauty, durability, and comfort to your interiors — helping you
                create spaces that inspire and impress. At National Wallpaper,
                we turn plain walls into elegant statements.
              </p>
            </div>
          </div>

          {/* Middle Row: Feature Cards */}
          <div className="about-features-row">
            <div className="feature-card">
              <div className="icon-wrapper red">
                <FaRegCheckCircle />
              </div>
              <h4>Best Price Guaranteed</h4>
              <p>
                We believe in transparent, upfront pricing. No hidden fees, no
                surprises—just top-tier service at the most competitive rates in
                the industry.
              </p>{" "}
            </div>
            <div className="feature-card">
              <div className="icon-wrapper black">
                <FaChartLine />
              </div>
              <h4>Every Types Wallpaper Available</h4>
              <p>
                Explore our vast collection of premium, high-quality wallpapers.
                We offer everything from stunning 3D designs to fully
                customizable options to match your unique style.
              </p>{" "}
            </div>
            <div className="feature-card">
              <div className="icon-wrapper red">
                <FaUsers />
              </div>
              <h4>Professional Team</h4>
              <p>
                Our professional team is here to support you. We provide expert
                guidance on everything from product selection to the best
                techniques for a flawless, effective application.
              </p>{" "}
            </div>
          </div>

          {/* Bottom Row: Overlapping Images */}
          <div className="about-images-row">
            <div className="image-left-wrapper">
              <img src={teamImageUrl} alt="Team meeting" />
            </div>
            <div className="image-right-wrapper">
              <video
                src={videoImageUrl}
                controls
                autoPlay
                loop
                muted
                className="about-video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <MissionVision />
      <div className="contact-wrapper">
        <div className="contact-container">
          {/* Left Info Panel */}

          {/* Right Form Panel */}
          <div className="contact-form">
            <h3>Get In Touch</h3>
            <form action="https://api.web3forms.com/submit" method="post">
              <input
                type="hidden"
                name="access_key"
                value="c4b5b87b-d096-46a9-b737-aa993db83b18"
              />
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" />
              <input
                type="number"
                name="mobile"
                placeholder="Your Mobile"
                required
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
