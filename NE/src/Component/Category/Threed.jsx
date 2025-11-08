import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 2, name: '3D ',category: 'Wallpaper', imageUrl: '../3d2.png'},
  { id: 1, name: '3D ',  category: 'Wallpaper', imageUrl: '../3d13.png'},
  { id: 3, name: '3D ', category: 'Wallpaper', imageUrl: '../3d4.png'},
  { id: 4, name: '3D ', category: 'Wallpaper', imageUrl: '../3d5.png'},
  { id: 5, name: '3D ',category: 'Wallpaper', imageUrl: '../3d12.png'},
  { id: 6, name: '3D ', category: 'Wallpaper', imageUrl: '../3d6.png'},
  { id: 7, name: '3D ', category: 'Wallpaper', imageUrl: '../3d7.png'},
  { id: 8, name: '3D ',category: 'Wallpaper', imageUrl: '../3d8.png'},
  { id: 9, name: '3D ',category: 'Wallpaper', imageUrl: '../3d9.png'},
  { id: 10, name:'3D ',category: 'Wallpaper', imageUrl: '../3d10.png'},
  { id: 11, name:'3D ',category: 'Wallpaper', imageUrl: '../3d11.png'},
];


const Threed = () => {
  const whatsappNumber = "+91 98679 51140";

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">3D Wallpaper</h1>
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

export default Threed;


