import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import InteriorDesign from '../InteriorDesign/InteriorDesign';
import Boost from '../Boost/Boost'
import Body from '../Body1/Body'


const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Boost/>
      <Body/>
      <InteriorDesign/>
    </>
  );
};

export default Home;
