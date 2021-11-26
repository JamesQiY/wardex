import React, { useContext } from 'react';
import { PageContext } from '../hooks/PageContext';

import Header from '../component/Header';
import Footer from '../component/Footer';
import PlayerCards from '../component/card_related/PlayerCard';
import SearchBox from '../component/SearchBox';


const Home = () => {

  const handleChange = (e) => {
    states.setsearch(e.target.value)
  }
  const states = useContext(PageContext)

  return (
    <div className="home-container flex-1 overflow-auto">
      <div className='content-container flex flex-col items-center justify-center p-1'>
        <Header />
        <SearchBox placeholder='Search' handleChange={handleChange} />
        <PlayerCards />
        <Footer />
      </div>
    </div>
  )
};

export default Home;