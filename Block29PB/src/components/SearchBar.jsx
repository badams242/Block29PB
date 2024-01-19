import React, { useState } from 'react';

const SearchBar = ({ searchText, setSearchText, onSearch }) => {
    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = async () => {
        // Call the onSearch function with the search text
        onSearch(searchText);
    };

    return (
        <div>
            <h2>Search Players</h2>
            <input
                type="text"
                id="playerSearch" // Add an id attribute
                placeholder="Enter player name"
                value={searchText}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;