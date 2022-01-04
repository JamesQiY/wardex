import React, { useContext } from 'react';
import { PageContext } from '../../hooks/PageContext';
import Card from './Card';
import LoadingSpin from '../LoadingSpin';


function genAll(players, darkTheme) {
  let total = <></>
  if (players && players.length > 0) {
    total = players.map(obj => {
      return <Card playerObj={obj} darkTheme={darkTheme} key={obj.id} />
    })
  }
  return total;
}

const PlayerCards = () => {
  const states = useContext(PageContext)

  const filteredPlayers = states.players.filter(playerObj => (
    playerObj.name.toLowerCase().includes(states.search.toLowerCase())
  ))

  return (
    <div className="card-container min-w-full max-w-full flex flex-col sm:flex-row flex-wrap justify-center">
      {(states.players.length > 0) ? genAll(filteredPlayers, states.darkTheme) : <LoadingSpin />}
    </div>
  );
}

export default PlayerCards;