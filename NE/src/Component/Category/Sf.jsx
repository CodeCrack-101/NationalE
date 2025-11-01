import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 2, name: 'Selfie Point',category: 'Wallpaper', imageUrl: '../sf1.png'},
  { id: 1, name: 'Selfie Point',  category: 'Wallpaper', imageUrl: '../sf2.png'},
  { id: 3, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf3.png'},
  { id: 4, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf4.png'},
  { id: 5, name: 'Selfie Point',category: 'Wallpaper', imageUrl: '../sf5.png'},
  { id: 6, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf6.png'},
  { id: 7, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf7.png'},
  { id: 8, name: 'Selfie Point',category: 'Wallpaper', imageUrl: '../sf8.png'},
  { id: 9, name: 'Selfie Point',category: 'Wallpaper', imageUrl: '../sf9.png'},
  { id: 10, name: 'Selfie Point',category: 'Wallpaper', imageUrl: '../sf10.png'},
  { id: 11, name: 'Selfie Point',category: 'Wallpaper', imageUrl: '../sf11.png'},
];


const Boss = () => {
  const whatsappNumber = "919594718112";

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

export default Boss;


