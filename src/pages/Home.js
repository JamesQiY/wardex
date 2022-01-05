import React, { useContext, useRef } from 'react';
import { PageContext } from '../hooks/PageContext';

import Header from '../component/Header';
import Footer from '../component/Footer';
import PlayerCards from '../component/card_related/PlayerCard';
import SearchBox from '../component/SearchBox';
import TopButton from '../component/TopButton';


const Home = () => {
  const states = useContext(PageContext)
  const homer = useRef(null)

  const handleChange = (e) => {
    states.setsearch(e.target.value)
  }

  return (
    <div id='home' className="home-container flex-1 relative overflow-auto" ref={homer}>
      <div className='content-container h-full w-full flex flex-col items-center'>
        <Header>
          <SearchBox placeholder='Search' handleChange={handleChange} />
        </Header>
        <PlayerCards />
        <TopButton container={homer}/>
        <Footer />
      </div>
    </div>
  )
};

export default Home;