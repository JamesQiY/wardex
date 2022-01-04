import React from 'react';
import Commanders from './Commanders';
import Graph from '../Graph';

const basicLabels = ['Opening', 'Formation', 'Unit Comp', 'Economy', 'Speed', 'Tactics']
const advLabels = ['Consistency', 'Lethal', 'Comeback']
const mapLabels = ['PvE', 'Puzzles', 'PvP Mapping', 'Custom Mapping']
const commanderNum = 5;


const DetailedCard = ({ darkTheme, player }) => {

  let commanders = <></>;
  if (Object.keys(player).length !== 0) {
    commanders = <Commanders commanderList={player.commanders.split(',')} isPortrait={true} threshold={commanderNum} />
  }

  return (
    <div className="player_cards w-full max-w-full h-full">
      <div className="player_title p-4 text-center break-all"> {player.name} </div>
      <div className="my-2"> {commanders} </div>
      <div className="info-container flex flex-col items-center justify-center max-w-full">

        <div className='flex'>
          <div id='pillstats' className='m-1 p-2 flex flex-col justify-center bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-inner'>
            <span className='font-bold text-xl dark:text-white'>Strengths:</span>
            <div className="pill bg-blue-600 text-white shadow-lg"> {player.strengths} </div>
            <span className='font-bold text-xl dark:text-white'>Weaknesses:</span>
            <div className="pill bg-red-600 text-white shadow-lg"> {player.weaknesses} </div>
          </div>

          <div id='graphs' className="m-1 p-1 pl-3 flex flex-col md:flex-row md:flex-wrap items-center justify-center overflow-auto 
            bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-inner">
            <div className="m-2 max-w-250 sm:max-w-350"><Graph playerData={player} label={basicLabels} darkTheme={darkTheme} /> </div>
            <div className="m-2 max-w-250 sm:max-w-350"><Graph playerData={player} label={advLabels} darkTheme={darkTheme} /></div>
            <div className="m-2 max-w-250 sm:max-w-350"><Graph playerData={player} label={mapLabels} darkTheme={darkTheme} /></div>
          </div>
        </div>



        <div className="flex items-center justify-center dark:text-white">

          <p className="m-8 p-2 break-words dark:text-white"> {player.description} </p>
        </div>



      </div>
    </div>
  )
}

export default DetailedCard;