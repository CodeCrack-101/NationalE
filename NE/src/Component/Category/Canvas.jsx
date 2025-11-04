import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 1, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c1.png' },
  { id: 2, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c2.png' },
  { id: 3, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c3.png' },
  { id: 4, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c4.png' },
  { id: 5, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c5.png' },
  { id: 6, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c6.png' },
  { id: 7, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c7.png' },
  { id: 8, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c8.png' },
  { id: 9, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c9.png' },
  { id: 10, name: 'Canvas ', category: 'Wallpaper', imageUrl: '../c10.png' },
];

const Bosss = () => {
  const whatsappNumber = "+91 98679 51140";

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">Canvas</h1>
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

export default Bosss;
