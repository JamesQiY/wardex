import React, { useContext } from 'react';
import { PageContext } from '../../hooks/PageContext';
import Commanders from './Commanders';
import Graph from '../Graph';
import { Link } from 'react-router-dom';

const labels = ['Opening', 'Formation', 'Unit Comp', 'Economy', 'Speed', 'Tactics'];

// player Obj = {} with the fields 
const Card = ({ playerObj, darkTheme }) => {
  const states = useContext(PageContext)

  const reset = () => {
    states.setsearch('')
  }

  let commanders = <></>;
  if (Object.keys(playerObj).length !== 0) {
    commanders = <Commanders commanderList={playerObj.commanders.split(',')} />
  }


  return (
    <div className="m-1 my-2 max-w-xl xl:lg:min-w-xl 
      flex flex-1 flex-col rounded-3xl 
      bg-gray-100 dark:bg-neutral-700 drop-shadow-lg">
      <div className="player_title flex flex-col">
        <div className='m-2 text-center text-3xl font-sans font-bold break-all'>{playerObj.name}</div>
        <Link to={"/player/" + playerObj.id} onClick={reset}>
          <div className="p-1 w-full text-center dark:text-white text-black bg-red-400 shadow-inner">Details</div>
        </Link>
      </div>
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
        <div className="m-1 p-1 flex-shrink max-w-250 sm:max-w-350 sm:min-w-350">
          <Graph playerData={playerObj} label={labels} type={'basic'} darkTheme={darkTheme} key={darkTheme} />
        </div>
      </div>
      <p className="m-4 p-2 break-words dark:text-white"> {playerObj.description} </p>
    </div>
  )
}

export default Card;