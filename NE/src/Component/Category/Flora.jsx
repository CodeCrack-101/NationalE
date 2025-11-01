import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 2, name: 'Flora ',category: 'Wallpaper', imageUrl: '../f1.png'},
  { id: 1, name: 'Flora ',  category: 'Wallpaper', imageUrl: '../f2.png'},
  { id: 3, name: 'Flora ', category: 'Wallpaper', imageUrl: '../f3.png'},
  { id: 4, name: 'Flora ', category: 'Wallpaper', imageUrl: '../f4.png'},
  { id: 5, name: 'Flora ',category: 'Wallpaper', imageUrl: '../f5.png'},
  { id: 6, name: 'Flora ', category: 'Wallpaper', imageUrl: '../f6.png'},
  { id: 7, name: 'Flora ', category: 'Wallpaper', imageUrl: '../f7.png'},
  { id: 8, name: 'Flora ',category: 'Wallpaper', imageUrl: '../f8.png'},
  { id: 9, name: 'Flora ',category: 'Wallpaper', imageUrl: '../f9.png'},
  { id: 10, name:'Flora ',category: 'Wallpaper', imageUrl: '../f10.png'},
  { id: 11, name:'Flora ',category: 'Wallpaper', imageUrl: '../f11.png'},
];


const Flora = () => {
  const whatsappNumber = "9321282475";

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

export default Flora;


