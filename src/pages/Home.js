import React, { useContext } from 'react';
import { PageContext } from '../hooks/PageContext';

import Header from '../component/Header';
import Footer from '../component/Footer';
import PlayerCards from '../component/card_related/PlayerCard';
import SearchBox from '../component/SearchBox';


const Home = () => {
  const states = useContext(PageContext)

  const handleChange = (e) => {
    states.setsearch(e.target.value)
  }

  return (
    <div className="home-container flex-1 relative overflow-auto">
      <div className='content-container h-full w-full flex flex-col items-center'>
        <Header>
          <SearchBox placeholder='Search' handleChange={handleChange} />
        </Header>
        <PlayerCards />
        <Footer />
      </div>
    </div>
  )
};

export default Home;