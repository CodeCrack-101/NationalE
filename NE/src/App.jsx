import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Sf from './Component/Category/Sf';
import Canvas from './Component/Category/Canvas';
import Sky from './Component/Category/Sky';
import Mirabell from './Component/Category/Mirabell';
import Urbano from './Component/Category/Urbano';
import Texture from './Component/Category/Texture';
import Flora from './Component/Category/Flora';
import Product from './Component/Products/Products'
import About from './Component/About/About'
import ContactPage from './Component/Contact/Contact';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/selfie-point" element={<Sf />} />
        <Route path="/category/canvas" element={<Canvas />} />
        <Route path="/category/sky" element={<Sky />} />
        <Route path="/category/mirabell" element={<Mirabell />} />
        <Route path="/category/urbano" element={<Urbano />} />
        <Route path="/category/texture" element={<Texture />} />
        <Route path="/category/flora" element={<Flora />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
