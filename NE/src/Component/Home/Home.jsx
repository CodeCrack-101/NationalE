import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import InteriorDesign from '../InteriorDesign/InteriorDesign';
import Boost from '../Boost/Boost'
import Body from '../Body1/Body'
import B from '../Body2/B'
import Footer from '../Footer/Footer'
import Download from '../Download/Download';
import Choose from '../Choose/Choose';
import Shopreview from '../Shopreview/Shopreview'
import Dial from '../Dial/Dial'


const Home = () => {
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
          {/* Left Info Panel */}
          
          {/* Right Form Panel */}
          <div className="contact-form">
            <h3>Get In Touch</h3>
            <form action="https://api.web3forms.com/submit" method="post" >
            <input type="hidden" name="access_key" value="c4b5b87b-d096-46a9-b737-aa993db83b18"/> 
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
      <Dial/>
      <Footer/>
    </>
  );
};

export default Home;
