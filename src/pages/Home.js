import React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer';
import PlayerCards from '../component/PlayerCard';

const Home = () => {
  return (
    <div className="home-container flex-1 overflow-auto">
      <div className='content-container flex flex-col items-center justify-center p-1'>
        <Header/>
        <PlayerCards/>
        <Footer/>
      </div>
    </div>
  )
};

export default Home;