import React from 'react';

const SearchBox = ({placeholder,handleChange}) =>{
    return(
        <input type='search'
        className='rounded-xl m-1 p-4 dark:text-white text-black
        dark:bg-truegray-700 bg-gray-100 shadow-inner hover:ring-blue-400'
        placeholder={placeholder}
        onChange = {handleChange}
        />
    )
}

export default SearchBox;