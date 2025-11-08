import React, { useState, useEffect } from 'react';
import './B.css';
import { useNavigate } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Selfi Point', category: 'Wallpaper', imageUrl: './w1.png' },
  { id: 1, name: '3D', category: 'Wallpaper', imageUrl: './3d11.png' },
  { id: 2, name: 'Canvas EW', category: 'Wallpaper', imageUrl: './w2.png' },
  { id: 3, name: 'Sky', category: 'Wallpaper', imageUrl: './w3.png' },
  { id: 4, name: 'Mirabell PVC', category: 'Wallpaper', imageUrl: './w4.png' },
  { id: 5, name: 'Urbano', category: 'Wallpaper', imageUrl: './w5.png' },
  { id: 6, name: 'Texture ', category: 'Wallpaper', imageUrl: './w6.png' },
  { id: 7, name: 'Wall Flora', category: 'Wallpaper', imageUrl: './w7.png' }];

const ProductSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

const handleCategoryClick = (productName) => {
  if (productName === 'Selfi Point') navigate(`/category/Selfi-Point`);
  else if (productName === 'Canvas EW') navigate(`/category/canvas`);
  else if (productName === 'Sky') navigate(`/category/sky`);
  else if (productName === 'Mirabell PVC') navigate(`/category/Mirabell`);
  else if (productName === 'Urbano') navigate(`/category/Urbano`);
  else if (productName === 'Texture ') navigate(`/category/Texture`);
  else if (productName === '3D') navigate(`/category/threed`);
};


  return (
    <div className="product-search-container">
      <div className="search-header">
        <h1>Find Your Perfect Wallpaper Design</h1>
        <p>Search for 3D,Simple,Elegant and more.</p>
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
              <div className="product-image-wrapper1">
                <img
                  onClick={() => handleCategoryClick(product.name)}
                  src={product.imageUrl}
                  alt={product.name}
                />
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
      <button className='btn' onClick={()=>navigate('/product')}>View More</button>
    </div>
  );
};

export default ProductSearch;
