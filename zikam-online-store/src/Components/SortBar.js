import React from 'react';

function SearchBar(){
    return(
        <div>
            <input type='text' />
            <input type='submit' />
        </div>
    )
}

function SortBar(){
    return(
        <div className='sortBar'>
            <SearchBar />
        </div>
    )
}

export default SortBar 