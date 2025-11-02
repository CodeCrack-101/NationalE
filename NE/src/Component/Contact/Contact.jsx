
import "./Contact.css";
import Navbar from "../../Component/Navbar/Navbar";
// import Dial from '../../Component/Dial/Dial'

const ContactUs = () => {
  

  return (
    <>
      <Navbar />
      {/* <Dial/> */}
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
    </>
  );
};

export default ContactUs;
