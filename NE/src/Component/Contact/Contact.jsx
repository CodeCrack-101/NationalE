import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ContactPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    botcheck: "" // Honeypot field
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
      phone: formData.phone,
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
        setFormData({ name: "", email: "", phone: "", message: "", botcheck: "" });
      } else {
        setStatus(`⚠️ Error: ${result.message}`);
      }
    } catch (error) {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="contact-page-wrapper">

        <div className="contact-top-section">

          <div className="main-contact-form">
            <form onSubmit={handleSubmit}>
              
              {/* Honeypot Field - Invisible to users */}
              <input type="text" name="botcheck" style={{ display: "none" }} onChange={handleChange} />

              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <textarea
                  placeholder="Message"
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-row">
                <button type="submit" className="submit-btn-main">
                  Submit
                </button>
              </div>

              {status && <p className="form-status">{status}</p>}
            </form>
          </div>

          <div className="newsletter-form">
            <h3>View Our Exclusive Offers</h3>
            <p>Special deals on wallpaper, carpet, and flooring.</p>
            <button
              className="submit-btn-newsletter"
              onClick={() => navigate("/product")}
            >
              View Gallery
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="contact-info-section">
          <div className="info-card">
            <FaPhone className="info-icon" />
            <div>
              <h4>+91 98679 51140</h4>
              <p>Call Anytime</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>nationalenterprise051@gmail.com</h4>
              <p>Email Us</p>
            </div>
          </div>

          <div className="info-card white-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>
                SHOP NO -4-B, SAHKAR SADAN CO-OP HSG SOCY<br />
                SANT NAMDEO PATH, DOMBIVLI (EAST) 421201, THANE (MH)
              </p>
            </div>
          </div>
        </div>

        <div className="contact-map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m..."
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
