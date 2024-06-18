import React from 'react';

export default function SearchBox(props) {
    return(
        <p>
            <label htmlFor='searchbox'>Search for a recipe </label>
            <input type='text' id='searchbox' name='searchbox' onChange={props.handleSearchTermChange}></input>
            <button type='button' name='search' onClick={props.handleSearch}>Search</button>
        </p>
    )
};