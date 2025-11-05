import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import InteriorDesign from '../InteriorDesign/InteriorDesign';
import Boost from '../Boost/Boost';
import Body from '../Body1/Body';
import B from '../Body2/B';
import Footer from '../Footer/Footer';
import Download from '../Download/Download';
import Choose from '../Choose/Choose';
import Shopreview from '../Shopreview/Shopreview';
import Dial from '../Dial/Dial';

const Home = () => {
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
      <Header />
      <Boost/>
      <Body/>
      <InteriorDesign/>
      <B/>
      <Download/>
      <Choose/>
      <Shopreview/>

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

            {status && <p style={{marginTop:"10px", color:"#000"}}>{status}</p>}
          </div>
        </div>
      </div>

      <Dial/>
      <Footer/>
    </>
  );
};

export default Home;
