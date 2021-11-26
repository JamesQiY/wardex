import React from 'react';

const Header = () => {
  return (
    <div className="m-2 p-4 rounded-xl w-full flex flex-col
    text-center justify-center items-center
    dark:text-white text-black
    dark:bg-truegray-700 bg-gray-100 shadow-inner">
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt={"WarDex"} className="text-2xl font-bold sm:w-1/4" height={200} 
      width={400}/>
      <span className="">A collection of the finest members of the Wargroove Community</span>
    </div>
  )
};

export default Header;