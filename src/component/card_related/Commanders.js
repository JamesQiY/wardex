import React from 'react';
import useWindowDimensions from '../../hooks/WindowSize';

function getCommanders(commanderList, isPortrait, threshold = 3) {
  threshold = Math.min(9, threshold);
  commanderList = commanderList.slice(0, threshold);
  const portrait = isPortrait ? '_portrait' : '';

  const commanderElements = commanderList.map((name, index) => {
    const trimedName = name.toLowerCase().trim()
    const path = `${process.env.PUBLIC_URL}/sprites/${trimedName}${portrait}.png`

    if (isPortrait){
      return <img src={path} alt={name} key={index} 
      className='m-1 w-1/5 max-w-350 overflow-y-hidden object-cover
      bg-neutral-100 dark:bg-neutral-700 
      rounded-3xl commander-shadow' />
    } else {
      return (<img src={path} alt={name} key={index} />)
    }
  })

  return commanderElements;
}

const Commanders = ({ commanderList, isPortrait = false, threshold }) => {
  const { width } = useWindowDimensions()
  let style = 'flex justify-center md:object-center max-h-72'


  if (width < 640) isPortrait = false // use small icons if screen size is small
  if (!isPortrait) style += ' flex-wrap'

  return (
    <div className={style}>
      {getCommanders(commanderList, isPortrait, threshold)}
    </div>
  )
}

export default Commanders;