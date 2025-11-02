import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import InteriorDesign from '../InteriorDesign/InteriorDesign';
import Boost from '../Boost/Boost'
import Body from '../Body1/Body'
import B from '../Body2/B'
import Footer from '../Footer/Footer'
import Download from '../Download/Download';
import Choose from '../Choose/Choose';


const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Boost/>
      <Body/>
      <InteriorDesign/>
      <B/>
      <Download/>
      <Choose/>
      <Footer/>
    </>
  );
};

export default Home;
