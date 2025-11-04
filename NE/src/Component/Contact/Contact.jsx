import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

// Import icons
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ContactPage = () => {
  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    <div className="contact-page-wrapper">

      {/* Top Section: Main Form + Newsletter */}
      <div className="contact-top-section">
        
        {/* Main Contact Form */}
        <div className="main-contact-form">
          <form>
            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-row">
              <textarea placeholder="Message" rows="6"></textarea>
            </div>
            <div className="form-row">
              <button type="submit" className="submit-btn-main">Submit Button</button>
            </div>
          </form>
        </div>

        {/* Newsletter Form */}
        <div className="newsletter-form">
  <h3>View Our Exclusive Offers</h3>
  <p>
    We have special deals on 3D wallpaper, custom flooring, and carpet installations. See our work!
  </p>
  {/* This form will now send the user to your "/gallery" page. 
    You can also just use an <a> link.
  */}
  <form  method="get">
    <button type="submit" className="submit-btn-newsletter" onClick={()=>navigate('/product')} >
      View Gallery
    </button>
  </form>
</div>
      </div>

      {/* Info Card Section */}
      <div className="contact-info-section">
        <div className="info-card">
          <div className="info-icon">
            <FaPhone />
          </div>
          <div className="info-text">
            <h4>+91 98679 51140</h4>
            <p>Fell Free To Contact Us Any Time.</p>
          </div>
        </div>
        
        <div className="info-card">
          <div className="info-icon">
            <FaEnvelope />
          </div>
          <div className="info-text">
            <h4>nationalenterprise051@gmail.com</h4>
            <p>Clear Your Querries By Sending Email</p>
          </div>
        </div>

        <div className="info-card white-card"> {/* Special class for the white card */}
          <div className="info-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="info-text">
            <h4>Location</h4>
            <p>SHOP NO -4-B
SAHKAR SADAN CO-OP HSG SOCY
SANT NAMDEO PATH 
DOMBIVLI (EAST) 421 201
DIST -THANE (MH)</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="contact-map-section">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3767.589790177815!2d73.0956111!3d19.2131111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEyJzQ3LjIiTiA3M8KwMDUnNDQuMiJF!5e0!3m2!1sen!2sin!4v1762147864857!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="London Eye Map"
        ></iframe>
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default ContactPage;