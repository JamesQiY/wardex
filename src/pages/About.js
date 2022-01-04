import React from 'react';

import Header from '../component/Header'
import Footer from '../component/Footer';
import AboutInfo from '../component/AboutInfo';

const About = () => {
  return (
    <div className="home-container flex-1 overflow-auto">
      <div className='content-container flex flex-col items-center justify-center h-full'>
        <Header />
        <AboutInfo />
        <Footer />
      </div>
    </div>
  )
}

export default About;