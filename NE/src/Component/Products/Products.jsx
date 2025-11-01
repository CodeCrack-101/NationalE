import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'
import Navbar from '../Navbar/Navbar';
// import Footer from '../../Component/Footer/Footer'
// import Dial from '../../Component/Dial/Dial'

const allProducts = [
  // Canvas
  { id: 1, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c1.png' },
  { id: 2, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c2.png' },
  { id: 3, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c3.png' },
  { id: 4, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c4.png' },
  { id: 5, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c5.png' },
  { id: 6, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c6.png' },
  { id: 7, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c7.png' },
  { id: 8, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c8.png' },
  { id: 9, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c9.png' },
  { id: 10, name: 'Canvas', category: 'Wallpaper', imageUrl: '../c10.png' },

  // Flora
  { id: 11, name: 'Flora', category: 'Wallpaper', imageUrl: '../f1.png' },
  { id: 12, name: 'Flora', category: 'Wallpaper', imageUrl: '../f2.png' },
  { id: 13, name: 'Flora', category: 'Wallpaper', imageUrl: '../f3.png' },
  { id: 14, name: 'Flora', category: 'Wallpaper', imageUrl: '../f4.png' },
  { id: 15, name: 'Flora', category: 'Wallpaper', imageUrl: '../f5.png' },
  { id: 16, name: 'Flora', category: 'Wallpaper', imageUrl: '../f6.png' },
  { id: 17, name: 'Flora', category: 'Wallpaper', imageUrl: '../f7.png' },
  { id: 18, name: 'Flora', category: 'Wallpaper', imageUrl: '../f8.png' },
  { id: 19, name: 'Flora', category: 'Wallpaper', imageUrl: '../f9.png' },
  { id: 20, name: 'Flora', category: 'Wallpaper', imageUrl: '../f10.png' },
  { id: 21, name: 'Flora', category: 'Wallpaper', imageUrl: '../f11.png' },

  // Mirabell
  { id: 22, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m1.png' },
  { id: 23, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m2.png' },
  { id: 24, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m3.png' },
  { id: 25, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m4.png' },
  { id: 26, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m5.png' },
  { id: 27, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m6.png' },
  { id: 28, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m7.png' },
  { id: 29, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m8.png' },
  { id: 30, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m9.png' },
  { id: 31, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m10.png' },
  { id: 32, name: 'Mirabell', category: 'Wallpaper', imageUrl: '../m11.png' },

  // Selfie Point
  { id: 33, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf1.png' },
  { id: 34, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf2.png' },
  { id: 35, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf3.png' },
  { id: 36, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf4.png' },
  { id: 37, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf5.png' },
  { id: 38, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf6.png' },
  { id: 39, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf7.png' },
  { id: 40, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf8.png' },
  { id: 41, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf9.png' },
  { id: 42, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf10.png' },
  { id: 43, name: 'Selfie Point', category: 'Wallpaper', imageUrl: '../sf11.png' },

  // Sky
  { id: 44, name: 'Sky', category: 'Wallpaper', imageUrl: '../s1.png' },
  { id: 45, name: 'Sky', category: 'Wallpaper', imageUrl: '../s2.png' },
  { id: 46, name: 'Sky', category: 'Wallpaper', imageUrl: '../s3.png' },
  { id: 47, name: 'Sky', category: 'Wallpaper', imageUrl: '../s4.png' },
  { id: 48, name: 'Sky', category: 'Wallpaper', imageUrl: '../s5.png' },
  { id: 49, name: 'Sky', category: 'Wallpaper', imageUrl: '../s6.png' },
  { id: 50, name: 'Sky', category: 'Wallpaper', imageUrl: '../s7.png' },
  { id: 51, name: 'Sky', category: 'Wallpaper', imageUrl: '../s8.png' },
  { id: 52, name: 'Sky', category: 'Wallpaper', imageUrl: '../s9.png' },
  { id: 53, name: 'Sky', category: 'Wallpaper', imageUrl: '../s10.png' },
  { id: 54, name: 'Sky', category: 'Wallpaper', imageUrl: '../s11.png' },
  { id: 55, name: 'Sky', category: 'Wallpaper', imageUrl: '../s12.png' },

  // Texture
  { id: 56, name: 'Texture', category: 'Wallpaper', imageUrl: '../t1.png' },
  { id: 57, name: 'Texture', category: 'Wallpaper', imageUrl: '../t2.png' },
  { id: 58, name: 'Texture', category: 'Wallpaper', imageUrl: '../t3.png' },
  { id: 59, name: 'Texture', category: 'Wallpaper', imageUrl: '../t4.png' },
  { id: 60, name: 'Texture', category: 'Wallpaper', imageUrl: '../t5.png' },
  { id: 61, name: 'Texture', category: 'Wallpaper', imageUrl: '../t6.png' },
  { id: 62, name: 'Texture', category: 'Wallpaper', imageUrl: '../t7.png' },
  { id: 63, name: 'Texture', category: 'Wallpaper', imageUrl: '../t8.png' },
  { id: 64, name: 'Texture', category: 'Wallpaper', imageUrl: '../t9.png' },
  { id: 65, name: 'Texture', category: 'Wallpaper', imageUrl: '../t10.png' },
  { id: 66, name: 'Texture', category: 'Wallpaper', imageUrl: '../t11.png' },

  // Urbano
  { id: 67, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u1.png' },
  { id: 68, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u2.png' },
  { id: 69, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u3.png' },
  { id: 70, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u4.png' },
  { id: 71, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u5.png' },
  { id: 72, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u6.png' },
  { id: 73, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u7.png' },
  { id: 74, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u8.png' },
  { id: 75, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u9.png' },
  { id: 76, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u10.png' },
  { id: 77, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u11.png' },
  { id: 78, name: 'Urbano', category: 'Wallpaper', imageUrl: '../u12.png' },
];

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    // Filter logic
    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    {/* <Dial/> */}
      <div className="product-search-container">
        <div className="search-header">
          <h1>Find Your Perfect Wallpaper</h1>
          <p>Search for 3D, Wallpaper, and more.</p>
          <input
            type="text"
            placeholder="e.g., 'Texture' or 'Canvas'"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper3">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No products found for "{searchTerm}". Try a different search!</p>
          </div>
        )}
      <button className='btn' onClick={()=>navigate('/contact')}>Enquiry Now</button>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default ProductSearch;
