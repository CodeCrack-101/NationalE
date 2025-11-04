import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 1, name: 'Sky', category: 'Wallpaper', imageUrl: '../s1.png' },
  { id: 2, name: 'Sky', category: 'Wallpaper', imageUrl: '../s2.png' },
  { id: 3, name: 'Sky', category: 'Wallpaper', imageUrl: '../s3.png' },
  { id: 4, name: 'Sky', category: 'Wallpaper', imageUrl: '../s4.png' },
  { id: 5, name: 'Sky', category: 'Wallpaper', imageUrl: '../s5.png' },
  { id: 6, name: 'Sky', category: 'Wallpaper', imageUrl: '../s6.png' },
  { id: 7, name: 'Sky', category: 'Wallpaper', imageUrl: '../s7.png' },
  { id: 8, name: 'Sky', category: 'Wallpaper', imageUrl: '../s8.png' },
  { id: 9, name: 'Sky', category: 'Wallpaper', imageUrl: '../s9.png' },
  { id: 10, name: 'Sky', category: 'Wallpaper', imageUrl: '../s10.png' },
  { id: 11, name: 'Sky', category: 'Wallpaper', imageUrl: '../s11.png' },
  { id: 12, name: 'Sky', category: 'Wallpaper', imageUrl: '../s12.png' },
];

const BosssWork = () => {   // 👈 Changed name
    const whatsappNumber = "+91 98679 51140";
  
    return (
      <>
        <Navbar />
        <div className="category-container">
          <h1 className="category-title">Category: Boss Mesh Work Chair</h1>
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
  
  export default BosssWork;
  