import React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer';
import PlayerCards from '../component/PlayerCard';
import enableDarkMode from '../hooks/darkmode';

import Sidebar from '../component/Sidebar';

const Home = ({players}) => {
  let [darkTheme, setDarkTheme] = enableDarkMode();

  return (
    <div className="page-container">
      <Sidebar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <div className="home-container flex-1 overflow-auto">
        {console.log(window.scrollY)}
        <div className='content-container flex flex-col items-center justify-center p-1'>
          <Header className='header' />
          <PlayerCards darkTheme={darkTheme} players={players}/>
          <Footer/>
        </div>
      </div>
    </div>
  )
};

export default Home;