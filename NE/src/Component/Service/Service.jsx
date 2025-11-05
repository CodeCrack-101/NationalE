import React from 'react';
import './Service.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Data for the service cards - UPDATED
const serviceData = [
  {
    imgSrc: 'https://cdn.shopify.com/s/files/1/0625/3677/7867/files/woman-hanging-stylish-wall-paper-sheet-indoors.jpg',
    title: 'Wallpaper Installation',
    description: 'Professional installation of all types of wallpaper, ensuring a perfect, seamless finish for your walls.',
  },
  {
    imgSrc: 'https://5.imimg.com/data5/SELLER/Default/2024/5/418400473/ZV/MS/EU/24808539/bedroom-floor-carpet.jpg',
    title: 'Carpet',
    description: 'Expert laying and fitting of carpets, from wall-to-wall solutions to custom rugs for any room.',
  },
  {
    imgSrc: 'https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2024/02/Two-Separate-POP-Designs.jpg',
    title: 'POP',
    description: 'Creative Plaster of Paris (POP) designs for false ceilings, accent walls, and intricate moulding work.',
  },
  {
    imgSrc: 'https://allfloors.ca/wp-content/uploads/2020/03/AdobeStock_42614136-1.jpg',
    title: 'Flooring',
    description: 'Installation of various flooring types, including hardwood, laminate, vinyl, and tile to suit your style.',
  },
  {
    imgSrc: 'https://m.media-amazon.com/images/I/61KzXcZw6fL._AC_UF1000,1000_QL80_.jpg',
    title: 'Customized Wallpaper',
    description: 'Bring your vision to life with bespoke wallpaper printing. Perfect for feature walls and unique spaces.',
  },
  {
    imgSrc: 'https://5.imimg.com/data5/SELLER/Default/2024/2/385690974/LF/JG/JF/155282848/3d-pvc-wallpaper-500x500.jpg',
    title: '3D Wallpaper',
    description: 'Add depth and a modern touch to your room with stunning 3D-effect wallpapers and wall panels.',
  },
];

// Placeholder image for the worker. Replace with your own.
const workerImageUrl = './rm.png';

const ServicesSection = () => {
  return (
    <>
    <Navbar/>
    <div className="services-page-container">
      {/* --- SERVICES SECTION --- */}
      <section className="services-section">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
          We provide a full range of services—specializing in 3D, customized, and carpet solutions—all installed by our expert team.          </p>
        </div>
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.imgSrc} alt={service.title} className="service-card-image" />
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/contact">Enquiry Now</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA BANNER SECTION --- */}
      <section className="cta-banner">
        <div className="cta-container">
          <div className="cta-image-wrapper">
            <img src={workerImageUrl} alt="Technician" />
          </div>
          <div className="cta-content">
            <h2>
              Having a problem? <br />
              We'll fixed it today!
            </h2>
            <p>
              Our expert team provides immediate, professional solutions to get your project done right, without delay.
            </p>
            <div className="cta-contact">
              <span className="phone-number">+91 98679 51140</span>
              <span>or</span>
              <button className="quote-button">Get a quote</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default ServicesSection;