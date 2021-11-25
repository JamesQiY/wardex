import React from 'react';
import Sidebar from '../component/Sidebar';
import Header from '../component/Header'
import Footer from '../component/Footer';
import AboutInfo from '../component/AboutInfo';

import enableDarkMode from '../hooks/darkmode';

const About = () => {
  let [darkTheme, setDarkTheme] = enableDarkMode();
  return (
    <div className="page-container">
      <Sidebar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className="home-container flex-1 overflow-auto">
        <div className='content-container flex flex-col items-center justify-center p-1'>
          <Header className='header' />
          <AboutInfo />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default About;