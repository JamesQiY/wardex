import React from 'react';

const SearchBox = ({placeholder,handleChange}) =>{
    return(
        <input type='search'
        className='rounded-xl m-2 p-4 text-black
        bg-gray-100 shadow-inner hover:ring-blue-400'
        placeholder={placeholder}
        onChange = {handleChange}
        />
    )
}

export default SearchBox;