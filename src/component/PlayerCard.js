import React from 'react';
import Card from './Card';

function genAll(players, darkTheme) {
  let total = <></>
  if (players && players.length > 0) {
    total = players.map(obj => {
      return <Card playerObj={obj} darkTheme={darkTheme} key={obj.name}/>
    })
  }
  return total;
}

const PlayerCards = ({players, darkTheme}) => {
  return (
    <div className="card-container min-w-full max-w-full flex flex-col lg:flex-row flex-wrap
      justify-center">
      {genAll(players, darkTheme)}
    </div>
  );
}

export default PlayerCards;