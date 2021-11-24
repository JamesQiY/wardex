import React from 'react';

const Header = () => {
  return (
    <div className="m-2 p-4 rounded-xl w-full flex flex-col
    text-center justify-center items-center
    text-white dark:text-black
    bg-gray-800 dark:bg-gray-100 shadow-inner shadow-lg;">
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt={"WarDex"} className="text-2xl font-bold sm:w-1/4" height={200} 
      width={400}/>
      <span className="">A collection of the finest memebers of the Wargroove Community</span>
    </div>
  )
};

export default Header;