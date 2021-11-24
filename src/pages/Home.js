import React from 'react';
import Header from '../component/Header'
import PlayerCards from '../component/PlayerCard';
import Sidebar from '../component/Sidebar';
import enableDarkMode from '../hooks/darkmode';

const Home = () => {
  let [darkTheme, setDarkTheme] = enableDarkMode();

  return (
    <div className="page-container h-full flex flex-row dark:bg-gray-600">
      <Sidebar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <div className="home-container flex-1 overflow-auto">
        <div className='content-container flex flex-col items-center justify-center p-1'>
          <Header className='header' />
          <PlayerCards darkTheme={darkTheme}/>
          <div className="m-1 p-1 text-center w-full bg-white rounded-lg">
            Credit to <a href="https://chucklefish.org/">Chucklefish</a> for all images.</div>
        </div>
      </div>
      
    </div>
  )
};

export default Home;