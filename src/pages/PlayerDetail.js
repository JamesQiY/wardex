import React, {useContext} from 'react';
import { PageContext } from '../hooks/PageContext';

import { useParams } from 'react-router-dom'

import DetailedCard from '../component/card_related/DetailedCard';
import Footer from '../component/Footer';


const PlayerDetail = () => {
  const states = useContext(PageContext)
  let players = states.players;
  let darkTheme = states.darkTheme;

  const playerParams = useParams();
  const playerIndex = getPlayer(players, playerParams.id);

  const playerObj = playerIndex >= 0 ? players[playerIndex] : {};

  return (
    <div className="home-container flex-1 overflow-auto">
      <div className='content-container flex flex-col items-center justify-center p-1'>
        <DetailedCard darkTheme={darkTheme} player={playerObj} />
      </div>
      <Footer />
    </div>
  )
};

function getPlayer(players, playerId) {
  if (!players || players.length <= 0) return -1
  playerId = parseInt(playerId);

  for (let i = 0; i < players.length; i++){
    if(parseInt(players[i].id) === playerId) return i
  }
  
  return -1;
}

export default PlayerDetail;