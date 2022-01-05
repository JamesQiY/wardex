import React from 'react'

// bg is string of tailwindcss bg 
// stat is the string of stats separated with commas
const StatPills = ({bg, stat}) => {
  if (typeof stat == 'undefined'){
    return <div className='text-white shadow-inner rounded-lg bg-gray-600'> None </div>
  }

  return (
    <div className='text-white rounded-lg'>
      {stat.split(/[,&]/).slice(0,4).map((strengths, index) => {
        return <div key={index} className={"pill text-white shadow-lg "+ bg}> {strengths} </div>
        })
      }
    </div>
  )
}

export default StatPills
