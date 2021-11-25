import React from 'react';
import Sidebar from '../component/Sidebar';
import enableDarkMode from '../hooks/darkmode';
import { useParams } from 'react-router-dom'

import DetailedCard from '../component/DetailedCard';
import Footer from '../component/Footer';

function getPlayer(players, playerId) {
  if (!players || players.length <=0) return -1
  playerId = playerId.toLowerCase();

  let low = 0;
  let high = players.length - 1;
  let mid;

  while (low <= high) {
    mid = ~~((low + high) / 2);
    if (players[mid].name.toLowerCase().localeCompare(playerId) < 0)
      low = mid + 1;
    else if (players[mid].name.toLowerCase().localeCompare(playerId) > 0)
      high = mid - 1;
    else
      return mid;
  }
  return -1;
}

const PlayerDetail = ({players}) => {
  let [darkTheme, setDarkTheme] = enableDarkMode();
  const playerId = useParams();
  const playerIndex = getPlayer(players, playerId.player);

  const playerObj = playerIndex >=0 ? players[playerIndex] : {};

  return (
    <div className="page-container ">
      <Sidebar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className="home-container flex-1 overflow-auto">
        <div className='content-container flex flex-col items-center justify-center p-1'>
          <DetailedCard darkTheme={darkTheme} player={playerObj}/>
        </div>
         <Footer />
      </div>
     
    </div>
  )
};

export default PlayerDetail;