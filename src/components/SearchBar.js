import React, { useState } from "react";
import fetchDictionaryAPIData from "../utils/fetchDictionaryAPIData";

const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const SearchBar = ({ setData, setDataLoaded, setDataError }) => {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const api_new_url = `${API_BASE_URL}${searchText}`;

    try {
      fetchDictionaryAPIData(api_new_url, setData, setDataLoaded, setDataError);
    } catch (error) {
      console.log(`RANDOM ERROR: ${error}`);
      setDataError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        placeholder="search for a word definition..."
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button className="search-bar-button" onClick={handleSearch}>
        search
      </button>
    </div>
  );
};

export default SearchBar;
