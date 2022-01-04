import React from 'react';

const Header = (props) => {
  return (
    <div className="p-2 w-full flex flex-col
    text-center justify-center items-center
    dark:text-white text-black">
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt={"WarDex"} 
        className="text-2xl font-bold sm:w-1/4" height={200} width={400}/>
      <span className="m-1">A collection of the finest members of the Wargroove Community</span>
      {props.children}
    </div>
  )
};

export default Header;