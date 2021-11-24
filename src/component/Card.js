import React from 'react';
import Commanders from './Commanders';
import Graph from './Graph';


// player Obj = {} with the fields 
const Card = ({ playerObj, darkTheme }) => {
  let commanders = <></>;
  if (Object.keys(playerObj).length !== 0) {
    commanders = <Commanders commanderList={playerObj.commanders.split(',')}/>
  }
  return (
    <div className="player_cards mx-0.5 my-2 max-w-full">
      <div className="player_title break-all"> {playerObj.name} </div>
      <div className="info-container flex flex-col sm:flex-row items-center justify-center max-w-full">
        <div className="flex flex-col items-center justify-center p-1 w-full xl:lg:md:w-7/12">
          <div className="my-2"> {commanders} </div>
          <div className="flex flex-col items-center justify-center dark:text-white">
            <span>Strengths:</span>
            <div className="pill bg-blue-600 dark:bg-blue-600 text-white dark:text-white shadow-lg"> {playerObj.strengths} </div>
          </div>
          <div className="flex flex-col items-center justify-center dark:text-white">
            <span>Weaknesses:</span>
            <div className="pill bg-red-600 dark:bg-red-600 text-white dark:text-white shadow-lg"> {playerObj.weaknesses} </div>
          </div>

        </div>
        <div className="m-1 p-1 max-w-250"><Graph playerData={playerObj} darkTheme={darkTheme} key={darkTheme} /></div>
      </div>
      <p className="m-1 p-2 break-words dark:text-white"> {playerObj.description} </p>
    </div>
  )
}

export default Card;