import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 1, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u1.png' },
  { id: 2, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u2.png' },
  { id: 3, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u3.png' },
  { id: 4, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u4.png'},
  { id: 5, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u5.png' },
  { id: 6, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u6.png' },
  { id: 7, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u7.png' },
  { id: 8, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u8.png' },
  { id: 9, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u9.png' },
  { id: 10, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u10.png' },
  { id: 11, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u11.png' },
  { id: 12, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u12.png' },
];

const Visitor = () => {
  const whatsappNumber = "919594718112";

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">Urbano</h1>
        <div className="category-grid">
          {allProducts.map(product => (
            <div key={product.id} className="category-card">
              <div className="category-image-wrapper2">
                <img src={product.imageUrl} alt={product.name} className="category-image"/>
              </div>
              <div className="category-info">
                <h3 className="category-name">{product.name}</h3>
                <h3 className="category-pricee">{product.Price}</h3>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  Enquiry
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Visitor;
