import React, { useState } from "react";
import "./AboutUs.css";

// Icons
import { FaRegCheckCircle, FaChartLine, FaUsers } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MissionVision from "../M/V/MissionVision";

// Assets
const teamImageUrl = "./i.png";
const videoImageUrl = "/na.mp4";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    botcheck: ""
  });

  const [status, setStatus] = useState("");

  const accessKey = "a1c547bf-0a07-4bea-85f7-60583905ac17";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const payload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      subject: `New Inquiry from ${formData.name}`,
      from_name: "National Wallpaper Enterprise Website",
      botcheck: formData.botcheck
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "", botcheck: "" });
      } else {
        setStatus(` ${result.message}`);
      }
    } catch (error) {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="about-section">
        <div className="about-container">

          {/* Header & Description */}
          <div className="about-top-row">
            <div className="about-header">
              <h5 className="about-subtitle">ABOUT US</h5>
              <h2>Introduction To National Enterprise</h2>
            </div>

            <div className="about-description">
              <p>
                At National Wallpaper Enterprises, we believe every wall has the power
                to transform a space and reflect your personality. With years of
                experience in wallpaper and décor, we deliver premium designs across Mumbai.
              </p>
              <p>
                From 3D textures to custom designs, our wallpapers bring durability,
                comfort and elegance to your interiors. We help turn ordinary walls into
                extraordinary spaces.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="about-features-row">
            <div className="feature-card">
              <div className="icon-wrapper red">
                <FaRegCheckCircle />
              </div>
              <h4>Best Price Guaranteed</h4>
              <p>Transparent pricing with no hidden charges. Always affordable.</p>
            </div>

            <div className="feature-card">
              <div className="icon-wrapper black">
                <FaChartLine />
              </div>
              <h4>All Wallpaper Categories</h4>
              <p>Huge collection including 3D, textured, vinyl & custom designs.</p>
            </div>

            <div className="feature-card">
              <div className="icon-wrapper red">
                <FaUsers />
              </div>
              <h4>Professional Team</h4>
              <p>Expert guidance and flawless installation by trained specialists.</p>
            </div>
          </div>

          {/* Images / Video */}
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
              ></video>
            </div>
          </div>

        </div>
      </section>

      <MissionVision />

      {/* Contact Form */}
      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-form">
            <h3>Get In Touch</h3>

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="botcheck" value={formData.botcheck} />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="number"
                name="mobile"
                placeholder="Your Mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Send</button>
            </form>

            {status && <p style={{ marginTop: "10px", fontWeight: "600" }}>{status}</p>}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
