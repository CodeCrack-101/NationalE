import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 2, name: 'Texture ',category: 'Wallpaper', imageUrl: '../t1.png'},
  { id: 1, name: 'Texture ',  category: 'Wallpaper', imageUrl: '../t2.png'},
  { id: 3, name: 'Texture ', category: 'Wallpaper', imageUrl: '../t3.png'},
  { id: 4, name: 'Texture ', category: 'Wallpaper', imageUrl: '../t4.png'},
  { id: 5, name: 'Texture ',category: 'Wallpaper', imageUrl: '../t5.png'},
  { id: 6, name: 'Texture ', category: 'Wallpaper', imageUrl: '../t6.png'},
  { id: 7, name: 'Texture ', category: 'Wallpaper', imageUrl: '../t7.png'},
  { id: 8, name: 'Texture ',category: 'Wallpaper', imageUrl: '../t8.png'},
  { id: 9, name: 'Texture ',category: 'Wallpaper', imageUrl: '../t9.png'},
  { id: 10, name:'Texture ',category: 'Wallpaper', imageUrl: '../t10.png'},
  { id: 11, name:'Texture ',category: 'Wallpaper', imageUrl: '../t11.png'},
];


const Texture = () => {
  const whatsappNumber = "+91 98679 51140";

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">Selfie Point</h1>
        <div className="category-grid">
          {allProducts.map(product => (
            <div key={product.id} className="category-card">
              <div className="category-image-wrapper2">
                <img src={product.imageUrl} alt={product.name} className="category-image"/>
              </div>
              <div className="category-info">
                <h3 className="category-name">{product.name}</h3>
                <h3 className="category-price">{product.Price}</h3>
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

export default Texture;


