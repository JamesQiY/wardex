import React from 'react';

function getCommanders(commanderList) {
  const threshold = 3;
  commanderList = commanderList.slice(0,threshold + 1);
  const commanderElements = commanderList.map(name =>
    <div key={name}>
      <img src={'sprites/' + name.toLowerCase().trim() + '.png'} alt={name} />
    </div>)

  return commanderElements;
}

const Commanders = ({ commanderList }) => {
  return (
    <div className="flex flex-row flex-grow justify-center">
      {getCommanders(commanderList)}
    </div>
  )
}

export default Commanders;