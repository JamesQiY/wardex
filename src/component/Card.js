import React from 'react';
import Commanders from './Commanders';
import Graph from './Graph';

const indexArr = [
  "name",
  "commanders",
  "strengths",
  "weaknesses",
  "opening",
  "formation",
  "unit",
  "economy",
  "speed",
  "tactics",
  "description"
]

function mapPlayers(player) {
  let output = {}
  for (let i = 0; i < player.length; i++) {
    output[indexArr[i]] = player[i];
  }
  return output;
}

// player Obj = [] of values
const Card = ({ playerArr, darkTheme }) => {
  const player = mapPlayers(playerArr);

  let commanders = <></>;
  if (Object.keys(player).length !== 0) {
    commanders = <Commanders commanderList={player.commanders.split(',')}/>
  }

  return (
    <div className="player_cards mx-0.5 my-2" id={player.name}>
      <div className="player_title"> {player.name} </div>
      <div className="info-container flex flex-col items-center justify-center xl:lg:md:sm:flex-row w-full">
        <div className="flex flex-col items-center justify-center p-1 w-full xl:lg:md:w-5/12">
          <div className="my-2"> {commanders} </div>
          <div className="flex flex-col items-center justify-center dark:text-white">
            <span>Strengths:</span>
            <div className="pill bg-blue-600 dark:bg-blue-600 text-white dark:text-white shadow-lg"> {player.strengths} </div>
          </div>
          <div className="flex flex-col items-center justify-center dark:text-white">
            <span>Weaknesses:</span>
            <div className="pill bg-red-600 dark:bg-red-600 text-white dark:text-white shadow-lg"> {player.weaknesses} </div>
          </div>
          <p className="m-2 p-2 break-all dark:text-white"> {player.description} </p>
        </div>

        <div className="m-2 p-2 xl:lg:md:sm:flex-grow max-w-250"><Graph playerData={player} darkTheme={darkTheme} key={darkTheme} /></div>
      </div>
    </div>
  )
}

export default Card;